# themeDefinition

<table class="options-table"><tr><th>Optional</th></tr></table>

The `themeDefinition` option specifies the theme for the HHDataList instance. The option also controls the existence, visibility, and label of the corresponding *Theme* tool. To learn about themes, see [Themes and Palettes](/en/hhdatalist/v0.0.2/themes-and-palettes/).

# Examples

## Example 1

This example shows the default values for this option.

``` js nonum
new HHDataList({
  themeDefinition: {
    name: 'dodger blue',
    hasTool: true,
    showTool: false,
    toolLabel: 'Theme'
  },
});
```

## Example 2

This example shows a typical setting that relies on most of the defaults:

``` js nonum
new HHDataList({
  themeDefinition: {
    name: 'firebrick'
  },
});
```