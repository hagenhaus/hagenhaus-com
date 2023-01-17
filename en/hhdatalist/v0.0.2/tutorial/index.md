# Tutorial

# Review the Trees API

1. Returns a maximum of 10 records by default.
1. Supports parity.

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

# Deploy a datalist

This section shows you how to begin the configuration of a datalist using the [displayLimit](/en/hhdatalist/v0.0.2/options/displaylimit/), [id](/en/hhdatalist/v0.0.2/options/id), [recordIdField](/en/hhdatalist/v0.0.2/options/recordidfield/), [recordTitle](/en/hhdatalist/v0.0.2/options/recordtitle/), [responseHelper](/en/hhdatalist/v0.0.2/options/responsehelper/), and [url](/en/hhdatalist/v0.0.2/options/url/) options.

### Code

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

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

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
      this.url = 'http://localhost:8081/api/famous/v1/trees';
    }
  };
  new HHDataList(new DeployOptions('deploy-datalist'));
</script>

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Limit response record count

And, remove `displayLimit`. Rely on built-in display limit of 100. 

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

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

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Paginate records

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<div id="page-datalist" class="hh-data-list my-3"></div>
<script>
  var PageOptions = class extends LimitOptions {
    constructor(id) {
      super(id);
      this.expand = { showTool: true };
      this.queryParams.page = {};
    }
  };
  new HHDataList(new PageOptions('page-datalist'));
</script>

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Specify the theme

This section shows you how to apply a standard theme using the [themeDefinition](/en/hhdatalist/v0.0.2/options/themedefinition/) option.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` html nonum
<script src="http://localhost:8080/hhdatalist/v0.0.2/hhdatalist-themes.js"></script>
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
HHDataList002.addAllStandardThemes();
 
new HHDataList({
  themeDefinition: { name: 'firebrick' },
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<div id="theme-datalist" class="hh-data-list my-3"></div>
<script>
  var ThemeOptions = class extends PageOptions {
    constructor(id) {
      super(id);
      this.themeDefinition = { name: 'firebrick' };
    }
  };
  new HHDataList(new ThemeOptions('theme-datalist'));
</script>

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Modify default field width

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

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

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Add manage field definitions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

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

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Add a confirm function

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Add info and error functions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Populate the new record form

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Specify response record fields

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Filter response records

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Order response records

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Enable parity

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Add tab descriptions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Add transform field definitions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

# Add authentication

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Code

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

``` js nonum
new HHDataList({
  ...
  ...
});
```

### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Things to try

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
