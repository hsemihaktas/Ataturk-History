'use client';

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer } from 'react-leaflet';
import { HistoricalEvent } from '@/lib/types';
import { ATATURK_CHRONOLOGY } from '@/lib/data/events';
import { ATATURK_CHRONOLOGY_EN } from '@/lib/data/events-en';
import EventGallery from './EventGallery';
import EventInfoCard from './EventInfoCard';
import EventTimeline from './EventTimeline';
import EventMarker from './EventMarker';
import { LanguageProvider, useLanguage } from '@/lib/context/LanguageContext';
import { Globe } from 'lucide-react';

// Dynamically import MapRefocus to avoid SSR issues
const MapRefocus = dynamic(() => import('./MapRefocus'), { ssr: false });

const isValidCoords = (coords: any): coords is [number, number] => {
    return Array.isArray(coords) && coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1]);
};

function AtaturkMapContent() {
    const { language, setLanguage } = useLanguage();
    const currentEvents = language === 'tr' ? ATATURK_CHRONOLOGY : ATATURK_CHRONOLOGY_EN;

    // Initialize with the first event of the current language data
    const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent>(currentEvents[0]);
    const [showInfo, setShowInfo] = useState(true);
    const [mapZoom] = useState(7);

    // Sync selected event when language changes
    useEffect(() => {
        const correspondingEvent = currentEvents.find(e => e.id === selectedEvent.id);
        if (correspondingEvent) {
            setSelectedEvent(correspondingEvent);
        } else {
            setSelectedEvent(currentEvents[0]);
        }
    }, [language]); // Only run when language changes

    const handleEventSelect = (event: HistoricalEvent) => {
        // Find the event in the current list to ensure consistency (especially if passed from marker)
        const evt = currentEvents.find(e => e.id === event.id) || event;
        setSelectedEvent(evt);
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            // Auto show info on mobile when selecting new event
            setShowInfo(true);
        }
    };

    // Safe initial center
    const initialCenter = useMemo(() => {
        return isValidCoords(selectedEvent.coordinates) ? selectedEvent.coordinates : [39.9334, 32.8597];
    }, []); // Keep empty dependency to only set once on mount

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr');
    };

    return (
        <div className="flex flex-col h-screen w-screen bg-[#0a0a0a] overflow-hidden">
            {/* Top Gallery Section - Dynamic Height */}
            <EventGallery event={selectedEvent} />

            {/* Language Switcher */}
            <button
                onClick={toggleLanguage}
                className="absolute top-4 right-4 z-[2000] bg-white/90 backdrop-blur-md text-black px-4 py-2 rounded-full shadow-lg font-bold text-xs flex items-center gap-3 hover:bg-white transition-all border border-black/10"
            >
                <Globe size={14} />
                <div className="flex items-center gap-2">
                    <span className={language === 'tr' ? 'text-black' : 'text-stone-400 font-medium'}>TR</span>
                    <span className="text-stone-300">|</span>
                    <span className={language === 'en' ? 'text-black' : 'text-stone-400 font-medium'}>EN</span>
                </div>
            </button>

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

                    {currentEvents.map(event => (
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
                    events={currentEvents}
                    selectedEvent={selectedEvent}
                    onEventSelect={handleEventSelect}
                />
            </section>
        </div>
    );
}

export default function AtaturkMap() {
    return (
        <LanguageProvider>
            <AtaturkMapContent />
        </LanguageProvider>
    );
}
