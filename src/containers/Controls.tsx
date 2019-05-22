import { connect } from 'react-redux';
import { Store, Options } from '../types';
import {
  updateOptions,
  resetPage,
  setDrawerVisibility,
} from '../actions';
import Controls from '../components/Controls';

const mapStateToProps = (state: Store) => {
  return {
    options: {
      ...state.options,
      ordered: { ...state.options.ordered },
      massRange: { ...state.options.massRange },
    },
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
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
