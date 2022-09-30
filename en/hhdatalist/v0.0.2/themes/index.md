# Themes

# Themes and palettes

## What is a theme?

## What is a palette?

# Standard themes

# Standard palettes

# Setting the global theme

The global theme applies to all HHDataList instances that do not specify an instance theme.

## Default global theme

Do nothing. HHDataList applies the default global theme to all HHDataList instances.

## Standard global theme

Set a global default theme from the theme list:

``` nonum
HHDataList.setDefaultTheme('Wheatgerm');
```

## Custom global theme

Add a custom theme to the list, and set it as the global default.

``` nonum
let theme = HHDataList.buildThemeFromThemeName('Silverberry', 'My Theme', { tabButtonColor: 'red' });
HHDataList.addTheme(theme);
HHDataList.setDefaultTheme('My Theme');
```

``` nonum
let theme = HHDataList.buildThemeFromPaletteName('Plum', 'My Theme', { tabButtonColor: 'red' });
HHDataList.addTheme(theme);
HHDataList.setDefaultTheme('My Theme');
```

``` nonum
let theme = HHDataList.buildThemeFromPalette({
  color1: '#ffffff',
  color2: '#eafaea',
  color3: '#d6f5d6',
  color4: '#c1f0c1',
  color5: '#239023',
  color6: '#145214'
  }, 'My Theme', { tabButtonColor: 'red' });
HHDataList.addTheme(theme);
HHDataList.setDefaultTheme('My Theme');
```

``` nonum
HHDataList.addTheme({
  name: 'My Theme',
  tabButtonColor: '#961d1d',
  tabBorderColor: '#961d1d',
  controlColor: '#ffffff',
  controlColorHover: '#ffffff',
  ...
});
HHDataList.setDefaultTheme('My Theme');
```

# Setting an instance theme

An instance theme overrides the global theme. You set an instance theme in the HHDataList constructor.

Note: Most common may be register a theme, and then specify in the instance.

## Registered instance theme

``` nonum
new HHDataList({
  themeName: 'Wheatgerm',
});
```

## Custom instance theme

May not need newThemeName. Perhaps call them anonymous themes.

``` nonum
new HHDataList({
  themeFromThemeName: {
    themeName: 'Silverberry',
    newThemeName: 'My Theme',
    overrides: {
      tabButtonColor: 'red'
    }
  },
});
```

``` nonum
new HHDataList({
  themeFromPaletteName: {
    paletteName: 'Silverberry',
    newThemeName: 'My Silverberry',
    overrides: {
      tabButtonColor: 'blue'
    }
  },
});
```

``` nonum
new HHDataList({
  themeFromPalette: {
    palette: {
      color1: '#ffffff',
      color2: '#fcf5e8',
      color3: '#f9ebd2',
      color4: '#f6e2bb',
      color5: '#e29d1d',
      color6: '#875e12'
    },
    newThemeName: 'My Silverberry',
    overrides: {
      tabButtonColor: 'green'
    }
  },
});
```

``` nonum
new HHDataList({
  theme: {
    name: 'My Theme',
    tabButtonColor: '#961d1d',
    tabBorderColor: '#961d1d',
    controlColor: '#ffffff',
    controlColorHover: '#ffffff',
    ...
  },
});
```
