'use client';

import { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Map as MapLibreMap, Marker as MapLibreMarker, AttributionControl, setWorkerUrl } from 'maplibre-gl';
import { HistoricalEvent } from '@/lib/types';
import { CATEGORY_COLORS } from '@/lib/data/config';

if (typeof window !== 'undefined') {
    setWorkerUrl(`${window.location.origin}/maplibre-gl-worker.mjs`);
}

interface MapLibreViewProps {
    events: HistoricalEvent[];
    selectedEvent: HistoricalEvent;
    onSelectEvent: (event: HistoricalEvent) => void;
    language: 'tr' | 'en';
}

const STYLE_URL = 'https://tiles.openfreemap.org/styles/positron';

const isValidCoords = (coords: any): coords is [number, number] => {
    return Array.isArray(coords) && coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1]);
};

function applyLocalization(map: MapLibreMap, lang: 'tr' | 'en') {
    if (!map.isStyleLoaded()) return;

    const textField = lang === 'tr'
        ? ['coalesce', ['get', 'name:tr'], ['get', 'name_tr'], ['get', 'name:latin'], ['get', 'name'], '']
        : ['coalesce', ['get', 'name:en'], ['get', 'name_en'], ['get', 'name:latin'], ['get', 'name'], ''];

    const targetLabelLayers = [
        'label_city',
        'label_city_capital',
        'label_town',
        'label_village',
        'label_state',
        'label_country_1',
        'label_country_2',
        'label_country_3',
        'label_other',
        'water_name_point_label',
        'water_name_line_label'
    ];

    targetLabelLayers.forEach((layerId) => {
        try {
            if (map.getLayer(layerId)) {
                map.setLayoutProperty(layerId, 'text-field', textField as any);
            }
        } catch {
            // ignore
        }
    });

    // Simplify: hide cluttered shields and minor road names
    const hideLayers = [
        'highway-shield-non-us',
        'highway-shield-us-interstate',
        'road_shield_us',
        'highway-name-path',
        'highway-name-minor',
        'airport'
    ];

    hideLayers.forEach((layerId) => {
        try {
            if (map.getLayer(layerId)) {
                map.setLayoutProperty(layerId, 'visibility', 'none');
            }
        } catch {
            // ignore
        }
    });
}

