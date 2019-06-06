import { connect } from 'react-redux';
import Card from '../components/Card';
import {
  setMapVisibility,
  setMapMeteorite,
  setDrawerVisibility,
} from '../actions';
import { Meteorite } from '../types';

const mapDispatchToProps = (dispatch: any) => {
  return {
    showMap: (meteorite: Meteorite) => {
      dispatch(setMapVisibility(true));
      dispatch(setMapMeteorite(meteorite));
      dispatch(setDrawerVisibility(false));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
