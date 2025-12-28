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
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[4000] flex items-center gap-2 md:gap-3 w-full justify-center px-4">
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
                {Array.from(new Set(events.map(e => e.year))).map((year) => {
                    const isYearActive = selectedEvent.year === year;
                    const eventsInYear = events.filter(e => e.year === year);

                    if (isYearActive) {
                        return (
                            <div key={year} className="flex items-center gap-2 bg-white/10 rounded-full px-2 py-1 md:py-1.5 transition-all animate-in slide-in-from-right-4 duration-500">
                                <span className="text-white/50 text-[10px] md:text-xs font-bold px-2">{year}</span>
                                {eventsInYear.map(evt => {
                                    const isEvtActive = selectedEvent.id === evt.id;
                                    return (
                                        <button
                                            key={evt.id}
                                            ref={isEvtActive ? activeBtnRef : null}
                                            onClick={() => onEventSelect(evt)}
                                            className={`
                                                px-3 py-1 rounded-full text-[10px] md:text-sm font-medium transition-all whitespace-nowrap
                                                ${isEvtActive ? 'bg-white text-black shadow-lg scale-105' : 'bg-black/40 text-white/70 hover:bg-black/60 hover:text-white'}
                                            `}
                                        >
                                            {evt.date}
                                        </button>
                                    );
                                })}
                            </div>
                        );
                    }

                    return (
                        <button
                            key={year}
                            onClick={() => {
                                const firstEvent = events.find(e => e.year === year);
                                if (firstEvent) onEventSelect(firstEvent);
                            }}
                            className="flex flex-col items-center px-4 py-2 rounded-full transition-all duration-300 text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
                        >
                            <span className="text-xs md:text-sm font-bold tracking-tight opacity-60">
                                {year}
                            </span>
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