export default function MapLibreView({
    events,
    selectedEvent,
    onSelectEvent,
    language
}: MapLibreViewProps) {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<MapLibreMap | null>(null);
    const markersRef = useRef<Map<string, { marker: MapLibreMarker; el: HTMLElement }>>(new Map());
    const prevEventIdRef = useRef<string>(selectedEvent.id);

    // Helper to build marker HTML without dark multi-shadow stacking
    const renderMarkerHTML = (category: string, isSelected: boolean, count: number) => {
        const colorClass = CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || 'bg-red-600';
        return `
            <div class="transition-all duration-300 ease-out select-none ${isSelected ? 'scale-110 z-[1000]' : 'scale-100'}">
                <div class="relative w-7 h-7 md:w-8 md:h-8 ${colorClass} rounded-full border-2 md:border-3 ${
                    isSelected ? 'border-white ring-2 ring-red-600 shadow-lg' : 'border-white shadow-md'
                } flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="md:w-4 md:h-4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    ${count > 1 ? `
                        <span class="absolute -top-1.5 -right-1.5 bg-black/85 text-white text-[9px] font-black w-4 h-4 rounded-full border border-white/80 flex items-center justify-center shadow-sm">
                            ${count}
                        </span>
                    ` : ''}
                </div>
            </div>
        `;
    };

    // Initialize MapLibre
    useEffect(() => {
        if (!mapContainerRef.current) return;

        const initialCoords: [number, number] = isValidCoords(selectedEvent.coordinates)
            ? [selectedEvent.coordinates[1], selectedEvent.coordinates[0]] // [lng, lat]
            : [32.8597, 39.9334];

        const map = new MapLibreMap({
            container: mapContainerRef.current,
            style: STYLE_URL,
            center: initialCoords,
            zoom: 8.5,
            attributionControl: false
        });

        // Ensure canvas expands to fill container on load and apply localization
        map.on('load', () => {
            map.resize();
            applyLocalization(map, language);
        });

        map.on('style.load', () => {
            applyLocalization(map, language);
        });

        map.on('error', (err: any) => {
            const msg = err?.error?.message || err?.message || 'Map error';
            console.error('MapLibre error:', msg);
        });

        // Add minimal attribution in bottom-right corner
        map.addControl(
            new AttributionControl({
                compact: true,
                customAttribution: '&copy; <a href="https://openfreemap.org" target="_blank">OpenFreeMap</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>'
            }),
            'bottom-right'
        );

        mapRef.current = map;

        // Cleanup on unmount
        return () => {
            markersRef.current.forEach(({ marker }) => marker.remove());
            markersRef.current.clear();
            map.remove();
            mapRef.current = null;
        };
    }, []); // Run once on mount

    // Update markers when events or selectedEvent change
    useEffect(() => {
        const map = mapRef.current;
        if (!map) return;

        // Group events by location key to avoid stacking 17 pins and 17 shadows on top of each other!
        const locationMap = new Map<string, {
            key: string;
            coordinates: [number, number];
            activeEvent: HistoricalEvent;
            events: HistoricalEvent[];
            count: number;
            isSelected: boolean;
        }>();

        events.forEach(event => {
            if (!isValidCoords(event.coordinates)) return;
            const key = `${event.coordinates[0].toFixed(4)},${event.coordinates[1].toFixed(4)}`;
            if (!locationMap.has(key)) {
                locationMap.set(key, {
                    key,
                    coordinates: event.coordinates,
                    activeEvent: event,
                    events: [event],
                    count: 1,
                    isSelected: event.id === selectedEvent.id
                });
            } else {
                const entry = locationMap.get(key)!;
                entry.events.push(event);
                entry.count += 1;
                // If this is the currently selected event, give it priority for color & selection
                if (event.id === selectedEvent.id) {
                    entry.activeEvent = event;
                    entry.isSelected = true;
                }
            }
        });

        // Remove old markers that are no longer in locationMap
        markersRef.current.forEach((val, key) => {
            if (!locationMap.has(key)) {
                val.marker.remove();
                markersRef.current.delete(key);
            }
        });

        // Add or update exactly one marker per geographic location
        locationMap.forEach((entry, key) => {
            const lngLat: [number, number] = [entry.coordinates[1], entry.coordinates[0]];
            const markerHTML = renderMarkerHTML(entry.activeEvent.category, entry.isSelected, entry.count);

            if (markersRef.current.has(key)) {
                const existing = markersRef.current.get(key)!;
                existing.el.innerHTML = markerHTML;
                existing.marker.setLngLat(lngLat);
            } else {
                const el = document.createElement('div');
                el.className = 'custom-maplibre-marker';
                el.innerHTML = markerHTML;
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (entry.isSelected && entry.events.length > 1) {
                        const currIdx = entry.events.findIndex(ev => ev.id === selectedEvent.id);
                        const nextIdx = (currIdx + 1) % entry.events.length;
                        onSelectEvent(entry.events[nextIdx]);
                    } else {
                        onSelectEvent(entry.activeEvent);
                    }
                });

                const marker = new MapLibreMarker({ element: el, anchor: 'bottom' })
                    .setLngLat(lngLat)
                    .addTo(map);

                markersRef.current.set(key, { marker, el });
            }
        });
    }, [events, selectedEvent.id]);

    // Update style language on language change
    useEffect(() => {
        const map = mapRef.current;
        if (!map) return;
        applyLocalization(map, language);
    }, [language]);

    // Refocus / FlyTo when selectedEvent changes
    useEffect(() => {
        const map = mapRef.current;
        if (!map || !isValidCoords(selectedEvent.coordinates)) return;

        if (prevEventIdRef.current !== selectedEvent.id) {
            prevEventIdRef.current = selectedEvent.id;

            // Mobile offset: shift center south so target appears higher up above bottom card
            const targetLat = typeof window !== 'undefined' && window.innerWidth < 768
                ? selectedEvent.coordinates[0] - 0.20
                : selectedEvent.coordinates[0];

            map.flyTo({
                center: [selectedEvent.coordinates[1], targetLat],
                zoom: 8.5,
                essential: true,
                duration: 1600
            });
        }
    }, [selectedEvent]);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div ref={mapContainerRef} className="w-full h-full" />
        </div>
    );
}
