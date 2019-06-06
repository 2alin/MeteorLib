import * as actionTypes from '../actionTypes';
import { combineReducers } from 'redux';
import {
  UpdateList,
  Options,
  NextPage,
  Meteorite,
  Language,
  SetLanguage,
  SetDrawerVisibility,
  SetMapVisibility,
  SetMapCoordinates,
  Coordinates,
} from '../types';

function list(state: Meteorite[] = [], action: UpdateList) {
  switch (action.type) {
    case actionTypes.UPDATE_LIST:
      return action.list;
    default:
      return state;
  }
}

export const initialOptions: Options = {
  searchQuery: '',
  ordered: {
    by: 'name',
    ascending: true,
  },
  massRange: {
    min: '',
    max: '',
  },
};

function options(state = initialOptions, action: any) {
  switch (action.type) {
    case actionTypes.UPDATE_OPTIONS:
      return action.options;
    case actionTypes.CLEAR_OPTIONS:
      return initialOptions;
    default:
      return state;
  }
}

export const InitialPagination = { page: 0, itemsPerPage: 24 };

function pagination(state = InitialPagination, action: NextPage) {
  switch (action.type) {
    case actionTypes.NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case actionTypes.RESET_PAGE:
      return { ...InitialPagination };
    default:
      return state;
  }
}

function language(state: Language = 'EN', action: SetLanguage) {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE:
      return action.language;
    default:
      return state;
  }
}

function drawerVisibility(state: boolean = false, action: SetDrawerVisibility) {
  switch (action.type) {
    case actionTypes.SET_DRAWER_VISIBILITY:
      return action.drawerVisibility;
    default:
      return state;
  }
}

function mapVisibility(state: boolean = false, action: SetMapVisibility) {
  switch (action.type) {
    case actionTypes.SET_MAP_VISIBILITY:
      return action.mapVisibility;
    default:
      return state;
  }
}

function mapCoordinates(
  state: Coordinates | null = null,
  action: SetMapCoordinates
) {
  switch (action.type) {
    case actionTypes.SET_MAP_COORDINATES:
      return action.mapCoordinates;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  list,
  options,
  pagination,
  language,
  drawerVisibility,
  mapVisibility,
  mapCoordinates,
});

export default rootReducer;
