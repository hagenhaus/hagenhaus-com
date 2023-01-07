# queryParams

<table class="options-table">
  <tr>
    <th>Necessity:</th>
    <td>Recommended</td>
  </tr>
</table>

The `queryParams` option ...

# Examples

## Example with defaults

This example shows the default values for this option.

``` js nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields', default: null },
    filter: { name: 'filter', none: null, default: null, placeholder: '' },
    order: { name: 'order', default: null, placeholder: '' },
    offset: { name: 'offset' },
    page: { name: 'page' },
    limit: { name: 'limit', choices: [5, 10, 20, 50, 100], default: 5, hasTool: true, showTool: false, toolLabel: 'Limit' }
  },
});
```

* Default for `queryParams.filter.default` is `queryParams.filter.none`.
* Default for `queryParams.offset.value` is `0`.
* Default for `queryParams.limit.default` is `queryParams.limit.choices[0]` 

