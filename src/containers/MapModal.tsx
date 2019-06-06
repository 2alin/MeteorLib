import { connect } from 'react-redux';
import MapModal from '../components/MapModal';
import { Store } from '../types';
import { setMapVisibility } from '../actions';

const mapStateToProps = (state: Store) => {
  return {
    meteorite: state.mapMeteorite,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  quitModal: () => {
    dispatch(setMapVisibility(false));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapModal);
