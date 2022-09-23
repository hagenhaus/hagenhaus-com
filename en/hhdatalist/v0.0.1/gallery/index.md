# Gallery

# Baseball

## Leagues

<div id="baseball-leagues-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'baseball-leagues-datalist',
    queryParameters: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order' },
      pageNumber: { name: 'page' },
      pageSize: { name: 'limit' }
    },
    recordColumnCount: 3,
    recordIdField: 'lgID',
    recordTitleFields: ['league'],
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    url: `${getDomain()}/api/baseball/v1/leagues`,
  });
</script>

## Managers

<div id="baseball-managers-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'baseball-managers-datalist',
    queryParameters: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order' },
      pageNumber: { name: 'page' },
      pageSize: { name: 'limit' }
    },
    recordColumnCount: 4,
    recordIdField: 'ID',
    recordTitleFields: ['playerID','yearID'],
    recordTitleFormat: (f, r) => `${r[f[0]]} (${r[f[1]]})`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    url: `${getDomain()}/api/baseball/v1/managers`,
  });
</script>

## Parks

<div id="datalist-firebrick" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-firebrick',
    queryParameters: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order' },
      pageNumber: { name: 'page' },
      pageSize: { name: 'limit' }
    },
    recordFields: [
      { name: 'ID', label: 'ID', isChecked: false },
      { name: 'parkname', label: 'Name', isEditable: true, isRequired: true },
      { name: 'parkkey', label: 'Key', isEditable: true, isChecked: false },
      { name: 'parkalias', label: 'Aliases', isEditable: true },
      { name: 'city', label: 'City', isEditable: true },
      { name: 'state', label: 'State', isEditable: true },
      { name: 'country', label: 'Country', isEditable: true },
    ],
    recordIdField: 'ID',
    recordTitleFields: ['parkname'],
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    theme: {
      name: 'Firebrick'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#fbeaea',
      color3: '#f7d4d4',
      color4: '#f3bfbf',
      color5: '#da3e3e',
      color6: '#961d1d'
    },
    url: `${getDomain()}/api/baseball/v1/parks`,
  });
</script>

## Players

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
    url: `${getDomain()}/api/baseball/v1/players`,
  });
</script>

## Stats

## Teams

<div id="baseball-teams-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'baseball-teams-datalist',
    queryParameters: {
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
    url: `${getDomain()}/api/baseball/v1/teams`,
  });
</script>

# Developer Portals

## Companies

## Countries

## Portals

<div id="portals-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    controlsAreSmall: false,
    filterById: (idField, idValue) => `${idField} like "${idValue}"`,
    id: 'portals-datalist',
    queryParameters: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order' },
      pageNumber: { name: 'page' },
      pageSize: { name: 'limit' }
    },
    recordColumnCount: 3,
    recordFields: [
      { name: 'id', label: 'ID' },
      { name: 'name', label: 'Name', isEditable: true, isRequired: true },
      { name: 'url', label: 'Url', isEditable: true, isRequired: true },
      { name: 'companyId', label: 'Company ID', isEditable: true, isRequired: true, isForeignKey: true },
      { name: 'companyName', label: 'Company Name' },
      { name: 'companyUrl', label: 'Company Url' },
      { name: 'companyCity', label: 'Company City' },
      { name: 'companyRegion', label: 'Company Region' },
      { name: 'companyCountryId', label: 'Company Country ID' },
      { name: 'companyCountryName', label: 'Company Country Name' },
      { name: 'companySectorId', label: 'Company Sector ID', isChecked: false },
      { name: 'companySectorName', label: 'Company Sector Name', isChecked: false }
    ],
    recordIdField: 'id',
    recordsAreExpanded: false,
    recordsAreNumbered: true,
    recordTitleFields: ['name'],
    recordTitleFormat: (f, r) => r[f[0]],
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    showTabDescriptions: true,
    tabDescriptions: {
      home: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      search: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      fields: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
      new: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      created: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      config: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    url: 'http://localhost:8081/api/devportals/v1/portals'
  });
</script>

## Sectors
