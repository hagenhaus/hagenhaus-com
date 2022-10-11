# Gallery

<script>
  // HHDataList.setGlobalTheme('Wheatgerm');
</script>

# Baseball

## Players

<div id="baseball-players-datalist" class="hh-data-list mt-4"></div>

<script>
  new HHDataList({
    confirm: confirm,
    controlsAreSmall: false,
    fieldColumnCount: 4,
    filterById: (idField, idValue) => `${idField} like "${idValue}"`,
    id: 'baseball-players-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'filter', default: 'birthyear is not null', placeholder: 'birthyear is not null and namefirst like "John"' },
      order: { name: 'order', default: 'birthyear desc', placeholder: 'birthyear desc, namefirst asc' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [5, 10, 15, 20, 50, 100], default: 5
      }
    },
    recordColumnCount: 4,
    recordFields: [
      { name: 'playerID', label: 'Player ID', isChecked: false },
      { name: 'nameFirst', label: 'First Name', isEditable: true, isRequired: true },
      { name: 'nameLast', label: 'Last Name', isEditable: true, isRequired: true },
      { name: 'nameGiven', label: 'Given Name', isChecked: false, isEditable: true },
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
    recordTitleFields: ['nameFirst', 'nameLast', 'birthYear'],
    recordTitleFormat: (f, r) => `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      numPages: (data, limit) => data.metadata.numTotalPages,
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

## Teams/Year

<div id="baseball-teams-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    fieldColumnCount: 4,
    id: 'baseball-teams-datalist',
    queryParams: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order' },
      page: { name: 'page' },
      limit: { name: 'limit' }
    },
    recordColumnCount: 4,
    recordFields: [
      { name: 'ID', label: 'ID', isChecked: false },
      { name: 'yearID', label: 'Year' },
      { name: 'lgID', label: 'League ID' },
      { name: 'teamID', label: 'Team ID', isChecked: false },
      { name: 'franchID', label: 'Franchise ID', isChecked: false },
      { name: 'divID', label: 'Division ID', isChecked: false },
      { name: 'teamRank', label: 'Team Rank' },
      { name: 'G', label: 'Games' },
      { name: 'Ghome', label: 'Home Games' },
      { name: 'W', label: 'Wins' },
      { name: 'L', label: 'Losses' },
      { name: 'DivWin', label: 'Division Winner' },
      { name: 'WCWin', label: 'Wildcard Winner', isChecked: false },
      { name: 'LgWin', label: 'League Champion' },
      { name: 'WSWin', label: 'World Series Winner' },
      { name: 'R', label: 'Runs' },
      { name: 'AB', label: 'At Bats' },
      { name: 'H', label: 'Hits' },
      { name: '2B', label: 'Doubles' },
      { name: '3B', label: 'Triples' },
      { name: 'HR', label: 'Homeruns' },
      { name: 'BB', label: 'Walks' },
      { name: 'SO', label: 'Strikeouts' },
      { name: 'SB', label: 'Steals' },
      { name: 'CS', label: 'Caught Stealing' },
      { name: 'HBP', label: 'Hit By Pitch' },
      { name: 'SF', label: 'Sacrifice Flies' }
    ],
    recordIdField: 'ID',
    recordParity: true,
    recordTitleFields: ['name','yearID'],
    recordTitleFormat: (f, r) => `${r[f[0]]} (${r[f[1]]})`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      numPages: (data, limit) => data.metadata.numTotalPages,
      numResponseRecords: (data) => data.metadata.numResponseRecords,
      numMatchedRecords: (data) => data.metadata.numFilteredRecords,
      numTotalRecords: (data) => data.metadata.numTotalRecords,
      recordsArray: (data) => data.records
    },
    url: `${getDomain()}/api/baseball/v1/teams`,
  });
</script>

# Open Library

## Authors

<div id="open-library-authors-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    fieldColumnCount: 4,
    id: 'open-library-authors-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'q', default: 'name=april' },
      order: { name: 'sort' }, 
      offset: { name: 'offset' },
      limit: { name: 'limit' }
    },
    recordColumnCount: 1,
    recordFieldExplorer: {
      showType: false,
      stringifyObjects: true
    },
    // recordFields: [
    //   { name: 'key', label: 'Key' },
    //   { name: 'name', label: 'Name' },
    //   { name: 'type', label: 'Type' },
    //   { name: 'birth_date', label: 'Birth Date' }
    // ],
    recordIdField: 'key',
    recordTitleFields: ['name'],
    recordTitleFormat: (f, r) => `${r[f[0]]}`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      numPages: (data, limit) => Math.ceil(data.numFound / limit),
      numResponseRecords: (data) => data.docs.length,
      numMatchedRecords: (data) => data.numFound,
      recordsArray: (data) => data.docs
    },
    themeName: 'Wheatgerm',
    urls: {
      getRecord: (id) => `https://openlibrary.org/authors/${id}.json`,
      getRecords: `https://openlibrary.org/search/authors.json`
    }
  });
