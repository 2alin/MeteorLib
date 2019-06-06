import { connect } from 'react-redux';
import ToggleDrawer from '../components/ToggleDrawer';
import { Store } from '../types';
import { setDrawerVisibility, setMapVisibility } from '../actions';

const mapStateToprops = (state: Store) => {
  return {
    drawerVisibility: state.drawerVisibility,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleClick: (drawerVisibility: boolean) => {
      dispatch(setDrawerVisibility(drawerVisibility));
      dispatch(setMapVisibility(false));
    },
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(ToggleDrawer);
