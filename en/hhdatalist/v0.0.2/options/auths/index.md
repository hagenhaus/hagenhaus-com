# auths

<table class="options-table"><tr><th>optional</th></tr></table>

The `auths` option provides websites with a mechanism for adding various *Authorization* headers to various types of API requests sent by HHDataList. (To add the same *Authorization* header to all API requests, use [auth](/en/hhdatalist/v0.0.2/options/auth/).) The `auths` option value must be an object with **zero or more** of the properties seen in the example below. Each property value must be a function:

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

Each function returns a string similar to the following:

``` js nonum
Bearer eyJhbGciOiJIUzI1N...
```

HHDataList uses the string in the *Authorization* header of the API request:

``` js nonum
Authorization: Bearer eyJhbGciOiJIUzI1N...
```
