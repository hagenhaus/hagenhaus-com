# Tutorial

This tutorial helps you add an HHDataList component to an HTML file, point it at the *Famous Trees API*, and configure it with [Options](/en/hhdatalist/v0.0.2/options/).

# Review the Trees API

The [Famous Trees API](/en/hhdatalist/v0.0.2/openapi/) provides access to a small number of records representing famous individual international trees. Each record contains fields representing a variety of data types including strings, numbers, objects, and arrays. The API supports `GET`, `POST`, `PATCH`, and `DELETE` methods, the last three requiring `Bearer` authentication. Here are two endpoints:

``` nonum
<a href="https://hagenhaus.com:3002/api/famous/v1/trees">https://hagenhaus.com:3002/api/famous/v1/trees</a>
<a href="https://hagenhaus.com:3002/api/famous/v1/trees/1">https://hagenhaus.com:3002/api/famous/v1/trees/1</a>
```

The `getRecords` operation supports `fields`, `filter`, `order`, `page`, and `limit` query parameters:

``` nonum
<a href="https://hagenhaus.com:3002/api/famous/v1/trees?fields=id%2Cname">https://hagenhaus.com:3002/api/famous/v1/trees?fields=id%2Cname</a>
<a href="https://hagenhaus.com:3002/api/famous/v1/trees?filter=country%20like%20%22AUS%22">https://hagenhaus.com:3002/api/famous/v1/trees?filter=country%20like%20%22AUS%22</a>
<a href="https://hagenhaus.com:3002/api/famous/v1/trees?order=name%20asc">https://hagenhaus.com:3002/api/famous/v1/trees?order=name%20asc</a>
<a href="https://hagenhaus.com:3002/api/famous/v1/trees?page=1&limit=3">https://hagenhaus.com:3002/api/famous/v1/trees?page=1&limit=3</a>
```

A `getRecords` response resembles the following:

``` nonum
{
  "metadata": {
    "numTotalRecords": 10,
    "numFilteredRecords": 8,
    "numResponseRecords": 3,
    "page": 1,
    "limit": 3,
    "numTotalPages": 4,
    "firstItemOnPage": 1
  },
  "records": [
    { "id": 1, ... },
    { "id": 2, ... },
    { "id": 3, ... }
  ]
}
```

The `getRecord` operation supports the `fields` query parameters:

``` nonum
<a href="https://hagenhaus.com:3002/api/famous/v1/trees/1?fields=name%2Cspecies%2Cdescription%2Ccity%2Ccountry%2Clat%2Clng%2CbirthYear%2Cheight%2Clinks%2Cid">https://hagenhaus.com:3002/api/famous/v1/trees/1?fields=name%2Cspecies%2Cdescription%2Ccity%2Ccountry%2Clat%2Clng%2CbirthYear%2Cheight%2Clinks%2Cid</a>
```

A `getRecord` response resembles the following:

``` nonum
{
  "id": 1,
  "birthYear": 1582,
  "city": "Bahrain",
  "country": "BHR",
  "description": "The Tree of Life (Shajarat-al-Hayat) in Bahrain is a 9.75 meters (32 feet) high Prosopis cineraria tree that is over 400 years old. It is on a hill in a barren area of the Arabian Desert, 2 kilometers (1.2 miles) from Jebel Dukhan, the highest point in Bahrain, and 40 kilometers from Manama.",
  "girth": 0,
  "height": 32,
  "lat": "25.9940730",
  "links": [
    {
      "link": "https://en.wikipedia.org/wiki/Tree_of_Life_(Bahrain)",
      "text": "Wikipedia"
    },
    {
      "link": "https://www.atlasobscura.com/places/tree-of-life",
      "text": "Atlas Obscura"
    }
  ],
  "lng": "50.5832350",
  "name": "Tree of Life",
  "species": {
    "link": "https://en.wikipedia.org/wiki/Prosopis_cineraria",
    "text": "Prosopis cineraria"
  }
}
```

