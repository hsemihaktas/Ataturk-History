import { useState, useEffect } from 'react';
import { Calendar, X, ArrowRight } from 'lucide-react';
import { HistoricalEvent } from '@/lib/types';
import { useLanguage } from '@/lib/context/LanguageContext';

interface OnThisDayNotificationProps {
    event: HistoricalEvent;
    onSelect: (event: HistoricalEvent) => void;
    onClose: () => void;
}

export default function OnThisDayNotification({ event, onSelect, onClose }: OnThisDayNotificationProps) {
    const { language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Small delay for animation
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!event) return null;

    return (
        <div className={`
            fixed bottom-4 md:bottom-8 right-4 md:right-8 z-[2000]
            max-w-[calc(100vw-32px)] md:max-w-md
            transition-all duration-700 ease-out transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}>
            <div className="bg-red-900/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-red-500/30 flex flex-col gap-3 relative overflow-hidden group">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white/50 hover:text-white transition-colors"
                >
                    <X size={16} />
                </button>

                {/* Decorative Background Icon */}
                <Calendar className="absolute -bottom-4 -right-4 text-white/5 w-24 h-24 rotate-12" />

                <div className="flex items-center gap-2 text-red-200 font-bold text-xs uppercase tracking-widest">
                    <Calendar size={14} />
                    {language === 'tr' ? 'Tarihte Bugün' : 'On This Day'}
                </div>

                <div className="pr-6">
                    <h3 className="font-bold text-lg md:text-xl leading-tight mb-1">
                        {event.title}
                    </h3>
                    <p className="text-red-100/80 text-xs md:text-sm line-clamp-2">
                        {event.description}
                    </p>
                </div>

                <button
                    onClick={() => {
                        onSelect(event);
                        onClose();
                    }}
                    className="self-start mt-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 group-hover:pl-5"
                >
                    {language === 'tr' ? 'Olayı Görüntüle' : 'View Event'}
                    <ArrowRight size={14} />
                </button>
            </div>
        </div>
    );
}
