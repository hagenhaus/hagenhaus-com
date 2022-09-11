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

You can incorporate HHDataList instances into your website and point them at REST APIs of your choosing. First, familiarize yourself with the user interface below, and then see the [Guide](/en/docs/hhdatalist/guide/).

# User interface

The HHDataList user interface is divided into four rows, and the Tabs Row is divided into five tabs. Note that the Tabs row appears above the other three rows which remain visible as the user clicks from tab to tab:

<p><img src="rows-and-tabs.png" class="img-fluid d-block" width=800 height=527 loading="lazy"></p>

HHDataList [Options](/en/docs/hhdatalist/options/) influence the user interface. The *themes* option, for example, sets foreground, background, and border colors. And, the *queryParameters* option controls whether some UI tabs and/or items even appear. The sections below introduce the names of various UI items, and provide some sense of which options control which items. 

## Home tab

The Home tab, by default, is empty:

<p><img src="tabs-home.png" class="img-fluid d-block" width=700 loading="lazy"></p>

However, you can use the *tabDescriptions* option to display a description at the top of any tab:

<p><img src="tabs-home-description.png" class="img-fluid d-block" width=700 loading="lazy"></p>

## Search tab

The Search tab, by default, does not appear:

<p><img src="tabs-search-none.png" class="img-fluid d-block" width=700 loading="lazy"></p>

However, if you specify, in the *queryParameters* option, the *filter* property and/or the *order* property, then the Search tab appears with the Filter widget and/or the Order widget:

<p><img src="tabs-search.png" class="img-fluid d-block" width=700 loading="lazy"></p>

## Fields tab

The Fields tab, by default, does not appear:

<p><img src="tabs-fields-none.png" class="img-fluid d-block" width=700 loading="lazy"></p>

However, if you specify ...

<p><img src="tabs-fields.png" class="img-fluid d-block" width=700 loading="lazy"></p>

## New tab

The New tab ...

<p><img src="tabs-new.png" class="img-fluid d-block" width=700 loading="lazy"></p>

<p><img src="tabs-new-created.png" class="img-fluid d-block" width=700 loading="lazy"></p>

## Config tab

The Config tab ...

<p><img src="tabs-config.png" class="img-fluid d-block" width=700 loading="lazy"></p>

## Counters row

<p><img src="counters.png" class="img-fluid d-block" width=700 loading="lazy"></p>

## Navigation row

<p><img src="navigation.png" class="img-fluid d-block" width=700 loading="lazy"></p>

## Records row

<p><img src="record-collapsed.png" class="img-fluid d-block" width=700 loading="lazy"></p>

<p><img src="record-expanded.png" class="img-fluid d-block" width=700 loading="lazy"></p>

<p><img src="record-edit-mode.png" class="img-fluid d-block" width=700 loading="lazy"></p>

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