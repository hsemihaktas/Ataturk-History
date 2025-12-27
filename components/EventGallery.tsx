'use client';

import { History } from 'lucide-react';
import { HistoricalEvent } from '@/lib/types';

interface EventGalleryProps {
    event: HistoricalEvent;
}

export default function EventGallery({ event }: EventGalleryProps) {
    return (
        <section className="h-[35%] md:h-[45%] min-h-[220px] md:min-h-[350px] w-full bg-[#0a0a0a] flex flex-col justify-center items-center px-4 py-4 md:py-8 overflow-hidden relative border-b border-white/5">
            <div className="absolute top-4 md:top-6 left-4 md:left-8 flex items-center gap-2 md:gap-3 z-20">
                <History className="text-red-600 w-5 h-5 md:w-6 md:h-6" />
                <h1 className="text-white font-bold text-sm md:text-lg tracking-wider font-serif uppercase">Gazi Mustafa Kemal Atatürk Arşivi</h1>
            </div>

            <div className="flex gap-6 md:gap-16 items-start justify-start md:justify-center w-full max-w-7xl overflow-x-auto custom-scrollbar pt-10 md:pt-12 pb-2 md:pb-4 px-4 md:px-10 no-scrollbar md:scrollbar-auto">
                {event.gallery?.map((asset, idx) => (
                    <div
                        key={`${event.id}-${idx}`}
                        className="flex flex-col items-center min-w-[130px] md:min-w-[180px] max-w-[200px] md:max-w-[280px] group animate-in fade-in zoom-in-95 duration-700 fill-mode-both"
                        style={{ animationDelay: `${idx * 150}ms` }}
                    >
                        <div className="w-28 h-40 md:w-48 md:h-64 bg-zinc-900 rounded-sm overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 border border-white/5">
                            <img
                                src={asset.url}
                                alt={asset.label}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
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
                        <div className="text-zinc-600 text-xs md:text-sm font-light italic">Görsel bulunmamaktadır.</div>
                    )}
            </div>
        </section>
    );
}
