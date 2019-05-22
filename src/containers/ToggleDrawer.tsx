import { connect } from 'react-redux';
import ToggleDrawer from '../components/ToggleDrawer';
import { Store } from '../types';
import { setDrawerVisibility } from '../actions';

const mapStateToprops = (state: Store) => {
  return {
    drawerVisibility: state.drawerVisibility,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleClick: (drawerVisibility: boolean) => {
      dispatch(setDrawerVisibility(drawerVisibility));
    },
  };
};

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(ToggleDrawer);
