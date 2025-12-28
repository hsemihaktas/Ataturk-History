'use client';

import { Marker } from 'react-leaflet';
import L from 'leaflet';
import { HistoricalEvent } from '@/lib/types';
import { CATEGORY_COLORS } from '@/lib/data/config';

interface EventMarkerProps {
    event: HistoricalEvent;
    onSelect: (event: HistoricalEvent) => void;
    isSelected: boolean;
}

const createCustomIcon = (color: string, isSelected: boolean) => {
    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="transition-all duration-300 ease-out ${isSelected ? 'scale-110 z-[1000]' : 'scale-100'}">
                <div class="relative w-7 h-7 md:w-8 md:h-8 ${color} rounded-full border-2 md:border-4 ${isSelected ? 'border-white ring-2 ring-red-600 shadow-2xl' : 'border-white shadow-xl'} flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="md:w-4 md:h-4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
               </div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
    });
};

const isValidCoords = (coords: any): coords is [number, number] => {
    return Array.isArray(coords) && coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1]);
};

export default function EventMarker({ event, onSelect, isSelected }: EventMarkerProps) {
    if (!isValidCoords(event.coordinates)) return null;

    return (
        <Marker
            position={event.coordinates}
            icon={createCustomIcon(CATEGORY_COLORS[event.category as keyof typeof CATEGORY_COLORS], isSelected)}
            eventHandlers={{
                click: () => onSelect(event)
            }}
            zIndexOffset={isSelected ? 1000 : 0}
        />
    );
}
