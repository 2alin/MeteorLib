import { connect } from 'react-redux';
import Card from '../components/Card';
import { setMapVisibility, setMapCoordinates } from '../actions';
import { Coordinates } from '../types';

const mapDispatchToProps = (dispatch: any) => {
  return {
    showMap: (coordinates: Coordinates | null) => {
      dispatch(setMapVisibility(true));
      dispatch(setMapCoordinates(coordinates));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
