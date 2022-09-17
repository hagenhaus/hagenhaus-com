---
author: Matt Hagen
bookTitle: HHDataList <span style="font-weight:normal;font-size:86%;">v0.0.1</span>
hhdatalist: v0.0.1
menuItem: mi-hhdatalist
---

# HHDataList

<span style="font-weight:500;">HHDataList</span> is a website UI component that interacts with REST APIs. The HHDataList below, for example, is configured to interact with the [Hagenhaus REST API](/en/hhrestapi/) which hosts the [Lahman Baseball Dataset](https://www.seanlahman.com/baseball-archive/statistics/):

<div id="baseball-players-datalist" class="hh-data-list mt-4"></div>

<script>
  new HHDataList({
    confirm: confirm,
    controlsAreSmall: false,
    filterById: (idField, idValue) => `${idField} like "${idValue}"`,
    id: 'baseball-players-datalist',
    queryParameters: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order' },
      pageNumber: { name: 'page' },
      pageSize: { name: 'limit' }
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
    showTabDescriptions: true,
    tabDescriptions: {
      home: 'Manage baseball player records in the <a href="https://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Dataset</a>.',
      search: 'Filter and order records. <a href="/en/docs/rest-api/query-parameters/" target="_blank">Learn more</a>.',
      fields: 'Specify fields to appear in records.',
      new: 'Create a new record.',
      created: 'The new record is also on the records list.',
      config: 'Set additional configuration parameters.'
    },
    url: 'https://hagenhaus.com:3002/api/baseball/v1/players',
  });
</script>

You can incorporate HHDataList instances into your website and point them at REST APIs of your choosing. First, familiarize yourself with the [User Interface](/en/hhdatalist/v0.0.1/user-interface/), and then see the [Tutorial](/en/hhdatalist/v0.0.1/tutorial/).

<!-- ## Player Stats

<div id="baseball-player-stats-datalist" class="hh-data-list mt-4"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'baseball-player-stats-datalist',
    recordIdField: 'id',
    recordTitleFields: ['yearid', 'nameFirst', 'nameLast', 'birthYear'],
    recordTitleFormat: (f, r) => `${r[f[0]]} stats for ${r[f[1]]} ${r[f[2]]} (b. ${r[f[3]] ? r[f[3]] : 'unknown'})`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    recordsAreNumbered: false,
    showTabDescriptions: true,
    tabDescriptions: {
      home: 'Baseball Player stats from the <a href="https://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Dataset</a>. Each record represents stats for one player for one season.'
    },
    theme: {
      name: 'Wheatgerm'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#fcf5e8',
      color3: '#f9ebd2',
      color4: '#f6e2bb',
      color5: '#e29d1d',
      color6: '#875e12'
    },
    url: 'https://hagenhaus.com:3002/api/baseball/v1/player-stats'
  });
</script> -->