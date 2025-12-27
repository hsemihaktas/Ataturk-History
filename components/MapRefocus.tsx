'use client';

import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import { HistoricalEvent } from '@/lib/types';

interface MapRefocusProps {
    event: HistoricalEvent;
    zoom: number;
}

const isValidCoords = (coords: any): coords is [number, number] => {
    return Array.isArray(coords) && coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1]);
};

export default function MapRefocus({ event, zoom }: MapRefocusProps) {
    const map = useMap();
    const prevEventIdRef = useRef<string | null>(null);

    useEffect(() => {
        if (prevEventIdRef.current !== event.id && isValidCoords(event.coordinates)) {
            map.flyTo(event.coordinates, zoom, {
                duration: 1.5,
                easeLinearity: 0.25
            });
            prevEventIdRef.current = event.id;
        }
    }, [event, zoom, map]);

    return null;
}
