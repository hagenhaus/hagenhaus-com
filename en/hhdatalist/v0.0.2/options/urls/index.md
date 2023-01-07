# urls

<table class="options-table">
  <tr>
    <th>Necessity:</th>
    <td>Required and exclusive with <code>url</code></td>
  </tr>
</table>

The `urls` option ...

``` js nonum
new HHDataList({
  urls: '',
});
```

# Old Stuff

The *urls* object specifies the endpoints for all API operations. While the *urls* option is not required, the *options* argument passed to the HHDataList constructor must specify either a *url* or a *urls* option:

``` js nonum
new HHDataList({
  urls: {
    deleteRecord: (id) => `https://domain.com/api/v1/records/${id}`,
    getRecord: (id) => `https://domain.com/api/v1/records/${id}`,
    getRecords: `https://domain.com/api/v1/records`,
    patchRecord: (id) => `https://domain.com/api/v1/records/${id}`,
    postRecord: `https://domain.com/api/v1/records`,
    putRecord: (id) => `https://domain.com/api/v1/records/${id}`
  },
});
```

HHDataList passes `options.recordIdField` as the `id` argument to the client-defined functions in the `urls` object.

If the HHDataList instance supports only `GET` operations, the `urls` object need only specify `GET` properties:

``` js nonum
new HHDataList({
  urls: {
    getRecord: (id) => `https://openlibrary.org${id}.json`,
    getRecords: `https://openlibrary.org/search.json`
  },
});
```