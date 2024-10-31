# reporters

<table class="options-table"><tr><th>Optional</th></tr></table>

The `reporters` option allows a website to configure the reporter tools including the Fields Reporter, Query Reporter, Requests Reporter, Theme Reporter, and Themes Reporter:

<div id="datalist" class="hh-data-list"></div>
<script>
  var options = new DLTreesOptions002('datalist');
  options.expand.showTool = false;
  options.queryParams.limit.showTool = false;
  options.reporters.fieldDefinitions.showTool = true;
  options.reporters.queryParams.showTool = true;
  options.reporters.requests.showTool = true;
  options.reporters.theme.showTool = true;
  options.reporters.themes.showTool = true;
  new HHDataList(options);
</script>

# Examples

## Example 1

This example shows the default values. Note that, by default, all reporters *report* to the browser console.

``` js nonum
new HHDataList({
  reporters: {
    fieldDefinitions: {
      function: (definitions) => {
        let s = JSON.stringify(definitions, null, 2);
        s = s.replace(/"([^"]+)":/g, '$1:');
        s = s.replace(/"/g, "'");
        console.log(s);
      },
      hasTool: true,
      showTool: false,
      toolLabel: 'Fields Reporter'
    },
    queryParams: {
      function: (params) => {
        let s = JSON.stringify(params, null, 2);
        s = s.replace(/"([^"]+)":/g, '$1:');
        s = s.replace(/"/g, "'");
        console.log(s);
      },
      hasTool: true,
      showTool: false,
      toolLabel: 'Query Reporter'
    },
    requests: {
      value: false,
      function: (method, url) => { console.log(`${method.toUpperCase()}: ${url}`); },
      hasTool: true,
      showTool: false,
      toolLabel: 'Requests Reporter'
    },
    theme: {
      function: (theme) => {
        let s = JSON.stringify(theme, null, 2);
        s = s.replace(/"([^"]+)":/g, '$1:');
        s = s.replace(/"/g, "'");
        console.log(s);
      },
      hasTool: true,
      showTool: false,
      toolLabel: 'Theme Reporter'
    },
    themes: {
      function: (themes) => {
        let s = JSON.stringify(themes, null, 2);
        s = s.replace(/"([^"]+)":/g, '$1:');
        s = s.replace(/"/g, "'");
        console.log(s);
      },
      hasTool: true,
      showTool: false,
      toolLabel: 'Themes Reporter'
    }
  },
});
```

## Example 2

This example shows how to make all the reporter tools visible on page load:

``` js nonum
new HHDataList({
  reporters: {
    fieldDefinitions: { showTool: false },
    queryParams: { showTool: false },
    requests: { showTool: false },
    theme: { showTool: false },
    themes: { showTool: false }
  },
});
```

# Reporters

## Fields Reporter

When a user clicks the *Fields Reporter* button, HHDataList calls this function, passing the internal fields definition array associated with the current [processMode](/en/hhdatalist/v0.0.2/options/processmode/) setting.

``` js nonum
new HHDataList({
  reporters: {
    fieldDefinitions: {
      function: (definitions) => {
        let s = JSON.stringify(definitions, null, 2);
        s = s.replace(/"([^"]+)":/g, '$1:');
        s = s.replace(/"/g, "'");
        console.log(s);
      },
    }
  },
});
```

Below is example output:

``` js nonum
[
  {
    label: 'ID',
    fieldNames: ['id'],
    isChecked: false,
    isCheckedDefault: false,
    isEditable: false,
    colWidth: null,
    contentMode: null,
    display: { type: 'normal' }
  },
  {
    label: 'Name',
    fieldNames: ['name'],
    isChecked: true,
    isCheckedDefault: true,
    isEditable: false,
    colWidth: null,
    contentMode: null,
    display: { type: 'normal' }
  },
  {
    label: 'Species',
    fieldNames: ['species'],
    isChecked: true,
    isCheckedDefault: true,
    isEditable: false,
    colWidth: null,
    contentMode: null,
    display: { type: 'link' }
  }
]
```

## Query Reporter

