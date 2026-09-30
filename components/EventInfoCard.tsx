import { MapPin, ExternalLink, Info, Volume2, Square } from 'lucide-react';
import { HistoricalEvent } from '@/lib/types';
import { CATEGORY_COLORS, CATEGORY_LABELS, CATEGORY_LABELS_EN } from '@/lib/data/config';
import { useLanguage } from '@/lib/context/LanguageContext';

interface EventInfoCardProps {
    event: HistoricalEvent;
    showInfo: boolean;
    onToggle: () => void;
    isSpeaking: boolean;
    onToggleSpeech: () => void;
    allEvents?: HistoricalEvent[];
    onSelectEvent?: (event: HistoricalEvent) => void;
}

export default function EventInfoCard({
    event,
    showInfo,
    onToggle,
    isSpeaking,
    onToggleSpeech,
    allEvents,
    onSelectEvent
}: EventInfoCardProps) {
    const { language } = useLanguage();

    const cityEvents = allEvents ? allEvents.filter(e => e.location === event.location) : [];
    const cityIndex = cityEvents.findIndex(e => e.id === event.id);
    const hasMultipleCityEvents = cityEvents.length > 1;

    // Get correct category labels based on language
    const categoryLabels = language === 'tr' ? CATEGORY_LABELS : CATEGORY_LABELS_EN;

    return (
        <>
            {/* Info Toggle Button (Mobile) */}
            <button
                onClick={onToggle}
                className="absolute top-4 left-4 z-[1001] md:hidden w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-zinc-900"
            >
                <Info size={20} />
            </button>

            {/* Info Card Overlay - Responsive Layout (Bottom Sheet on Mobile) */}
            <div className={`
        absolute z-[3000] transition-all duration-500 ease-in-out
        
        /* Mobile: Bottom Sheet */
        ${showInfo ? 'translate-y-0' : 'translate-y-[120%]'}
        bottom-0 left-0 right-0 w-full px-0 pb-0
        height-auto max-h-[85vh]
        
        /* Desktop: Floating Card (Always Visible on Left) */
        md:translate-y-0 md:top-6 md:left-6 md:right-auto md:bottom-auto
        md:w-[32rem] lg:w-[36rem] md:max-h-none
        ${!showInfo ? 'translate-y-[120%] md:translate-y-0 md:opacity-100' : 'translate-y-0'}
      `}>
                <div className={`
                    /* Base (Mobile) */
                    bg-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] border-t border-zinc-200
                    rounded-t-[2rem] p-6 pb-24
                    pointer-events-auto
                    
                    /* Desktop Overrides */
                    md:bg-white/95 md:backdrop-blur-md md:shadow-2xl md:border md:border-white/20 md:border-t
                    md:rounded-2xl md:p-6 md:pb-6
                    md:h-auto md:block
                `}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            {/* Drag Handle for Mobile */}
                            <div className="md:hidden absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-zinc-200 rounded-full" />

                            <span className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${CATEGORY_COLORS[event.category as keyof typeof CATEGORY_COLORS]}`} />
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                {categoryLabels[event.category as keyof typeof CATEGORY_LABELS]}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={onToggleSpeech}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"
                                title={language === 'tr' ? "Sesli Anlatım" : "Read Aloud"}
                            >
                                {isSpeaking ? <Square size={14} className="fill-current" /> : <Volume2 size={16} />}
                            </button>
                            <button className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-400" onClick={onToggle}>✕</button>
                        </div>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2 leading-tight">{event.title}</h2>

                    <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1 text-xs text-red-600 font-bold">
                            <MapPin size={12} className="w-3.5 h-3.5" /> {event.location} <span className="text-zinc-300 mx-1">|</span> {event.date}
                        </div>
                        {hasMultipleCityEvents && (
                            <div className="flex items-center gap-1.5 bg-zinc-100 hover:bg-zinc-200/80 transition-colors rounded-full px-2.5 py-0.5 text-[11px] font-bold text-zinc-700">
                                <span>{cityIndex + 1} / {cityEvents.length}</span>
                                <div className="flex items-center gap-0.5 ml-1 border-l border-zinc-300 pl-1">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const prevIdx = (cityIndex - 1 + cityEvents.length) % cityEvents.length;
                                            onSelectEvent?.(cityEvents[prevIdx]);
                                        }}
                                        className="w-4 h-4 flex items-center justify-center rounded hover:bg-zinc-300/80 text-zinc-800 text-xs font-black transition"
                                        title={language === 'tr' ? 'Bu şehirdeki önceki olay' : 'Previous event in this city'}
                                    >
                                        ‹
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const nextIdx = (cityIndex + 1) % cityEvents.length;
                                            onSelectEvent?.(cityEvents[nextIdx]);
                                        }}
                                        className="w-4 h-4 flex items-center justify-center rounded hover:bg-zinc-300/80 text-zinc-800 text-xs font-black transition"
                                        title={language === 'tr' ? 'Bu şehirdeki sonraki olay' : 'Next event in this city'}
                                    >
                                        ›
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-medium line-clamp-6 md:line-clamp-none">
                        {event.description}
                    </p>


                </div>
            </div>
        </>
    );
}
