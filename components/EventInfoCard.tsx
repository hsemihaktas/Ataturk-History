import { useState, useEffect } from 'react';
import { MapPin, ExternalLink, Info, Volume2, Square } from 'lucide-react';
import { HistoricalEvent } from '@/lib/types';
import { CATEGORY_COLORS, CATEGORY_LABELS, CATEGORY_LABELS_EN } from '@/lib/data/config';
import { useLanguage } from '@/lib/context/LanguageContext';

interface EventInfoCardProps {
    event: HistoricalEvent;
    showInfo: boolean;
    onToggle: () => void;
}

export default function EventInfoCard({ event, showInfo, onToggle }: EventInfoCardProps) {
    const { language } = useLanguage();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

    // Get correct category labels based on language
    const categoryLabels = language === 'tr' ? CATEGORY_LABELS : CATEGORY_LABELS_EN;

    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();

            if (language === 'tr') {
                // Filter for Turkish voices
                const trVoices = voices.filter(v => v.lang.includes('tr'));
                if (trVoices.length > 0) {
                    const preferredVoice = trVoices.find(v =>
                        v.name.includes('Google') ||
                        v.name.includes('Yelda') ||
                        v.name.includes('Siri') ||
                        v.name.includes('Natural')
                    );
                    setVoice(preferredVoice || trVoices[0]);
                }
            } else {
                // Filter for English voices
                const enVoices = voices.filter(v => v.lang.includes('en'));
                if (enVoices.length > 0) {
                    // Prefer natural sounding English voices
                    const preferredVoice = enVoices.find(v =>
                        v.name.includes('Google US') ||
                        v.name.includes('Samantha') ||
                        v.name.includes('Arthur') ||
                        v.name.includes('Natural')
                    );
                    setVoice(preferredVoice || enVoices[0]);
                }
            }
        };

        loadVoices();

        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }

        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return () => {
            window.speechSynthesis.cancel();
        };
    }, [event.id, language]);

    const handleSpeak = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const utterance = new SpeechSynthesisUtterance(event.description);
            utterance.lang = language === 'tr' ? 'tr-TR' : 'en-US';
            if (voice) {
                utterance.voice = voice;
            }
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };

    return (
        <>
            {/* Info Toggle Button (Mobile) */}
            <button
                onClick={onToggle}
                className="absolute top-4 left-4 z-[1001] md:hidden w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-zinc-900"
            >
                <Info size={20} />
            </button>

            {/* Info Card Overlay - Responsive Layout */}
            <div className={`
        absolute z-[1000] transition-all duration-500 ease-in-out
        ${showInfo ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none md:pointer-events-auto'}
        top-4 md:top-6 right-4 md:right-6 left-4 md:left-auto
        md:w-80 lg:w-96
      `}>
                <div className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl border border-white/20 pointer-events-auto">
                    <div className="flex items-center justify-between mb-2 md:mb-4">
                        <div className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${CATEGORY_COLORS[event.category as keyof typeof CATEGORY_COLORS]}`} />
                            <span className="text-[9px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                {categoryLabels[event.category as keyof typeof CATEGORY_LABELS]}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleSpeak}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"
                                title={language === 'tr' ? "Sesli Anlatım" : "Read Aloud"}
                            >
                                {isSpeaking ? <Square size={14} className="fill-current" /> : <Volume2 size={16} />}
                            </button>
                            <button className="md:hidden text-zinc-400" onClick={onToggle}>✕</button>
                        </div>
                    </div>

                    <h2 className="text-lg md:text-2xl font-bold text-zinc-900 mb-2 md:mb-3 leading-tight">{event.title}</h2>

                    <div className="flex items-center gap-1 text-[10px] md:text-xs text-red-600 font-bold mb-3 md:mb-4">
                        <MapPin size={12} className="md:w-3.5 md:h-3.5" /> {event.location} <span className="text-zinc-300 mx-1">|</span> {event.date}
                    </div>

                    <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-medium line-clamp-4 md:line-clamp-none">
                        {event.description}
                    </p>

                    {event.msbLink && (
                        <a
                            href={event.msbLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 md:py-3 bg-zinc-900 text-white rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold hover:bg-red-700 transition-all uppercase tracking-widest"
                        >
                            {language === 'tr' ? 'MSB Arşivi Detay' : 'MSB Archive Detail'} <ExternalLink size={12} className="md:w-3.5 md:h-3.5" />
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}
