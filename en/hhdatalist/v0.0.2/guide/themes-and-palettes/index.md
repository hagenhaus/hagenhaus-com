# Themes and Palettes

This page demonstrates how to theme HHDataList instances.

# What is a theme?

A theme is a set of properties that associate names with HTML colors (#1 in the diagram below). HHDataList applies theme properties to HTML styles associated with an HTML element (#2). A CSS file associates these styles with aspects of HHDataList HTML elements (#3).

<p><img src="apply-theme.png" class="img-fluid d-block" width=800 loading="lazy"></p>

## Theme List

HHDataList maintains one Theme List for a website (in browser memory). The Theme List always contains at least one theme (the [Default Theme](#default-theme)). It can contain standard and/or custom themes. Which themes belong to the Theme List is customizable. Only themes on the Theme List can be applied to HHDataList instances. HHDataList provides the following functions for working with the Theme List:

* [addAllStandardThemes]()
* [addStandardTheme]()
* [addStandardThemes]()
* [addTheme]()
* [addThemeFromPalette]()
* [addThemeFromPaletteName]()
* [addThemeFromThemeName]()
* [getTheme]()
* [getThemes]()
* [getThemeCount]()
* [getThemeNames]()
* [hasTheme]()

## Default Theme

HHDataList maintains a Default Theme which resides on the Theme List and applies to all HHDataList instances except for those explicitly assigned other themes. Initially, HHDataList sets the Default Theme to the standard theme *Dodger Blue*, but the function [setDefaultThemeName](#setdefaultthemename) can override this initial setting with another standard theme or a custom theme. HHDataList provides the following functions for working with the Default Theme:

* [getDefaultTheme](#getdefaulttheme)
* [getDefaultThemeName](#getdefaultthemename)
* [setDefaultThemeName](#setdefaultthemename)

## Standard Themes

HHDataList supplies 13 standard themes. One, *Dodger Blue*, is built into HHDataList. The other 12 are available by including [hhdatalist-themes.js](https://hagenhaus.com/cdn/hhdatalist/v0.0.2/hhdatalist-themes.js) and invoking one or more of the following functions:

* [addAllStandardThemes]()
* [addStandardTheme]()
* [addStandardThemes]()

Click the *Theme* dropdown in the instance below to view the standard themes:

<div id="standard-themes-datalist" class="hh-data-list my-4"></div>
<script>
  var options = DLTrees002.options('standard-themes-datalist');
  options.descriptions.value = false;
  options.expand.showTool = false;
  options.queryParams.limit.showTool = false;
  options.themeDefinition.showTool = true;
  new HHDataList(options);
</script>

> **Note**: If you have skills and training in the area of website aesthetics, and if would like to improve any of the HHDataList standard themes, (1) become familiar with the [Theming](#theming) section of this page, (2) build a theme that improves upon a standard theme, and (3) contact me via [Gitter](https://gitter.im/hagenhaus/hhdatalist). I would appreciate the help. Thanks.

## Custom Themes

HHDataList facilitates the generation and application of *temporary* and *permanent* custom themes. Temporary themes are built and applied on the fly with the following functions:

* [addThemeFromPalette]()
* [addThemeFromPaletteName]()
* [addThemeFromThemeName]()

Permanent themes are built with the one of the first three functions below, saved to a file such as `my-hhdatalist-themes.js` which is included in the main html page, and applied with the last function below:

* [buildThemeFromPalette]()
* [buildThemeFromPaletteName]()
* [buildThemeFromThemeName]()
* [addTheme]()

See [Theming](#theming) for details. 

# What is a palette?

Like a theme, a palette is also a set of properties that associate names with HTML colors (#1 in the diagram below). The purpose of a palette, however, is to help generate themes (#2).

<p><img src="palette-to-theme.png" class="img-fluid d-block" width=700 loading="lazy"></p>

Palettes serve as input to the following functions:

* [addThemeFromPalette](#addthemefrompalette)
* [addThemeFromPaletteName](#addthemefrompalettename)
* [buildThemeFromPalette](#buildthemefrompalette)
* [buildThemeFromPaletteName](#buildthemefrompalettename)

Palette design often starts by assigning shades of the same color to palette properties where `color1` is white, `color2` is very light, `color3` is light, `color4` is medium light, `color5` is medium, and `color6` is medium dark. Shades vary depending on the color. The following seems to work for *Dodger Blue*:

<p><img src="palette-design.png" class="img-fluid d-block" width=700 loading="lazy"></p>

## Palette List

HHDataList maintains one Palette List for a website (in browser memory). The Palette List always contains at least one palette (the [Default Palette](#default-palette)). It can contain standard and/or custom palettes. Which palettes belong to the Palette List is customizable.

## Default Palette

## Standard Palettes

## Custom Palettes

See [Theming](#theming) for details. 

# Theming

* How do you add only two of the standard themes?

## Generating themes

* Applying a standard theme
* Generating a theme
* Applying a custom theme

# Theme Functions

All theme functions are static class functions.

## addAllStandardThemes

This function adds all the standard themes to the [Theme List](#theme-list).

### Syntax

``` html nonum
<script src="https://hagenhaus.com/cdn/hhdatalist/v0.0.2/hhdatalist-themes.js"></script>
```

``` js nonum
HHDataList.addAllStandardThemes()
```

## addStandardTheme

This function adds the theme referenced by the theme name to the [Theme List](#theme-list).

### Syntax

``` html nonum
<script src="https://hagenhaus.com/cdn/hhdatalist/v0.0.2/hhdatalist-themes.js"></script>
```

``` js nonum
HHDataList.addStandardTheme(
  themeName  // case-insensitive string
)
```

### Example

``` js nonum
HHDataList.addStandardTheme('firebriCK');
```

## addStandardThemes

This function adds the themes referenced by the array of theme names to the [Theme List](#theme-list).

### Syntax

``` html nonum
<script src="https://hagenhaus.com/cdn/hhdatalist/v0.0.2/hhdatalist-themes.js"></script>
```

``` js nonum
HHDataList.addStandardThemes(
  themeNames  // array of case-insensitive strings
)
```

### Example

``` js nonum
HHDataList.addStandardThemes(['firebriCK', 'foRESt gREen']);
```

## addTheme

This function adds a theme to the [Theme List](#theme-list). 

### Syntax

``` js nonum
HHDataList.addTheme(
  theme  // object
)
```

* If successful, returns `true`.
* If `theme` is invalid, returns `false`.
* If `theme` is already on [Theme List](#theme-list), returns `false`.

This function requires the generation of a theme prior to invocation (see [Generating themes](#generating-themes)). By contrast, the other add functions (1) generate themes from existing palettes or themes, and (2) add the newly generated themes to the [Theme List](#theme-list). 

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

This function generates a theme from the supplied palette, and adds it to the [Theme List](#theme-list).

### Syntax

``` js nonum
HHDataList.addThemeFromPalette(
  palette,      // object
  overrides,    // object
  newThemeName  // string
)
```

* If successful, returns `true`.
* If `palette` is invalid, returns `false`.
* If `newThemeName` represents a theme already on [Theme List](#theme-list), returns `false`.
* `overrides` is a partial theme.

This function generates a new theme from `palette`, names it `newThemeName`, replaces properties in it with properties included in `overrides`, and adds it to the [Theme List](#theme-list).

### Example

``` js nonum
let isAdded = HHDataList.addThemeFromPalette(
  HHDataList.getDefaultPalette(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Palette'
);
```

## addThemeFromPaletteName

This function generates a theme from the palette on the [Palette List](#palette-list) referenced by the supplied palette name, and adds it to the [Theme List](#theme-list). 

### Syntax

``` js nonum
HHDataList.addThemeFromPaletteName(
  paletteName,  // string
  overrides,    // object
  newThemeName  // string
)
```

* If successful, returns `true`.
* If `paletteName` does not refer to a palette on the [Palette List](#palette-list), returns `false`.
* If `newThemeName` represents a theme already on [Theme List](#theme-list), returns `false`.
* `paletteName` is case-insensitive.
* `overrides` is a partial theme.

This function generates a new theme from the palette on the [Palette List](#palette-list) referenced by `paletteName`, names it `newThemeName`, replaces properties in it with properties included in `overrides`, and adds it to the [Theme List](#theme-list).

### Example

``` js nonum
let isAdded = HHDataList.addThemeFromPaletteName(
  HHDataList.getDefaultPaletteName(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Palette Name'
);
```

## addThemeFromThemeName

This function generates a theme from the theme on the [Theme List](#theme-list) referenced by the supplied theme name, and adds it to the [Theme List](#theme-list).

### Syntax

``` js nonum
HHDataList.addThemeFromThemeName(
  themeName,    // string
  overrides,    // object
  newThemeName  // string
)
```

* If successful, returns `true`.
* If `themeName` does not refer to a theme on the [Theme List](#theme-list), returns `false`.
* If `newThemeName` represents a theme already on [Theme List](#theme-list), returns `false`.
* `themeName` is case-insensitive.
* `overrides` is a partial theme.

This function generates a new theme from the theme on the [Theme List](#theme-list) referenced by `themeName`, names it `newThemeName`, replaces properties in it with properties included in `overrides`, and adds it to the [Theme List](#theme-list).

### Example

``` js nonum
let isAdded = HHDataList.addThemeFromThemeName(
  HHDataList.getDefaultThemeName(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Theme Name'
);
```

## buildThemeFromPalette

This function generates a theme from the supplied palette, and returns it.

### Syntax

``` js nonum
HHDataList.buildThemeFromPalette(
  palette,      // object
  overrides,    // object
  newThemeName  // string
)
```

* If successful, returns a valid theme object.
* If `palette` is invalid, returns `null`.
* If `newThemeName` represents a theme already on [Theme List](#theme-list), returns `null`.
* `overrides` is a partial theme.

This function generates a new theme from `palette`, names it `newThemeName`, and replaces properties in it with properties included in `overrides`.

### Example

``` js nonum
let theme = HHDataList.buildThemeFromPalette(
  HHDataList.getDefaultPalette(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Palette'
);
```

## buildThemeFromPaletteName

This function generates a theme from the palette on the [Palette List](#palette-list) referenced by the supplied palette name, and returns it.

### Syntax

``` js nonum
HHDataList.buildThemeFromPaletteName(
  paletteName,  // string
  overrides,    // object
  newThemeName  // string
)
```

* If successful, returns a valid theme object.
* If `paletteName` does not refer to a palette on the [Palette List](#palette-list), returns `null`.
* If `newThemeName` represents a theme already on [Theme List](#theme-list), returns `null`.
* `paletteName` is case-insensitive.
* `overrides` is a partial theme.

This function generates a new theme from the palette on the [Palette List](#palette-list) referenced by `paletteName`, names it `newThemeName`, and replaces properties in it with properties included in `overrides`.

### Example

``` js nonum
let theme = HHDataList.buildThemeFromPaletteName(
  HHDataList.getDefaultPaletteName(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Palette Name'
);
```

## buildThemeFromThemeName

This function generates a theme from the theme on the [Theme List](#theme-list) referenced by the supplied theme name, and returns it.

### Syntax

``` js nonum
HHDataList.buildThemeFromThemeName(
  themeName,    // string
  overrides,    // object
  newThemeName  // string
)
```

* If successful, returns a valid theme object.
* If `themeName` does not refer to a theme on the [Theme List](#theme-list), returns `null`.
* If `newThemeName` represents a theme already on [Theme List](#theme-list), returns `null`.
* `themeName` is case-insensitive.
* `overrides` is a partial theme.

This function generates a new theme from the theme on the [Theme List](#theme-list) referenced by `themeName`, names it `newThemeName`, and replaces properties in it with properties included in `overrides`. 

### Example

``` js nonum
let theme = HHDataList.buildThemeFromThemeName(
  HHDataList.getDefaultThemeName(),
  { tabButtonColor: 'red', tabBorderColor: 'red' },
  'My Theme From Theme Name'
);
```

## getDefaultTheme

This function returns the [Default Theme](#default-theme) as an object.

### Syntax

``` js nonum
HHDataList.getDefaultTheme()
```

### Example

``` js nonum
let theme = HHDataList.getDefaultTheme();
```

## getDefaultThemeName

This function returns the [Default Theme](#default-theme) name as a string.

### Syntax

``` js nonum
HHDataList.getDefaultThemeName()
```

### Example

``` js nonum
let themeName = HHDataList.getDefaultThemeName();
```

## getTheme

This function returns the theme on [Theme List](#theme-list) referenced by the supplied theme name.

### Syntax

``` js nonum
HHDataList.getTheme(
  themeName  // string
)
```

* If successful, returns a valid theme object.
* If `themeName` does not refer to a theme on [Theme List](#theme-list), returns `null`.
* `themeName` is case-insensitive.

### Example

``` js nonum
let theme = HHDataList.getTheme('firebrick');
```

## getThemes

This function returns an array of all themes on [Theme List](#theme-list).

### Syntax

``` js nonum
HHDataList.getThemes()
```

### Example

``` js nonum
let themes = HHDataList.getThemes();
```

## getThemeCount

This function returns the number of themes on [Theme List](#theme-list).

### Syntax

``` js nonum
HHDataList.getThemeCount()
```

### Example

``` js nonum
let count = HHDataList.getThemeCount();
```

## getThemeNames

This function returns an array of strings containing the names of the themes on [Theme List](#theme-list).

### Syntax

``` js nonum
HHDataList.getThemeNames()
```

### Example

``` js nonum
let themeNames = HHDataList.getThemeNames();
```

### Example return value

``` js nonum
[
  'Dodger Blue', 
  'Firebrick', 
  'Forest Green', 
  'Lemon Chiffon', 
  'Orangewood'
]
```

## hasTheme

This function returns `true` or `false` if the specified theme `does` or `does not` exist on [Theme List](#theme-list).

### Syntax

``` js nonum
HHDataList.hasTheme(
  themeName  // string
)
```

* If `themeName` refers to a theme on [Theme List](#theme-list), returns `true`.
* `themeName` is case-insensitive.

### Example

``` js nonum
let ans = HHDataList.hasTheme('Frbrck');
```

## setDefaultThemeName

This function establishes a new [Default Theme](#default-theme).

### Syntax

``` js nonum
HHDataList.setDefaultThemeName(
  themeName  // string
)
```

* If successful, returns `true`.
* If `themeName` does not refer to a theme on [Theme List](#theme-list), returns `false`.
* `themeName` is case-insensitive.

### Example

``` js nonum
let isSet = HHDataList.setDefaultThemeName('Firebrick');
```

## validateTheme

This function validates a theme. 

### Syntax

``` js nonum
HHDataList.validateTheme(
  theme  // object
)
```

* If valid, returns `true`.
* If invalid, returns `false`.
* Criteria for a valid theme:
    1. A theme must be of type `object`.
    1. The property names must include all theme property names.
    1. The property values must be of type `string`.

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

# Palette Functions

All palette functions are static class functions.

## addAllStandardPalettes

This function adds all the standard palettes to the [Palette List](#palette-list).

### Syntax

``` html nonum
<script src="https://hagenhaus.com/cdn/hhdatalist/v0.0.2/hhdatalist-palettes.js"></script>
```

``` js nonum
HHDataList.addAllStandardPalettes()
```

## addStandardPalette

This function adds the palette referenced by the palette name to the [Palette List](#palette-list).

### Syntax

``` html nonum
<script src="https://hagenhaus.com/cdn/hhdatalist/v0.0.2/hhdatalist-palettes.js"></script>
```

``` js nonum
HHDataList.addStandardPalette(
  paletteName  // case-insensitive string
)
```

### Example

``` js nonum
HHDataList.addStandardPalette('firebriCK');
```

## addStandardPalettes

This function adds the palettes referenced by the array of palette names to the [Palette List](#palette-list).

### Syntax

``` html nonum
<script src="https://hagenhaus.com/cdn/hhdatalist/v0.0.2/hhdatalist-palettes.js"></script>
```

``` js nonum
HHDataList.addStandardPalettes(
  paletteNames  // array of case-insensitive strings
)
```

### Example

``` js nonum
HHDataList.addStandardPalettes(['firebriCK', 'foRESt gREen']);
```

## addPalette

This function adds a palette to the [Palette List](#palette-list).

### Syntax

``` js nonum
HHDataList.addPalette(
  palette  // object
)
```

* If successful, returns `true`.
* If `palette` is invalid, returns `false`.
* If `palette` is already on [Palette List](#palette-list), returns `false`.

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

## getDefaultPalette

This function returns the [Default Palette](#default-palette) as an object.

### Syntax

``` js nonum
HHDataList.getDefaultPalette()
```

### Example

``` js nonum
let palette = HHDataList.getDefaultPalette();
```

## getDefaultPaletteName

This function returns the [Default Palette](#default-palette) name as a string.

### Syntax

``` js nonum
HHDataList.getDefaultPaletteName()
```

### Example

``` js nonum
let name = HHDataList.getDefaultPaletteName();
```

## getPalette

This function returns the palette on the [Palette List](#palette-list) referenced by the supplied palette name.

### Syntax

``` js nonum
HHDataList.getPalette(
  paletteName  // string
)
```

* If successful, returns a valid palette object.
* If `paletteName` does not refer to a palette on the [Palette List](#palette-list), returns null.
* `paletteName` is case-insensitive.

### Example

``` js nonum
let palette = HHDataList.getPalette('firebrick');
```

## getPaletteCount

This function returns the number of palettes on the [Palette List](#palette-list).

### Syntax

``` js nonum
HHDataList.getPaletteCount()
```

### Example

``` js nonum
let num = HHDataList.getPaletteCount();
```

## getPaletteNames

This function returns an array of strings containing the names of the palettes on the [Palette List](#palette-list).

### Syntax

``` js nonum
HHDataList.getPaletteNames()
```

### Example

``` js nonum
let names = HHDataList.getPaletteNames();
```

### Example return value

``` js nonum
[
  'Dodger Blue', 
  'Firebrick', 
  'Forest Green', 
  'Lemon Chiffon', 
  'Orangewood'
]
```

## hasPalette

This function returns `true` or `false` if the specified palette `does` or `does not` exist on the [Palette List](#palette-list).

### Syntax

``` js nonum
HHDataList.hasPalette(
  paletteName  // string
)
```

* If paletteName refers to a palette on the [Palette List](#palette-list), returns true.
* paletteName is case-insensitive.

### Example

``` js nonum
let ans = HHDataList.hasPalette('Frbrck');
```

## setDefaultPaletteName

This function establishes a new [Default Palette](#default-palette).

### Syntax

``` js nonum
HHDataList.setDefaultPaletteName(
  paletteName  // string
)
```

If successful, returns true.
If `paletteName` does not refer to a palette on the [Palette List](#palette-list), returns false.
`paletteName` is case-insensitive.

### Example

``` js nonum
let isSet = HHDataList.setDefaultPaletteName('Firebrick');
```

## validatePalette

This function validates a palette.

### Syntax

``` js nonum
HHDataList.validatePalette(
  palette  // object
)
```

* If valid, returns true.
* If invalid, returns false.
* Criteria for a valid palette:
    1. A palette must be of type `object`.
    1. The property names must include `name`, `color1`, `color2`, `color3`, `color4`, `color5`, `color6`.
    1. The property values must be of type `string`.

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