# queryParams

<table class="options-table">
<tr><th>Required:</th><td><code>true</code></td></tr>
<tr><th>Type:</th><td><code>object</code></td></tr>
</table>

The *queryParams* object tells HHDataList how to specify query parameters in requests to the underlying API.

Showing defaults:

``` nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields', default: '*' },
    filter: { name: 'q', none: '*', default: 'snow' },
    order: { name: 'sort' },
    page: { name: 'page' },
    limit: { name: 'limit', choices: [1, 3, 5, 10, 20, 50, 100], default: 5 }
  },
});
````

## params.fields

## params.filter

Remember `none` property.

## params.order

## params.page

``` nonum
https://hagenhaus.com:3002/api/baseball/v1/players?page=1
```

## params.limit

The `pageSize` option sets the initial value of the `Page Size` widget. The data type is `number`. The default value is `choices[0]`. Developers can override.

If `pageSize` is initialized to a `value` that is not a member of `choices`, then the value is ignored, and `value` is set to `choices[0]`. Users can override via the `Page Size` widget.

The `choices` property sets all possible options of the `Page Size` widget. The data type is `array`. The default value is `[5, 10, 20, 50, 100]`. Developers can override. Users cannot override.