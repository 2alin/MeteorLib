import React from 'react';
import Menu from './Menu';
import { Options } from '../types';
import withStyles from 'react-jss';
import { initialOptions } from '../reducers';
import { removeStyleInput } from '../style';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    marginTop: '3.25rem',

    '& > *': {
      marginBottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
    },
    '& .tag': {
      marginBottom: '.5rem',
    },
    '& input': {
      ...removeStyleInput,
      background: '#5f6471',
    },
    '& .search': {
      alignItems: 'center',
    },
    '& .search input': {
      width: 'calc(100px + 80px + 1rem)',
      padding: '.5rem 1rem',
      borderBottom: '1px solid',
      boxSizing: 'border-box',
    },
    '& .order .controlsField': {
      // background: 'blue',
      display: 'flex',
      justifyContent: 'center',

      '& > *': {
      },
      '& > :first-child': {
        width: '100px',
        marginRight: '1rem',
      },
      '& > :last-child': {
        width: '80px',
      },
    },
    '& .mass': {
      flexDirection: 'row',
      alignItems: 'center',
    },
    '& .mass .tag': {
      margin: '0 .5rem 0 0 ',
    },
    '& .mass input': {
      width: '3rem',
    },
    '& .buttonsField': {
      margin: '1rem 0',
      flexDirection: 'row',
      // justifyContent: 'end',
      '& button': {
        ...removeStyleInput,
        marginRight: '1rem',
        background: 'inherit',
        padding: '.4rem .75rem',
        border: '1px solid',
        cursor: 'pointer',
        transition: 'background .5s ease',
        '&:hover, &:focus': {
          background: '#5f6471',
        },
      },
    },
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
    this.setState(newState);
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.onSave(this.state.options);
  };

  handleClear = () => {
    console.log('clearing');
    this.setState(
      {
        options: {
          ...initialOptions,
          ordered: { ...initialOptions.ordered },
          massRange: { ...initialOptions.massRange },
        },
      },
      () => {
        this.props.onSave(this.state.options);
      }
    );
  };

  render() {
    const { classes } = this.props;
    const { searchQuery, massRange, ordered } = this.state.options;
    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <div className={'search'}>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={e => {
              this.handleInputChange(e, 'query');
            }}
            placeholder={'search in name...'}
          />
        </div>
        <div className={'order'}>
          <span className={'tag'}>Order by:</span>
          <div className="controlsField">
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
        <div className={'mass'}>
          <span className="tag">Mass:</span>
          <div className="controlsField">
            <input
              type="text"
              id="minMass"
              value={massRange.min}
              onChange={e => {
                this.handleInputChange(e, 'min');
              }}
              placeholder={'min'}
              pattern="\d*"
            />
            <span> - </span>
            <input
              type="text"
              id="maxMass"
              value={massRange.max}
              onChange={e => {
                this.handleInputChange(e, 'max');
              }}
              placeholder={'max'}
              pattern="\d*"
            />
          </div>
        </div>
        <div className={'buttonsField'}>
          <button type="button" onClick={this.handleClear}>
            Reset
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(Controls);