# Create a starter file

``` html nonum
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
  <link rel="stylesheet" type="text/css" href="http://localhost:8080/hhdatalist/v0.0.2/hhdatalist.css">
  <style>
    div.page {
      max-width: 900px;
    }

    p.title {
      font-weight: 500;
      display: table;
      margin: 0 auto;
    }
  </style>
  <title>HHDataList v0.0.2 Tutorial Starter File</title>
</head>

<body>
  <div class="container page">
    <p class="my-3 title">HHDataList v0.0.2 Tutorial Starter File</p>
    <div id="my-datalist" class="hh-data-list my-3"></div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="http://localhost:8080/hhdatalist/v0.0.2/hhdatalist.js"></script>
  <script>
    // Add HHDataList code here.
  </script>
</body>

</html>
```

# Deploy your datalist

This section helps you deploy an HHDataList component configured with the following options: [displayLimit](/en/hhdatalist/v0.0.2/options/displaylimit/), [id](/en/hhdatalist/v0.0.2/options/id), [recordIdField](/en/hhdatalist/v0.0.2/options/recordidfield/), [recordTitle](/en/hhdatalist/v0.0.2/options/recordtitle/), [responseHelper](/en/hhdatalist/v0.0.2/options/responsehelper/), and [url](/en/hhdatalist/v0.0.2/options/url/).

### Steps

This code passes an anonymous *options* object to the HHDataList constructor:

``` js nonum
new HHDataList({
  displayLimit: 10,
  id: 'my-datalist',
  recordIdField: 'id',
  recordTitle: { fields: ['name'], format: (f, r) => r[f[0]] },
  responseHelper: {
    record: (res) => res.data,
    records: (res) => res.data.records,
    numPages: (res, limit) => res.data.metadata.numTotalPages,
    numResponseRecords: (res) => res.data.metadata.numResponseRecords,
    numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
    numTotalRecords: (res) => res.data.metadata.numTotalRecords
  },
  url: 'https://hagenhaus.com:3002/api/famous/v1/trees'
});
```

### Example

<div id="deploy-datalist" class="hh-data-list my-3"></div>
<script>
  var DeployOptions = class {
    constructor(id) {
      this.displayLimit = 10;
      this.id = id;
      this.recordTitle = { fields: ['name'], format: (f, r) => r[f[0]] };
      this.recordIdField = 'id';
      this.responseHelper = {};
      this.responseHelper = {
        record: (res) => res.data,
        records: (res) => res.data.records,
        numPages: (res, limit) => res.data.metadata.numTotalPages,
        numResponseRecords: (res) => res.data.metadata.numResponseRecords,
        numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
        numTotalRecords: (res) => res.data.metadata.numTotalRecords
      };
      this.url = 'https://hagenhaus.com:3002/api/famous/v1/trees';
    }
  };
  new HHDataList(new DeployOptions('deploy-datalist'));
</script>

# Limit response record count

This section helps you add the `limit` property of the [queryParams](/en/hhdatalist/v0.0.2/options/queryparams/) option to your datalist so users see only a limited number of records at one time.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  queryParams: {
    limit: { name: 'limit', default: 3, showTool: true }
  },
});
```

### Example

<div id="limit-datalist" class="hh-data-list my-3"></div>
<script>
  var LimitOptions = class extends DeployOptions {
    constructor(id) {
      super(id);
      this.queryParams = { limit: { name: 'limit', default: 3, showTool: true } };
    }
  };
  new HHDataList(new LimitOptions('limit-datalist'));
</script>

# Paginate records

This section helps you add the `page` property of the [queryParams](/en/hhdatalist/v0.0.2/options/queryparams/) option to your datalist so users can view pages of records.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  expand: { showTool: true },
  queryParams: {
    page: { name: 'page' },
  },
});
```

### Example

<div id="page-datalist" class="hh-data-list my-3"></div>
<script>
  var PageOptions = class extends LimitOptions {
    constructor(id) {
      super(id);
      this.expand = { showTool: true };
      this.queryParams.page = { name: 'page' };
    }
  };
  new HHDataList(new PageOptions('page-datalist'));
