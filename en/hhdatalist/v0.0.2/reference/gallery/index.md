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
    recordFields: [
      { name: 'playerID', label: 'Player ID', isChecked: false },
      { name: 'nameFirst', label: 'First Name', isEditable: true, isRequired: true },
      { name: 'nameLast', label: 'Last Name', isEditable: true, isRequired: true },
      { name: 'nameGiven', label: 'Given Name', isChecked: false, isEditable: true, 
        transform: (v) => v === null ? '' : v
      },
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
      record: (res) => res.data,
      records: (res) => res.data.records,
      numPages: (res, limit) => res.data.metadata.numTotalPages,
      numResponseRecords: (res) => res.data.metadata.numResponseRecords,
      numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
      numTotalRecords: (res) => res.data.metadata.numTotalRecords
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
      record: (res) => res.data,
      records: (res) => res.data.records,
      numPages: (res, limit) => res.data.metadata.numTotalPages,
      numResponseRecords: (res) => res.data.metadata.numResponseRecords,
      numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
      numTotalRecords: (res) => res.data.metadata.numTotalRecords
    },
    url: `${getDomain()}/api/baseball/v1/teams`,
  });
</script>

# Famous Data

## Famous Trees

<div id="famous-trees-datalist" class="hh-data-list mt-4"></div>

