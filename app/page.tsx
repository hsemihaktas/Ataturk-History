'use client';

import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues with Leaflet
const AtaturkMap = dynamic(() => import('@/components/AtaturkMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen w-screen bg-[#0a0a0a]">
      <div className="text-white text-xl">Yükleniyor...</div>
    </div>
  )
});

export default function Home() {
  return <AtaturkMap />;
}
