const DLBooks002 = class {
  static options = (id) => {
    return {
      contentMode: {},
      expand: {},
      fieldDefinitions: {
        transform: [
          { label: 'ID', fieldName: 'key', isChecked: false },
          { label: 'Title', fieldName: 'title', isChecked: true, colWidth: 'medium' },
          { label: 'Authors', fieldName: 'authors', isChecked: true, colWidth: 'medium', 
            transformer: async (v) => {
              let responses = [];
              for (let i of v) {
                responses.push(HHDataList.get(`https://openlibrary.org${i.author.key}.json`));
              }
              await Promise.all(responses);
              let names = [];
              responses.forEach(p => {
                p.then(res => { names.push(res.data.name); });
              });
              return names;
            }
          },
          { label: 'Description', fieldName: 'description', isChecked: true, colWidth: 'wide', 
            transformer: (v) => typeof v === 'object' ? v.value : v,
            display: {type: 'text', rows: 3 }, 
          },
          { label: 'Subjects', fieldName: 'subjects', isChecked: true, colWidth: 'medium' },
          { label: 'Subject People', fieldName: 'subject_people', isChecked: true, colWidth: 'medium' },
          { label: 'First Sentence', fieldName: 'first_sentence', isChecked: true, colWidth: 'wide', 
            transformer: (v) => v.value,
            display: {type: 'text' }
          }
        ]
      },
      id: id,
      processMode: {},
      queryParams: {
        fields: { name: 'fields', default: '*' },
        filter: { name: 'q', none: '*', default: 'snow' }, // Snow Falling on Cedars, On San Piedro
        order: { name: 'sort' },
        page: { name: 'page' },
        limit: { name: 'limit', choices: [1, 3, 5, 10, 20, 50, 100], default: 3 }
      },
      recordIdField: 'key',
      recordTitle: {
        fields: ['title'],
        format: (f, r) => `${r[f[0]]}`
      },
      responseHelper: {
        record: (res) => res.data,
        records: (res) => res.data.docs,
        numPages: (res, limit) => Math.ceil(res.data.numFound / limit),
        numResponseRecords: (res) => res.data.docs.length,
        numMatchedRecords: (res) => res.data.numFound
      },
      themeDefinition: {},
      uniformity: {},
      urls: {
        getRecord: (id) => `https://openlibrary.org${id}.json`,
        getRecords: `https://openlibrary.org/search.json`
      }
    };
  };
};
