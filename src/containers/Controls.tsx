import { connect } from 'react-redux';
import { Store, Options, Language } from '../types';
import {
  updateOptions,
  resetPage,
  setDrawerVisibility,
  setLanguage,
} from '../actions';
import Controls from '../components/Controls';

const mapStateToProps = (state: Store) => {
  return {
    options: {
      ...state.options,
      ordered: { ...state.options.ordered },
      massRange: { ...state.options.massRange },
    },
    lang: state.language,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setLanguage: (lang: Language) => {
      dispatch(setLanguage(lang));
    },
    onSave: (options: Options) => {
      dispatch(updateOptions(options));
      dispatch(resetPage());
      dispatch(setDrawerVisibility(false));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
