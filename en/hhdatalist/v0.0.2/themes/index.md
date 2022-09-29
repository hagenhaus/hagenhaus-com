# Themes

# What is a theme?

# What is a palette?

# Standard themes

# Standard palettes

# Setting the global theme

The global theme applies to all HHDataList instances that do not specify an instance theme.

## Default global theme

Do nothing. HHDataList applies the default global theme to all HHDataList instances.

## Standard global theme

Set a global default theme from the theme list:

``` nonum
HHDataList.setDefaultTheme('wheatgerm');
```

## Custom global theme

Add a custom theme to the list, and set it as the global default.

``` nonum
HHDataList.addThemeFromThemeName('silverberry', 'My Silverberry', { tabButtonColor: 'red' });
HHDataList.setDefaultTheme('My Silverberry');
```

``` nonum
HHDataList.addThemeFromPaletteName('plum', 'My Plum', { tabButtonColor: 'red' });
HHDataList.setDefaultTheme('My Plum');
```

# Setting an instance theme

An instance theme overrides the global theme.

## Standard instance theme

``` nonum
new HHDataList({
  themeName: 'dodger blue',
});
```

1. sss

    ``` nonum
    new HHDataList({
      themeFromThemeName: {
        themeName: 'silverberry',
        newThemeName: 'My Silverberry',
        overrides: {
          tabButtonColor: 'maroon'
        }
      },
    });
    ```

1. sss

    ``` nonum
    new HHDataList({
      themeFromPaletteName: {
        paletteName: 'silverberry',
        newThemeName: 'My Silverberry',
        overrides: {
          tabButtonColor: 'maroon'
        }
      },
    });
    ```

1. sss

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
          tabButtonColor: 'maroon'
        }
      },
    });
    ```

1. sss

    ``` nonum
    new HHDataList({
      theme: {
      },
    });
    ```
