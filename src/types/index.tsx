export interface Meteorite {
  fall: string;
  geolocation: {
    latitude: string;
    longitude: string;
  };
  id: string;
  mass: string;
  name: string;
  nametype: string;
  recclass: string;
  reclat: string;
  reclong: string;
  year: string;
}

export interface Options {
  searchQuery: string;
  ordered: {
    by: string;
    ascendent: boolean;
  };
  massRange: {
    min: string;
    max: string;
  };
}

export type Language = 'ES' | 'EN';
