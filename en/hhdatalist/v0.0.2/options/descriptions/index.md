# descriptions

<table class="options-table">
  <tr><th>Necessity:</th><td>Optional</td></tr>
</table>

The `descriptions` option specifies descriptions that appear at the top of tabs.

# Primary Example

``` js nonum
new HHDataList({
  descriptions: {
    home: 'This is the Home Tab description.',
    search: 'This is the Search Tab description.',
    fields: 'This is the Fields Tab description.',
    tools: 'This is the Tools Tab description.',
    new: 'This is the New Tab Create Form description.',
    created: 'This is New Tab Created Form description.',
    value: false,
    hasTool: true,
    showTool: false
  },
});
```