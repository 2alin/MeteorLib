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


