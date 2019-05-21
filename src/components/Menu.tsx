import React from 'react';
import withStyles from 'react-jss';

const styles = {
  title: {
    fontWeight: 500,
  },
};

interface Props {
  value: string;
  options: string[];
  onSelect: (value: string) => void;
  classes: any;
}

const Menu = ({ value, options, onSelect, classes }: Props) => {
  return (
    <div>
      <span className={classes.title}>{value}</span>
      <ul className={classes.options}>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => {
              onSelect(option);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withStyles(styles)(Menu);
