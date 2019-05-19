import * as actionTypes from '../actionTypes';
import { Meteorite, Options, Language } from '../types';

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
