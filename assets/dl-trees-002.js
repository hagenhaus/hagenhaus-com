const DLTrees002 = class {
  static popValues = new Map()
    .set('name', 'Koiwai Farm Ipponzakura')
    .set('species', `{"link":"https://en.wikipedia.org/wiki/Prunus_serrulata","text":"Prunus serrulata"}`)
    .set('description', `The solitary cherry tree stands in Koiwai Farm, a privately owned farm not far from Iwate's capital city Morioka (盛岡市 Morioka-shi). With over 500,000 visitors annually, the farm is immensely popular among the locals, and has been around since its establishment in 1891. In fact, the tree was said to be planted over 100 years ago too, and since then many people have visited the farm during different seasons just to see it. But among all the seasons, spring is often considered the best to see the tree in its full glory.`)
    .set('city', 'Morioka')
    .set('country', 'JPN')
    .set('lat', '39.7560461061616')
    .set('lng', '141.004011260734')
    .set('birthYear', '1922')
    .set('height', '0')
    .set('girth', '0')
    .set('links', `[{"link":"https://japanrailtimes.japanrailcafe.com.sg/web/article/seasons/sakura-series-4","text":"Japan Rail Cafe"},{"link":"https://www.koiwai.co.jp/makiba/","text":"Koiwai Farm"}]`);

  static options = (id) => {
    return {
      auths: {
        deleteRecord: window.getBearerToken,
        patchRecord: window.getBearerToken,
        postRecord: window.getBearerToken
      },
      colWidths: {
        fields: { value: 'narrow' },
        records: { value: 'medium' },
        tools: { value: 'narrow' }
      },
      confirm: confirm,
      contentMode: { value: 'value' },
      descriptions: {
        home: 'This HHDataList instance interacts with a REST API that provides access to a small dataset of famous tree records.',
        search: 'Search and order syntax is API-specific.',
        fields: 'Checked fields appear in records.',
        tools: 'Checked tools appear on the toolbar.',
        new: 'The New Record form consists of managed fields.',
        value: true
      },
      error: reportError,
      expand: { value: false, showTool: true },
      fieldDefinitions: {
        manage: [
          { fieldName: 'id', isChecked: false },
          { fieldName: 'name', isEditable: true, isRequired: true, colWidth: 'medium' },
          { fieldName: 'species', isEditable: true, colWidth: 'medium' },
          { fieldName: 'description', isEditable: true },
          { fieldName: 'city', isEditable: true },
          { fieldName: 'country', isEditable: true },
          { fieldName: 'lat', isEditable: true },
          { fieldName: 'lng', isEditable: true },
          { fieldName: 'birthYear', isEditable: true },
          { fieldName: 'height', isEditable: true },
          { fieldName: 'girth', isEditable: true },
          { fieldName: 'links', isEditable: true }
        ],
        transform: [
          { label: 'ID', fieldName: 'id', isChecked: false },
          { label: 'Name', fieldName: 'name' },
          {
            label: 'Species', fieldName: 'species',
            transformer: (v) => ({ url: v.link, title: v.text }),
            display: { type: 'link' }
          },
          {
            label: 'Description', fieldName: 'description', colWidth: 'wide',
            display: { type: 'text', rows: 3 }
          },
          { label: 'Nearby City', fieldNames: ['city'] },
          {
            label: 'Country', fieldNames: ['country'],
            transformer: async (v) => (await HHDataList.get(`${getHHApiDomain()}/api/devportals/v1/countries/${v}`)).data.name
          },
          {
            label: 'Coordinates', fieldNames: ['lat', 'lng'],
            transformer: (lat, lng) => ({
              url: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
              title: `${lat}, ${lng}`
            }),
            display: { type: 'link' }
          },
          {
            label: 'Age (years)', fieldNames: ['birthYear'],
            transformer: (v) => `${(new Date().getFullYear() - v).toLocaleString()}`
          },
          {
            label: 'Height (meters)', fieldNames: ['height'],
            transformer: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown'
          },
          {
            label: 'Links', fieldNames: ['links'],
            transformer: (v) => {
              const a = [];
              for (let i of v) { a.push({ url: i.link, title: i.text }); }
              return a;
            },
            display: { type: 'link' }
          }
        ]
      },
      id: id,
      info: reportInfo,
      methods: {
        deleteRecord: () => {
          reportWarning('Cannot Delete Record', 'This feature is disabled for this instance.');
        },
        patchRecord: () => {
          reportWarning('Cannot Modify Record Field', 'This feature is disabled for this instance.');
        },
        postRecord: () => {
          reportWarning('Cannot Create Record', 'This feature is disabled for this instance.');
        }
      },
      number: { value: true },
      parity: {
        get: { value: true },
        post: { value: true }
      },
      populate: (fieldName) => DLTrees002.popValues.get(fieldName),
      processMode: { value: 'transform', showTool: false },
      queryParams: {
        fields: { name: 'fields' },
        filter: { name: 'filter', placeholder: 'name like "%tree%" and country like "AUS"' },
        order: { name: 'order', default: 'name asc' },
        page: { name: 'page' },
        limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 3, showTool: true }
      },
      recordIdField: 'id',
      recordTitle: { fields: ['name'], format: (f, r) => r[f[0]] },
      reporters: {
        fieldDefinitions: {},
        queryParams: {},
        requests: {},
        theme: {},
        themes: {}
      },
      responseHelper: {
        record: (res) => res.data,
        records: (res) => res.data.records,
        numPages: (res, limit) => res.data.metadata.numTotalPages,
        numResponseRecords: (res) => res.data.metadata.numResponseRecords,
        numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
        numTotalRecords: (res) => res.data.metadata.numTotalRecords
      },
      small: { value: true },
      themeDefinition: { showTool: false },
      uniformity: { value: true, fieldValue: 'No data' },
      url: `${getHHApiDomain()}/api/famous/v1/trees`
    };
  };
};
