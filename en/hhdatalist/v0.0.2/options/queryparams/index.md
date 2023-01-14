# queryParams

<table class="options-table"><tr><th>Optional</th></tr></table>

The `queryParams` option defines query parameters used in `GET` operations. The option has a value of type *object*:

``` js nonum
new HHDataList({
  queryParams: {
  },
});
```

This object may contain any or all of the following four property names: `fields`, `filter`, `order`, `limit`. And, it may contain one of the following two property names: `offset`, `page`. 

> ##### Important
> To enable (in HHDataList) the functionality associated with a particular query parameter, the `queryParams` object must include the relevant property name, and the property value must be a non-null object. 

Setting the property name equal to an empty value enables the defaults for that property. So, this:

``` js nonum
new HHDataList({
  queryParams: {
    fields: {},
    offset: {},
  },
});
```

enables this:

``` js nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields', default: null },
    offset: { name: 'offset' }
  },
});
```

And, this:

``` js nonum
new HHDataList({
  queryParams: {
    fields: {},
    filter: {},
    order: {},
    page: {},
    limit: {}
  },
});
```

enables this:

``` js nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields', default: null },
    filter: { name: 'filter', none: null, default: null, placeholder: '' },
    order: { name: 'order', default: null, placeholder: '' },
    page: { name: 'page' },
    limit: { name: 'limit', choices: [1, 3, 5, 10, 20, 50, 100], default: 1, hasTool: true, showTool: false, toolLabel: 'Limit' }
  },
});
```

Property values can be overridden. Here is an example:

``` js nonum
new HHDataList({
  queryParams: {
    filter: { name: 'q' },
    order: {name: 'sort' }
  },
});
```

Given this configuration, HHDataList uses `q` and `sort` (not `filter` and `order`) in URLs:

``` nonum
<a href="https://openlibrary.org/search/authors.json?q=walt%20whitman&sort=name">https://openlibrary.org/search/authors.json?q=walt%20whitman&sort=name</a>
```

# Properties

Including a property in `queryParams` (1) informs HHDataList that the underlying API supports a certain type of functionality and (2) provides details that HHDataList uses to build query parameters that leverage that functionality. The following sections explain each `queryParams` property. 

## Fields

Below is the default `fields` property:

``` js nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields', default: null },
  },
});
```

Although there is no developer-defined `fields.value` property, it is helpful to picture one:

``` js nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields', value: '', default: null },
  },
});
```

Before executing a `GET` operation, HHDataList sets `fields.value` to a relevant value:

``` js nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields', value: 'id,name,species,description', default: null },
  },
});
```

Then, it builds the query parameter (e.g. `fields=id%2Cname%2Cspecies%2Cdescription`), attaches it to a URL, and executes the request:

``` nonum
<a href="https://hagenhaus.com:3002/api/famous/v1/trees/5?fields=id%2Cname%2Cspecies%2Cdescription">https://hagenhaus.com:3002/api/famous/v1/trees/5?fields=id%2Cname%2Cspecies%2Cdescription</a>
```

HHDataList builds a different `fields.value` depending on the answers to two questions:

1. Is the request a `getRecords` request or a `getRecord` request?
1. If the request is a `getRecord` request, what is the current [processMode](/en/hhdatalist/v0.0.2/options/processmode/) value?

### getRecords

For `getRecords` operations, HHDataList specifies `options.recordIdField` and `options.recordTitle.fields`:

``` nonum
<a href="https://hagenhaus.com:3002/api/famous/v1/trees?fields=id%2Cname">https://hagenhaus.com:3002/api/famous/v1/trees?fields=id%2Cname</a>
```

`recordIdField` enables HHDataList to obtain record IDs in anticipation of subsequent calls to `getRecord` should the user expand a record. And, `recordTitle.fields` enables HHDataList to build record titles:

<p><img src="record-titles.png" class="img-fluid d-block" width=400 loading="lazy"></p>

### getRecord

For `getRecord` operations, if `options.processMode` equals `manage`, HHDataList includes `recordIdField`, `recordTitle.fields`, and all checked field names:

<p><img src="manage-fields.png" class="img-fluid d-block" width=770 loading="lazy"></p>

Here is the URL:

``` nonum
<a href="https://hagenhaus.com:3002/api/famous/v1/trees/5?fields=name,species,description,city,country,lat,lng,birthYear,height,girth,links,id">https://hagenhaus.com:3002/api/famous/v1/trees/5?fields=name,species,description,city,country,lat,lng,birthYear,height,girth,links,id</a>
```

If `options.processMode` equals `transform`, HHDataList includes `recordIdField`, `recordTitle.fields`, and all field names that support checked labels:

<p><img src="transform-fields.png" class="img-fluid d-block" width=500 loading="lazy"></p>

Here is the URL:

``` nonum
<a href="https://hagenhaus.com:3002/api/famous/v1/trees/5?fields=name,species,description,city,country,lat,lng,birthYear,height,links,id">https://hagenhaus.com:3002/api/famous/v1/trees/5?fields=name,species,description,city,country,lat,lng,birthYear,height,links,id</a>
```

If `options.processMode` equals `copy`, HHDataList does not (and cannot) build a field list and assign it to `fields.value` because there are no [fieldDefinitions](/en/hhdatalist/v0.0.2/options/fielddefinitions/). So, HHDataList evaluates `fields.default`. If `null`, HHDataList does not include a *fields* query parameter in the request:

``` nonum
<a href="https://hagenhaus.com:3002/api/famous/v1/trees/5">https://hagenhaus.com:3002/api/famous/v1/trees/5</a>
```

If not `null`, (e.g. `fields: { default: * }`), HHDataList assigns `fields.default` to `fields.value`:

``` nonum
<a href="https://openlibrary.org/authors/OL23178A.json?fields=*">https://openlibrary.org/authors/OL23178A.json?fields=*</a>
```

## Filter

* Default for `queryParams.filter.default` is `queryParams.filter.none`.

## Order

## Offset

* Default for `queryParams.offset.value` is `0`.

## Page

## Limit

* Default for `queryParams.limit.default` is `queryParams.limit.choices[0]` 

# Demonstration

<div id="trees-datalist" class="hh-data-list my-4"></div>
<script>
  var treesOptions = new DLTreesOptions002('trees-datalist');
  treesOptions.descriptions.home = '<b>Famous Trees</b>';
  treesOptions.expand.showTool = false;
  treesOptions.processMode.showTool = true;
  treesOptions.queryParams.fields = null;
  // treesOptions.queryParams.fields = {};
  treesOptions.queryParams.limit.showTool = false;
  treesOptions.reporters.requests.value = true;
  new HHDataList(treesOptions);
</script>