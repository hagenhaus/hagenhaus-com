# auths

<table class="options-table">
  <tr><th>Necessity:</th><td>Contingent and exclusive with <code>auth</code></td></tr>
</table>

The `auths` option specifies zero or more Authorization headers for zero or more types of API requests.

# Primary Example

``` js nonum
function getBearerToken() {
  let user = localStorage.getItem('user');
  return user ? `Bearer ${JSON.parse(user).token}` : null;
}
 
new HHDataList({
  auths: {
    deleteRecord: getBearerToken,
    getRecord: getBearerToken,
    getRecords: getBearerToken,
    patchRecord: getBearerToken,
    postRecord: getBearerToken,
    putRecord: getBearerToken
  },
});
```
