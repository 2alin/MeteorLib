import { connect } from 'react-redux';
import Card from '../components/Card';
import { setMapVisibility, setMapMeteorite } from '../actions';
import { Meteorite } from '../types';

const mapDispatchToProps = (dispatch: any) => {
  return {
    showMap: (meteorite: Meteorite) => {
      dispatch(setMapVisibility(true));
      dispatch(setMapMeteorite(meteorite));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
