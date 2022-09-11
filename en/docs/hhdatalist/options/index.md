---
author: Matt Hagen
---

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

# id

# queryParameters

Showing defaults:

``` nonum
new HHDataList({
  queryParameters: {
    fields: { name: "fields" },
    filter: { name: "filter", value: "birthYear is not null", placeholder: "birthYear is not null and nameLast like \"b%\"" },
    order: { name: "order", value: "birthYear desc", placeholder: "birthYear asc, nameLast asc" },
    pageNumber: { name: "page", base: 1 },
    pageSize: { name: "limit", choices: [5, 10, 20, 50, 100], value: 5 }
  }
});
```

## fields

## filter

## order

## pageNumber

``` nonum
https://hagenhaus.com:3002/api/baseball/v1/players?page=1
```

## pageSize

The `pageSize` option sets the initial value of the `Page Size` widget. The data type is `number`. The default value is `choices[0]`. Developers can override.

If `pageSize` is initialized to a `value` that is not a member of `choices`, then the value is ignored, and `value` is set to `choices[0]`. Users can override via the `Page Size` widget.

The `choices` property sets all possible options of the `Page Size` widget. The data type is `array`. The default value is `[5, 10, 20, 50, 100]`. Developers can override. Users cannot override.

# recordColumnCount

# recordFields

# recordIdField

# recordsAreExpanded

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

# showTabDescriptions

# theme

# themeDefaults

# themeOverrides

# url

# urls
