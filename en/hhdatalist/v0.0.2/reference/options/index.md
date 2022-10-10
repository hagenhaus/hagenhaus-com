# Options

# confirm

# controlsAreSmall

This option sets the size of `input`, `select`, and `button` html tags. The data type is `boolean`. If `true`, tags appear smaller than normal. The default value is `false`. Developers can override:

``` nonum
new HHDataList({
  controlsAreSmall: true
});
```

Users cannot override.

# fieldColumnCount

# filterById

# id

# queryParams

Showing defaults:

``` nonum
new HHDataList({
  queryParameters: {
    fields: { name: "fields" },
    filter: { name: "filter", value: "birthYear is not null", placeholder: "birthYear is not null and nameLast like \"b%\"" },
    order: { name: "order", value: "birthYear desc", placeholder: "birthYear asc, nameLast asc" },
    page: { name: "page", base: 1 },
    limit: { name: "limit", choices: [5, 10, 20, 50, 100], value: 5 }
  }
});
```

## fields

## filter

## order

## page

``` nonum
https://hagenhaus.com:3002/api/baseball/v1/players?page=1
```

## limit

The `pageSize` option sets the initial value of the `Page Size` widget. The data type is `number`. The default value is `choices[0]`. Developers can override.

If `pageSize` is initialized to a `value` that is not a member of `choices`, then the value is ignored, and `value` is set to `choices[0]`. Users can override via the `Page Size` widget.

The `choices` property sets all possible options of the `Page Size` widget. The data type is `array`. The default value is `[5, 10, 20, 50, 100]`. Developers can override. Users cannot override.

# paletteName

# recordColumnCount

# recordFieldExplorer

# recordFields

Specifying a recordFields option in the options object passed to the HHDataList constructor has the following impact:

1. Enables you to control the order of fields displayed in an expanded record. Otherwise, the order of properties in the record inside a response body will dictate the order. 
1. Enables you to define aliases for record field names.
1. Enables you to specify whether a specific field isChecked in the Fields Tab (and shown in an expanded record).
1. Enables you to specify whether a specific field isEditable (which also means it will be included in the New Record Form).
1. Enables you to specify whether a field isRequired in the New Record Form.
1. Clears one barrier toward being able to edit/modify a field.
1. Enables you to define a field getter function. 
1. Enables you to define field width.
1. Causes the constructor to display the Fields tab unless you set the tabs option to {fields:false}.
1. Causes the constructor to display the New tab unless (a) you do not set isEditable:true for any fields or (b) you set the tabs option to {new:false}.

# recordIdField

# recordParity

Set this to *false* if your *getRecords* operation cannot return all the record properties that your *getRecord* operation can.

# recordsAreExpanded

Setting this option to true may cause HHDataList (after calling getRecords to obtain a page of records) to call getRecord for each record on the current page. This is because some APIs return a different set of properties for getRecords and getRecord. An API that uses SOLR for getRecords and another database for getRecord is an example.

# recordsAreNumbered

# recordTitleFields

# recordTitleFormat

# reportError

# reportInfo

# reportTheme

``` nonum
const dataList = new HHDataList({
  reportTheme: (theme) => {console.log(JSON.stringify(theme, null, 2));}
});
```

# reportWarning

# responseHelper

# showTabDescriptions

# tabs

# tabDescriptions

# theme

# themeName

# themeFromThemeName

# themeFromPaletteName

# themeFromPalette

# url

# urls