</script>

# Enable parity

This section helps you set the [parity](/en/hhdatalist/v0.0.2/options/parity/) option to `true` for your datalist so HHDataList scrolls expanded records more efficiently.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  parity: { get: { value: true } },
});
```

### Example

<div id="parity-datalist" class="hh-data-list my-3"></div>
<script>
  var ParityOptions = class extends PageOptions {
    constructor(id) {
      super(id);
      this.parity = { get: { value: true } };
    }
  };
  new HHDataList(new ParityOptions('parity-datalist'));
</script>

# Specify the theme

This section helps you add the [themeDefinition](/en/hhdatalist/v0.0.2/options/themedefinition/) option to your datalist so you (and, optionally, your users) can set the component theme. HHDataList supports standard and custom themes. To learn more, see [Themes and Palettes](/en/hhdatalist/v0.0.2/themes-and-palettes/).

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` html nonum
<script src="http://localhost:8080/hhdatalist/v0.0.2/hhdatalist-themes.js"></script>
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
HHDataList.addAllStandardThemes();
 
new HHDataList({
  themeDefinition: { name: 'wheatgerm' },
});
```

### Example

<div id="theme-datalist" class="hh-data-list my-3"></div>
<script>
  var ThemeOptions = class extends ParityOptions {
    constructor(id) {
      super(id);
      this.themeDefinition = { name: 'wheatgerm' };
    }
  };
  new HHDataList(new ThemeOptions('theme-datalist'));
</script>

# Modify default field width

This section helps you add the `records` property of the [colWidths](/en/hhdatalist/v0.0.2/options/colwidths/) option to your datalist to control the default width of fields in expanded records.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  colWidths: { records: { value: 'medium' } },
});
```

### Example

<div id="width-datalist" class="hh-data-list my-3"></div>
<script>
  var WidthOptions = class extends PageOptions {
    constructor(id) {
      super(id);
      this.colWidths = { records: { value: 'medium' } };
    }
  };
  new HHDataList(new WidthOptions('width-datalist'));
</script>

# Add manage field definitions

This section helps you add the `manage` property of the [fieldDefinitions](/en/hhdatalist/v0.0.2/options/fielddefinitions/) option to your datalist. HHDataList moves data from an API response to an expanded record in one of three ways: *copy*, *manage*, or *transform*. Each of these is a [processMode](/en/hhdatalist/v0.0.2/options/processmode/). The *manage* process mode requires the `manage` property of the [fieldDefinitions](/en/hhdatalist/v0.0.2/options/fielddefinitions/) option. 

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  fieldDefinitions: {
    manage: [
      { fieldName: 'id', isChecked: false },
      { fieldName: 'name', isEditable: true, isRequired: true },
      { fieldName: 'species', isEditable: true },
      { fieldName: 'description', isEditable: true },
      { fieldName: 'city', isEditable: true },
      { fieldName: 'country', isEditable: true },
      { fieldName: 'lat', isEditable: true },
      { fieldName: 'lng', isEditable: true },
      { fieldName: 'birthYear', isEditable: true, colWidth: 'narrow' },
      { fieldName: 'height', isEditable: true, colWidth: 'narrow' },
      { fieldName: 'girth', isEditable: true, isChecked: false },
      { fieldName: 'links', isEditable: true }
    ]
  },
});
```

### Example

<div id="manage-datalist" class="hh-data-list my-3"></div>
<script>
  var ManageOptions = class extends WidthOptions {
    constructor(id) {
      super(id);
      this.fieldDefinitions = {
        manage: [
          { fieldName: 'id', isChecked: false },
          { fieldName: 'name', isEditable: true, isRequired: true },
          { fieldName: 'species', isEditable: true },
          { fieldName: 'description', isEditable: true },
          { fieldName: 'city', isEditable: true },
          { fieldName: 'country', isEditable: true },
          { fieldName: 'lat', isEditable: true },
          { fieldName: 'lng', isEditable: true },
          { fieldName: 'birthYear', isEditable: true, colWidth: 'narrow' },
          { fieldName: 'height', isEditable: true, colWidth: 'narrow' },
          { fieldName: 'girth', isEditable: true, isChecked: false },
          { fieldName: 'links', isEditable: true }
        ]
      };
    }
  };
  new HHDataList(new ManageOptions('manage-datalist'));
</script>

# Add a confirm function

This section helps you add the [confirm](/en/hhdatalist/v0.0.2/options/confirm/) option to your datalist so users can confirm record deletions and other actions before committing.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
const myConfirm = (title, detail, yesLabel, yesCb) => { if (confirm(title)) { yesCb(); } };
 
new HHDataList({
  confirm: myConfirm,
});
```

