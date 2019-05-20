import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import { Store, Meteorite } from '../types';
import { updateList, nextPage } from '../actions';

const mapStateToProps = (state: Store) => ({
  list: state.list,
  options: state.options,
  pagination: state.pagination,
});

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
