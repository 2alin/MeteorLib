import { connect } from 'react-redux';
import { Store, Options } from '../types';
import { updateOptions } from '../actions';
import ControlsDrawer from '../components/ControlsDrawer';

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
)(ControlsDrawer);