### Example

<div id="confirm-datalist" class="hh-data-list my-3"></div>
<script>
  var ConfirmOptions = class extends ManageOptions {
    constructor(id) {
      super(id);
      this.confirm = confirm;
    }
  };
  new HHDataList(new ConfirmOptions('confirm-datalist'));
</script>

# Add an error function

This section helps you add the [error](/en/hhdatalist/v0.0.2/options/error/) option to your datalist so HHDataList can inform users about errors.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
const myReportError = (error) => {
  alert('response' in error && 'statusText' in error.response && error.response.statusText
    ? error.response.statusText
    : 'Unknown Error');
};
 
new HHDataList({
  error: myReportError,
});
```

### Example

<div id="error-datalist" class="hh-data-list my-3"></div>
<script>
  var ErrorOptions = class extends ConfirmOptions {
    constructor(id) {
      super(id);
      this.error = reportError;
    }
  };
  new HHDataList(new ErrorOptions('error-datalist'));
</script>

# Add an info function

This section helps you add the [info](/en/hhdatalist/v0.0.2/options/info/) option to your datalist so HHDataList can inform users about completed actions.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
const myReportInfo = (title, detail) => { alert(detail); };
 
new HHDataList({
  info: myReportInfo,
});
```

### Example

<div id="info-datalist" class="hh-data-list my-3"></div>
<script>
  var InfoOptions = class extends ErrorOptions {
    constructor(id) {
      super(id);
      this.info = reportInfo;
    }
  };
  new HHDataList(new InfoOptions('info-datalist'));
</script>

# Populate the new record form

This section helps you add the [populate](/en/hhdatalist/v0.0.2/options/populate/) option to your datalist so users can easily populate the *New Record* form with test data.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
const popValues = new Map()
  .set('name', 'Koiwai Farm Ipponzakura')
  .set('species', `{"link":"https://en.wikipedia.org/wiki/Prunus_serrulata","text":"Prunus serrulata"}`)
  .set('description', `The solitary cherry tree stands in Koiwai Farm, a privately owned farm not far from Iwate's capital city Morioka (盛岡市 Morioka-shi). With over 500,000 visitors annually, the farm is immensely popular among the locals, and has been around since its establishment in 1891. In fact, the tree was said to be planted over 100 years ago too, and since then many people have visited the farm during different seasons just to see it. But among all the seasons, spring is often considered the best to see the tree in its full glory.`)
  .set('city', 'Morioka')
  .set('country', 'JPN')
  .set('lat', '39.7560461061616')
  .set('lng', '141.004011260734')
  .set('birthYear', '1922')
  .set('height', '0')
  .set('girth', '0')
  .set('links', `[{"link":"https://japanrailtimes.japanrailcafe.com.sg/web/article/seasons/sakura-series-4","text":"Japan Rail Cafe"},{"link":"https://www.koiwai.co.jp/makiba/","text":"Koiwai Farm"}]`);
 
