import { connect } from 'react-redux';
import { Store, Options } from '../types';
import { updateOptions } from '../actions';
import Controls from '../components/Controls';

const mapStateToProps = (state: Store) => ({
  options: state.options,
});

const mapDispatchToProps = (dispatch: any) => ({
  onSave: (options: Options) => {
    dispatch(updateOptions(options));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
