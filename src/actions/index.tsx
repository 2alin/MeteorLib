import * as actionTypes from '../actionTypes';
import { Meteorite, Options, Language, Coordinates } from '../types';

export const updateList = (list: Meteorite[]) => ({
  type: actionTypes.UPDATE_LIST,
  list,
});

export const updateOptions = (options: Options) => ({
  type: actionTypes.UPDATE_OPTIONS,
  options,
});

export const clearOptions = () => ({
  type: actionTypes.CLEAR_OPTIONS,
});

export const setLanguage = (language: Language) => ({
  type: actionTypes.SET_LANGUAGE,
  language,
});

export const nextPage = () => ({
  type: actionTypes.NEXT_PAGE,
});

export const resetPage = () => ({
  type: actionTypes.RESET_PAGE,
});

export const setDrawerVisibility = (drawerVisibility: boolean) => ({
  type: actionTypes.SET_DRAWER_VISIBILITY,
  drawerVisibility,
});

export const setMapVisibility = (mapVisibility: boolean) => ({
  type: actionTypes.SET_MAP_VISIBILITY,
  mapVisibility,
});

export const setMapCoordinates = (mapCoordinates: Coordinates | null) => ({
  type: actionTypes.SET_MAP_COORDINATES,
  mapCoordinates,
});
