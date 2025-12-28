import { useState, useMemo, useEffect } from 'react';
import { X, Search, Calendar, MapPin } from 'lucide-react';
import { HistoricalEvent } from '@/lib/types';
import { CATEGORY_COLORS, CATEGORY_LABELS, CATEGORY_LABELS_EN } from '@/lib/data/config';
import { useLanguage } from '@/lib/context/LanguageContext';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    events: HistoricalEvent[];
    onSelectEvent: (event: HistoricalEvent) => void;
}

export default function SearchOverlay({ isOpen, onClose, events, onSelectEvent }: SearchOverlayProps) {
    const { language } = useLanguage();
    const [query, setQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    // Reset state when closed
    useEffect(() => {
        if (!isOpen) {
            setQuery('');
            setActiveCategory(null);
        }
    }, [isOpen]);

    const categoryLabels = language === 'tr' ? CATEGORY_LABELS : CATEGORY_LABELS_EN;

    const filteredEvents = useMemo(() => {
        const lowerQuery = query.toLowerCase();
        return events.filter(event => {
            const matchesSearch =
                event.title.toLowerCase().includes(lowerQuery) ||
                event.description.toLowerCase().includes(lowerQuery) ||
                event.location.toLowerCase().includes(lowerQuery) ||
                event.year.toString().includes(lowerQuery);

            const matchesCategory = activeCategory ? event.category === activeCategory : true;

            return matchesSearch && matchesCategory;
        });
    }, [query, activeCategory, events]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[5000] bg-zinc-950/80 backdrop-blur-md flex flex-col animate-in fade-in duration-200">
            {/* Header */}
            <div className="p-4 md:p-6 flex items-center gap-4 border-b border-white/10">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                    <input
                        autoFocus
                        type="text"
                        placeholder={language === 'tr' ? "Olay, yer veya yıl ara..." : "Search event, location or year..."}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all font-medium"
                    />
                </div>
                <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Categories */}
            <div className="px-4 md:px-6 py-4 flex gap-2 overflow-x-auto no-scrollbar pb-2">
                <button
                    onClick={() => setActiveCategory(null)}
                    className={`
                        px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap border
                        ${!activeCategory
                            ? 'bg-white text-black border-white'
                            : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/30'
                        }
                    `}
                >
                    {language === 'tr' ? 'Tümü' : 'All'}
                </button>
                {Object.entries(categoryLabels).map(([key, label]) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(activeCategory === key ? null : key)}
                        className={`
                            px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap border flex items-center gap-2
                            ${activeCategory === key
                                ? 'bg-white text-black border-white scale-105'
                                : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/30'
                            }
                        `}
                    >
                        <span className={`w-2 h-2 rounded-full ${CATEGORY_COLORS[key as keyof typeof CATEGORY_COLORS]}`} />
                        {label}
                    </button>
                ))}
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-7xl mx-auto">
                    {filteredEvents.map(event => (
                        <button
                            key={event.id}
                            onClick={() => onSelectEvent(event)}
                            className="bg-zinc-900/50 hover:bg-zinc-800 border border-white/5 hover:border-white/20 p-4 rounded-xl text-left transition-all group flex flex-col gap-2"
                        >
                            <div className="flex items-center justify-between w-full">
                                <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-white/5 text-zinc-300`}>
                                    {event.year}
                                </span>
                                <span className={`w-2 h-2 rounded-full ${CATEGORY_COLORS[event.category as keyof typeof CATEGORY_COLORS]}`} />
                            </div>

                            <h3 className="text-white font-bold text-lg group-hover:text-red-500 transition-colors line-clamp-1">
                                {event.title}
                            </h3>

                            <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={12} />
                                    {event.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin size={12} />
                                    {event.location}
                                </span>
                            </div>
                        </button>
                    ))}

                    {filteredEvents.length === 0 && (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 text-zinc-500">
                            <Search size={48} className="mb-4 opacity-20" />
                            <p className="text-lg font-medium">
                                {language === 'tr' ? 'Sonuç bulunamadı.' : 'No results found.'}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
