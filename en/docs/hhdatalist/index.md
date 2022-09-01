---
author: Matt Hagen
---

# HHDataList

HHDataList is a configurable UI component that enables users to interact with a REST API. Below is an example: 

<div id="baseball-players-datalist" class="hh-data-list"></div>

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
      home: 'View baseball-player records from the <a href="https://www.seanlahman.com/baseball-archive/statistics/">Lahman Baseball Dataset</a> deployed on <a href="https://hagenhaus.com">hagenhaus.com</a>.',
      search: 'Filter and order records. <a href="/en/docs/rest-api/query-parameters/" target="_blank">Learn more</a>.',
      fields: 'Specify fields to appear in records.',
      new: 'Create a new record.',
      created: 'The new record is also on the records list.',
      config: 'Set additional configuration parameters.'
    },
    url: 'http://localhost:8081/api/baseball/v1/players',
  });
</script>

# User Guide

The following video demonstrates the HHDataList user perspective:

<p><img src="img-800.png" class="img-fluid" width=560 height=315 loading="lazy"></p>

## User interface

Describe UI organization including tabs and rows.

<p><img src="ui.png" class="img-fluid d-block" width=800 height=567 loading="lazy"></p>

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

## New Tab

1. Click Create btn to show required fields.
1. Create a record: Casey Jones, March 14, 1863, Cayce KY USA.
1. Filter to find the new record.
1. Clear filter.

## Config tab

1. Un-number and re-number records.
1. Hide and show descriptions.
1. Explain the purpose of descriptions.

## Keyboard

# Developer Guide

The following video demonstrates the HHDataList developer perspective:

<p><img src="img-800.png" class="img-fluid" width=560 height=315 loading="lazy"></p>

## Quick start

Put here a link to a barebones html file which includes an HHDataList pointing at the baseball player database.

## Options

See [Options](options/).

## Messages

See [Messages](messages/).

## Themes

See [Themes](themes/).

## Authentication

## Icons

## Interfaces

## Internationalization

## Logging

## Tab Descriptions

## Tables vs Views

## Componentization

Topics:

* Isolating css.
* Isolating js.
* Minimization.
* Versioning.
* Split, uglify, obfuscate, obscurify, Terser, RollupJS

References:

* [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [Using Bootstrap as a module](https://getbootstrap.com/docs/5.0/getting-started/javascript/#using-bootstrap-as-a-module)
* [How to isolate component styles in React using CSS modules](https://dev.to/eransakal/how-to-isolate-component-styles-in-react-using-css-modules-mkm)
* [Writing Modular JavaScript With AMD, CommonJS & ES Harmony](https://addyosmani.com/writing-modular-js/)
* [CleanCss](https://www.npmjs.com/package/clean-css)
* [Terser](https://www.npmjs.com/package/terser)
* [JavaScript obfuscator](https://www.npmjs.com/package/javascript-obfuscator)
* [jsdelivr.com](https://www.jsdelivr.com/).
* [cloudflare.com](https://www.cloudflare.com/).

## Versioning