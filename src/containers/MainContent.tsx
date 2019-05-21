import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import { Store, Meteorite } from '../types';
import { updateList, nextPage } from '../actions';

const mapStateToProps = (state: Store) => {
  console.log('called map state to props')
  return {
    list: [...state.list],
    options: {
      ...state.options,
      ordered: { ...state.options.ordered },
      massRange: { ...state.options.massRange },
    },
    pagination: { ...state.pagination },
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onFetch: (list: Meteorite[]) => {
    dispatch(updateList(list));
    dispatch(nextPage());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent);