new HHDataList({
  populate: (fieldName) => popValues.get(fieldName),
});
```

### Example

<div id="populate-datalist" class="hh-data-list my-3"></div>
<script>
  var PopulateOptions = class extends InfoOptions {
    constructor(id) {
      super(id);
      this.populate = (fieldName) => this.popValues.get(fieldName);
    }
    popValues = new Map()
      .set('name', 'Koiwai Farm Ipponzakura')
      .set('species', `{"link":"https://en.wikipedia.org/wiki/Prunus_serrulata","text":"Prunus serrulata"}`)
      .set('description', `The solitary cherry tree stands in Koiwai Farm, a privately owned farm not far from Iwate's capital city Morioka (盛岡市 Morioka-shi). With over 500,000 visitors annually, the farm is immensely popular among the locals, and has been around since its establishment in 1891. In fact, the tree was said to be planted over 100 years ago too, and since then many people have visited the farm during different seasons just to see it. But among all the seasons, spring is often considered the best to see the tree in its full glory.`)
      .set('city', 'Morioka')
      .set('country', 'JPN')
      .set('lat', '39.7560461061616')
      .set('lng', '141.004011260734')
      .set('birthYear', '1922')
      .set('height', '0')
      .set('girth', '0')
      .set('links', `[{"link":"https://japanrailtimes.japanrailcafe.com.sg/web/article/seasons/sakura-series-4","text":"Japan Rail Cafe"},{"link":"https://www.koiwai.co.jp/makiba/","text":"Koiwai Farm"}]`);
  };
  new HHDataList(new PopulateOptions('populate-datalist'));
</script>

# Specify response record fields

This section helps you add the `fields` property of the [queryParams](/en/hhdatalist/v0.0.2/options/queryparams/) option to your datalist so HHDataList can request from the underlying API only required fields.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields' },
  },
});
```

### Example

<div id="fields-datalist" class="hh-data-list my-3"></div>
<script>
  var FieldsOptions = class extends PopulateOptions {
    constructor(id) {
      super(id);
      this.queryParams.fields = { name: 'fields' };
    }
  };
  new HHDataList(new FieldsOptions('fields-datalist'));
</script>

# Filter response records

This section helps you add the `filter` property of the [queryParams](/en/hhdatalist/v0.0.2/options/queryparams/) option to your datalist so users can specify a criteria that limits returned records.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  queryParams: {
    filter: { name: 'filter', placeholder: 'country like "AUS"' },
  },
});
```

### Example

<div id="filter-datalist" class="hh-data-list my-3"></div>
<script>
  var FilterOptions = class extends FieldsOptions {
    constructor(id) {
      super(id);
      this.queryParams.filter = { name: 'filter', placeholder: 'country like "AUS"' };
    }
  };
  new HHDataList(new FilterOptions('filter-datalist'));
</script>

# Order response records

This section helps you add the `order` property of the [queryParams](/en/hhdatalist/v0.0.2/options/queryparams/) option to your datalist so users can specify a criteria that orders returned records.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  queryParams: {
    order: { name: 'order', default: 'name asc' },
  },
});
```

### Example

<div id="order-datalist" class="hh-data-list my-3"></div>
<script>
  var OrderOptions = class extends FilterOptions {
    constructor(id) {
      super(id);
      this.queryParams.order = { name: 'order', default: 'name asc' };
    }
  };
  new HHDataList(new OrderOptions('order-datalist'));
</script>

# Add tab descriptions

This section helps you add the [descriptions](/en/hhdatalist/v0.0.2/options/descriptions/) option to your datalist to display text at the top of any or all tabs.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  descriptions: {
    home: 'This component accesses a small dataset of famous tree records.',
    search: 'Search and order syntax is API-specific.',
    fields: 'Checked fields appear in records.',
    tools: 'Checked tools appear on the toolbar.',
    new: 'The New Record form consists of managed fields.',
    value: true
  },
});
```

### Example

