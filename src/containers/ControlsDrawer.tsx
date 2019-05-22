import { connect } from 'react-redux';
import ControlsDrawer from '../components/ControlsDrawer';
import { Store } from '../types';
import { setDrawerVisibility } from '../actions';

const mapStateToprops = (state: Store) => {
  return {
    drawerVisibility: state.drawerVisibility,
  };
};



export default connect(
  mapStateToprops,
  null
)(ControlsDrawer);
