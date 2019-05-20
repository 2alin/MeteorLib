import * as actionTypes from '../actionTypes';
import { combineReducers } from 'redux';
import {
  UpdateList,
  Options,
  NextPage,
  Meteorite,
  Language,
  SetLanguage,
} from '../types';

function list(state: Meteorite[] = [], action: UpdateList) {
  switch (action.type) {
    case actionTypes.UPDATE_LIST:
      return action.list;
    default:
      return state;
  }
}

const initialOptions: Options = {
  searchQuery: '',
  ordered: {
    by: 'name',
    ascendent: true,
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

function pagination(state = { page: 1, itemsPerPage: 50 }, action: NextPage) {
  switch (action.type) {
    case actionTypes.NEXT_PAGE:
      return { ...state, page: state.page + 1 };
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

const rootReducer = combineReducers({
  list,
  options,
  pagination,
  language,
});

export default rootReducer;