<div id="descriptions-datalist" class="hh-data-list my-3"></div>
<script>
  var DescriptionsOptions = class extends OrderOptions {
    constructor(id) {
      super(id);
      this.descriptions = {
        home: 'This component accesses a small dataset of famous tree records.',
        search: 'Search and order syntax is API-specific.',
        fields: 'Checked fields appear in records.',
        tools: 'Checked tools appear on the toolbar.',
        new: 'The New Record form consists of managed fields.',
        value: true
      };
    }
  };
  new HHDataList(new DescriptionsOptions('descriptions-datalist'));
</script>

# Add transform field definitions

This section helps you add the `transform` property of the [fieldDefinitions](/en/hhdatalist/v0.0.2/options/fielddefinitions/) option to your datalist. HHDataList moves data from an API response to an expanded record in one of three ways: *copy*, *manage*, or *transform*. Each of these is a [processMode](/en/hhdatalist/v0.0.2/options/processmode/). The *transform* process mode requires the `transform` property of the [fieldDefinitions](/en/hhdatalist/v0.0.2/options/fielddefinitions/) option. 

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  fieldDefinitions: {
    transform: [
      { label: 'ID', fieldName: 'id', isChecked: false },
      { label: 'Name', fieldName: 'name' },
      {
        label: 'Species', fieldName: 'species',
        transformer: (v) => ({ url: v.link, title: v.text }),
        display: { type: 'link' }
      },
      {
        label: 'Description', fieldName: 'description', colWidth: 'wide',
        display: { type: 'text', rows: 3 }
      },
      { label: 'Nearby City', fieldName: 'city' },
      {
        label: 'Country', fieldName: 'country',
        transformer: async (v) => (await HHDataList.get(`https://hagenhaus.com:3002/api/devportals/v1/countries/${v}`)).data.name
      },
      {
        label: 'Coordinates', fieldNames: ['lat', 'lng'],
        transformer: (lat, lng) => ({
          url: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
          title: `${lat}, ${lng}`
        }),
        display: { type: 'link' }
      },
      {
        label: 'Age (years)', fieldName: 'birthYear',
        transformer: (v) => `${(new Date().getFullYear() - v).toLocaleString()}`
      },
      {
        label: 'Height (meters)', fieldName: 'height',
        transformer: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown'
      },
      {
        label: 'Links', fieldName: 'links',
        transformer: (v) => {
          const a = [];
          for (let i of v) { a.push({ url: i.link, title: i.text }); }
          return a;
        },
        display: { type: 'link' }
      }
    ]
  },
});
```

### Example

<div id="transform-datalist" class="hh-data-list my-3"></div>
<script>
  var TransformOptions = class extends DescriptionsOptions {
    constructor(id) {
      super(id);
      this.fieldDefinitions.transform = [
        { label: 'ID', fieldName: 'id', isChecked: false },
        { label: 'Name', fieldName: 'name' },
        {
          label: 'Species', fieldName: 'species',
          transformer: (v) => ({ url: v.link, title: v.text }),
          display: { type: 'link' }
        },
        {
          label: 'Description', fieldName: 'description', colWidth: 'wide',
          display: { type: 'text', rows: 3 }
        },
        { label: 'Nearby City', fieldName: 'city' },
        {
          label: 'Country', fieldName: 'country',
          transformer: async (v) => (await HHDataList.get(`${getHHApiDomain()}/api/devportals/v1/countries/${v}`)).data.name
        },
        {
          label: 'Coordinates', fieldNames: ['lat', 'lng'],
          transformer: (lat, lng) => ({
            url: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
            title: `${lat}, ${lng}`
          }),
          display: { type: 'link' }
        },
        {
          label: 'Age (years)', fieldName: 'birthYear',
          transformer: (v) => `${(new Date().getFullYear() - v).toLocaleString()}`
        },
        {
          label: 'Height (meters)', fieldName: 'height',
          transformer: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown'
        },
        {
          label: 'Links', fieldName: 'links',
          transformer: (v) => {
            const a = [];
            for (let i of v) { a.push({ url: i.link, title: i.text }); }
            return a;
          },
          display: { type: 'link' }
        }
      ];
    }
  };
  new HHDataList(new TransformOptions('transform-datalist'));
</script>

# Add authentication

This section helps you add the [auths](/en/hhdatalist/v0.0.2/options/auths/) option to your datalist so HHDataList can complete API operations on behalf of users.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
const myGetToken = () => { return `Bearer ${prompt('Enter auth token', '')}`; };
 
new HHDataList({
  auths: {
    deleteRecord: myGetToken,
    patchRecord: myGetToken,
    postRecord: myGetToken
  },
});
```

