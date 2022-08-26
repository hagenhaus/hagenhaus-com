# HHDataList Themes

A theme consists of key-value pairs that specify colors for the HTML elements that make up an HHDataList instance:

<p><img src="theme-to-component.png" class="img-fluid d-block" width=800 height=227 loading="lazy"></p>

HHDataList supports standard themes and custom themes. 

# Standard themes

You apply a standard theme to an HHDataList instance by setting the *theme* option equal to the theme name:

``` nonum
new HHDataList({
  theme: 'Silverberry',
});
```

Optionally, you can use the *themeOverrides* option to override one or more standard theme properties:

``` nonum
new HHDataList({
  theme: 'Silverberry',
  themeOverrides:{
    name: "My Silverberry Theme",
    tabButtonColor: 'maroon'
  },
});
```

You apply the default theme (i.e. *Dodger Blue*) by omitting the *theme* option:

``` nonum
new HHDataList({
  // No theme option.
});
```

HHDataList provides a set of standard themes reflected by the following list of HHDataList instances, all configured to access the same data about US baseball parks.

## Dodger Blue (default)

<div id="datalist-dodger-blue" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-dodger-blue',
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
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Firebrick

<div id="datalist-firebrick" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-firebrick',
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
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Forest Green

<div id="datalist-forest-green" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-forest-green',
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
    theme: {
      name: 'Forest Green'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#eafaea',
      color3: '#d6f5d6',
      color4: '#c1f0c1',
      color5: '#239023',
      color6: '#145214'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Lemon Chiffon

<div id="datalist-lemon-chiffon" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-lemon-chiffon',
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
    theme: {
      name: 'Lemon Chiffon'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#fffce6',
      color3: '#fff7b3',
      color4: '#fff280',
      color5: '#b3a100',
      color6: '#665c00'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Orangewood

<div id="datalist-orangewood" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-orangewood',
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
    theme: {
      name: 'Orangewood'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#fff6e6',
      color3: '#ffedcc',
      color4: '#ffe4b3',
      color5: '#b37400',
      color6: '#805300'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Plum

<div id="datalist-plum" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-plum',
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
    theme: {
      name: 'Plum'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#f8ecf8',
      color3: '#f1daf1',
      color4: '#ebc7eb',
      color5: '#c256c2',
      color6: '#5e225e'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Rainbow

<div id="datalist-rainbow" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-rainbow',
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
    theme: {
      name: 'Rainbow',
      recordTitleColor: '#006600',
      recordTitleButtonColor: 'steelblue',
      recordBorderColorOpen: '#cccc00',
      recordFieldLabelColor: '#006600',
      recordFieldInputColorDisabled: 'black',
      recordFieldInputBorderColorDisabled: '#fff0ff',
      recordFieldInputBackgroundColorDisabled: '#fff0ff'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#eafaea',
      color3: '#ffff66',
      color4: '#c1f0c1',
      color5: 'orange',
      color6: 'red'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Seagreen

<div id="datalist-seagreen" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-seagreen',
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
    theme: {
      name: 'Seagreen'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#e6fff7',
      color3: '#ccffee',
      color4: '#b3ffe6',
      color5: '#00cc88',
      color6: '#008055'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Shadowbox

<div id="datalist-shadowbox" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-shadowbox',
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
    theme: {
      name: 'Shadowbox',
      recordTitleButtonColor: 'white',
      recordTitleButtonColorHover: '#404040',
      recordTitleButtonBackgroundColorHover: 'white',
      recordTitleColor: 'white'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#f1f1f1',
      color3: '#404040',
      color4: '#404040',
      color5: '#404040',
      color6: '#262626'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Shoreline

<div id="datalist-showline" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-showline',
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
    theme: {
      name: 'Shoreline',
      controlColor: '#008055',
      controlButtonColor: '',
      controlBackgroundColor: 'white',
      recordBorderColor: '#00b377',
      recordBorderColorHover: '#00b377'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#e6fff7',
      color3: 'white',
      color4: '#00b377',
      color5: '#008055',
      color6: '#008055'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Silverberry

<div id="datalist-silverberry" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-silverberry',
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
    theme: {
      name: 'Silverberry'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#f1f1f1',
      color3: '#f2f2f2',
      color4: '#e6e6e6',
      color5: '#8c8c8c',
      color6: '#4d4d4d'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Teal Ribbon

<div id="datalist-teal-ribbon" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-teal-ribbon',
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
    theme: {
      name: 'Teal Ribbon'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#e6ffff',
      color3: '#99ffff',
      color4: '#80ffff',
      color5: '#008080',
      color6: '#004d4d'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Thistle

<div id="datalist-thistle" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-thistle',
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
    theme: {
      name: 'Thistle'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#f5eff5',
      color3: '#ecdfec',
      color4: '#e2d0e2',
      color5: '#7e4e7e',
      color6: '#5f3a5f'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

## Wheatgerm

<div id="datalist-wheatgerm" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    id: 'datalist-wheatgerm',
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
    theme: {
      name: 'Wheatgerm'
    },
    themeDefaults: {
      color1: '#ffffff',
      color2: '#fcf5e8',
      color3: '#f9ebd2',
      color4: '#f6e2bb',
      color5: '#e29d1d',
      color6: '#875e12'
    },
    url: 'http://localhost:8081/api/baseball/v1/parks',
  });
</script>

# Custom themes

You apply a custom theme to an HHDataList instance using the *theme* and *themeDefaults* options:

``` nonum
new HHDataList({
  theme: {
    name: 'My Plum Theme'
  },
  themeDefaults: {
    color1: '#ffffff',
    color2: '#f8ecf8',
    color3: '#f1daf1',
    color4: '#ebc7eb',
    color5: '#c256c2',
    color6: '#5e225e'
  },
});
```

Building a custom theme is an iterative process. For the first iteration, follow these guidelines:

1. Include only the *name* property in the *theme* object.

1. Choose a color family like [Plum](https://www.w3schools.com/colors/colors_picker.asp?colorhex=DDA0DD).

1. Assign color values to *themeDefaults* properties using a pattern similar to the following:

    <p><img src="color-family.png" class="img-fluid d-block" width=450 height=606 loading="lazy"></p>

1. sss

# Theme map

|Theme Object Key|CSS Variable|Default Value|
|-|-|-|
|tabButtonColor|&nbsp;|color6|
|tabBorderColor|&nbsp;|color6|
|controlColor|&nbsp;|color1|
|controlColorHover|&nbsp;|color1|
|controlBorderColor|&nbsp;|color5|
|controlBorderColorHover|&nbsp;|color6|
|controlBackgroundColor|&nbsp;|color5|
|controlBackgroundColorHover|&nbsp;|color6|
|controlOpacityDisabled|&nbsp;|80%|
|descriptionLinkColor|&nbsp;|color6|
|descriptionLinkColorHover|&nbsp;|color5|
|checkboxLabelColor|&nbsp;|color6|
|checkboxBorderColor|&nbsp;|color4|
|checkboxBorderColorChecked|&nbsp;|color6|
|checkboxBackgroundColor|&nbsp;|color1|
|checkboxBackgroundColorChecked|&nbsp;|color6|
|expanderCheckboxBorderColor|&nbsp;|color5|
|expanderCheckboxBorderColorChecked|&nbsp;|color1|
|expanderCheckboxBackgroundColor|&nbsp;|color1|
|expanderCheckboxBackgroundColorChecked|&nbsp;|color6|
|recordBorderColor|&nbsp;|color3|
|recordBorderColorHover|&nbsp;|color3|
|recordBorderColorOpen|&nbsp;|color4|
|recordTitleColor|&nbsp;|color6|
|recordTitleBackgroundColor|&nbsp;|color3|
|recordTitleButtonColor|&nbsp;|color6|
|recordTitleButtonColorHover|&nbsp;|color1|
|recordTitleButtonColorActive|&nbsp;|color6|
|recordTitleButtonBorderColor|&nbsp;|transparent|
|recordTitleButtonBorderColorHover|&nbsp;|color6|
|recordTitleButtonBorderColorActive|&nbsp;|color6|
|recordTitleButtonBackgroundColor|&nbsp;|transparent|
|recordTitleButtonBackgroundColorHover|&nbsp;|color6|
|recordTitleButtonBackgroundColorActive|&nbsp;|color1|
|recordFieldLabelColor|&nbsp;|color5|
|recordFieldInputColor|&nbsp;|color6|
|recordFieldInputColorDisabled|&nbsp;|color6|
|recordFieldInputBorderColor|&nbsp;|color6|
|recordFieldInputBorderColorDisabled|&nbsp;|color2|
|recordFieldInputBackgroundColor|&nbsp;|color1|
|recordFieldInputBackgroundColorDisabled|&nbsp;|color2|
|recordFieldButtonColor|&nbsp;|color1|
|recordFieldButtonBorderColor|&nbsp;|color6|
|recordFieldButtonBackgroundColor|&nbsp;|color6|
|recordFieldButtonOpacityDisabled|&nbsp;|65%|
|newRecordBorderColor|&nbsp;|color6|
|newRecordBorderColorHover|&nbsp;|color6|
|newRecordBorderColorOpen|&nbsp;|color6|
|newRecordTitleColor|&nbsp;|color1|
|newRecordTitleBackgroundColor|&nbsp;|color6|
|newRecordTitleButtonColor|&nbsp;|color1|
|newRecordTitleButtonColorHover|&nbsp;|color6|
|newRecordTitleButtonBorderColor|&nbsp;|transparent|
|newRecordTitleButtonBorderColorHover|&nbsp;|color1|
|newRecordTitleButtonBackgroundColor|&nbsp;|transparent|
|newRecordTitleButtonBackgroundColorHover|&nbsp;|color1|
|newRecordFieldLabelColor|&nbsp;|color6|
|newRecordFieldLabelColorRequired|&nbsp;|color5|
|newRecordFieldInputColor|&nbsp;|color6|
|newRecordFieldInputBorderColor|&nbsp;|color6|
|newRecordFieldInputBackgroundColor|&nbsp;|color1|
|newRecordSubmitButtonColor|&nbsp;|color1|
|newRecordSubmitButtonColorHover|&nbsp;|color1|
|newRecordSubmitButtonBorderColor|&nbsp;|color5|
|newRecordSubmitButtonBorderColorHover|&nbsp;|color6|
|newRecordSubmitButtonBackgroundColor|&nbsp;|color5|
|newRecordSubmitButtonBackgroundColorHover|&nbsp;|color6|
|createdRecordBorderColor|&nbsp;|color6|
|createdRecordBorderColorHover|&nbsp;|color6|
|createdRecordBorderColorOpen|&nbsp;|color6|
|createdRecordTitleColor|&nbsp;|color1|
|createdRecordTitleBackgroundColor|&nbsp;|color6|
|createdRecordTitleButtonColor|&nbsp;|color1|
|createdRecordTitleButtonColorHover|&nbsp;|color6|
|createdRecordTitleButtonBorderColor|&nbsp;|transparent|
|createdRecordTitleButtonBorderColorHover|&nbsp;|color1|
|createdRecordTitleButtonBackgroundColor|&nbsp;|transparent|
|createdRecordTitleButtonBackgroundColorHover|&nbsp;|color1|
|createdRecordFieldLabelColor|&nbsp;|color5|
|createdRecordFieldInputColor|&nbsp;|color6|
|createdRecordFieldInputBorderColor|&nbsp;|color2|
|createdRecordFieldInputBackgroundColor|&nbsp;|color2|

# Example theme

``` nonum
{
  "name": "Dodger Blue",
  "tabButtonColor": "#0059b3",
  "tabBorderColor": "#0059b3",
  "controlColor": "white",
  "controlColorHover": "white",
  "controlBorderColor": "#0073e6",
  "controlBorderColorHover": "#0059b3",
  "controlBackgroundColor": "#0073e6",
  "controlBackgroundColorHover": "#0059b3",
  "controlOpacityDisabled": "80%",
  "descriptionLinkColor": "forestgreen",
  "descriptionLinkColorHover": "pink",
  "checkboxLabelColor": "#000d1a",
  "checkboxBorderColor": "#4da6ff",
  "checkboxBorderColorChecked": "#0073e6",
  "checkboxBackgroundColor": "white",
  "checkboxBackgroundColorChecked": "#0073e6",
  "expanderCheckboxBorderColor": "#0073e6",
  "expanderCheckboxBorderColorChecked": "white",
  "expanderCheckboxBackgroundColor": "white",
  "expanderCheckboxBackgroundColorChecked": "#0073e6",
  "recordBorderColor": "#cce6ff",
  "recordBorderColorHover": "#cce6ff",
  "recordBorderColorOpen": "#80bfff",
  "recordTitleColor": "#003366",
  "recordTitleBackgroundColor": "#cce6ff",
  "recordTitleButtonColor": "#003366",
  "recordTitleButtonColorHover": "white",
  "recordTitleButtonColorActive": "#003366",
  "recordTitleButtonBorderColor": "transparent",
  "recordTitleButtonBorderColorHover": "#003366",
  "recordTitleButtonBorderColorActive": "#003366",
  "recordTitleButtonBackgroundColor": "transparent",
  "recordTitleButtonBackgroundColorHover": "#003366",
  "recordTitleButtonBackgroundColorActive": "white",
  "recordFieldLabelColor": "#1e90ff",
  "recordFieldInputColor": "#000d1a",
  "recordFieldInputColorDisabled": "#000d1a",
  "recordFieldInputBorderColor": "#00264d",
  "recordFieldInputBorderColorDisabled": "#e6f2ff",
  "recordFieldInputBackgroundColor": "white",
  "recordFieldInputBackgroundColorDisabled": "#e6f2ff",
  "recordFieldButtonColor": "white",
  "recordFieldButtonBorderColor": "#003366",
  "recordFieldButtonBackgroundColor": "#003366",
  "recordFieldButtonOpacityDisabled": "65%",
  "newRecordBorderColor": "#003366",
  "newRecordBorderColorHover": "#003366",
  "newRecordBorderColorOpen": "#003366",
  "newRecordTitleColor": "white",
  "newRecordTitleBackgroundColor": "#003366",
  "newRecordTitleButtonColor": "white",
  "newRecordTitleButtonColorHover": "#003366",
  "newRecordTitleButtonBorderColor": "transparent",
  "newRecordTitleButtonBorderColorHover": "white",
  "newRecordTitleButtonBackgroundColor": "transparent",
  "newRecordTitleButtonBackgroundColorHover": "white",
  "newRecordFieldLabelColor": "#003366",
  "newRecordFieldLabelColorRequired": "red",
  "newRecordFieldInputColor": "#000d1a",
  "newRecordFieldInputBorderColor": "#000d1a",
  "newRecordFieldInputBackgroundColor": "white",
  "newRecordSubmitButtonColor": "white",
  "newRecordSubmitButtonColorHover": "white",
  "newRecordSubmitButtonBorderColor": "#0073e6",
  "newRecordSubmitButtonBorderColorHover": "#0059b3",
  "newRecordSubmitButtonBackgroundColor": "#0073e6",
  "newRecordSubmitButtonBackgroundColorHover": "#0059b3",
  "createdRecordBorderColor": "#003366",
  "createdRecordBorderColorHover": "#003366",
  "createdRecordBorderColorOpen": "#003366",
  "createdRecordTitleColor": "white",
  "createdRecordTitleBackgroundColor": "#003366",
  "createdRecordTitleButtonColor": "white",
  "createdRecordTitleButtonColorHover": "#003366",
  "createdRecordTitleButtonBorderColor": "transparent",
  "createdRecordTitleButtonBorderColorHover": "white",
  "createdRecordTitleButtonBackgroundColor": "transparent",
  "createdRecordTitleButtonBackgroundColorHover": "white",
  "createdRecordFieldLabelColor": "#1e90ff",
  "createdRecordFieldInputColor": "#000d1a",
  "createdRecordFieldInputBorderColor": "#e6f2ff",
  "createdRecordFieldInputBackgroundColor": "#e6f2ff"
}
```

# Notes

1. State is tacked onto the end of a theme object property name.
1. Checks in checkboxes are always white.
1. Use the *themes* option to build a select element for the user.
1. See [Programmatically Lighten or Darken a hex color](https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors).
1. See [How to Calculate Lighter or Darker Hex Colors in JavaScript](https://www.sitepoint.com/javascript-generate-lighter-darker-color/).