<script>
  new HHDataList({
    controlsAreSmall: false,
    fieldColWidth: 'narrow',
    id: 'famous-trees-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'filter' },
      order: { name: 'order', default: 'name' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 1 }
    },
    recordColWidth: 'medium',
    recordFieldAnalyzer: { 
      aspect: 'value',
      isTransformed: true 
    },
    recordFields: [
      { name: 'id', label: 'ID', isChecked: false }, 
      { name: 'name', label: 'Name' }, 
      { name: 'species', label: 'Species',
        transform: (v) => ({ url: v.link, title: v.text }),
        display: { type: 'link' }
      }, 
      { name: 'description', label: 'Description', colWidth: 'wide', 
        display: { type: 'text', rows: 3 }
      }, 
      { name: 'city', label: 'Nearby City' },
      { name: 'country', label: 'Country',
        transform: async (v) => (await HHDataList.get(`http://localhost:8081/api/devportals/v1/countries/${v}`)).data.name
      },
      { name: 'coordinates', label: 'Latitude, Longitude', 
        transform: (v) => ({ 
          url: `https://www.google.com/maps/search/?api=1&query=${v.lat},${v.long}`, 
          title: `${v.lat}, ${v.long}` 
        }),
        display: { type: 'link' }
      }, 
      { name: 'germinationYear', label: 'Age (years)',
        transform: (v) => `${ (new Date().getFullYear() - v).toLocaleString() }`
      }, 
      { name: 'height', label: 'Height (meters)', 
        transform: (v) => Math.round(v * 0.3048)
      }, 
      { name: 'links', label: 'Links', 
        transform: (v) => {
          const a = [];
          for (let i of v) { a.push({ url: i.link, title: i.text }); }
          return a;
        },
        display: { type: 'link' }
      }
    ],
    recordIdField: 'id',
    recordParity: true,
    recordsAreExpanded: true,
    recordsAreNumbered: true,
    recordTitle: {
      fields: ['name'],
      format: (f, r) => `${r[f[0]]}`
    },
    reportError: (title, detail) => { reportError(title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      record: (res) => res.data,
      records: (res) => res.data.records,
      numPages: (res, limit) => res.data.metadata.numTotalPages,
      numResponseRecords: (res) => res.data.metadata.numResponseRecords,
      numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
      numTotalRecords: (res) => res.data.metadata.numTotalRecords
    },
    // reportTheme: (theme) => { 
    //   const t1 = JSON.stringify(theme, null, 2);
    //   const t2 = t1.replace(/"([^"]+)":/g, '$1:');
    //   const t3 = t2.replace(/"/g, "'");      
    //   console.log(t3);
    // },
    // themeFromPaletteName: {
    //   paletteName: 'Wheatgerm',
    //   newThemeName: 'Wheatgerm'
    // },
    themeName: 'Thistle',
    url: `${getDomain()}/api/famous/v1/trees`,
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
      filter: { name: 'q', none: '*', default: 'john'},
      order: { name: 'sort' }, 
      offset: { name: 'offset' },
      limit: { name: 'limit', choices: [1, 5, 10, 20, 50, 100], default: 1 }
    },
    recordColWidth: 'narrow',
    recordFields: [
      { name: "key", label: "Key", isChecked: false, colWidth: 'medium' }, 
      { name: "type", label: "Type", isChecked: false, colWidth: 'medium', 
        transform: (v) => v.key 
      }, 
      { name:"name", label:"Name", colWidth: 'medium'},
      { name:"alternate_names", label:"Alternate Names", colWidth: 'medium'},
      { name:"personal_name", label:"Personal Name", isChecked:false, colWidth: 'medium'},
      { name:"title", label:"Title/Status", isChecked:false, colWidth: 'medium'},
      { name:"birth_date", label:"Birth Date", colWidth: 'medium', 
        transform: (v) => 
        new Date(v).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' })
      },
      { name:"death_date", label:"Death Date", colWidth: 'medium', 
        transform: (v) => 
        new Date(v).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' })
      },
      { name:"bio", label:"Biography", colWidth: 'wide', 
        transform: (v) => typeof v === 'object' ? v.value : v,
        display: { type: 'text' }
      }, 
      { name:"wikipedia", label:"Wikipedia", colWidth: 'medium', 
        transform: (v) => ( {url: v, title: 'Wikipedia'} ), 
        display: { type: 'link' }
      },
      { name:"photos", label:"Photos", colWidth: 'medium'},
      { name:"source_records", label:"Source Records", colWidth: 'medium'},
      { name:"remote_ids", label:"Remote IDs", colWidth: 'medium', 
        transform: (v) => {
          const a = [];
          for (const property in v) { a.push(`${property}:${v[property]}`); }
          return a;
        }
      },
      { name:"photograph", label:"Photograph", isChecked:false},
      { name:"revision", label:"Revision", isChecked:false},
      { name: "created", label: "Created", isChecked: false, 
        transform: (v) => 
          new Date(v.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
      },
      { name: "last_modified", label: "Last Modified", isChecked: false, 
        transform: (v) => 
          new Date(v.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
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
      record: (res) => res.data,
      records: (res) => res.data.docs,
      numPages: (res, limit) => Math.ceil(res.data.numFound / limit),
      numResponseRecords: (res) => res.data.docs.length,
      numMatchedRecords: (res) => res.data.numFound
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
      { name:"key", label:"Key", isChecked:false, colWidth: 'medium'},
      { name:"subject_type", label:"Type", isChecked:false, colWidth: 'medium'},
      { name:"name", label:"Subject Name", colWidth: 'medium'},
      { name:"work_count", label:"Number of Works", colWidth: 'medium'},
      { name:"works", label:"Sample Works", colWidth: 'wide', 
        transform: (v) => {
        const a = [];
        for (let i of v) { a.push(i.title); }
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
      record: (res) => res.data,
      records: (res) => res.data.docs,
      numPages: (res, limit) => Math.ceil(res.data.numFound / limit),
      numResponseRecords: (res) => res.data.docs.length,
      numMatchedRecords: (res) => res.data.numFound
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
      filter: { name: 'q', none: '*', default: 'huckleberry' }, // Snow Falling on Cedars, On San Piedro
      order: { name: 'sort' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 3, 5, 10, 20, 50, 100], default: 1 }
    },
    recordColWidth: 'medium',
    recordFields: [
      { name: "key", label: "Key", isChecked: false }, 
      { name: "type", label: "Type", isChecked: false, 
        transform: (v) => v.key 
      }, 
      { name: "title", label: "Title", isEditable: true, isRequired: true, colWidth: 'wide' }, 
      { name: "subtitle", label: "Subtitle", isChecked: false, isEditable: true, colWidth: 'wide' }, 
      { name: "authors", label: "Authors", 
        transform: async (v) => {
          let responses = [];
          for (let i of v) {
            responses.push(HHDataList.get(`https://openlibrary.org${i.author.key}.json`));
          }
          await Promise.all(responses);
          let names = [];
          responses.forEach(p => {
            p.then(res => {
              names.push(res.data.name);
            });
          });
          return names;
        }
      },
      { name: "first_publish_date", label: "First Published Date", isEditable: true }, 
      { name: "description", label: "Description", isEditable: true, colWidth: 'wide', 
        transform: (v) => typeof v === 'object' ? v.value : v,
        display: {type: 'text', rows: 4 }, 
      },
      { name: "first_sentence", label: "First Sentence", isEditable: true, colWidth: 'wide', 
        transform: (v) => v.value,
        display: {type: 'text' }
      }, 
      { name: "excerpts", label: "Excerpt", isChecked: false, colWidth: 'wide', 
        transform: (v) => {
          if(Array.isArray(v) && v.length && typeof v[0] === 'object' && 'excerpt' in v[0]) {
            if(typeof v[0].excerpt === 'string') {
              return v[0].excerpt;
            } else if (typeof v[0].excerpt === 'object' && 'value' in v[0].excerpt) {
              return v[0].excerpt.value;
            } else {
              return '';
            }
          } else {
            return '';
          }
        },
        display: {type: 'text' }
      },
      { name: "subjects", label: "Subjects"}, 
      { name: "subject_places", label: "Subject Places"},
      { name: "subject_people", label: "Subject People"}, 
      { name: "subject_times", label: "Subject Times" },
      { name: "covers", label: "Covers" }, 
      { name: "links", label: "Links", 
        display: {type: 'link' }
      }, 
      { name: "dewey_number", label: "Dewey Number", isChecked: false, colWidth: 'narrow' }, 
      { name: "revision", label: "Revision", isChecked: false, colWidth: 'narrow' }, 
      { name: "created", label: "Created", isChecked: false, colWidth: 'narrow', 
        transform: (v) => 
          new Date(v.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
      },
      { name: "last_modified", label: "Last Modified", isChecked: false, colWidth: 'narrow', 
        transform: (v) => 
          new Date(v.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
      }
    ],
    recordIdField: 'key',
    recordsAreExpanded: true,
    recordTitle: {
      fields: ['title'],
      format: (f, r) => `${r[f[0]]}`
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
      record: (res) => res.data,
      records: (res) => res.data.docs,
      numPages: (res, limit) => Math.ceil(res.data.numFound / limit),
      numResponseRecords: (res) => res.data.docs.length,
      numMatchedRecords: (res) => res.data.numFound
    },
    themeName: 'Wheatgerm',
    urls: {
      getRecord: (id) => `https://openlibrary.org${id}.json`,
      getRecords: `https://openlibrary.org/search.json`
    }
  });
</script>
