import React from 'react';
import { Options } from '../types';
import withStyles from 'react-jss';
import { initialOptions } from '../reducers';
const styles = {};

interface Props {
  options: Options;
  classes: any;
  display: 'flex';
  flexDirection: 'column';
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

  onInputChange = (e: any, limit: 'query' | 'min' | 'max') => {
    const newState = { ...this.state };
    const value = e.target.value.trimStart();

    if (limit === 'query') {
      newState.options.searchQuery = value;
    } else {
      newState.options.massRange[limit] = value;
    }
    this.setState(newState);
  };

  render() {
    const { classes } = this.props;
    const { searchQuery, massRange } = this.state.options;
    return (
      <form className={classes.container}>
        <div className={classes.row} />
        <div className={classes.row}>
          <label htmlFor="searchQuery">Name contains:</label>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={e => {
              this.onInputChange(e, 'query');
            }}
          />
        </div>
        <div className={classes.row}>
          <span>Ordered by:</span>
          <div className="subGroup">
            <span>Order Item </span>
            <span>ASC OR DESC</span>
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
                this.onInputChange(e, 'min');
              }}
              pattern="\d*"
            />
            <label htmlFor="maxMass">Max:</label>
            <input
              type="text"
              id="maxMass"
              value={massRange.max}
              onChange={e => {
                this.onInputChange(e, 'max');
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
