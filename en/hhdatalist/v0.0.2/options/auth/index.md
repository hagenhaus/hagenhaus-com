# auth

<table class="options-table"><tr><th>Optional</th></tr></table>

The `auth` option provides websites with a mechanism for adding an *Authorization* header to all API request sent by HHDataList. (To add various *Authorization* headers to various types of API requests, use [auths](/en/hhdatalist/v0.0.2/options/auths/).) The `auth` option value must be a function. 

# Example

In this example, `getBearerToken` is a developer-defined function:

``` js nonum
function getBearerToken() {
  let user = localStorage.getItem('user');
  return user ? `Bearer ${JSON.parse(user).token}` : null;
}
 
new HHDataList({
  auth: getBearerToken,
});
```

This `auth` function returns a string similar to the following:

``` js nonum
Bearer eyJhbGciOiJIUzI1N...
```

HHDataList uses the string in the *Authorization* header of all API requests:

``` js nonum
Authorization: Bearer eyJhbGciOiJIUzI1N...
```
