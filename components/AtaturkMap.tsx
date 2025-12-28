'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
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
import { Globe, Play, Square, Pause, Search } from 'lucide-react';
import { useTTS } from '@/lib/hooks/useTTS';
import SearchOverlay from './SearchOverlay';
import { getEventsOnThisDay } from '@/lib/utils/dateUtils';
import OnThisDayNotification from './OnThisDayNotification';

// Dynamically import MapRefocus to avoid SSR issues
const MapRefocus = dynamic(() => import('./MapRefocus'), { ssr: false });

const isValidCoords = (coords: any): coords is [number, number] => {
    return Array.isArray(coords) && coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1]);
};

function AtaturkMapContent() {
    const { language, setLanguage } = useLanguage();
    const currentEvents = language === 'tr' ? ATATURK_CHRONOLOGY : ATATURK_CHRONOLOGY_EN;

    // Initialize with the first event
    const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent>(currentEvents[0]);
    const [showInfo, setShowInfo] = useState(true);
    const [mapZoom] = useState(9); // Default zoom increased as requested
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [onThisDayEvent, setOnThisDayEvent] = useState<HistoricalEvent | null>(null);

    // Check for "On This Day" events on mount
    useEffect(() => {
        // Always check against Turkish data for date matching source of truth, 
        // but display the relevant language version if found.
        const matches = getEventsOnThisDay(ATATURK_CHRONOLOGY);
        if (matches.length > 0) {
            // If we found a match ID, find the corresponding event in the current language
            const matchId = matches[0].id;
            const displayEvent = currentEvents.find(e => e.id === matchId);
            if (displayEvent) {
                setOnThisDayEvent(displayEvent);
            }
        }
    }, [currentEvents]); // Re-run if language changes to update the displayed event text

    // Tour state
    const [isTourActive, setIsTourActive] = useState(false);
    const [isTourPaused, setIsTourPaused] = useState(false);
    const tourTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Refs for state access in callbacks (to avoid stale closures)
    const isTourActiveRef = useRef(isTourActive);
    const isTourPausedRef = useRef(isTourPaused);
    const selectedEventRef = useRef(selectedEvent);

    // Sync refs with state
    useEffect(() => {
        isTourActiveRef.current = isTourActive;
        isTourPausedRef.current = isTourPaused;
        selectedEventRef.current = selectedEvent;
    }, [isTourActive, isTourPaused, selectedEvent]);

    // TTS Hook
    const { speak, cancel, isSpeaking } = useTTS({
        language,
        onEnd: () => {
            // Check refs instead of state
            if (isTourActiveRef.current && !isTourPausedRef.current) {
                tourTimeoutRef.current = setTimeout(() => {
                    playNextEvent();
                }, 1000);
            }
        }
    });

    // Cleanup tour timeout
    useEffect(() => {
        return () => {
            if (tourTimeoutRef.current) clearTimeout(tourTimeoutRef.current);
        };
    }, []);

    // Sync selected event when language changes
    useEffect(() => {
        const correspondingEvent = currentEvents.find(e => e.id === selectedEvent.id);
        if (correspondingEvent) {
            setSelectedEvent(correspondingEvent);
        } else {
            setSelectedEvent(currentEvents[0]);
        }
        // If tour was active, it might restart logic or we should stop it to avoid confusion
        if (isTourActive) {
            stopTour();
        }
    }, [language]);

    // Handle manual event select
    const handleEventSelect = (event: HistoricalEvent) => {
        // If user manually selects an event while tour is active, we pause/stop the tour?
        // Let's stop the tour to give control back to user
        if (isTourActive) {
            stopTour();
        }

        const evt = currentEvents.find(e => e.id === event.id) || event;
        setSelectedEvent(evt);
        cancel();

        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setShowInfo(true);
        }
    };

    // Safe initial center
    const initialCenter = useMemo(() => {
        return isValidCoords(selectedEvent.coordinates) ? selectedEvent.coordinates : [39.9334, 32.8597];
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr');
    };

    // --- Tour Logic ---
    const startTour = () => {
        setIsTourActive(true);
        setIsTourPaused(false);
        // Force ref update immediately for the upcoming callback
        isTourActiveRef.current = true;
        isTourPausedRef.current = false;

        // Resume from current event description
        // Use the event from ref to be safe, though state should differ only by render cycle
        speak(selectedEventRef.current.description);
    };

    const stopTour = () => {
        setIsTourActive(false);
        setIsTourPaused(false);
        cancel();
        if (tourTimeoutRef.current) clearTimeout(tourTimeoutRef.current);
    };

    const toggleTour = () => {
        if (isTourActive) {
            stopTour();
        } else {
            startTour();
        }
    };

    const playNextEvent = () => {
        // Use ref for current event ID
        const currentId = selectedEventRef.current.id;
        const currentIndex = currentEvents.findIndex(e => e.id === currentId);

        if (currentIndex < currentEvents.length - 1) {
            const nextEvent = currentEvents[currentIndex + 1];
            setSelectedEvent(nextEvent);
            // speak will be called, and logic continues...
            speak(nextEvent.description);
        } else {
            // End of tour
            stopTour();
        }
    };

    // Toggle manual speech for the current card (not tour)
    const toggleSpeech = () => {
        if (isSpeaking) {
            cancel();
            // If dragging slider or something, we stop tour too? 
            if (isTourActive) stopTour();
        } else {
            speak(selectedEvent.description);
        }
    };

    return (
        <div className="flex flex-col h-screen w-screen bg-[#0a0a0a] overflow-hidden">
            {/* Top Gallery Section - Dynamic Height */}
            <EventGallery event={selectedEvent} />

            {/* Bottom Map Section */}
            <section className="flex-1 relative w-full overflow-hidden">
                {/* Map Controls - Positioned absolute on the map */}
                <div className="absolute top-4 right-4 z-[2000] flex flex-col gap-3">
                    {/* Search Button */}
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="w-10 h-10 md:w-auto md:h-10 md:px-4 bg-white/90 backdrop-blur-md text-black rounded-full shadow-lg font-bold text-xs flex items-center justify-center gap-2 transition-all border border-black/10 hover:bg-white border-white/20"
                        title={language === 'tr' ? 'Ara' : 'Search'}
                    >
                        <Search size={18} className="md:w-4 md:h-4 text-zinc-800" />
                        <span className="hidden md:inline">{language === 'tr' ? 'Ara' : 'Search'}</span>
                    </button>

                    {/* Tour Button */}
                    <button
                        onClick={toggleTour}
                        className={`
                            w-10 h-10 md:w-auto md:h-10 md:px-4 rounded-full shadow-lg font-bold text-xs flex items-center justify-center gap-2 transition-all border
                            ${isTourActive
                                ? 'bg-red-600 text-white border-red-700 hover:bg-red-700'
                                : 'bg-white/90 backdrop-blur-md text-black border-black/10 hover:bg-white'
                            }
                        `}
                        title={language === 'tr' ? 'Anlatımı Başlat/Durdur' : 'Start/Stop Tour'}
                    >
                        {isTourActive
                            ? <Pause size={18} className="fill-current md:w-3.5 md:h-3.5" />
                            : <Play size={18} className="fill-current md:w-3.5 md:h-3.5 ml-0.5" />
                        }
                        <span className="hidden md:inline">
                            {language === 'tr'
                                ? (isTourActive ? 'Durdur' : 'Anlat')
                                : (isTourActive ? 'Stop' : 'Start')
                            }
                        </span>
                    </button>

                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="w-10 h-10 md:w-auto md:h-10 md:px-4 bg-white/90 backdrop-blur-md text-black rounded-full shadow-lg font-bold text-xs flex items-center justify-center gap-2 hover:bg-white transition-all border border-black/10"
                        title="Change Language"
                    >
                        <Globe size={18} className="hidden md:block md:w-3.5 md:h-3.5 md:text-zinc-600" />

                        {/* Mobile: Show Current Lang Code */}
                        <span className="md:hidden font-black text-xs">
                            {language.toUpperCase()}
                        </span>

                        {/* Desktop: Full Switcher */}
                        <div className="hidden md:flex items-center gap-2">
                            <span className={language === 'tr' ? 'text-black' : 'text-stone-400 font-medium'}>TR</span>
                            <span className="text-stone-300">|</span>
                            <span className={language === 'en' ? 'text-black' : 'text-stone-400 font-medium'}>EN</span>
                        </div>
                    </button>
                </div>
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
                    isSpeaking={isSpeaking}
                    onToggleSpeech={toggleSpeech}
                />

                <EventTimeline
                    events={currentEvents}
                    selectedEvent={selectedEvent}
                    onEventSelect={handleEventSelect}
                />

                <SearchOverlay
                    isOpen={isSearchOpen}
                    onClose={() => setIsSearchOpen(false)}
                    events={currentEvents}
                    onSelectEvent={(event) => {
                        handleEventSelect(event);
                        setIsSearchOpen(false);
                    }}
                />

                {onThisDayEvent && (
                    <OnThisDayNotification
                        event={onThisDayEvent}
                        onSelect={handleEventSelect}
                        onClose={() => setOnThisDayEvent(null)}
                    />
                )}
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