When a user clicks the *Query Reporter* button, HHDataList calls this function, passing the internal query parameters object.

``` js nonum
new HHDataList({
  reporters: {
    queryParams: {
      function: (params) => {
        let s = JSON.stringify(params, null, 2);
        s = s.replace(/"([^"]+)":/g, '$1:');
        s = s.replace(/"/g, "'");
        console.log(s);
      },
    }
  },
});
```

Below is example output:

``` js nonum
{
  fields: {
    name: 'fields',
    default: null,
    value: 'id,name'
  },
  filter: {
    name: 'filter',
    none: null,
    default: null,
    value: null,
    placeholder: 'name like \'%tree%\' and country like \'AUS\''
  },
  order: {
    name: 'order',
    default: 'name asc',
    value: 'name asc',
    placeholder: ''
  },
  page: {
    name: 'page',
    value: 1
  },
  limit: {
    name: 'limit',
    choices: [ 1, 3, 5, 10, 20, 50, 100 ],
    default: 3,
    value: 3,
    hasTool: true,
    showTool: true,
    toolLabel: 'Limit',
    toolClass: 'hh-limit-tool'
  }
}
```

## Requests Reporter

When a user clicks the *Requests Reporter* button, HHDataList toggles `reporters.requests.value`. When, with this value set to `true`, a user instigates any type of API request, HHDataList calls this function, passing the *method* (e.g. `GET`, `POST`, etc.) and the url.

``` js nonum
new HHDataList({
  reporters: {
    requests: {
      value: false,
      function: (method, url) => { console.log(`${method.toUpperCase()}: ${url}`); }
    }
  },
});
```

Below is example output:

``` js nonum
GET: https://hagenhaus.com/api/famous-trees?fields=id%2Cname&order=name%20asc&page=2&limit=3
GET: https://hagenhaus.com/api/famous-trees?fields=id%2Cname&order=name%20asc&page=3&limit=3
GET: https://hagenhaus.com/api/famous-trees/1?fields=name%2Cspecies%2Cdescription%2Ccity%2Ccountry%2Clat%2Clng%2CbirthYear%2Cheight%2Clinks%2Cid
```

## Theme Reporter

When a user clicks the *Theme Reporter* button, HHDataList calls this function, passing the current theme object.

``` js nonum
new HHDataList({
  reporters: {
    theme: {
      function: (theme) => {
        let s = JSON.stringify(theme, null, 2);
        s = s.replace(/"([^"]+)":/g, '$1:');
        s = s.replace(/"/g, "'");
        console.log(s);
      }
    }
  },
});
```

Below is example output:

``` js nonum
{
  name: 'Dodger Blue',
  tabButtonColor: '#0059b3',
  tabBorderColor: '#0059b3',
  controlColor: '#ffffff',
  controlColorHover: '#ffffff',
  controlBorderColor: '#0073e6',
  ...
}
```

## Themes Reporter

When a user clicks the *Themes Reporter* button, HHDataList calls this function, passing the current theme list.

``` js nonum
new HHDataList({
  reporters: {
    themes: {
      function: (themes) => {
        let s = JSON.stringify(themes, null, 2);
        s = s.replace(/"([^"]+)":/g, '$1:');
        s = s.replace(/"/g, "'");
        console.log(s);
      }
    }
  },
});
```

Below is example output:

``` js nonum
[
  {
    name: 'Teal Ribbon',
    tabButtonColor: '#004d4d',
    tabBorderColor: '#004d4d',
    controlColor: '#ffffff',
    controlColorHover: '#ffffff',
    controlBorderColor: '#008080',
    ...
  },
  {
    name: 'Thistle',
    tabButtonColor: '#5f3a5f',
    tabBorderColor: '#5f3a5f',
    controlColor: '#ffffff',
    controlColorHover: '#ffffff',
    controlBorderColor: '#7e4e7e',
    ...
  },
  {
    name: 'Wheatgerm',
    tabButtonColor: '#875e12',
    tabBorderColor: '#875e12',
    controlColor: '#ffffff',
    controlColorHover: '#ffffff',
    controlBorderColor: '#e29d1d',
    ...
  }
]
```