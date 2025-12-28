'use client';

import { History } from 'lucide-react';
import { HistoricalEvent } from '@/lib/types';
import { useLanguage } from '@/lib/context/LanguageContext';

interface EventGalleryProps {
    event: HistoricalEvent;
}

export default function EventGallery({ event }: EventGalleryProps) {
    const { language } = useLanguage();

    return (
        <section className="h-[28%] md:h-[45%] min-h-[200px] md:min-h-[350px] w-full bg-[#0a0a0a] flex flex-col justify-start md:justify-center items-center px-4 py-4 md:py-8 overflow-hidden relative border-b border-white/5">
            <div className="absolute top-4 md:top-6 left-4 md:left-8 flex items-center gap-3 md:gap-4 z-20">
                <img
                    src="/icon.jpg"
                    alt="Atatürk"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white/20 shadow-lg"
                />
                <h1 className="text-white font-bold text-sm md:text-lg tracking-wider font-serif uppercase shadow-black drop-shadow-md">
                    {language === 'tr' ? 'Gazi Mustafa Kemal Atatürk Arşivi' : 'Gazi Mustafa Kemal Atatürk Archive'}
                </h1>
            </div>

            <div className="flex gap-6 md:gap-16 items-start justify-start md:justify-center w-full max-w-7xl overflow-x-auto custom-scrollbar pt-10 md:pt-12 pb-2 md:pb-4 px-4 md:px-10 no-scrollbar md:scrollbar-auto">
                {event.gallery?.map((asset, idx) => (
                    <div
                        key={`${event.id}-${idx}`}
                        className="flex flex-col items-center min-w-[130px] md:min-w-[180px] max-w-[200px] md:max-w-[280px] group animate-in fade-in zoom-in-95 duration-700 fill-mode-both"
                        style={{ animationDelay: `${idx * 150}ms` }}
                    >
                        <div className="w-28 h-40 md:w-48 md:h-64 bg-black/40 rounded-sm overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 border border-white/10 flex items-center justify-center">
                            <img
                                src={asset.url}
                                alt={asset.label}
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                                loading="lazy"
                            />
                        </div>
                        <div className="mt-3 md:mt-5 text-center px-1">
                            <div className="flex items-center justify-center gap-1 text-zinc-400 group-hover:text-white transition-colors">
                                <span className="text-[10px] md:text-sm lg:text-base font-semibold leading-tight line-clamp-2">{asset.label}</span>
                            </div>
                        </div>
                    </div>
                )) || (
                        <div className="text-zinc-600 text-xs md:text-sm font-light italic">
                            {language === 'tr' ? 'Görsel bulunmamaktadır.' : 'No visuals available.'}
                        </div>
                    )}
            </div>
        </section>
    );
}
