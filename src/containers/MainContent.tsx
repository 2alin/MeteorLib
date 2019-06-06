import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import { Store, Meteorite } from '../types';
import { updateList, nextPage } from '../actions';

const mapStateToProps = (state: Store) => {
  return {
    list: [...state.list],
    options: {
      ...state.options,
      ordered: { ...state.options.ordered },
      massRange: { ...state.options.massRange },
    },
    pagination: { ...state.pagination },
    mapVisibility: state.mapVisibility,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  handleUpdateList: (list: Meteorite[]) => {
    dispatch(updateList(list));
    dispatch(nextPage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent);
