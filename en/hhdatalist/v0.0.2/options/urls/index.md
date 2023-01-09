# urls

<table class="options-table"><tr><th>url or urls is required</th></tr></table>

The `urls` option provides HHDataList with various endpoints for various types of API requests. (To provide a single endpoint to be used for all API requests, use [url](/en/hhdatalist/v0.0.2/options/url/).) The `urls` option must be an object.

# Examples

## Example 1

This example shows a fully specified option:

``` js nonum
new HHDataList({
  urls: {
    deleteRecord: (id) => `https://domain.com/api/v1/records/${id}`,
    getRecord: (id) => `https://domain.com/api/v1/records/${id}`,
    getRecords: 'https://domain.com/api/v1/records',
    patchRecord: (id) => `https://domain.com/api/v1/records/${id}`,
    postRecord: 'https://domain.com/api/v1/records',
    putRecord: (id) => `https://domain.com/api/v1/records/${id}`
  },
});
```

HHDataList passes `options.recordIdField` as the `id` argument to the client-defined functions in the `urls` object.

## Example 2

This example shows the `urls` object used for the [Open Library Books API](https://openlibrary.org/dev/docs/api/books).

``` js nonum
new HHDataList({
  urls: {
    getRecord: (id) => `https://openlibrary.org${id}.json`,
    getRecords: 'https://openlibrary.org/search.json'
  },
});
```