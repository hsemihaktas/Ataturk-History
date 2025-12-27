'use client';

import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HistoricalEvent } from '@/lib/types';

interface EventTimelineProps {
    events: HistoricalEvent[];
    selectedEvent: HistoricalEvent;
    onEventSelect: (event: HistoricalEvent) => void;
}

export default function EventTimeline({ events, selectedEvent, onEventSelect }: EventTimelineProps) {
    const timelineRef = useRef<HTMLDivElement>(null);
    const activeBtnRef = useRef<HTMLButtonElement>(null);

    // Auto-scroll timeline to active event
    useEffect(() => {
        if (activeBtnRef.current && timelineRef.current) {
            const container = timelineRef.current;
            const btn = activeBtnRef.current;
            const scrollPos = btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
            container.scrollTo({ left: scrollPos, behavior: 'smooth' });
        }
    }, [selectedEvent.id]);

    const handleNext = () => {
        const idx = events.findIndex(e => e.id === selectedEvent.id);
        if (idx < events.length - 1) onEventSelect(events[idx + 1]);
    };

    const handlePrev = () => {
        const idx = events.findIndex(e => e.id === selectedEvent.id);
        if (idx > 0) onEventSelect(events[idx - 1]);
    };

    return (
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-2 md:gap-3 w-full justify-center px-4">
            <button
                onClick={handlePrev}
                disabled={events[0].id === selectedEvent.id}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/95 backdrop-blur shadow-2xl flex items-center justify-center text-zinc-900 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex-shrink-0 border border-black/5"
            >
                <ChevronLeft size={16} className="md:w-5 md:h-5" />
            </button>

            <div
                ref={timelineRef}
                className="bg-zinc-950/90 backdrop-blur-2xl rounded-full px-3 md:px-6 py-1.5 md:py-2.5 shadow-2xl border border-white/10 flex items-center gap-1 md:gap-3 overflow-x-auto max-w-[70vw] lg:max-w-5xl no-scrollbar scroll-smooth"
            >
                {events.map((event) => {
                    const isActive = selectedEvent.id === event.id;
                    return (
                        <button
                            key={event.id}
                            ref={isActive ? activeBtnRef : null}
                            onClick={() => onEventSelect(event)}
                            className={`
                flex flex-col items-center px-3 md:px-5 py-1 md:py-1.5 rounded-full transition-all duration-500 flex-shrink-0
                ${isActive ? 'bg-white text-zinc-950 scale-105 md:scale-110 shadow-xl' : 'text-zinc-500 hover:text-zinc-200'}
              `}
                        >
                            <span className={`text-[10px] md:text-base font-black tracking-tighter ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                                {event.year}
                            </span>
                            {isActive && <div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-red-600 rounded-full mt-0.5 animate-pulse" />}
                        </button>
                    );
                })}
            </div>

            <button
                onClick={handleNext}
                disabled={events[events.length - 1].id === selectedEvent.id}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/95 backdrop-blur shadow-2xl flex items-center justify-center text-zinc-900 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all flex-shrink-0 border border-black/5"
            >
                <ChevronRight size={16} className="md:w-5 md:h-5" />
            </button>
        </div>
    );
}
