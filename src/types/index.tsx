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
    by: OrderedBy;
    ascendent: boolean;
  };
  massRange: {
    min: string;
    max: string;
  };
}

export type Language = 'ES' | 'EN';

export type OrderedBy = 'id' | 'mass' | 'name' | 'year';

export interface Action {
  type: string;
}

export interface UpdateList extends Action {
  list: Meteorite[];
}

export interface UpdateOptions extends Action {
  options: Options;
}

export interface ClearOptions extends Action {}

export interface SetLanguage extends Action {
  language: Language;
}

export interface NextPage extends Action {}
