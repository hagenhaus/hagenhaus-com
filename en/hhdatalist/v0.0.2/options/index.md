# Options

The HHDataList constructor requires an *options* argument: Here is an example:

``` js nonum
new HHDataList({
  id: 'my-data-list',
  url: `https://hagenhaus.com:3002/api/famous/v1/trees`,
});
```

Below is a list of options. Each item in the list includes a short description and a link to a page dedicated to that option. Types of options include boolean, string, number, object, array, and function. Some options are required and others are optional. 

* [auth](/en/hhdatalist/v0.0.2/options/auth/) specifies one *Authorization* header for all types of API requests.
* [auths](/en/hhdatalist/v0.0.2/options/auths/) specifies various *Authorization* headers for various types of API requests.
* [colWidths](/en/hhdatalist/v0.0.2/options/colwidths/) specifies the initial column widths for Fields Tab, Tools Tab, and expanded records.
* [confirm](/en/hhdatalist/v0.0.2/options/confirm/) specifies a function for HHDataList to call confirming certain actions like record deletions.
* [contentMode](/en/hhdatalist/v0.0.2/options/contentmode/) specifies the initial content type for expanded-record fields (value, string, type).
* [descriptions](/en/hhdatalist/v0.0.2/options/descriptions/) specifies descriptions to appear at the top of each tab.
* [error](/en/hhdatalist/v0.0.2/options/error/) specifies a function for HHDataList to call when encountering an error.
* [expand](/en/hhdatalist/v0.0.2/options/expand/) specifies whether records on the records list are initially expanded or collapsed.
* [fieldDefinitions](/en/hhdatalist/v0.0.2/options/fielddefinitions/) define characteristics for managed and/or transformed fields.
* [id](/en/hhdatalist/v0.0.2/options/id/) specifies the `id` of the `DIV` element in which the HHDataList constructor creates the component. 
* [info](/en/hhdatalist/v0.0.2/options/info/) specifies a function for HHDataList to call when completing certains events (e.g. record creation).
* [methods](/en/hhdatalist/v0.0.2/options/methods/) specifies functions to replace default functions for creating, modifying, and deleting records.
* [number](/en/hhdatalist/v0.0.2/options/number/) specifies the initial maximum number of records displayed on the records list.
* [parity](/en/hhdatalist/v0.0.2/options/parity/) specifies whether `getRecords` and `postRecords` can return the same data as `getRecord`.
* [populate](/en/hhdatalist/v0.0.2/options/populate/)
* [processMode](/en/hhdatalist/v0.0.2/options/processmode/)
* [queryParams](/en/hhdatalist/v0.0.2/options/queryparams/)
* [recordIdField](/en/hhdatalist/v0.0.2/options/recordidfield/)
* [recordTitle](/en/hhdatalist/v0.0.2/options/recordtitle/)
* [reporters](/en/hhdatalist/v0.0.2/options/reporters/)
* [responseHelper](/en/hhdatalist/v0.0.2/options/responsehelper/)
* [small](/en/hhdatalist/v0.0.2/options/small/)
* [themeDefinition](/en/hhdatalist/v0.0.2/options/themedefinition/)
* [uniformity](/en/hhdatalist/v0.0.2/options/uniformity/)
* [url](/en/hhdatalist/v0.0.2/options/url/)
* [urls](/en/hhdatalist/v0.0.2/options/urls/)