### Example

<div id="auths-datalist" class="hh-data-list my-3"></div>
<script>
  var AuthsOptions = class extends TransformOptions {
    constructor(id) {
      super(id);
      this.auths = {
        deleteRecord: window.getBearerToken,
        patchRecord: window.getBearerToken,
        postRecord: window.getBearerToken
      };
    }
  };
  new HHDataList(new AuthsOptions('auths-datalist'));
</script>

# Override create, update, delete

This section helps you add the [methods](/en/hhdatalist/v0.0.2/options/methods/) option to your datalist so you can tell users that certain API operations are disabled.

### Steps

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  methods: {
    deleteRecord: () => { myReportInfo('Cannot Delete Record', 'This feature is disabled for this instance.'); },
    patchRecord: () => { myReportInfo('Cannot Modify Record Field', 'This feature is disabled for this instance.'); },
    postRecord: () => { myReportInfo('Cannot Create Record', 'This feature is disabled for this instance.'); }
  },
});
```

### Example

<div id="methods-datalist" class="hh-data-list my-3"></div>
<script>
  var MethodsOptions = class extends AuthsOptions {
    constructor(id) {
      super(id);
      this.methods = {
        deleteRecord: () => { reportWarning('Cannot Delete Record', 'This feature is disabled for this instance.'); },
        patchRecord: () => { reportWarning('Cannot Modify Record Field', 'This feature is disabled for this instance.'); },
        postRecord: () => { reportWarning('Cannot Create Record', 'This feature is disabled for this instance.'); }
      };
    }
  };
  new HHDataList(new MethodsOptions('methods-datalist'));
</script>

# Final Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
HHDataList.addAllStandardThemes();
 
const myConfirm = (title, detail, yesLabel, yesCb) => { if (confirm(title)) { yesCb(); } };
 
const myReportInfo = (title, detail) => { alert(detail); };
 
const myReportError = (error) => {
  alert('response' in error && 'statusText' in error.response && error.response.statusText
    ? error.response.statusText
    : 'Unknown Error');
};
 
const myGetToken = () => { return `Bearer ${prompt('Enter auth token', '')}`; };
 
const popValues = new Map()
  .set('name', 'Koiwai Farm Ipponzakura')
  .set('species', `{"link":"https://en.wikipedia.org/wiki/Prunus_serrulata","text":"Prunus serrulata"}`)
  .set('description', `The solitary cherry tree stands in Koiwai Farm, a privately owned farm not far from Iwate's capital city Morioka (盛岡市 Morioka-shi). With over 500,000 visitors annually, the farm is immensely popular among the locals, and has been around since its establishment in 1891. In fact, the tree was said to be planted over 100 years ago too, and since then many people have visited the farm during different seasons just to see it. But among all the seasons, spring is often considered the best to see the tree in its full glory.`)
  .set('city', 'Morioka')
  .set('country', 'JPN')
  .set('lat', '39.7560461061616')
  .set('lng', '141.004011260734')
  .set('birthYear', '1922')
  .set('height', '0')
  .set('girth', '0')
  .set('links', `[{"link":"https://japanrailtimes.japanrailcafe.com.sg/web/article/seasons/sakura-series-4","text":"Japan Rail Cafe"},{"link":"https://www.koiwai.co.jp/makiba/","text":"Koiwai Farm"}]`);
 
