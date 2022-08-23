# HHDataList Themes

A theme is a JavaScript object that specifies the colors, border colors, and background colors for the html elements that compose an HHDataList instance:

``` nonum
{
  name: 'Dodger Blue',
  tabButtonColor: '#0059b3',
  tabBorderColor: '#0059b3',
  controlColor: 'white',
  controlColorHover: 'white',
  ...
}
```

There are several ways to apply a theme to an HHDataList instance:

1. Apply a pre-made theme:

    ``` nonum
    new HHDataList({
      ...
      theme: 'Dodger Blue',
      ...
    });
    ```

    HHDataList includes the following pre-made themes:

    1. Dodger Blue
    1. sss
    1. sss
    1. sss

1. Apply a pre-made theme with overrides:

    ``` nonum
    new HHDataList({
      ...
      theme: 'Dodger Blue',
      themeOverrides: {
        name: "My Dodger Blue",
        descriptionLinkColor: '#145214',
        newRecordFieldLabelColorRequired: 'pink'
      }
      ...
    });
    ```

1. Apply the default *Dodger Blue* theme by omitting the *theme* option:

    ``` nonum
    new HHDataList({
      ...
    });
    ```

1. Create and apply a theme comprised of only essential properties:

    ``` nonum
    new HHDataList({
      ...
      theme: {
        name: 'My Custom Essential Theme',
        tabButtonColor: '#0059b3',
      },
      ...
    });
    ```

1. Create and apply a theme comprised of essential and one or more non-essential properties:

    ``` nonum
    new HHDataList({
      ...
      theme: {
        name: 'My Custom Theme',
        tabButtonColor: '#0059b3',
      },
      ...
    });
    ```

1. Specify a theme name and seed color:

# Notes

1. State is tacked onto the end of the theme object property name.
1. Checks in checkboxes are always white.
1. Use the *themes* option to build a select element for the user.
1. See [Programmatically Lighten or Darken a hex color](https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors).
1. See [How to Calculate Lighter or Darker Hex Colors in JavaScript](https://www.sitepoint.com/javascript-generate-lighter-darker-color/).