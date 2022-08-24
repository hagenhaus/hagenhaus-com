# HHDataList Themes

A theme is a JavaScript object that specifies the colors, border colors, background colors, and, in a few cases, opacity for the html elements that compose an HHDataList instance. 

# Applying themes

There are several ways apply a theme to an HHDataList instance:

## Apply the default theme

Apply the default *Dodger Blue* theme by omitting the *theme* option:

``` nonum
new HHDataList({
});
```

## Apply a standard theme

Choose and apply a *Standard Theme*:

``` nonum
new HHDataList({
  theme: 'Dodger Blue'
});
```

HHDataList supports the following standard themes:

* Dodger Blue
* sss
* sss
* sss

## Apply a standard+ theme

Choose and apply a standard+ theme, one where specified properties override the corresponding properties of a standard theme:

``` nonum
new HHDataList({
  theme: 'Dodger Blue',
  themeOverrides:{
    name: "My Dodger Blue",
    descriptionLinkColor: '#145214',
    newRecordFieldLabelColorRequired: 'pink'
  }
});
```

## Apply a custom theme

Create and apply a custom theme:

``` nonum
new HHDataList({
  theme: {
    name: 'My Theme'
  },
  themeDefaults: {
    color1: '#ffffff',
    color2: '#e6f2ff',
    color3: '#cce6ff',
    color4: '#80bfff',
    color5: '#0073e6',
    color6: '#0059b3'
  }
});
```

## Apply a custom+ theme

Create and apply a custom+ theme, one where specified properties override specified defaults:

``` nonum
new HHDataList({
  theme: {
    name: 'My Theme',
    descriptionLinkColor: '#145214',
    newRecordFieldLabelColorRequired: 'pink'
  },
  themeDefaults: {
    color1: '#ffffff',
    color2: '#e6f2ff',
    color3: '#cce6ff',
    color4: '#80bfff',
    color5: '#0073e6',
    color6: '#0059b3'
  }
});
```

# Notes

1. State is tacked onto the end of the theme object property name.
1. Checks in checkboxes are always white.
1. Use the *themes* option to build a select element for the user.
1. See [Programmatically Lighten or Darken a hex color](https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors).
1. See [How to Calculate Lighter or Darker Hex Colors in JavaScript](https://www.sitepoint.com/javascript-generate-lighter-darker-color/).

