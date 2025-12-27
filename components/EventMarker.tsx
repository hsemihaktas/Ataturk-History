'use client';

import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { HistoricalEvent } from '@/lib/types';
import { CATEGORY_COLORS } from '@/lib/data/config';

interface EventMarkerProps {
    event: HistoricalEvent;
    onSelect: (event: HistoricalEvent) => void;
}

const createCustomIcon = (color: string) => {
    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="w-7 h-7 md:w-8 md:h-8 ${color} rounded-full border-2 md:border-4 border-white shadow-xl flex items-center justify-center text-white scale-100 hover:scale-110 transition-all duration-300 ring-1 md:ring-2 ring-black/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="md:w-4 md:h-4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
    });
};

const isValidCoords = (coords: any): coords is [number, number] => {
    return Array.isArray(coords) && coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1]);
};

export default function EventMarker({ event, onSelect }: EventMarkerProps) {
    if (!isValidCoords(event.coordinates)) return null;

    return (
        <Marker
            position={event.coordinates}
            icon={createCustomIcon(CATEGORY_COLORS[event.category as keyof typeof CATEGORY_COLORS])}
            eventHandlers={{
                click: () => onSelect(event)
            }}
        >
            <Popup>
                <div className="p-1">
                    <h4 className="font-bold text-slate-900 text-xs md:text-sm">{event.title}</h4>
                    <p className="text-[9px] md:text-[10px] text-slate-500 uppercase">{event.date}</p>
                </div>
            </Popup>
        </Marker>
    );
}
