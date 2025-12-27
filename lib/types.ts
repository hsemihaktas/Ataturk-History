export interface GalleryAsset {
  url: string;
  label: string;
  description?: string;
}

export interface HistoricalEvent {
  id: string;
  year: number;
  date: string;
  title: string;
  location: string;
  coordinates: [number, number];
  description: string;
  category: 'military' | 'political' | 'personal' | 'reform' | 'education';
  image?: string;
  msbLink?: string;
  gallery?: GalleryAsset[];
}
