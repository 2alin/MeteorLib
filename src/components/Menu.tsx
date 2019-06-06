import React from 'react';
import withStyles from 'react-jss';
import { removeStyleList, THEME } from '../style';

const styles = {
  menuContainer: {
    position: 'relative',
    zIndex: 60,
    background: '#5f6471',
    textAlign: 'center',
    fontSize: '.9rem',
    borderBottom: '1px solid',
    userSelect: 'none',
  },
  title: {
    display: 'inline-block',
    fontWeight: 500,
    lineHeight: 2,
    width: '100%',
    cursor: 'pointer',
  },
  options: {
    ...removeStyleList,
    background: 'inherit',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    overflow: 'hidden',
    border: '1px solid',
    display: 'none',

    '&.visible': {
      display: 'initial',
    },
    '& li': {
      lineHeight: 2,
      cursor: 'pointer',
      '&:hover': {
        background: THEME.darkBg,
      },
    },
  },
};

interface Option {
  key: string;
  value: string;
}

interface Props {
  value: string;
  options: Option[];
  onSelect: (value: string) => void;
  classes: any;
}

class Menu extends React.Component<Props> {
  state: { visible: boolean };
  private menuRef: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.menuRef = React.createRef();
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside);
  };

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleClickOutside = (e: any) => {
    if (
      this.menuRef.current &&
      !this.menuRef.current.contains(e.target) &&
      this.state.visible
    ) {
      this.setState({ visible: false });
    }
  };

  render() {
    const { value, options, onSelect, classes } = this.props;
    return (
      <div className={classes.menuContainer} ref={this.menuRef}>
        <span className={classes.title} onClick={this.toggleVisibility}>
          {value}
        </span>
        <ul
          className={`${classes.options} ${
            this.state.visible ? 'visible' : ''
          }`}
        >
          {options.map(option => (
            <li
              key={option.key}
              onClick={() => {
                this.toggleVisibility();
                onSelect(option.key);
              }}
            >
              {option.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
