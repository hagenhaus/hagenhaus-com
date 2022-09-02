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

# filter

# filterPlaceholder

# id

# limit

This option sets the initial value of the `Limiter` widget. The data type is `number`. The default value is `limits[0]`. Developers can override:

``` nonum
new HHDataList({
  limit: 10,
  limits: [5, 10, 20, 50, 100]
});
```

If `limit` is initialized to a value that is not a member of `limits`, then the value is ignored, and `limit` is set to `limits[0]`. Users can override via the `Limiter` widget.

# limits

This option sets all possible options of the `Limiter` widget. The data type is `array`. The default value is `[5, 10, 20, 50, 100]`. Developers can override:

``` nonum
new HHDataList({
  limits: [10, 20, 30]
});
```

Users cannot override.

# order

# orderPlaceholder

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

