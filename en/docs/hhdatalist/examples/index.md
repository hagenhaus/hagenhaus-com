# Examples

# Baseball API

The Baseball API is a Hagenhaus REST API ...

## Leagues

<div id="baseball-leagues-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'baseball-leagues-datalist',
    recordColumnCount: 3,
    recordIdField: 'lgID',
    recordTitleFields: ['league'],
    reportError: (error) => { reportError(error); },
    reportInfo: (info) => { reportInfo(info); },
    url: 'http://localhost:8081/api/baseball/v1/leagues',
  });
</script>

## Managers

<div id="baseball-managers-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'baseball-managers-datalist',
    recordColumnCount: 4,
    recordIdField: 'ID',
    recordTitleFields: ['playerID','yearID'],
    recordTitleFormat: (f, r) => `${r[f[0]]} (${r[f[1]]})`,
    reportError: (error) => { reportError(error); },
    reportInfo: (info) => { reportInfo(info); },
    theme: { // Red
      color1: '#fffafa',
      color2: '#ffe6e6',
      color3: '#ffb3b3',
      color4: '#660000'
    },
    url: 'http://localhost:8081/api/baseball/v1/managers',
  });
</script>

## Parks

<div id="baseball-parks-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'baseball-parks-datalist',
    recordIdField: 'ID',
    recordTitleFields: ['parkname'],
    reportError: (error) => { reportError(error); },
    reportInfo: (info) => { reportInfo(info); },
    theme: { // ForestGreen
      color1: '#eafaea',
      color2: '#c1f0c1',
      color3: '#98e698',
      color4: '#196719'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Players

<div id="baseball-players-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    controlsAreSmall: false,
    filter: 'birthYear is not null',
    filterById: (idField, idValue) => `${idField} like "${idValue}"`,
    filterPlaceholder: 'birthYear is not null and nameLast like "b%"',
    id: 'baseball-players-datalist',
    limit: 5,
    limits: [5, 10, 20, 50, 100],
    order: 'birthYear desc',
    orderPlaceholder: 'birthYear asc, nameLast asc',
    recordColumnCount: 4,
    // recordFields: [
    //   { name: 'playerID', label: 'ID' },
    //   { name: 'nameGiven', label: 'Name', isEditable: true, isRequired: true },
    // ],
    recordIdField: 'playerID',
    recordsAreExpanded: false,
    recordsAreNumbered: true,
    recordTitleFields: ['nameFirst', 'nameLast', 'birthYear'],
    recordTitleFormat: (f, r) => `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`,
    reportError: (error) => { reportError(error); },
    reportInfo: (info) => { reportInfo(info); },
    showTabDescriptions: false,
    tabDescriptions: {
      home: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
      search: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
      fields: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      newCreate: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      newCreated: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      config: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    theme: { // Orange
      color1: '#fff6e6',
      color2: '#ffe4b3',
      color3: '#ffd280',
      color4: '#805300'
    },
    url: 'http://localhost:8081/api/baseball/v1/players',
  });
</script>

## Teams

<div id="baseball-teams-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'baseball-teams-datalist',
    recordColumnCount: 4,
    recordIdField: 'ID',
    recordTitleFields: ['name','yearID'],
    recordTitleFormat: (f, r) => `${r[f[0]]} (${r[f[1]]})`,
    reportError: (error) => { reportError(error); },
    reportInfo: (info) => { reportInfo(info); },
    url: 'http://localhost:8081/api/baseball/v1/teams',
  });
</script>

# Portals API

## Portals

<div id="portals-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    controlsAreSmall: false,
    filter: 'name like "test%"',
    filterById: (idField, idValue) => `${idField} like "${idValue}"`,
    filterPlaceholder: 'name like "a%" and companyCountry like "USA"',
    id: 'portals-datalist',
    limit: 5,
    limits: [5, 10, 20, 50, 100],
    order: 'name',
    orderPlaceholder: 'name asc, companyCountry desc',
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
    reportError: (error) => { reportError(error); },
    reportInfo: (info) => { reportInfo(info); },
    showTabDescriptions: false,
    urls: {
      deleteRecord: 'http://localhost:8081/api/devportals/v1/portals',
      getRecord: 'http://localhost:8081/api/devportals/v1/portals',
      getRecords: 'http://localhost:8081/api/devportals/v1/portals',
      patchRecord: 'http://localhost:8081/api/devportals/v1/portals',
      postRecord: 'http://localhost:8081/api/devportals/v1/portals',
      putRecord: 'http://localhost:8081/api/devportals/v1/portals'
    }
  });
</script>

# Soccer API

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
