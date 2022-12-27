# colWidths

The `colWidths` option controls the initial column widths associated with the Fields tab, Tools tab, and expanded records. Valid `width` values are `['narrow','medium','wide']`. Below are default values:

``` js nonum
new HHDataList({
  colWidths: {
    fields: { width: 'narrow', showTool: false },
    tools: { width: 'narrow', showTool: false },
    records: { width: 'narrow', hasTool: true, showTool: false }
  },
});
```

