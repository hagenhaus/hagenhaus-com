# Authorization

HHDataList enables websites to add *Authorization* headers to API requests by defining a function that returns an *Authorization* header value. Here is an example:

``` js nonum
function getBearerToken() {
  let user = localStorage.getItem('user');
  return user ? `Bearer ${JSON.parse(user).token}` : null;
}
```

This function might return the following string:

``` js nonum
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjcyOTExMjQxLCJleHAiOjE2NzI5OTc2NDF9.gVKDfWusUPRd4zo_7FEDxPCmPH_coJKHFhGsNZWKqRo
```

The [auths](/en/hhdatalist/v0.0.2/options/auths/) option adds the authorization header to specific API request types:

``` js nonum
new HHDataList({
  auths: {
    deleteRecord: getBearerToken,
    patchRecord: getBearerToken,
    postRecord: getBearerToken
  },
});
```

The [auth](/en/hhdatalist/v0.0.2/options/auth/) option adds the authorization header to all API request types:

``` js nonum
new HHDataList({
  auth: getBearerToken,
});
```
