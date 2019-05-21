import { connect } from 'react-redux';
import { Store, Options, Pagination } from '../types';
import { updateOptions, updateList, resetPage, nextPage } from '../actions';
import Controls from '../components/Controls';

const mapStateToProps = (state: Store) => {
  // console.log('mapstatetoprops from controls');
  return {
    options: {
      ...state.options,
      ordered: { ...state.options.ordered },
      massRange: { ...state.options.massRange },
    },
  };
};

const mapDispatchToProps = (dispatch: any) => {
  // console.log('called mapDispatchtoProps from controls')
  return {
    onSave: (options: Options) => {
      dispatch(updateOptions(options));
      dispatch(updateList([]));
      dispatch(resetPage());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
