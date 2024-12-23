# url

<table class="options-table"><tr><th>url or urls is required</th></tr></table>

The `url` option provides HHDataList with a single endpoint to be used in all API requests. (To provide various endpoints for various types of API requests, use [urls](/en/hhdatalist/v0.0.2/options/urls/).) The `url` option must be a string.

# Example

``` js nonum
new HHDataList({
  url: 'https://hagenhaus.com/api/famous-trees',
});
```

HHDataList uses the `url` value for all API request types:

``` js nonum
{
  deleteRecord: `https://hagenhaus.com/api/famous-trees/${id}`;
  getRecord: `https://hagenhaus.com/api/famous-trees/${id}`;
  getRecords: `https://hagenhaus.com/api/famous-trees`;
  patchRecord: `https://hagenhaus.com/api/famous-trees/${id}`;
  postRecord: `https://hagenhaus.com/api/famous-trees`;
  putRecord: `https://hagenhaus.com/api/famous-trees/${id}`;
}
```
