import { cardColors } from '../style';

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat().format(number);
};

export const classifyMeteorite = (recclass: string) => {
  const firstChar = recclass[0].toLocaleLowerCase();
  if (firstChar === 'h' || firstChar === 'l') {
    return 'ordinary';
  } else if (firstChar === 'c') {
    return 'carbon';
  } else if (firstChar === 'i') {
    return 'iron';
  } else {
    return 'other';
  }
};

export const genClassMeteoStyleSheet = () => {
  const ss: { [id: string]: any } = {};
  Object.keys(cardColors).forEach((recclass: string) => {
    ss[`&.${recclass}`] = {
      background: cardColors[recclass][1],
      boxShadow: `0 0 4px ${cardColors[recclass][1]}`,
      '& > :first-child': {
        background: cardColors[recclass][0],
      },
    };
  });
  return ss;
};
