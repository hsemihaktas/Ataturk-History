'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer } from 'react-leaflet';
import { HistoricalEvent } from '@/lib/types';
import { ATATURK_CHRONOLOGY } from '@/lib/data/events';
import EventGallery from './EventGallery';
import EventInfoCard from './EventInfoCard';
import EventTimeline from './EventTimeline';
import EventMarker from './EventMarker';

// Dynamically import MapRefocus to avoid SSR issues
const MapRefocus = dynamic(() => import('./MapRefocus'), { ssr: false });

const isValidCoords = (coords: any): coords is [number, number] => {
    return Array.isArray(coords) && coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1]);
};

export default function AtaturkMap() {
    const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent>(ATATURK_CHRONOLOGY[0]);
    const [showInfo, setShowInfo] = useState(true);
    const [mapZoom] = useState(7);

    const handleEventSelect = (event: HistoricalEvent) => {
        setSelectedEvent(event);
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            // Auto show info on mobile when selecting new event
            setShowInfo(true);
        }
    };

    // Safe initial center
    const initialCenter = useMemo(() => {
        return isValidCoords(selectedEvent.coordinates) ? selectedEvent.coordinates : [39.9334, 32.8597];
    }, []);

    return (
        <div className="flex flex-col h-screen w-screen bg-[#0a0a0a] overflow-hidden">
            {/* Top Gallery Section - Dynamic Height */}
            <EventGallery event={selectedEvent} />

            {/* Bottom Map Section */}
            <section className="flex-1 relative w-full overflow-hidden">
                <MapContainer
                    center={initialCenter as [number, number]}
                    zoom={mapZoom}
                    className="w-full h-full"
                    zoomControl={false}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                        className="map-tiles-grayscale"
                    />
                    <MapRefocus event={selectedEvent} zoom={mapZoom} />

                    {ATATURK_CHRONOLOGY.map(event => (
                        <EventMarker
                            key={event.id}
                            event={event}
                            onSelect={handleEventSelect}
                        />
                    ))}
                </MapContainer>

                <EventInfoCard
                    event={selectedEvent}
                    showInfo={showInfo}
                    onToggle={() => setShowInfo(!showInfo)}
                />

                <EventTimeline
                    events={ATATURK_CHRONOLOGY}
                    selectedEvent={selectedEvent}
                    onEventSelect={handleEventSelect}
                />
            </section>
        </div>
    );
}
