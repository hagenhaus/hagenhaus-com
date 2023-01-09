/************************************************************************************************
* Base
************************************************************************************************/

class DLBaseOptions002 {
  constructor(id) {
    this.colWidths = { fields: {}, records: {}, tools: {} };
    this.confirm = confirm;
    this.contentMode = {};
    this.descriptions = {
      search: 'Search and order syntax is API-specific.',
      fields: 'Checked fields appear in records.',
      tools: 'Checked tools appear on the toolbar.',
      new: 'The New Record form consists of managed fields.',
      value: true
    };
    this.error = reportError;
    this.expand = { showTool: true };
    this.fieldDefinitions = {};
    this.id = id;
    this.info = reportInfo;
    this.methods = {
      deleteRecord: () => { reportWarning('Cannot Delete Record', 'This feature is disabled for this instance.'); },
      patchRecord: () => { reportWarning('Cannot Modify Record Field', 'This feature is disabled for this instance.'); },
      postRecord: () => { reportWarning('Cannot Create Record', 'This feature is disabled for this instance.'); }
    };
    this.number = {};
    this.parity = { get: { value: false }, post: { value: false } };
    this.processMode = {};
    this.queryParams = { fields: {}, filter: {}, order: {}, page: {}, limit: { default: 3, showTool: true } };
    this.recordIdField = 'id';
    this.reporters = { fieldDefinitions: {}, queryParams: {}, requests: {}, theme: {}, themes: {} };
    this.responseHelper = {};
    this.small = {};
    this.themeDefinition = {};
    this.uniformity = { value: true, fieldValue: 'No data' };
  }
}

/************************************************************************************************
* Authors
************************************************************************************************/

class DLAuthorsOptions002 extends DLBaseOptions002 {
  constructor(id) {
    super(id);
    this.descriptions.home = 'View authors from the <a href="https://openlibrary.org/developers">Open Library API</a>.';
    this.queryParams.fields.default = '*';
    this.queryParams.filter.name = 'q';
    this.queryParams.filter.none = '*';
    this.queryParams.filter.default = 'john';
    this.queryParams.order.name = 'sort';
    this.queryParams.page.name = 'offset';
    this.recordIdField = 'key';
    this.recordTitle = { fields: ['name'], format: (f, r) => r[f[0]] };
    this.responseHelper = {
      record: (res) => res.data,
      records: (res) => res.data.docs,
      numPages: (res, limit) => Math.ceil(res.data.numFound / limit),
      numResponseRecords: (res) => res.data.docs.length,
      numMatchedRecords: (res) => res.data.numFound
    };
    this.urls = {
      getRecord: (id) => `https://openlibrary.org/authors/${id}.json`,
      getRecords: `https://openlibrary.org/search/authors.json`
    };
  }
}

/************************************************************************************************
* Players
************************************************************************************************/

class DLPlayersOptions002 extends DLBaseOptions002 {
  constructor(id) {
    super(id);
    this.descriptions.home = 'View baseball player records in the <a href="https://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Dataset</a>.';
    this.parity.get.value = true;
    this.parity.post.value = true;
    this.queryParams.filter.default = 'namelast is not null';
    this.queryParams.filter.placeholder = 'birthyear is not null and namefirst like "John"';
    this.queryParams.order.default = 'birthyear desc';
    this.queryParams.order.placeholder = 'birthyear desc, namefirst asc';
    this.recordIdField = 'playerID';
    this.recordTitle = {
      fields: ['nameFirst', 'nameLast', 'birthYear'],
      format: (f, r) => `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`
    };
    this.responseHelper = {
      record: (res) => res.data,
      records: (res) => res.data.records,
      numPages: (res, limit) => res.data.metadata.numTotalPages,
      numResponseRecords: (res) => res.data.metadata.numResponseRecords,
      numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
      numTotalRecords: (res) => res.data.metadata.numTotalRecords
    };
    this.url = `${getHHApiDomain()}/api/baseball/v1/players`;
  }
}

/************************************************************************************************
* Subjects
************************************************************************************************/

class DLSubjectsOptions002 extends DLBaseOptions002 {
  constructor(id) {
    super(id);
    this.descriptions.home = 'View subjects from the <a href="https://openlibrary.org/developers">Open Library API</a>.';
    this.queryParams.fields.default = '*';
    this.queryParams.filter.name = 'q';
    this.queryParams.filter.none = '*';
    this.queryParams.filter.default = 'women';
    this.queryParams.order.name = 'sort';
    this.queryParams.page.name = 'offset';
    this.recordIdField = 'key';
    this.recordTitle = { fields: ['name'], format: (f, r) => r[f[0]] };
    this.responseHelper = {
      record: (res) => res.data,
      records: (res) => res.data.docs,
      numPages: (res, limit) => Math.ceil(res.data.numFound / limit),
      numResponseRecords: (res) => res.data.docs.length,
      numMatchedRecords: (res) => res.data.numFound
    };
    this.urls = {
      getRecord: (id) => `https://openlibrary.org${id}.json`,
      getRecords: `https://openlibrary.org/search/subjects.json`
    };
  }
}

