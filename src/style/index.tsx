export const cardColors: { [id: string]: string[] } = {
  ordinary: ['#007b6e', '#339789'],
  carbon: ['#55433b', '#78645c'],
  iron: ['#434b4d', '#646c6e'],
  other: ['#844066', '#a65f86'],
};

export const bgCardStyle = () => {
  const style: { [id: string]: any } = {};
  Object.keys(cardColors).forEach((meteorClass: string) => {
    style[`&.${meteorClass}`] = {
      background: cardColors[meteorClass][1],
      boxShadow: `0 0 4px ${cardColors[meteorClass][1]}`,
      '& > :first-child': {
        background: cardColors[meteorClass][0],
      },
    };
  });
  return style;
};

export const addIconRight = (icon: string) => ({
  position: 'relative',
  '&::after': {
    position: 'absolute',
    left: 'calc(100% + .5rem)',
    content: "''",
    width: '1rem',
    height: '1rem',
    background: `center / contain no-repeat url(${icon})`,
  },
});

export const addIconLeft = (icon: string) => {
  const ss = addIconRight(icon);
  return {
    ...ss,
    '&::after': {
      ...ss['&::after'],
      left: 'auto',
      right: 'calc(100% + .5rem)',
    },
  };
};

export const linkStyle = {
  outline: 'none',
  textDecoration: 'none',
  fontWeight: '500',
  '&:link, &:visited, &:focus': {
    color: 'inherit',
  },
  '&:focus, &:hover': {
    textDecoration: 'underline dotted',
  },
};

export const removeStyleInput = {
  background: 'none',
  border: 'none',
  fontFamily: 'inherit',
  fontSize: '.9rem',
  color: 'inherit',
  padding: '.25rem .5rem',
  borderRadius: '2px',
};

export const removeStyleList = {
  margin: 0,
  padding: 0,
  listStyle: 'none',
};

export const BREAKING_POINT = 860;

export const CONTROLS_WIDTH = 270;

export const THEME = {
  darkBg: '#3D424E',
  lightBg: '#efefef',
};
