# colWidths

<table class="options-table">
  <tr><th>Necessity:</th><td>Optional</td></tr>
</table>

The `colWidths` option controls the initial column widths associated with the Fields tab, the Tools tab, and expanded records.  Below are default values:

# Primary Example

``` js nonum
new HHDataList({
  colWidths: {
    fields: { 
      value: 'narrow',
      showTool: true
    },
    records: { 
      value: 'narrow',
      hasTool: true,
      showTool: false,
      toolLabel: 'Column Width',
    },
    tools: { 
      value: 'narrow',
      showTool: true
    }
  },
});
```

* Valid `width` values are `['narrow','medium','wide']`.

