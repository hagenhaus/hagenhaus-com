# Temp

## Baseball players

### getRecords

Query parameters data structure:

``` js nonum
{
  fields: {
    name: 'fields',
    default: null,
    value: 'playerID,nameFirst,nameLast,birthYear'
  },
  filter: {
    name: 'filter',
    none: null,
    default: 'namelast is not null',
    value: 'namelast is not null',
    placeholder: 'birthyear is not null and namefirst like \'John\''
  },
  order: {
    name: 'order',
    default: 'birthyear desc',
    value: 'birthyear desc',
    placeholder: 'birthyear desc, namefirst asc'
  },
  page: { name: 'page', value: 2 },
  limit: { name: 'limit', choices: [ 1, 3, 5, 10, 20, 50, 100 ], default: 3, value: 3 }
}
```

[Click to generate the following request in another tab.](https://hagenhaus.com:3002/api/baseball/v1/players?fields=playerID%2CnameFirst%2CnameLast%2CbirthYear&filter=namelast%20is%20not%20null&order=birthyear%20desc&page=2&limit=3)

``` nonum
https://hagenhaus.com:3002/api/baseball/v1/players
  ?fields=playerID%2CnameFirst%2CnameLast%2CbirthYear
  &filter=namelast%20is%20not%20null
  &order=birthyear%20desc
  &page=2
  &limit=3
```

Response:

``` js nonum
{
  "metadata": {
    "numTotalRecords": 19878,
    "numFilteredRecords": 19878,
    "numResponseRecords": 3,
    "page": 2,
    "limit": 3,
    "numTotalPages": 6626,
    "firstItemOnPage": 4
  },
  "records": [
    {
      "playerID": "munozan01",
      "nameFirst": "Andres",
      "nameLast": "Munoz",
      "birthYear": 1999
    },
    {
      "playerID": "tatisfe02",
      "nameFirst": "Fernando",
      "nameLast": "Tatis",
      "birthYear": 1999
    },
    {
      "playerID": "sotoju01",
      "nameFirst": "Juan",
      "nameLast": "Soto",
      "birthYear": 1998
    }
  ]
}
```

### getPlayer



[Click to generate the following request in another tab.](https://hagenhaus.com:3002/api/baseball/v1/players/luciael01?fields=nameFirst%2CnameLast%2CbirthDay%2CbirthMonth%2CbirthYear%2CbirthCity%2CbirthState%2CbirthCountry%2Cweight%2Cheight%2Cbats%2Cthrows%2CplayerID)

``` nonum
https://hagenhaus.com:3002/api/baseball/v1/players/luciael01?fields=nameFirst%2CnameLast%2CbirthDay%2CbirthMonth%2CbirthYear%2CbirthCity%2CbirthState%2CbirthCountry%2Cweight%2Cheight%2Cbats%2Cthrows%2CplayerID
```

Response:

``` js nonum
{
  "nameFirst": "Elvis",
  "nameLast": "Luciano",
  "birthDay": 15,
  "birthMonth": 2,
  "birthYear": 2000,
  "birthCity": "Boca Chica",
  "birthState": "Santo Domingo",
  "birthCountry": "D.R.",
  "weight": 200,
  "height": 75,
  "bats": "R",
  "throws": "R",
  "playerID": "luciael01"
}
```

## Famous trees

## Open Library Authors

https://openlibrary.org/search/authors.json?fields=key%2Cname&q=john&offset=2&limit=3

https://openlibrary.org/search/authors.json?fields=*&q=john&offset=2&limit=3

https://openlibrary.org/search/authors.json?q=john&offset=2&limit=3

``` nonum
{
  "fields": {
    "name": "fields",
    "default": "*",
    "value": "key,name"
  },
  "filter": {
    "name": "q",
    "none": "*",
    "default": "john",
    "value": "john",
    "placeholder": ""
  },
  "order": {
    "name": "sort",
    "default": null,
    "value": null,
    "placeholder": ""
  },
  "page": {
    "name": "offset",
    "value": 1
  },
  "limit": {
    "name": "limit",
    "choices": [
      1,
      3,
      5,
      10,
      20,
      50,
      100
    ],
    "default": 3,
    "value": 3,
    "hasTool": true,
    "showTool": true,
    "toolLabel": "Limit",
    "toolClass": "hh-limit-tool"
  }
}
```

## Open Library Subjects

## Open Library Works

With browser console visible, the datalist below might be helpful when experimenting with this property. 

<div id="fields-trees-datalist" class="hh-data-list my-4"></div>
<script>
  var fieldsTreesOptions = new DLTreesOptions002('fields-trees-datalist');
  fieldsTreesOptions.descriptions.home = '<b>Famous Trees</b>';
  fieldsTreesOptions.expand.showTool = false;
  fieldsTreesOptions.processMode.showTool = true;
  fieldsTreesOptions.queryParams.limit.showTool = false;
  fieldsTreesOptions.reporters.requests.value = true;
  new HHDataList(fieldsTreesOptions);
</script>

<div id="fields-authors-datalist" class="hh-data-list my-4"></div>
<script>
  var fieldsAuthorsOptions = new DLAuthorsOptions002('fields-authors-datalist');
  fieldsAuthorsOptions.descriptions.home = '<b>Authors</b>';
  fieldsAuthorsOptions.expand.showTool = false;
  fieldsAuthorsOptions.processMode.showTool = true;
  fieldsAuthorsOptions.queryParams.limit.showTool = false;
  fieldsAuthorsOptions.reporters.requests.value = true;
  new HHDataList(fieldsAuthorsOptions);
</script>

* HHDataList includes `fields.name` in `GET` requests if (1) `fields.name` is specified and (2) [processMode](/en/hhdatalist/v0.0.2/options/processmode/) is *manage* or *transform*.
* HHDataList includes all `queryParams` properties in `getRecords` operations and only `fields.name` in `getRecord` operations.
* In `getRecords` operations, HHDataList includes `recordIdField` and `recordTitle.fields`.

http://localhost:8081/api/famous/v1/trees/5?fields=id%2Cname%2Cspecies%2Cdescription

https://hagenhaus.com:3002/api/famous/v1/trees/5?fields=id%2Cname%2Cspecies%2Cdescription


https://openlibrary.org/search/authors.json?q=john&offset=3&limit=3
https://openlibrary.org/authors/OL20108A.json

https://openlibrary.org/search/subjects.json?q=women&offset=1&limit=3
https://openlibrary.org/subjects/women_authors.json

https://openlibrary.org/search.json?q=snow%20original&page=2&limit=3
https://openlibrary.org/works/OL29455448W.json




https://openlibrary.org/search/authors.json?fields=*&q=john&offset=3&limit=3
https://openlibrary.org/authors/OL20108A.json

# Example

This example explores how `queryParams` settings affect `getRecords` and `getRecord` operations. Consider the following datalist:

<div id="example-datalist" class="hh-data-list my-4"></div>
<script>
  var exampleOptions = new DLPlayersOptions002('example-datalist');
  exampleOptions.descriptions.home = '<b>Famous Trees</b>';
  exampleOptions.expand.showTool = false;
  exampleOptions.queryParams.limit.showTool = false;
  exampleOptions.reporters.requests.value = true;
  new HHDataList(exampleOptions);
</script>

``` js nonum
{
  fields: { name: 'fields', value: '' },
  filter: { name: 'filter', value: 'namelast is not null' },
  order: { name: 'order', value: 'birthyear desc' },
  page: { name: 'page', value: 1 },
  limit: { name: 'limit', value: 3 }
}
```

[Click to generate the following request in another tab.](https://hagenhaus.com:3002/api/baseball/v1/players?fields=playerID%2CnameFirst%2CnameLast%2CbirthYear&filter=namelast%20is%20not%20null&order=birthyear%20desc&page=2&limit=3)

``` nonum
https://hagenhaus.com:3002/api/baseball/v1/players
  ?fields=playerID%2CnameFirst%2CnameLast%2CbirthYear
  &filter=namelast%20is%20not%20null
  &order=birthyear%20desc
  &page=2
  &limit=3
```

Response:

``` js nonum
{
  "metadata": {
    "numTotalRecords": 19878,
    "numFilteredRecords": 19878,
    "numResponseRecords": 3,
    "page": 2,
    "limit": 3,
    "numTotalPages": 6626,
    "firstItemOnPage": 4
  },
  "records": [
    {
      "playerID": "munozan01",
      "nameFirst": "Andres",
      "nameLast": "Munoz",
      "birthYear": 1999
    },
    {
      "playerID": "tatisfe02",
      "nameFirst": "Fernando",
      "nameLast": "Tatis",
      "birthYear": 1999
    },
    {
      "playerID": "sotoju01",
      "nameFirst": "Juan",
      "nameLast": "Soto",
      "birthYear": 1998
    }
  ]
}
```

https://openlibrary.org/search/authors.json?fields=key%2Cname&q=walt%20whitman&offset=2&limit=3

https://openlibrary.org/search/authors.json?fields=key%2Cname&q=john&sort=name&offset=1&limit=3

https://openlibrary.org/search/authors.json?q=john&sort=name

https://openlibrary.org/search/authors.json?q=john&offset=0&limit=3

http://localhost:8081/api/baseball/v1/players?fields=playerID%2CnameFirst%2CnameLast%2CbirthYear&filter=namelast%20is%20not%20null&order=birthyear%20desc&page=2&limit=3

http://localhost:8081/api/baseball/v1/players?fields=playerID%2CnameFirst%2CnameLast%2CbirthYear

---

The `GET` operations of many APIs support a query parameter that specifies which fields to return. Of these APIs, some use the word *fields* in the request URL like this:

https://hagenhaus.com:3002/api/famous/v1/trees/5?fields=id%2Cname%2Cspecies%2Cdescription

Others use a different word. `fields.name` supports this variability:

``` js nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields', default: null },
  },
});
```

Although there is no developer-definable `fields.value` property, it is helpful to picture one:

``` js nonum
new HHDataList({
  queryParams: {
    fields: { name: 'fields', value: '', default: null },
  },
});
```

Before sending a `GET` request, HHDataList considers the following factors when deciding whether to include `fields.name` in the request and, if so, what value to assign to `fields.value`:

First, what is the [processMode](/en/hhdatalist/v0.0.2/options/processmode/)? 

If `processMode.value` is `copy`, HHDataList does not (and cannot) build a field list and assign it to `fields.value` because there are no [fieldDefinitions](/en/hhdatalist/v0.0.2/options/fielddefinitions/). So, HHDataList evaluates `fields.default`. If `null`, HHDataList does not include a *fields* query parameter in the request:

https://hagenhaus.com:3002/api/famous/v1/trees/5

If not `null`, (e.g. `fields: { default: * }`), HHDataList assigns `fields.default` to `fields.value`:

``` nonum
https://hagenhaus.com:3002/api/famous/v1/trees/5?fields=
  name,
  species,
  description,
  city,
  country,
  lat,
  lng,
  birthYear,
  height,
  links,
  id
```