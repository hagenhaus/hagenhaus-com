# Themes and Palettes

This page demonstrates how to customize the look & feel of HHDataList instances.

# What is a theme?

A theme is a set of properties that associate names to HTML color values:

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

Note: Explain how to see a theme.

HHDataList maps theme properties to CSS properties:

DIAGRAM

[hhdatalist.css](https://hagenhaus.com/cdn/hhdatalist/v0.0.2/hhdatalist.min.css) maps CSS properties to HHDataList HTML elements:

DIAGRAM

In this way, theme properties map to HHDataList HTML elements:

DIAGRAM

## Theme List

## Default Theme

## Standard Themes

## Custom Themes

# What is a palette?

A palette is a set of properties that associate names to HTML color values:

``` js nonum
{
  name: 'Dodger Blue',
  color1: '#ffffff',
  color2: '#e6f2ff',
  color3: '#cce6ff',
  color4: '#4da6ff',
  color5: '#0073e6',
  color6: '#0059b3'
}
```

HHDataList maps palette properties to theme properties:

DIAGRAM

## Palette List

## Default Palette

## Standard Palettes

## Custom Palettes

# Applying standard themes

# Applying custom themes

# Theme functions

## addTheme

This function adds a theme to [Theme List](#theme-list). If the specified `theme` is valid and not already a member of [Theme List](#theme-list), this function adds `theme` to [Theme List](#theme-list) and returns `true`. Otherwise, the function returns `false`. See [validateTheme](#validatetheme) for the valid-theme criteria.

### Syntax

``` js nonum
boolean HHDataList.addTheme(
  theme  // object representing a valid theme
)
```

### Example

``` js nonum
let isAdded = HHDataList.addTheme({
  name: 'My Theme',
  tabButtonColor: '#961d1d',
  tabBorderColor: '#961d1d',
  controlColor: '#ffffff',
  controlColorHover: '#ffffff',
  controlBorderColor: '#da3e3e',
  ...
});
```

## addThemeFromPalette

This function creates a theme from a palette, and adds the theme to the [Theme List](#theme-list).

### Syntax

``` js nonum
HHDataList.addThemeFromPalette(
  palette,      // object representing a valid palette
  overrides,    // object with zero or more theme properties
  newThemeName  // string specifying a name
)
```

### Example

``` js nonum
let isAdded = HHDataList.addThemeFromPalette(
  HHDataList.getDefaultPalette(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Palette'
);
```

## addThemeFromPaletteName

This function creates a theme from a palette, and adds the theme to the [Theme List](#theme-list). 

### Syntax

``` js nonum
HHDataList.addThemeFromPaletteName(
  paletteName,  // string specifying a valid palette name
  overrides,    // object with zero or more theme properties
  newThemeName  // string specifying a name
)
```

### Example

``` js nonum
let isAdded = HHDataList.addThemeFromPaletteName(
  HHDataList.getDefaultPaletteName(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Palette Name'
);
```

## addThemeFromThemeName

This function ...

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let isAdded = HHDataList.addThemeFromThemeName(
  HHDataList.getDefaultThemeName(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Theme Name'
);
```

## buildThemeFromPalette

This function ...

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let theme = HHDataList.buildThemeFromPalette(
  HHDataList.getDefaultPalette(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Palette'
);
```

## buildThemeFromPaletteName

This function ...

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let theme = HHDataList.buildThemeFromPaletteName(
  HHDataList.getDefaultPaletteName(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Palette Name'
);
```

## buildThemeFromThemeName

This function ...

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let theme = HHDataList.buildThemeFromThemeName(
  HHDataList.getDefaultThemeName(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Theme Name'
);
```

## getDefaultTheme

This function returns the default theme as an object.

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let theme = HHDataList.getDefaultTheme();
```

Example return value:

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

## getDefaultThemeName

This function returns the default theme name as a string.

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let name = HHDataList.getDefaultThemeName();
```

Example return value:

``` js nonum
Dodger Blue
```

## getTheme

This function accepts a case-insensitive theme name and, if the theme exists on the [Theme List](#theme-list), returns the theme as an object. Otherwise, the function returns `null`.

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let theme = HHDataList.getTheme('firebrick');
```

Example return value:

``` js nonum
{
  name: 'Firebrick',
  tabButtonColor: '#961d1d',
  tabBorderColor: '#961d1d',
  controlColor: '#ffffff',
  controlColorHover: '#ffffff',
  controlBorderColor: '#da3e3e',
  ...
}
```

## getThemeCount

This function returns the number of themes on the [Theme List](#theme-list).

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let num = HHDataList.getThemeCount();
```

Example return value:

``` js nonum
13
```

## getThemeNames

This function returns an array of strings containing the names of the themes on the [Theme List](#theme-list).

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let names = HHDataList.getThemeNames();
```

Example return value:

``` js nonum
[
  'Dodger Blue', 
  'Firebrick', 
  'Forest Green', 
  'Lemon Chiffon', 
  'Orangewood', 
  'Plum', 
  'Seagreen', 
  'Shadowbox', 
  'Shoreline', 
  'Silverberry', 
  'Teal Ribbon', 
  'Thistle', 
  'Wheatgerm'
]
```

## hasTheme

This function returns `true` or `false` if the specified theme `does` or `does not` exist on the [Theme List](#theme-list).

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let ans = HHDataList.hasTheme('Frbrck');
```

## setDefaultThemeName

This function accepts a case-insensitive theme name and, if the theme exists on the [Theme List](#theme-list), sets the specified theme as the [Default Theme](#default-theme) and returns `true`. Otherwise, the function returns `false`.

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let isSet = HHDataList.setDefaultThemeName('Firebrick');
```

## validateTheme

This function returns `true` or `false` if the specified theme is `valid` or `invalid`. 

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let isValid = HHDataList.validateTheme({
  name: 'My Theme',
  tabButtonColor: '#961d1d',
  tabBorderColor: '#961d1d',
  controlColor: '#ffffff',
  controlColorHover: '#ffffff',
  controlBorderColor: '#da3e3e',
  ...
})
```

Criteria for a valid theme:

1. A theme must be of type `object`.
1. The property names must include all theme property names.
1. The property values must be of type `string`.

# Palette functions

## addPalette

This function validates the specified palette and, if valid and if not already present on the [Palette List](#palette-list), adds the palette to the [Palette List](#palette-list) and returns `true`. Otherwise, the function returns `false`.

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let isAdded = HHDataList.addPalette({
  name: 'My Palette',
  color1: '#ffffff',
  color2: '#e6f2ff',
  color3: '#cce6ff',
  color4: '#4da6ff',
  color5: '#0073e6',
  color6: '#0059b3'
})
```

See [validatePalette](#validatepalette) for the valid-palette criteria.

## getDefaultPalette

This function returns the default palette as an object.

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let palette = HHDataList.getDefaultPalette();
```

Example return value:

``` js nonum
{
  name: 'Dodger Blue',
  color1: '#ffffff',
  color2: '#e6f2ff',
  color3: '#cce6ff',
  color4: '#4da6ff',
  color5: '#0073e6',
  color6: '#0059b3'
}
```

## getDefaultPaletteName

This function returns the default palette name as a string.

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let name = HHDataList.getDefaultPaletteName();
```

Example return value:

``` js nonum
Dodger Blue
```

## getPalette

This function accepts a case-insensitive palette name and, if the palette exists on the [Palette List](#palette-list), returns the palette as an object. Otherwise, the function returns `null`.

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let palette = HHDataList.getPalette('firebrick');
```

Example return value:

``` js nonum
{
  name: 'Firebrick',
  color1: '#ffffff',
  color2: '#fbeaea',
  color3: '#f7d4d4',
  color4: '#f3bfbf',
  color5: '#da3e3e',
  color6: '#961d1d'
}
```

## getPaletteCount

This function returns the number of palettes on the [Palette List](#palette-list).

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let num = HHDataList.getPaletteCount();
```

Example return value:

``` js nonum
13
```

## getPaletteNames

This function returns an array of strings containing the names of the palettes on the [Palette List](#palette-list).

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let names = HHDataList.getPaletteNames();
```

Example return value:

``` js nonum
[
  'Dodger Blue', 
  'Firebrick', 
  'Forest Green', 
  'Lemon Chiffon', 
  'Orangewood', 
  'Plum', 
  'Seagreen', 
  'Shadowbox', 
  'Shoreline', 
  'Silverberry', 
  'Teal Ribbon', 
  'Thistle', 
  'Wheatgerm'
]
```

## hasPalette

This function returns `true` or `false` if the specified palette `does` or `does not` exist on the [Palette List](#palette-list).

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let ans = HHDataList.hasPalette('Frbrck');
```

## setDefaultPaletteName

This function accepts a case-insensitive palette name and, if the palette exists on the [Palette List](#palette-list), sets the specified palette as the [Default Palette](#default-palette) and returns `true`. Otherwise, the function returns `false`.

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let isSet = HHDataList.setDefaultPaletteName('Firebrick');
```

## validatePalette

This function returns `true` or `false` if the specified palette is `valid` or `invalid`. 

### Syntax

``` js nonum
sss
```

### Example

``` js nonum
let isValid = HHDataList.validatePalette({
  name: 'My Palette',
  color1: '#ffffff',
  color2: '#e6f2ff',
  color3: '#cce6ff',
  color4: '#4da6ff',
  color5: '#0073e6',
  color6: '#0059b3'
})
```

Criteria for a valid palette:

1. A palette must be of type `object`.
1. The property names must include `name`, `color1`, `color2`, `color3`, `color4`, `color5`, and `color6`.
1. The property values must be of type `string`.

<script>
  // console.log(HHDataList.addTheme({
  // }));

  // console.log(HHDataList.addThemeFromPalette(
  //   HHDataList.getDefaultPalette(),
  //   {
  //     tabButtonColor: 'red',
  //     tabBorderColor: 'red'
  //   },
  //   'My Theme From Palette'
  // ));

  // console.log(HHDataList.addThemeFromPaletteName(
  //   HHDataList.getDefaultPaletteName(),
  //   {
  //     tabButtonColor: 'red',
  //     tabBorderColor: 'red'
  //   },
  //   'My Theme From Palette Name'
  // ));

  // console.log(HHDataList.addThemeFromThemeName(
  //   HHDataList.getDefaultThemeName(),
  //   {
  //     tabButtonColor: 'red',
  //     tabBorderColor: 'red'
  //   },
  //   'My Theme From Theme Name'
  // ));

  // console.log(HHDataList.buildThemeFromPalette(
  //   HHDataList.getDefaultPalette(),
  //   {
  //     tabButtonColor: 'red',
  //     tabBorderColor: 'red'
  //   },
  //   'My Theme From Palette'
  // ));

  // console.log(HHDataList.buildThemeFromPaletteName(
  //   HHDataList.getDefaultPaletteName(),
  //   {
  //     tabButtonColor: 'red',
  //     tabBorderColor: 'red'
  //   },
  //   'My Theme From Palette Name'
  // ));

  // console.log(HHDataList.buildThemeFromThemeName(
  //   HHDataList.getDefaultThemeName(),
  //   {
  //     tabButtonColor: 'red',
  //     tabBorderColor: 'red'
  //   },
  //   'My Theme From Theme Name'
  // ));

  // var defTheme = HHDataList.getDefaultTheme();
  // console.log(JSON.stringify(defTheme, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'"));

  // let themeName = HHDataList.getDefaultThemeName();
  // console.log(themeName);

  // let theme = HHDataList.getTheme('firebrick');
  // console.log(theme ? JSON.stringify(theme, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'") : null);

  // let themeCount = HHDataList.getThemeCount();
  // console.log(themeCount);

  // let themeNames = HHDataList.getThemeNames();
  // console.log(themeNames);

  // let hasTheme = HHDataList.hasTheme('Frebrick');
  // console.log(hasTheme);

  // HHDataList.setDefaultThemeName('Firebrick');
  // console.log(HHDataList.getDefaultThemeName());

  // console.log(HHDataList.validateTheme({
  //   name: 'Dodger Blue',
  //   tabButtonColor: '#0059b3',
  //   tabBorderColor: '#0059b3',
  //   controlColor: '#ffffff',
  //   controlColorHover: '#ffffff',
  //   controlBorderColor: '#0073e6',
  //   controlBorderColorHover: '#0059b3',
  //   controlBackgroundColor: '#0073e6',
  //   controlBackgroundColorHover: '#0059b3',
  //   controlOpacityDisabled: '80%',
  //   toggleButtonColorOff: '#ffffff',
  //   toggleButtonColorOn: '#0059b3',
  //   toggleButtonBorderColorOff: '#0059b3',
  //   toggleButtonBorderColorOn: '#0059b3',
  //   tottleButtonBackgroundColorOff: '#0059b3',
  //   tottleButtonBackgroundColorOn: '#e6f2ff',
  //   descriptionLinkColor: '#0059b3',
  //   descriptionLinkColorHover: '#0073e6',
  //   checkableLabelColor: 'var(--bs-body-color)',
  //   checkableBorderColor: '#4da6ff',
  //   checkableBorderColorChecked: '#0059b3',
  //   checkableBackgroundColor: '#ffffff',
  //   checkableBackgroundColorChecked: '#0059b3',
  //   recordBorderColor: '#cce6ff',
  //   recordBorderColorHover: '#cce6ff',
  //   recordBorderColorOpen: '#4da6ff',
  //   recordTitleColor: '#0059b3',
  //   recordTitleBackgroundColor: '#cce6ff',
  //   recordTitleButtonColor: '#0059b3',
  //   recordTitleButtonColorHover: '#ffffff',
  //   recordTitleButtonColorActive: '#0059b3',
  //   recordTitleButtonBorderColor: 'transparent',
  //   recordTitleButtonBorderColorHover: '#0059b3',
  //   recordTitleButtonBorderColorActive: '#0059b3',
  //   recordTitleButtonBackgroundColor: 'transparent',
  //   recordTitleButtonBackgroundColorHover: '#0059b3',
  //   recordTitleButtonBackgroundColorActive: '#ffffff',
  //   recordFieldLabelColor: '#003366',
  //   recordFieldInputColor: '#0059b3',
  //   recordFieldInputColorDisabled: '#0059b3',
  //   recordFieldInputBorderColor: '#0059b3',
  //   recordFieldInputBorderColorDisabled: '#e6f2ff',
  //   recordFieldInputBackgroundColor: '#ffffff',
  //   recordFieldInputBackgroundColorDisabled: '#e6f2ff',
  //   recordFieldTextareaColor: '#0059b3',
  //   recordFieldTextareaColorDisabled: '#0059b3',
  //   recordFieldTextareaBorderColor: '#0059b3',
  //   recordFieldTextareaBorderColorDisabled: '#e6f2ff',
  //   recordFieldTextareaBackgroundColor: '#ffffff',
  //   recordFieldTextareaBackgroundColorDisabled: '#e6f2ff',
  //   recordFieldSelectColor: '#0059b3',
  //   recordFieldSelectBorderColor: '#e6f2ff',
  //   recordFieldSelectBackgroundColor: '#e6f2ff',
  //   recordFieldLinkColor: '#0059b3',
  //   recordFieldLinkBorderColor: '#e6f2ff',
  //   recordFieldLinkBackgroundColor: '#e6f2ff',
  //   recordFieldLinkColorHover: '#0073e6',
  //   recordFieldButtonColor: '#ffffff',
  //   recordFieldButtonBorderColor: '#0059b3',
  //   recordFieldButtonBackgroundColor: '#0059b3',
  //   recordFieldButtonOpacityDisabled: '65%',
  //   newRecordBorderColor: '#0059b3',
  //   newRecordBorderColorHover: '#0059b3',
  //   newRecordBorderColorOpen: '#0059b3',
  //   newRecordTitleColor: '#ffffff',
  //   newRecordTitleBackgroundColor: '#0059b3',
  //   newRecordTitleButtonColor: '#ffffff',
  //   newRecordTitleButtonColorHover: '#0059b3',
  //   newRecordTitleButtonBorderColor: 'transparent',
  //   newRecordTitleButtonBorderColorHover: '#ffffff',
  //   newRecordTitleButtonBackgroundColor: 'transparent',
  //   newRecordTitleButtonBackgroundColorHover: '#ffffff',
  //   newRecordFieldLabelColor: '#0059b3',
  //   newRecordFieldLabelColorRequired: '#0073e6',
  //   newRecordFieldInputColor: '#0059b3',
  //   newRecordFieldInputBorderColor: '#0059b3',
  //   newRecordFieldInputBackgroundColor: '#ffffff',
  //   newRecordSubmitButtonColor: '#ffffff',
  //   newRecordSubmitButtonColorHover: '#ffffff',
  //   newRecordSubmitButtonBorderColor: '#0073e6',
  //   newRecordSubmitButtonBorderColorHover: '#0059b3',
  //   newRecordSubmitButtonBackgroundColor: '#0073e6',
  //   newRecordSubmitButtonBackgroundColorHover: '#0059b3',
  //   createdRecordBorderColor: '#0059b3',
  //   createdRecordBorderColorHover: '#0059b3',
  //   createdRecordBorderColorOpen: '#0059b3',
  //   createdRecordTitleColor: '#ffffff',
  //   createdRecordTitleBackgroundColor: '#0059b3',
  //   createdRecordTitleButtonColor: '#ffffff',
  //   createdRecordTitleButtonColorHover: '#0059b3',
  //   createdRecordTitleButtonBorderColor: 'transparent',
  //   createdRecordTitleButtonBorderColorHover: '#ffffff',
  //   createdRecordTitleButtonBackgroundColor: 'transparent',
  //   createdRecordTitleButtonBackgroundColorHover: '#ffffff',
  //   createdRecordFieldLabelColor: '#0073e6',
  //   createdRecordFieldInputColor: '#0059b3',
  //   createdRecordFieldInputBorderColor: '#e6f2ff',
  //   createdRecordFieldInputBackgroundColor: '#e6f2ff'
  // }));

  // console.log(HHDataList.addPalette({
  //   name: 'My Palette',
  //   color1: '#ffffff',
  //   color2: '#e6f2ff',
  //   color3: '#cce6ff',
  //   color4: '#4da6ff',
  //   color5: '#0073e6',
  //   color6: '#0059b3'
  // }));

  // var defPalette = HHDataList.getDefaultPalette();
  // console.log(JSON.stringify(defPalette, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'"));

  // let paletteName = HHDataList.getDefaultPaletteName();
  // console.log(paletteName);

  // let palette = HHDataList.getPalette('firebrick');
  // console.log(palette ? JSON.stringify(palette, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'") : null);

  // let paletteCount = HHDataList.getPaletteCount();
  // console.log(paletteCount);

  // let paletteNames = HHDataList.getPaletteNames();
  // console.log(paletteNames);

  // let hasPalette = HHDataList.hasPalette('Frebrick');
  // console.log(hasPalette);

  // HHDataList.setDefaultPaletteName('Firebrick');
  // console.log(HHDataList.getDefaultPaletteName());

  // console.log(HHDataList.validatePalette({
  //   name: 'My Palette',
  //   color1: '#ffffff',
  //   color2: '#e6f2ff',
  //   color3: '#cce6ff',
  //   color4: '#4da6ff',
  //   color5: '#0073e6',
  //   color6: '#0059b3'
  // }));
</script>