# Options

The HHDataList constructor requires an argument of type object. This object is referred to as `options`. Each of its properties is an option consisting of a name and a value. Each value type is boolean, string, number, object, array, or function. In the example below, the `options` argument consists of three properties: `expand`, `id`, and `url`. The types of the property values are object, string, and string respectively.

``` js nonum
new HHDataList({
  expand: { value: true, showTool: true },
  id: 'my-data-list',
  url: 'https://hagenhaus.com:3002/api/famous/v1/trees',
});
```

Each option falls into one of the following Necessity categories:

|Necessity|Description|
|-|-|
|Required|A required option does not have a default value and must be included in `options`. [id](/en/hhdatalist/v0.0.2/options/id/) is an example.|
|Contingent|A contingent option does not have a default value and may or may not be required depending on the requirements of the underlying API. [auth](/en/hhdatalist/v0.0.2/options/auth/) is an example.|
|Expected|An expected option has a default value that satisfies only a few cases. [recordIdField](/en/hhdatalist/v0.0.2/options/recordidfield/) is an example.|
|Recommended|A recommended option has a default value that, while satisfying all cases, has minimal value. [recordTitle](/en/hhdatalist/v0.0.2/options/recordtitle/) is an example.|
|Optional|An optional option has a default value that satisfies all cases, and satisfies most cases well. [processMode](/en/hhdatalist/v0.0.2/options/processmode/) is an example.|

Some options belong to exclusive pairs. The `options` argument can only include one member of an exclusive pair. [auth](/en/hhdatalist/v0.0.2/options/auth/) and [auths](/en/hhdatalist/v0.0.2/options/auths/) are an exclusive pair. [url](/en/hhdatalist/v0.0.2/options/url/) and [urls](/en/hhdatalist/v0.0.2/options/urls/) are also an exclusive pair. 

Below is a list of options. Each list item contains a link to a page dedicated to that option and a short description. 

* [auth](/en/hhdatalist/v0.0.2/options/auth/) specifies one *Authorization* header for all types of API requests.
* [auths](/en/hhdatalist/v0.0.2/options/auths/) specifies zero or more *Authorization* headers for zero or more types of API requests.
* [colWidths](/en/hhdatalist/v0.0.2/options/colwidths/) specifies the initial column widths for the Fields Tab, the Tools Tab, and expanded records.
* [confirm](/en/hhdatalist/v0.0.2/options/confirm/) specifies a function for HHDataList to call before doing certain actions (e.g. record deletion).
* [contentMode](/en/hhdatalist/v0.0.2/options/contentmode/) specifies the initial content type for expanded-record fields (value, string, type).
* [descriptions](/en/hhdatalist/v0.0.2/options/descriptions/) specifies descriptions to appear at the top of tabs.
* [error](/en/hhdatalist/v0.0.2/options/error/) specifies a function for HHDataList to call when reporting errors.
* [expand](/en/hhdatalist/v0.0.2/options/expand/) specifies whether records on the records list are initially expanded or collapsed.
* [fieldDefinitions](/en/hhdatalist/v0.0.2/options/fielddefinitions/) helps determine how HHDataList displays expanded records.
* [id](/en/hhdatalist/v0.0.2/options/id/) specifies the `id` of the `DIV` element in which the HHDataList constructor creates the data list. 
* [info](/en/hhdatalist/v0.0.2/options/info/) specifies a function for HHDataList to call when reporting certain events (e.g. record deletion).
* [methods](/en/hhdatalist/v0.0.2/options/methods/) specifies user-defind functions to replace certain default functions. 
* [number](/en/hhdatalist/v0.0.2/options/number/) specifies the initial maximum number of records displayed on the records list.
* [parity](/en/hhdatalist/v0.0.2/options/parity/) specifies whether `getRecords` and `postRecords` can return the same data as `getRecord`.
* [populate](/en/hhdatalist/v0.0.2/options/populate/) specifies a function for HHDataList to call when populating a new record form.
* [processMode](/en/hhdatalist/v0.0.2/options/processmode/) specifies the initial way that HHDataList processes and displays API results.
* [queryParams](/en/hhdatalist/v0.0.2/options/queryparams/) specifies the characteristics of certain API query parameters.
* [recordIdField](/en/hhdatalist/v0.0.2/options/recordidfield/) specifies the name of the `id` field for records in API results.
* [recordTitle](/en/hhdatalist/v0.0.2/options/recordtitle/) specifies the fields and format of record titles.
* [reporters](/en/hhdatalist/v0.0.2/options/reporters/) specifies functions for HHDataList to call when describing certain internal data structures.
* [responseHelper](/en/hhdatalist/v0.0.2/options/responsehelper/) helps HHDataList make sense of API response data.
* [small](/en/hhdatalist/v0.0.2/options/small/) specifies whether, initially, certain HHDataList elements are normal or small in size.
* [themeDefinition](/en/hhdatalist/v0.0.2/options/themedefinition/) specifies the initial theme for the HHDataList instance.
* [uniformity](/en/hhdatalist/v0.0.2/options/uniformity/) specifies whether HHDataList adds fields to records with missing fields.
* [url](/en/hhdatalist/v0.0.2/options/url/) specifies one url for all types of API requests.
* [urls](/en/hhdatalist/v0.0.2/options/urls/) specifies zero or more urls for zero or more types of API requests.

