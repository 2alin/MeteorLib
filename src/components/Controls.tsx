import React from 'react';
import Menu from './Menu';
import { Options } from '../types';
import withStyles from 'react-jss';
import { initialOptions } from '../reducers';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

interface Props {
  options: Options;
  onSave: (options: Options) => void;
  classes: any;
}
class Controls extends React.Component<Props> {
  state: {
    options: Options;
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      options: initialOptions,
    };
  }
  componentDidMount() {
    this.setState({ options: this.props.options });
  }

  handleInputChange = (e: any, limit: 'query' | 'min' | 'max') => {
    const newState = { ...this.state };
    const value = e.target.value.trimStart();

    if (limit === 'query') {
      newState.options.searchQuery = value;
    } else {
      newState.options.massRange[limit] = value;
    }
    this.setState(newState);
  };

  handleOrderedBy = (option: string) => {
    const newState = { ...this.state };
    newState.options.ordered.by = option;
    this.setState(newState);
  };

  handleSort = (option: string) => {
    const newState = { ...this.state };
    newState.options.ordered.ascending = option === 'ASC';
    this.setState({ newState });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.onSave(this.state.options);
  };

  render() {
    const { classes } = this.props;
    const { searchQuery, massRange, ordered } = this.state.options;
    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <div className={classes.row} />
        <div className={classes.row}>
          <label htmlFor="searchQuery">Name contains:</label>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={e => {
              this.handleInputChange(e, 'query');
            }}
          />
        </div>
        <div className={classes.row}>
          <span>Ordered by:</span>
          <div className="subGroup">
            <Menu
              value={ordered.by}
              options={['name', 'id', 'mass', 'year']}
              onSelect={this.handleOrderedBy}
            />
            <Menu
              value={ordered.ascending ? 'ASC' : 'DESC'}
              options={['ASC', 'DESC']}
              onSelect={this.handleSort}
            />
          </div>
        </div>
        <div className={classes.row}>
          <span>Mass</span>
          <div className="subGroup">
            <label htmlFor="minMass">Min:</label>
            <input
              type="text"
              id="minMass"
              value={massRange.min}
              onChange={e => {
                this.handleInputChange(e, 'min');
              }}
              pattern="\d*"
            />
            <label htmlFor="maxMass">Max:</label>
            <input
              type="text"
              id="maxMass"
              value={massRange.max}
              onChange={e => {
                this.handleInputChange(e, 'max');
              }}
              pattern="\d*"
            />
          </div>
        </div>
        <div className={classes.row}>
          <button type="submit">Done!</button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(Controls);
