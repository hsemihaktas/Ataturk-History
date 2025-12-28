'use client';

import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import { HistoricalEvent } from '@/lib/types';

interface MapRefocusProps {
    event: HistoricalEvent;
    zoom: number;
}

const isValidCoords = (coords: any): coords is [number, number] => {
    return Array.isArray(coords) && coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1]);
};

export default function MapRefocus({ event, zoom }: MapRefocusProps) {
    const map = useMap();
    const prevEventIdRef = useRef<string | null>(null);
    const latestEventId = useRef<string>(event.id);

    useEffect(() => {
        latestEventId.current = event.id;

        if (prevEventIdRef.current !== event.id && isValidCoords(event.coordinates)) {
            // "Cinematic" Transition:
            // 1. Zoom out to level 5 (Overview)
            // 2. Pan to new location (at level 5)
            // 3. Zoom in to target level (usually 7)

            const targetId = event.id;
            const startZoom = map.getZoom();
            const overviewZoom = 5;

            // Helper to check if we should proceed
            const shouldProceed = () => latestEventId.current === targetId;

            // Step 1: Zoom Out (if needed)
            if (startZoom > overviewZoom) {
                map.flyTo(map.getCenter(), overviewZoom, { duration: 0.8 });

                map.once('moveend', () => {
                    if (!shouldProceed()) return;

                    // Step 2: Pan to Target
                    map.flyTo(event.coordinates, overviewZoom, { duration: 1.0 });

                    map.once('moveend', () => {
                        if (!shouldProceed()) return;

                        // Step 3: Zoom In
                        map.flyTo(event.coordinates, zoom, { duration: 0.8 });
                    });
                });
            } else {
                // We are already zoomed out, just pan then zoom in
                map.flyTo(event.coordinates, overviewZoom, { duration: 1.0 });

                map.once('moveend', () => {
                    if (!shouldProceed()) return;
                    map.flyTo(event.coordinates, zoom, { duration: 0.8 });
                });
            }

            prevEventIdRef.current = event.id;
        }
    }, [event, zoom, map]);

    return null;
}
