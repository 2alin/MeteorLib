import React from 'react';
import Menu from './Menu';
import { Options, Language } from '../types';
import withStyles from 'react-jss';
import { initialOptions } from '../reducers';
import { removeStyleInput } from '../style';
import { i18n } from '../utilities/i18n';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    marginTop: '1rem',

    '& > *': {
      marginBottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
    },
    '& .tag': {
      marginBottom: '.5rem',
      fontSize: '.9rem',
      filter: 'brightness(.75)',
    },
    '& input': {
      ...removeStyleInput,
      background: '#5f6471',
      '&::placeholder': {
        color: '#eee',
      },
    },
    '& .i18n': {
      alignItems: 'end',
      '& > :first-child': {
        width: '2.5rem',
      },
    },
    '& .search': {},
    '& .search input': {
      padding: '.5rem 1rem',
      borderBottom: '1px solid',
      boxSizing: 'border-box',
    },
    '& .order .controlsField': {
      display: 'flex',
      justifyContent: 'start',

      '& > *': {
        width: '5rem',
      },
      '& > :first-child': {
        marginRight: '1rem',
      },
    },
    '& .mass': {
      flexDirection: 'column',
    },
    '& .mass input': {
      width: '5rem',
      boxSizing: 'border-box',
      '&:first-child': {
        marginRight: '1rem',
      },
    },
    '& .buttonsField': {
      margin: '1rem 0',
      flexDirection: 'row',
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
  lang: Language;
  options: Options;
  setLanguage: (lang: Language) => void;
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

  handleSelectLanguage = (lang: string) => {
    this.props.setLanguage(lang as Language);
  };

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
    const { classes, lang } = this.props;
    const { searchQuery, massRange, ordered } = this.state.options;
    const { orderOpts } = i18n[lang].panel;
    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <div className={'i18n'}>
          <Menu
            value={lang}
            options={[{ key: 'EN', value: 'EN' }, { key: 'ES', value: 'ES' }]}
            onSelect={this.handleSelectLanguage}
          />
        </div>
        <div className={'search'}>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={e => {
              this.handleInputChange(e, 'query');
            }}
            placeholder={`${i18n[lang].panel.searchInput}...`}
            autoComplete={'off'}
          />
        </div>
        <div className={'order'}>
          <span className={'tag'}>{`${i18n[lang].panel.orderBy}:`}</span>
          <div className="controlsField">
            <Menu
              value={orderOpts[ordered.by]}
              options={[
                { key: 'name', value: orderOpts.name },
                { key: 'id', value: orderOpts.id },
                { key: 'mass', value: orderOpts.mass },
                { key: 'year', value: orderOpts.year },
              ]}
              onSelect={this.handleOrderedBy}
            />
            <Menu
              value={ordered.ascending ? 'ASC' : 'DESC'}
              options={[
                { key: 'ASC', value: 'ASC' },
                { key: 'DESC', value: 'DESC' },
              ]}
              onSelect={this.handleSort}
            />
          </div>
        </div>
        <div className={'mass'}>
          <span className="tag">{`${i18n[lang].panel.mass}:`}</span>
          <div className="controlsField">
            <input
              type="text"
              id="minMass"
              value={massRange.min}
              onChange={e => {
                this.handleInputChange(e, 'min');
              }}
              placeholder={'min'}
              autoComplete={'off'}
              pattern="\d*"
            />
            <input
              type="text"
              id="maxMass"
              value={massRange.max}
              onChange={e => {
                this.handleInputChange(e, 'max');
              }}
              placeholder={'max'}
              autoComplete={'off'}
              pattern="\d*"
            />
          </div>
        </div>
        <div className={'buttonsField'}>
          <button type="button" onClick={this.handleClear}>
            {`${i18n[lang].panel.reset}`}
          </button>
          <button type="submit">{`${i18n[lang].panel.save}`}</button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(Controls);
