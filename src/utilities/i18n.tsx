const EN = {
  panel: {
    searchInput: 'search in name',
    orderBy: 'Order by',
    orderOpts: {
      name: 'name',
      id: 'id',
      mass: 'mass',
      year: 'year',
    },
    mass: 'Mass',
    reset: 'Reset',
    save: 'Save',
  },
  card: {
    found: 'Found',
    fell: 'Fell',
  },
};

export const i18n: { [propName: string]: any } = {
  EN: {
    ...EN,
  },
  ES: {
    ...EN,
    panel: {
      searchInput: 'buscar en nombre',
      orderBy: 'Ordenar por',
      orderOpts: {
        name: 'nombre',
        id: 'id',
        mass: 'masa',
        year: 'año',
      },
      mass: 'Masa',
      reset: 'Limpiar',
      save: 'Guardar',
    },
    card: {
      found: 'Encontrado',
      fell: 'Impactó',
    },
  },
};
