# Gallery

<script>
  HHDataList.setDefaultThemeName('silverberry');
</script>

# Baseball

## Players

<div id="baseball-players-datalist" class="hh-data-list mt-4"></div>

<script>
  new HHDataList({
    confirm: confirm,
    controlsAreSmall: false,
    filterById: (idField, idValue) => `${idField} like "${idValue}"`,
    id: 'baseball-players-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'filter', default: 'playerid like "xyz%"', placeholder: 'birthyear is not null and namefirst like "John"' },
      order: { name: 'order', default: 'birthyear desc', placeholder: 'birthyear desc, namefirst asc' },
      pageNumber: { name: 'page' },
      pageSize: { name: 'limit', choices: [5, 10, 15, 20, 50, 100], default: 5
      }
    },
    recordColumnCount: 4,
    recordFields: [
      { name: 'playerID', label: 'Player ID', isChecked: false },
      { name: 'nameFirst', label: 'First Name', isEditable: true, isRequired: true },
      { name: 'nameLast', label: 'Last Name', isEditable: true, isRequired: true },
      { name: 'nameGiven', label: 'Given Name', isEditable: true, isChecked: false },
      { name: 'birthDay', label: 'Birth Day', isEditable: true },
      { name: 'birthMonth', label: 'Birth Month', isEditable: true },
      { name: 'birthYear', label: 'Birth Year', isEditable: true },
      { name: 'birthCity', label: 'Birth City', isEditable: true },
      { name: 'birthState', label: 'Birth State', isEditable: true },
      { name: 'birthCountry', label: 'Birth Country', isEditable: true },
      { name: 'deathDay', label: 'Death Day', isEditable: true, isChecked: false },
      { name: 'deathMonth', label: 'Death Month', isEditable: true, isChecked: false },
      { name: 'deathYear', label: 'Death Year', isEditable: true, isChecked: false },
      { name: 'deathCity', label: 'Death City', isEditable: true, isChecked: false },
      { name: 'deathState', label: 'Death State', isEditable: true, isChecked: false },
      { name: 'deathCountry', label: 'Death Country', isEditable: true, isChecked: false },
      { name: 'weight', label: 'Weight', isEditable: true },
      { name: 'height', label: 'Height', isEditable: true },
      { name: 'bats', label: 'Bats', isEditable: true },
      { name: 'throws', label: 'Throws', isEditable: true },
      { name: 'debut', label: 'Debut Date', isEditable: true, isChecked: false },
      { name: 'finalGame', label: 'Final Game Date', isEditable: true, isChecked: false },
      { name: 'retroID', label: 'retroID', isEditable: true, isChecked: false },
      { name: 'bbrefID', label: 'bbrefID', isEditable: true, isChecked: false },    
    ],
    recordIdField: 'playerID',
    recordsAreExpanded: false,
    recordsAreNumbered: true,
    recordTitleFields: ['nameFirst', 'nameLast', 'birthYear'],
    recordTitleFormat: (f, r) => `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      numPages: (data, pageSize) => data.metadata.numTotalPages,
      numResponseRecords: (data) => data.metadata.numResponseRecords,
      numMatchedRecords: (data) => data.metadata.numFilteredRecords,
      numTotalRecords: (data) => data.metadata.numTotalRecords,
      recordsArray: (data) => data.records
    },
    showTabDescriptions: true,
    tabDescriptions: {
      home: 'Manage baseball player records in the <a href="https://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Dataset</a>.',
      search: 'Filter and order records. <a href="/en/docs/rest-api/query-parameters/" target="_blank">Learn more</a>.',
      fields: 'Specify fields to appear in records.',
      new: 'Create a new record.',
      created: 'The new record is also on the records list.',
      config: 'Set additional configuration parameters.'
    },
    // themeName: 'dodger blue',
    // themeDef: {
    //   base: 'firebrick'
    // },
    // url: `${getDomain()}/api/baseball/v1/players`,
    urls: {
      deleteRecord: (id) => `${getDomain()}/api/baseball/v1/players/${id}`,
      getRecord: (id) => `${getDomain()}/api/baseball/v1/players/${id}`,
      getRecords: `${getDomain()}/api/baseball/v1/players`,
      patchRecord: (id) => `${getDomain()}/api/baseball/v1/players/${id}`,
      postRecord: `${getDomain()}/api/baseball/v1/players`,
      putRecord: (id) => `${getDomain()}/api/baseball/v1/players/${id}`
    }
  });
</script>

## Teams

<div id="baseball-teams-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'baseball-teams-datalist',
    queryParams: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order' },
      pageNumber: { name: 'page' },
      pageSize: { name: 'limit' }
    },
    recordColumnCount: 4,
    recordIdField: 'ID',
    recordTitleFields: ['name','yearID'],
    recordTitleFormat: (f, r) => `${r[f[0]]} (${r[f[1]]})`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      numPages: (data, pageSize) => data.metadata.numTotalPages,
      numResponseRecords: (data) => data.metadata.numResponseRecords,
      numMatchedRecords: (data) => data.metadata.numFilteredRecords,
      numTotalRecords: (data) => data.metadata.numTotalRecords,
      recordsArray: (data) => data.records
    },
    url: `${getDomain()}/api/baseball/v1/teams`,
  });
</script>

<!-- # Open Library

https://openlibrary.org/works/OL27448W.json

<div id="open-library-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'open-library-datalist',
    queryParams: {
      fields: { name: 'fields' },
      filter: { name: 'q', value: 'snow' },
      order: { name: 'order' },
      pageNumber: { name: 'page' },
      pageSize: { name: 'limit' }
    },
    recordColumnCount: 4,
    recordIdField: 'key',
    recordTitleFields: ['title'],
    recordTitleFormat: (f, r) => `${r[f[0]]}`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      numPages: (data, pageSize) => Math.ceil(data.numFound / pageSize),
      numResponseRecords: (data) => data.docs.length,
      numMatchedRecords: (data) => data.numFound,
      recordsArray: (data) => data.docs
    },
    theme: 'Silverberry',
    url: 'https://openlibrary.org/search.json',
  });
</script> -->