new HHDataList({
  auths: {
    deleteRecord: myGetToken,
    patchRecord: myGetToken,
    postRecord: myGetToken
  },
  colWidths: { records: { value: 'medium' } },
  confirm: myConfirm,
  descriptions: {
    home: 'This component accesses a small dataset of famous tree records.',
    search: 'Search and order syntax is API-specific.',
    fields: 'Checked fields appear in records.',
    tools: 'Checked tools appear on the toolbar.',
    new: 'The New Record form consists of managed fields.',
    value: true
  },
  error: myReportError,
  expand: { showTool: true },
  fieldDefinitions: {
    manage: [
      { fieldName: 'id', isChecked: false },
      { fieldName: 'name', isEditable: true, isRequired: true },
      { fieldName: 'species', isEditable: true },
      { fieldName: 'description', isEditable: true },
      { fieldName: 'city', isEditable: true },
      { fieldName: 'country', isEditable: true },
      { fieldName: 'lat', isEditable: true },
      { fieldName: 'lng', isEditable: true },
      { fieldName: 'birthYear', isEditable: true, colWidth: 'narrow' },
      { fieldName: 'height', isEditable: true, colWidth: 'narrow' },
      { fieldName: 'girth', isEditable: true, isChecked: false },
      { fieldName: 'links', isEditable: true }
    ],
    transform: [
      { label: 'ID', fieldName: 'id', isChecked: false },
      { label: 'Name', fieldName: 'name' },
      {
        label: 'Species', fieldName: 'species',
        transformer: (v) => ({ url: v.link, title: v.text }),
        display: { type: 'link' }
      },
      {
        label: 'Description', fieldName: 'description', colWidth: 'wide',
        display: { type: 'text', rows: 3 }
      },
      { label: 'Nearby City', fieldName: 'city' },
      {
        label: 'Country', fieldName: 'country',
        transformer: async (v) => (await HHDataList.get(`https://hagenhaus.com:3002/api/devportals/v1/countries/${v}`)).data.name
      },
      {
        label: 'Coordinates', fieldNames: ['lat', 'lng'],
        transformer: (lat, lng) => ({
          url: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
          title: `${lat}, ${lng}`
        }),
        display: { type: 'link' }
      },
      {
        label: 'Age (years)', fieldName: 'birthYear',
        transformer: (v) => `${(new Date().getFullYear() - v).toLocaleString()}`
      },
      {
        label: 'Height (meters)', fieldName: 'height',
        transformer: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown'
      },
      {
        label: 'Links', fieldName: 'links',
        transformer: (v) => {
          const a = [];
          for (let i of v) { a.push({ url: i.link, title: i.text }); }
          return a;
        },
        display: { type: 'link' }
      }
    ]
  },
  id: 'my-datalist',
  info: myReportInfo,
  methods: {
    deleteRecord: () => { myReportInfo('Cannot Delete Record', 'This feature is disabled for this instance.'); },
    patchRecord: () => { myReportInfo('Cannot Modify Record Field', 'This feature is disabled for this instance.'); },
    postRecord: () => { myReportInfo('Cannot Create Record', 'This feature is disabled for this instance.'); }
  },
  parity: { get: { value: true } },
  populate: (fieldName) => popValues.get(fieldName),
  queryParams: {
    fields: { name: 'fields' },
    filter: { name: 'filter', placeholder: 'country like "AUS"' },
    order: { name: 'order', default: 'name asc' },
    page: { name: 'page' },
    limit: { name: 'limit', default: 3, showTool: true }
  },
  recordIdField: 'id',
  recordTitle: { fields: ['name'], format: (f, r) => r[f[0]] },
  responseHelper: {
    record: (res) => res.data,
    records: (res) => res.data.records,
    numPages: (res, limit) => res.data.metadata.numTotalPages,
    numResponseRecords: (res) => res.data.metadata.numResponseRecords,
    numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
    numTotalRecords: (res) => res.data.metadata.numTotalRecords
  },
  themeDefinition: { name: 'dodger blue' },
  url: 'https://hagenhaus.com:3002/api/famous/v1/trees'
});
```
