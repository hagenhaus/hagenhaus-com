# Test

<div id="baseball-players-datalist" class="hh-data-list mt-4"></div>

<script>
  new HHDataList({
    confirm: confirm,
    controlsAreSmall: false,
    fieldColWidth: 'narrow',
    id: 'baseball-players-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { 
        name: 'filter', 
        default: 'playerid like "xyz%"', 
        // default: 'birthyear is not null and namefirst is not null and namelast is not null', 
        // default: 'birthyear is null',
        placeholder: 'birthyear is not null and namefirst like "John"' },
      order: { name: 'order', default: 'birthyear desc', placeholder: 'birthyear desc, namefirst asc' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 3
      }
    },
    recordColWidth: 'narrow',
    recordFieldValue: 'value',
    recordFields: [
      { name: 'playerID', label: 'Player ID', isChecked: false },
      { name: 'nameFirst', label: 'First Name', isEditable: true, isRequired: true },
      { name: 'nameLast', label: 'Last Name', isEditable: true, isRequired: true },
      { name: 'nameGiven', label: 'Given Name', isChecked: false, isEditable: true, subtype: { name: "input" }, get: (value) => {
        if (value === null) {
          return '';
        } else {
          return value;
        }
      }},
      { name: 'birthDay', label: 'Birth Day', isEditable: true },
      { name: 'birthMonth', label: 'Birth Month', isEditable: true },
      { name: 'birthYear', label: 'Birth Year', isEditable: true },
      { name: 'birthCity', label: 'Birth City', isEditable: true },
      { name: 'birthState', label: 'Birth State', isEditable: true },
      { name: 'birthCountry', label: 'Birth Country', isEditable: true },
      { name: 'deathDay', label: 'Death Day', isChecked: false, isEditable: true },
      { name: 'deathMonth', label: 'Death Month', isChecked: false, isEditable: true },
      { name: 'deathYear', label: 'Death Year', isChecked: false, isEditable: true },
      { name: 'deathCity', label: 'Death City', isChecked: false, isEditable: true },
      { name: 'deathState', label: 'Death State', isChecked: false, isEditable: true },
      { name: 'deathCountry', label: 'Death Country', isChecked: false, isEditable: true },
      { name: 'weight', label: 'Weight', isEditable: true },
      { name: 'height', label: 'Height', isEditable: true },
      { name: 'bats', label: 'Bats', isEditable: true },
      { name: 'throws', label: 'Throws', isEditable: true },
      { name: 'debut', label: 'Debut Date', isChecked: false, isEditable: true },
      { name: 'finalGame', label: 'Final Game Date', isChecked: false, isEditable: true },
      { name: 'retroID', label: 'retroID', isChecked: false, isEditable: true },
      { name: 'bbrefID', label: 'bbrefID', isChecked: false, isEditable: true },
    ],
    recordIdField: 'playerID',
    recordParity: true,
    recordsAreExpanded: false,
    recordsAreNumbered: true,
    recordTitle: {
      fields: ['nameFirst', 'nameLast', 'birthYear'],
      format: (f, r) => `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`
    },
    reportError: (title, detail) => { reportError(title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      recordsArray: (data) => data.records,
      numPages: (data, limit) => data.metadata.numTotalPages,
      numResponseRecords: (data) => data.metadata.numResponseRecords,
      numMatchedRecords: (data) => data.metadata.numFilteredRecords,
      numTotalRecords: (data) => data.metadata.numTotalRecords
    },
    showTabDescriptions: true,
    tabDescriptions: {
      home: 'Manage baseball player records in the <a href="https://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Dataset</a>.',
      search: 'Filter and order records. <a href="/en/docs/rest-api/query-parameters/" target="_blank">Learn more</a>.',
      fields: 'Specify fields to appear in records.',
      new: 'Create a new record.',
      created: 'This is the new record.',
      config: 'Set additional configuration parameters.'
    },
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