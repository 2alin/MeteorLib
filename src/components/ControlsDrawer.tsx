import React from 'react';
import Controls from '../containers/Controls';
import withStyles from 'react-jss';
import githubIcon from '../assets/github.svg';
import { linkStyle, addIconRight } from '../style';

const styles = {
  drawer: {
    // change line bellow once all content has been set and styled
    // minHeight: '',
    height: '100vh',
    width: '270px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    background: '#3D424E',
    color: 'white',
  },
  footer: {
    // justifySelf: 'end',
    background: '#323640',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem .75rem',
    '& .brand': {
      marginBottom: '1rem',
      textAlign: 'left',
      fontVariant: 'small-caps',
      letterSpacing: '.1rem',
      fontWeight: '500',
      fontSize: '1.4rem',
    },
    '& .row': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
    },
    '& a': {
      ...linkStyle,
    },
    '& .author': {
      fontSize: '.8rem',
    },
    '& .sources > *': {
      marginRight: '.5rem',
    },
    '& .github': {
      display: 'inline-block',
      width: '1rem',
      height: '1rem',
      background: `center / contain no-repeat url(${githubIcon})`,
    },
    '& .nasa': {
      fontVariant: 'small-caps',
    },
  },
};

interface Props {
  classes: any;
}

const ControlsDrawer = ({ classes }: Props) => {
  return (
    <div className={classes.drawer}>
      <Controls />
      <div className={classes.footer}>
        <span className="brand">meteorLib</span>
        <div className="row">
          <a href="http://" className="github sources" />
          {/* <div className="sources" /> */}
          <a href="http://" className="nasa sources">
            nasa
          </a>
          <div className="author">
            by <a href="http://">adilson</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ControlsDrawer);
