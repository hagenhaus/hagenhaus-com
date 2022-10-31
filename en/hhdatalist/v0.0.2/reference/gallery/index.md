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
    fieldColWidth: 'narrow',
    id: 'baseball-players-datalist',
    inclusions: {
      recordsAreNumberedCbx: true,
      showTabDescriptionsCbx: true
    },
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
      limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 5
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
    // reportRecordFields: (recordFields) => {
    //   recordFields.forEach(field => {
    //     const t1 = JSON.stringify(field);
    //     const t2 = t1.replace(/"([^"]+)":/g, '$1:');
    //     const t3 = t2.replace(/"/g, "'");      
    //     console.log(t3);
    //   });
    // },
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
      fields: 'Specify fields to appear in expanded records.',
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

## Teams/Year

<div id="baseball-teams-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'baseball-teams-datalist',
    queryParams: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order' },
      page: { name: 'page' },
      limit: { name: 'limit' }
    },
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
    recordTitle: {
      fields: ['name','yearID'],
      format: (f, r) => `${r[f[0]]} (${r[f[1]]})`
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
    url: `${getDomain()}/api/baseball/v1/teams`,
  });
</script>

# Open Library

## Authors

<div id="open-library-authors-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'open-library-authors-datalist',
    missingFields: {
      include: true,
      placeholder: ''
    },
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'q', none: '*', default: 'name=john'},
      order: { name: 'sort' }, 
      offset: { name: 'offset' },
      limit: { name: 'limit', choices: [1, 5, 10, 20, 50, 100], default: 1 }
    },
    recordColWidth: 'narrow',
    recordFieldValue: 'value',
    recordFields: [
      { name: "key", label: "Key", isChecked: false, isEditable: false, isRequired: false, colWidth: 'medium' }, 
      { name: "type", label: "Type", isChecked: false, isEditable: false, isRequired: false, colWidth: 'medium', get: (value) => value.key }, 
      { name:"name", label:"Name", isChecked:true, isEditable:false, colWidth: 'medium'},
      { name:"alternate_names", label:"Alternate Names", isChecked:true, isEditable:false, colWidth: 'medium'},
      { name:"personal_name", label:"Personal Name", isChecked:false, isEditable:false, colWidth: 'medium'},
      { name:"title", label:"Title/Status", isChecked:false, isEditable:false, colWidth: 'medium'},
      { name:"birth_date", label:"Birth Date", isChecked:true, isEditable:false, colWidth: 'medium', get: (value) => 
        new Date(value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' })
      },
      { name:"death_date", label:"Death Date", isChecked:true, isEditable:false, colWidth: 'medium', get: (value) => 
        new Date(value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' })
      },
      { name:"bio", label:"Biography", isChecked:true, isEditable:false, colWidth: 'wide', subtype: { name: "text" }, get: (value) => {
        if (typeof value === 'object') {
          return value.value;
        } else {
          return value;
        }
      }}, 
      { name:"wikipedia", label:"Wikipedia", isChecked:true, isEditable:false, colWidth: 'medium', subtype: { name: "link" }, get: (value) => {
        // return value.length ? 'Wikipedia'.link(value) : value;
        return {url: value, title: 'Wikipedia'};
      }},
      { name:"photos", label:"Photos", isChecked:true, isEditable:false, colWidth: 'medium'},
      { name:"source_records", label:"Source Records", isChecked:true, isEditable:false, colWidth: 'medium'},
      { name:"remote_ids", label:"Remote IDs", isChecked:true, isEditable:false, colWidth: 'medium', get: (value) => {
        const a = [];
        for (const property in value) {
          a.push(`${property}:${value[property]}`);
        }
        return a;
      }},
      { name:"photograph", label:"Photograph", isChecked:false, isEditable:false},
      { name:"revision", label:"Revision", isChecked:false, isEditable:false},
      { name: "created", label: "Created", isChecked: false, isEditable: false, isRequired: false, get: (value) => 
        new Date(value.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
      },
      { name: "last_modified", label: "Last Modified", isChecked: false, isEditable: false, isRequired: false, get: (value) => 
        new Date(value.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
      },
    ],
    recordIdField: 'key',
    recordsAreExpanded: true,
    recordTitle: {
      fields: ['name'],
      format: (f, r) => `${r[f[0]]}`
    },
    reportError: (title, detail) => { reportError(title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      recordsArray: (data) => data.docs,
      numPages: (data, limit) => Math.ceil(data.numFound / limit),
      numResponseRecords: (data) => data.docs.length,
      numMatchedRecords: (data) => data.numFound
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
    id: 'open-library-subjects-datalist',
    missingFields: {
      include: true,
      placeholder: ''
    },
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'q', none: '*', default: 'women' },
      order: { name: 'sort' },
      offset: { name: 'offset' },
      limit: { name: 'limit', choices: [1, 5, 10, 20, 50, 100], default: 5 }
    },
    recordFields: [
      { name:"key", label:"Key", isChecked:false, isEditable:false, colWidth: 'medium'},
      { name:"subject_type", label:"Type", isChecked:false, isEditable:false, colWidth: 'medium'},
      { name:"name", label:"Subject Name", isChecked:true, isEditable:false, colWidth: 'medium'},
      { name:"work_count", label:"Number of Works", isChecked:true, isEditable:false, colWidth: 'medium'},
      { name:"works", label:"Sample Works", isChecked:true, isEditable:false, colWidth: 'wide', get: (value) => {
        const a = [];
        for (let i of value) { a.push(i.title); }
        return a;
      }}
    ],
    recordIdField: 'key',
    recordsAreExpanded: false,
    recordTitle: {
      fields: ['name'],
      format: (f, r) => `${r[f[0]]}`
    },
    reportError: (title, detail) => { reportError(title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      recordsArray: (data) => data.docs,
      numPages: (data, limit) => Math.ceil(data.numFound / limit),
      numResponseRecords: (data) => data.docs.length,
      numMatchedRecords: (data) => data.numFound
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
    controlsAreSmall: false,
    fieldColWidth: 'narrow',
    id: 'open-library-works-datalist',
    missingFields: {
      include: true,
      placeholder: ''
    },
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'q', none: '*', default: 'snow' }, // Snow Falling on Cedars, On San Piedro
      order: { name: 'sort' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 3, 5, 10, 20, 50, 100], default: 5 }
    },
    recordColWidth: 'medium',
    recordFieldValue: 'value',
    recordFields: [
      { name: "key", label: "Key", isChecked: false, isEditable: false, isRequired: false }, 
      // { name: "type", label: "Type", isChecked: false, isEditable: false, isRequired: false, get: (value) => value.key }, 
      { name: "title", label: "Title", isChecked: true, isEditable: true, isRequired: true, colWidth: 'wide' }, 
      // { name: "subtitle", label: "Subtitle", isChecked: false, isEditable: true, isRequired: false, colWidth: 'wide' }, 
      // { name: "authors", label: "Authors", isChecked: true, isEditable: false, isRequired: false, subtype: { name: "endpoint", field: (data) => data.name }, get: (value) => {
      //   const a = [];
      //   for (let i of value) { a.push(i.author.key); }
      //   return a;
      // }},
      // { name: "first_publish_date", label: "First Published Date", isChecked: true, isEditable: true, isRequired: false }, 
      // { name: "description", label: "Description", isChecked: true, isEditable: true, isRequired: false, colWidth: 'wide', subtype: {name: "text", rows: 4 }, get: (value) => {
      //   if (typeof value === 'object') {
      //     return value.value;
      //   } else {
      //     return value;
      //   }
      // }},
      // { name: "first_sentence", label: "First Sentence", isChecked: true, isEditable: true, isRequired: false, colWidth: 'wide', subtype: {name: "text" }, get: (value) => value.value }, 
      // { name: "excerpts", label: "Excerpts", isChecked: false, isEditable: false, isRequired: false, colWidth: 'wide', subtype: {name: "text" }, get: (value) => {
      //   const a = [];
      //   for (let i of value) { a.push(i.excerpt); }
      //   return a;
      // }},
      // { name: "subjects", label: "Subjects", isChecked: true, isEditable: false, isRequired: false}, 
      // { name: "subject_places", label: "Subject Places", isChecked: true, isEditable: false, isRequired: false},
      // { name: "subject_people", label: "Subject People", isChecked: true, isEditable: false, isRequired: false}, 
      // { name: "subject_times", label: "Subject Times", isChecked: true, isEditable: false, isRequired: false },
      // { name: "covers", label: "Covers", isChecked: true, isEditable: false, isRequired: false }, 
      // { name: "links", label: "Links", isChecked: true, isEditable: false, isRequired: false, subtype: {name: "link" }, get: (value) => {
      //   const a = [];
      //   for (let i of value) { a.push({url: i.url, title: i.title}); }
      //   return a;
      // }}, 
      // { name: "dewey_number", label: "Dewey Number", isChecked: false, isEditable: false, isRequired: false, colWidth: 'narrow' }, 
      // { name: "revision", label: "Revision", isChecked: false, isEditable: false, isRequired: false, colWidth: 'narrow' }, 
      // { name: "created", label: "Created", isChecked: false, isEditable: false, isRequired: false, colWidth: 'narrow', get: (value) => 
      //   new Date(value.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
      // },
      // { name: "last_modified", label: "Last Modified", isChecked: false, isEditable: false, isRequired: false, colWidth: 'narrow', get: (value) => 
      //   new Date(value.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
      // }
    ],
    recordIdField: 'key',
    recordsAreExpanded: false,
    recordTitle: {
      fields: ['title'],
      format: (f, r) => `${r[f[0]]}`
    },
    reportError: (title, detail) => { reportError(title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      recordsArray: (data) => data.docs,
      numPages: (data, limit) => Math.ceil(data.numFound / limit),
      numResponseRecords: (data) => data.docs.length,
      numMatchedRecords: (data) => data.numFound
    },
    themeName: 'Wheatgerm',
    urls: {
      getRecord: (id) => `https://openlibrary.org${id}.json`,
      getRecords: `https://openlibrary.org/search.json`
    }
  });
</script>

