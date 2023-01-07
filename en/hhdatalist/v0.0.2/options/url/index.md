# url

<table class="options-table">
  <tr>
    <th>Necessity:</th>
    <td>Required and exclusive with <code>urls</code></td>
  </tr>
</table>

The `url` option ...

``` js nonum
new HHDataList({
  url: '',
});
```

# Old Stuff

|Operation|Endpoint|
|-|-|
|`DELETE`|`https://domain.com/api/v1/records/${options.recordIdField}`|
|`GET ONE`|`https://domain.com/api/v1/records/${options.recordIdField}`|
|`GET MANY`|`https://domain.com/api/v1/records`|
|`PATCH`|`https://domain.com/api/v1/records/${options.recordIdField}`|
|`POST`|`https://domain.com/api/v1/records`|
|`PUT`|`https://domain.com/api/v1/records/${options.recordIdField}`|
