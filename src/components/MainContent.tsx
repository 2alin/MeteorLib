import React from 'react';
import axios from 'axios';
import List from './List';
import ListBottom from './ListBottom';
import withStyles from 'react-jss';
import { Options, Meteorite, Pagination } from '../types';
import { API_URL } from '../utilities/constants';

const styles = {
  container: {
    // width: '100%',
    flex: 1,
  },
};

interface Props {
  list: Meteorite[];
  options: Options;
  pagination: Pagination;
  onFetch: (list: Meteorite[]) => void;
  classes: any;
}

class MeteoritesList extends React.Component<Props> {
  state: {
    error: boolean;
    isLoading: boolean;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      error: false,
      isLoading: false,
    };

    window.onscroll = () => {
      const { error, isLoading } = this.state;

      if (error || isLoading) {
        return;
      }
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 8
      ) {
        // console.log('fetching more data');
        this.loadData();
      }
    };
  }

  componentDidMount() {
    // avoid restoring scroll position of previous session
    window.scroll(0, 0);

    this.loadData();
  }

  loadData() {
    const { list, pagination } = this.props;

    this.setState({ isLoading: true });

    this.fetchData(pagination.itemsPerPage, pagination.page - 1)
      .then(res => {
        this.setState({ isLoading: false });
        this.props.onFetch([...list, ...res.data]);
        // console.log('added more data');
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  fetchData(limit: number, page: number) {
    const query = `?$limit=${limit}&$offset=${page * limit}`;
    return axios.get(API_URL.concat(query));
  }
  render() {
    const { list, classes } = this.props;

    return (
      <div className={classes.container}>
        <List {...{ list }} />
        <ListBottom {...this.state} />
      </div>
    );
  }
}

export default withStyles(styles)(MeteoritesList);
