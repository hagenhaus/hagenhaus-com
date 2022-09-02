---
author: Matt Hagen
---

# HHDataList

<span style="font-weight:500;">HHDataList</span> is a highly configurable website UI component.  HHDataList instances enable users to interact with REST APIs. The instance below, for example, allows users to interact with the [Lahman Baseball Dataset](https://www.seanlahman.com/baseball-archive/statistics/) hosted on a [hagenhaus.com](https://hagenhaus.com) server behind a [Hagenhaus REST API](/en/docs/hh-rest-api/). To incorporate HHDataList instances into your website, first become familiar with the [User interface](/en/docs/hhdatalist/user-interface/), and then [Add an instance](/en/docs/hhdatalist/add-an-instance/).

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
      { name: 'playerID', label: 'ID', isChecked: false },
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
      home: 'View baseball-player records from the <a href="https://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Dataset</a>.',
      search: 'Filter and order records. <a href="/en/docs/rest-api/query-parameters/" target="_blank">Learn more</a>.',
      fields: 'Specify fields to appear in records.',
      new: 'Create a new record.',
      created: 'The new record is also on the records list.',
      config: 'Set additional configuration parameters.'
    },
    url: 'http://localhost:8081/api/baseball/v1/players',
  });
</script>
