import React from 'react';
import withStyles from 'react-jss';
import { removeStyleList } from '../style';

const styles = {
  menuContainer: {
    position: 'relative',
    background: '#5f6471',
    textAlign: 'center',
    fontSize: '.9rem',
    // border: '1px solid',
    borderBottom: '1px solid',
    // boxSizing: 'border-box',
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
        background: '#3D424E',
      },
    },
  },
};

interface Props {
  value: string;
  options: string[];
  onSelect: (value: string) => void;
  classes: any;
}

class Menu extends React.Component<Props> {
  state: { visible: boolean };
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { value, options, onSelect, classes } = this.props;

    return (
      <div className={classes.menuContainer}>
        <span className={classes.title} onClick={this.toggleVisibility}>
          {value}
        </span>
        <ul
          className={`${classes.options} ${
            this.state.visible ? 'visible' : ''
          }`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                this.toggleVisibility();
                onSelect(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);
