# descriptions

<table class="options-table"><tr><th>Optional</th></tr></table>

The `descriptions` option specifies descriptions that appear at the top of tabs.

# Examples

## Example 1

This example shows the default values for this option.

``` js nonum
new HHDataList({
  descriptions: {
    home: null,
    search: null,
    fields: null,
    tools: null,
    new: null,
    value: false,
    hasTool: true,
    showTool: false,
    toolLabel: 'Descriptions'
  },
});
```

## Example 2

To display a description on a tab, define the string for the tab, and set `descriptions.value` to `true`:

``` js nonum
new HHDataList({
  descriptions: {
    home: 'View authors from the <a href="https://openlibrary.org/developers">Open Library API</a>.',
    value: true,
  },
});
```

This option also controls the *Descriptions* tool on the *Tools* tab.