const DLPlayers002 = class {
  static options = (id) => {
    return {
      id: id,
      queryParams: {
        fields: { name: 'fields', default: '*' },
        filter: { name: 'filter', default: 'namelast is not null', placeholder: 'birthyear is not null and namefirst like "John"' },
        order: { name: 'order', default: 'birthyear desc', placeholder: 'birthyear desc, namefirst asc' },
        page: { name: 'page' },
        limit: {
          name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 5
        }
      },
      recordIdField: 'playerID',
      recordTitle: {
        fields: ['nameFirst', 'nameLast', 'birthYear'],
        format: (f, r) => `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`
      },
      responseHelper: {
        record: (res) => res.data,
        records: (res) => res.data.records,
        numPages: (res, limit) => res.data.metadata.numTotalPages,
        numResponseRecords: (res) => res.data.metadata.numResponseRecords,
        numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
        numTotalRecords: (res) => res.data.metadata.numTotalRecords
      },
      url: `${getHHApiDomain()}/api/baseball/v1/players`
    };
  };
};