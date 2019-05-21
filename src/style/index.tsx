export const cardColors: { [id: string]: string[] } = {
  ordinary: ['#007b6e', '#339789'],
  carbon: ['#55433b', '#78645c'],
  iron: ['#434b4d', '#646c6e'],
  other: ['#844066', '#a65f86'],
};

export interface Style {
  [id: string]: string | Style;
}
/*
export const addIcon = (icon: string, position: 'left' | 'right') => {
  const ss: Style = {
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: "''",
      width: '1rem',
      height: '1rem',
      background: `center / contain no-repeat url(${icon})`,
    },
  };
  if (position === 'left') {
    ss['&::after']['right'] = 'calc(100% + .5rem)';
  }
};*/

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
