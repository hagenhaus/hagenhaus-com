# auth

<table class="options-table">
  <tr><th>optional</th></tr>
</table>

The `auth` option specifies an Authorization header that HHDataList uses for all API requests.

# Example

``` js nonum
function getBearerToken() {
  let user = localStorage.getItem('user');
  return user ? `Bearer ${JSON.parse(user).token}` : null;
}

new HHDataList({
  auth: getBearerToken,
});
```
