import React from 'react';
import _ from 'lodash';
import List from './List';
import ListBottom from './ListBottom';
import MapModal from '../containers/MapModal';
import withStyles from 'react-jss';
import { Options, Meteorite, Pagination, ListStatus } from '../types';
import { fetchMeteoristList } from '../utilities/async';
import { BREAKING_POINT } from '../style';

const styles = {
  container: {
    flex: 1,
    [`@media (max-width: ${BREAKING_POINT}px)`]: {
      marginTop: '42px',
    },
  },
};

interface Props {
  list: Meteorite[];
  options: Options;
  pagination: Pagination;
  handleUpdateList: (list: Meteorite[]) => void;
  classes: any;
}

class MainContent extends React.Component<Props> {
  state: {
    list: Meteorite[];
    status: ListStatus;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      list: [],
      status: 'iddle',
    };

    window.onscroll = () => {
      const { status } = this.state;

      if (status !== 'iddle') {
        return;
      }
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 8
      ) {
        this.loadData();
      }
    };
  }

  componentDidMount() {
    // avoid restoring scroll position of previous session
    window.scroll(0, 0);

    this.loadData();
  }

  componentDidUpdate(prevProps: Props) {
    if (!_.isEqual(prevProps.options, this.props.options)) {
      this.props.handleUpdateList([]);
      this.loadData();
    }
  }

  loadData() {
    const { options, pagination } = this.props;

    this.setState({ status: 'loading' });

    fetchMeteoristList({ options, pagination })
      .then(res => {
        const { list } = this.props;

        if (list.length + res.data.length === 0) {
          this.setState({ status: 'empty' });
        } else if (res.data.length < pagination.itemsPerPage) {
          this.setState({ status: 'full' });
        } else {
          this.setState({ status: 'iddle' });
        }

        this.props.handleUpdateList([...list, ...res.data]);
      })
      .catch(err => {
        this.setState({ status: 'error' });
      });
  }

  render() {
    const { list, classes } = this.props;

    return (
      <div className={classes.container}>
        <MapModal />
        <List {...{ list }} />
        <ListBottom {...this.state} />
      </div>
    );
  }
}

export default withStyles(styles)(MainContent);
