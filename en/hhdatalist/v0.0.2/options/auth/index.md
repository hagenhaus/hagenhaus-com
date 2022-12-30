# auth

<table class="options-table">
  <tr><th>Necessity:</th><td>Contingent and exclusive with <code>auths</code></td></tr>
</table>

The `auth` option specifies an Authorization header that HHDataList uses for all API requests.

# Primary Example

``` js nonum
new HHDataList({
  auth: () => {
    let user = localStorage.getItem('user');
    return user ? `Bearer ${JSON.parse(user).token}` : null;
  },
});
```