</script>

## Subjects

<div id="open-library-subjects-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    fieldColumnCount: 4,
    id: 'open-library-subjects-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'q', default: '*' },
      order: { name: 'sort' },
      offset: { name: 'offset' },
      limit: { name: 'limit' }
    },
    recordColumnCount: 1,
    recordFieldExplorer: {
      showType: false,
      stringifyObjects: true
    },
    // recordFields: [
    //   { name: 'key', label: 'Key' },
    //   { name: 'name', label: 'Name' },
    //   { name: 'type', label: 'Type' },
    //   { name: 'count', label: 'Assoc Works'}
    // ],
    recordIdField: 'key',
    recordTitleFields: ['name'],
    recordTitleFormat: (f, r) => `${r[f[0]]}`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      numPages: (data, limit) => Math.ceil(data.numFound / limit),
      numResponseRecords: (data) => data.docs.length,
      numMatchedRecords: (data) => data.numFound,
      recordsArray: (data) => data.docs
    },
    themeName: 'Wheatgerm',
    urls: {
      getRecord: (id) => `https://openlibrary.org${id}.json`,
      getRecords: `https://openlibrary.org/search/subjects.json`
    }
  });
</script>

## Works

<div id="open-library-works-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    fieldColumnCount: 4,
    id: 'open-library-works-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'q', default: 'snow' }, // *
      order: { name: 'sort' },
      page: { name: 'page' },
      limit: { name: 'limit' }
    },
    recordColumnCount: 1,
    recordParity: false,
    recordFieldExplorer: {
      showType: false,
      stringifyObjects: true,
      // reportRecordFields: (recordFields) => {console.log(JSON.stringify(recordFields))}
    },
    recordFields: [
      { name: "key", label: "Key", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "title", label: "Title", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "authors", label: "Authors", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "type", label: "Type", isChecked: true, isEditable: false, isRequired: false, get: (value) => value.key }, 
      { name: "covers", label: "Covers", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "description", label: "Description", isChecked: true, isEditable: false, isRequired: false, get: (value) => value.value }, 
      { name: "first_sentence", label: "First Sentence", isChecked: true, isEditable: false, isRequired: false, get: (value) => value.value }, 
      { name: "subject_places", label: "Subject Places", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "first_publish_date", label: "First Published Date", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "subject_people", label: "Subject People", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "excerpts", label: "Excerpts", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "subjects", label: "Subjects", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "location", label: "Location", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "latest_revision", label: "Latest Revision", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "revision", label: "revision", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "created", label: "Created", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "last_modified", label: "Last Modified", isChecked: false, isEditable: false, isRequired: false }
    ],
    recordIdField: 'key',
    recordTitleFields: ['title'],
    recordTitleFormat: (f, r) => `${r[f[0]]}`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      numPages: (data, limit) => Math.ceil(data.numFound / limit),
      numResponseRecords: (data) => data.docs.length,
      numMatchedRecords: (data) => data.numFound,
      recordsArray: (data) => data.docs
    },
    themeName: 'Wheatgerm',
    urls: {
      getRecord: (id) => `https://openlibrary.org${id}.json`,
      getRecords: `https://openlibrary.org/search.json`
    }
  });
</script>
