# contentMode

<table class="options-table">
  <tr><th>Necessity:</th><td>Optional</td></tr>
</table>

The `contentMode` option specifies the initial content type for expanded-record fields.

# Primary Example

``` js nonum
new HHDataList({
  contentMode: { 
    value: 'value',
    hasTool: true,
    showTool: false,
    toolLabel: 'Content',
  },
});
```
