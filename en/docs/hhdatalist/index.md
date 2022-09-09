---
author: Matt Hagen
---

# HHDataList

<span style="font-weight:500;">HHDataList</span> is a website UI component that interacts with REST APIs. The data list below, for example, is configured to interact with the [Hagenhaus REST API](/en/docs/hhrestapi/) which exposes the [Lahman Baseball Dataset](https://www.seanlahman.com/baseball-archive/statistics/):

<div id="baseball-players-datalist" class="hh-data-list mt-4"></div>

<script>
  new HHDataList({
    confirm: confirm,
    controlsAreSmall: false,
    filter: 'birthYear is not null',
    // filter: 'playerID like "xyz%"',
    filterById: (idField, idValue) => `${idField} like "${idValue}"`,
    filterPlaceholder: 'birthYear is not null and nameLast like "b%"',
    id: 'baseball-players-datalist',
    limit: 5,
    limits: [5, 10, 20, 50, 100],
    order: 'birthYear desc',
    orderPlaceholder: 'birthYear asc, nameLast asc',
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
      home: 'Baseball Players from the <a href="https://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Dataset</a>. Each record represents one baseball player profile.',
      search: 'Filter and order records. <a href="/en/docs/rest-api/query-parameters/" target="_blank">Learn more</a>.',
      fields: 'Specify fields to appear in records.',
      new: 'Create a new record.',
      created: 'The new record is also on the records list.',
      config: 'Set additional configuration parameters.'
    },
    url: 'https://hagenhaus.com:3002/api/baseball/v1/players',
  });
</script>

You can incorporate HHDataList instances into your website and point them at REST APIs of your choosing. First, familiarize yourself with the user interface below, and then complete the [Tutorial](/en/docs/hhdatalist/tutorial/).

# User interface

The HHDataList user interface is divided into four rows, and the top-most row, the Tabs Row, is divided into five tabs:

<p><img src="rows-and-tabs.png" class="img-fluid d-block" width=800 height=527 loading="lazy"></p>

## Tabs row

The <span style="font-weight:500;">Tabs</span> row includes the Home, Search, Fields, New, and Config tabs.

## Counters row

 The <span style="font-weight:500;">Counters</span> row indicates current page number, total number of pages, number of records returned, number of records matched, and total number of records.

## Navigation row

The <span style="font-weight:500;">Navigation</span> row includes the Paginator for scrolling through records, the Limiter for controlling the maximum number of records to display at one time, and the Expander for controlling whether records are displayed in collapsed or expanded form. 

## Records row

The <span style="font-weight:500;">records</span> row displays collapsed or expanded records, and allows users to modify or delete records. Ultimately, HHDataList capabilities rely, to some degree, on the functionality and flexibility of the underlying API.

## Home tab

1. Paginator: forward, end, backward, beginning.
1. Limiter: change to 10.
1. Expander: set to true.
1. Paginator: forward, end, backward, beginning.

## Search tab

1. Filter: syntax is specific to implementation.
1. Order: also specific to implementation.

## Fields tab

1. Uncheck Bats and Throws.
1. Check playerID.
1. Paginator: forward.

## New tab

1. Click Create btn to show required fields.
1. Create a record: Casey Jones, March 14, 1863, Cayce KY USA.
1. Filter to find the new record.
1. Clear filter.

## Config tab

1. Un-number and re-number records.
1. Hide and show descriptions.
1. Explain the purpose of descriptions.


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