/************************************************************************************************
* Teams
************************************************************************************************/

class DLTeamsOptions002 extends DLBaseOptions002 {
  constructor(id) {
    super(id);
    this.descriptions.home = 'View baseball team records in the <a href="https://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Dataset</a>.';
    this.parity.get.value = true;
    this.parity.post.value = true;
    this.recordIdField = 'ID';
    this.recordTitle = {
      fields: ['name', 'yearID'],
      format: (f, r) => `${r[f[0]]} (${r[f[1]]})`
    },
      this.responseHelper = {
        record: (res) => res.data,
        records: (res) => res.data.records,
        numPages: (res, limit) => res.data.metadata.numTotalPages,
        numResponseRecords: (res) => res.data.metadata.numResponseRecords,
        numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
        numTotalRecords: (res) => res.data.metadata.numTotalRecords
      };
    this.url = `${getHHApiDomain()}/api/baseball/v1/teams`;
  }
}

/************************************************************************************************
* Trees
************************************************************************************************/

class DLTreesOptions002 extends DLBaseOptions002 {
  constructor(id) {
    super(id);
    this.auths = {
      deleteRecord: window.getBearerToken,
      patchRecord: window.getBearerToken,
      postRecord: window.getBearerToken
    };
    this.colWidths.records.value = 'medium';
    this.descriptions.home = 'This HHDataList instance interacts with a REST API that provides access to a small dataset of famous tree records.';
    this.fieldDefinitions = {
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
    };
    // this.methods = {
    //   deleteRecord: () => { reportWarning('Cannot Delete Record', 'This feature is disabled for this instance.'); },
    //   patchRecord: () => { reportWarning('Cannot Modify Record Field', 'This feature is disabled for this instance.'); },
    //   postRecord: () => { reportWarning('Cannot Create Record', 'This feature is disabled for this instance.'); }
    // };
    this.parity.get.value = true;
    this.parity.post.value = true;
    this.populate = (fieldName) => this.popValues.get(fieldName);
    this.queryParams.filter.placeholder = 'name like "%tree%" and country like "AUS"';
    this.queryParams.order.default = 'name asc';
    this.recordTitle = { fields: ['name'], format: (f, r) => r[f[0]] };
    this.responseHelper = {
      record: (res) => res.data,
      records: (res) => res.data.records,
      numPages: (res, limit) => res.data.metadata.numTotalPages,
      numResponseRecords: (res) => res.data.metadata.numResponseRecords,
      numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
      numTotalRecords: (res) => res.data.metadata.numTotalRecords
    };
    this.url = `${getHHApiDomain()}/api/famous/v1/trees`;
  }

  popValues = new Map()
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
}

/************************************************************************************************
* Works
************************************************************************************************/

class DLWorksOptions002 extends DLBaseOptions002 {
  constructor(id) {
    super(id);
    this.descriptions.home = 'View works from the <a href="https://openlibrary.org/developers">Open Library API</a>.';
    this.fieldDefinitions = {
      transform: [
        { label: 'ID', fieldName: 'key', isChecked: false },
        { label: 'Title', fieldName: 'title', isChecked: true, colWidth: 'medium' },
        {
          label: 'Authors', fieldName: 'authors', isChecked: true, colWidth: 'medium',
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
        {
          label: 'Description', fieldName: 'description', isChecked: true, colWidth: 'wide',
          transformer: (v) => typeof v === 'object' ? v.value : v,
          display: { type: 'text', rows: 3 },
        },
        { label: 'Subjects', fieldName: 'subjects', isChecked: true, colWidth: 'medium' },
        { label: 'Subject People', fieldName: 'subject_people', isChecked: true, colWidth: 'medium' },
        {
          label: 'First Sentence', fieldName: 'first_sentence', isChecked: true, colWidth: 'wide',
          transformer: (v) => v.value,
          display: { type: 'text' }
        }
      ]
    };
    this.queryParams.fields.default = '*';
    this.queryParams.filter.name = 'q';
    this.queryParams.filter.none = '*';
    this.queryParams.filter.default = 'snow original';
    this.queryParams.order.name = 'sort';
    this.queryParams.page.name = 'page';
    this.recordIdField = 'key';
    this.recordTitle = { fields: ['title'], format: (f, r) => r[f[0]] };
    this.responseHelper = {
      record: (res) => res.data,
      records: (res) => res.data.docs,
      numPages: (res, limit) => Math.ceil(res.data.numFound / limit),
      numResponseRecords: (res) => res.data.docs.length,
      numMatchedRecords: (res) => res.data.numFound
    };
    this.urls = {
      getRecord: (id) => `https://openlibrary.org${id}.json`,
      getRecords: `https://openlibrary.org/search.json`
    };
  }
}
