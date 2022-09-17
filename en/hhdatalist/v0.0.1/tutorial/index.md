# Tutorial

This tutorial demonstrates how to add HHDataList instances to a webpage, configure them to interact with the [Hagenhaus REST API](/en/docs/hhrestapi/) hosting the [Lahman Baseball Dataset](https://www.seanlahman.com/baseball-archive/statistics/), and modify them to interact with other REST APIs.

# Create a webpage

This section helps you create a webpage. You will add to this webpage throughout the tutorial. To begin, create an empty index.html file on a local drive, and add the following content:

``` js
load: https://hagenhaus.github.io/hhdatalist/v0.0.1/examples/baseball/index.html?load9
```

* Line 10 includes `hhdatalist.min.css` which supplies style properties.
* Lines 11 and 16: Change to, for example, *My HHDataList Practice Page*.
* Line 17 provides a `<div>` element into which HHDataList will load your HHDataList instance (in next section).
* Line 21 includes `hhapi.min.js` which makes Axios calls to REST API endpoints.
* Line 22 includes `hhdatalist-themes.min.js` which provides some standard themes.
* Line 23 includes `hhdatalist.min.js` which provides HHDataList core functionality.

Run your index.html file in a browser to view your work. Do this at the end of each section below. See also the [source file](https://github.com/hagenhaus/hagenhaus.github.io/blob/master/hhdatalist/v0.0.1/examples/baseball/index.html) and this [hosted example](https://hagenhaus.github.io/hhdatalist/v0.0.1/examples/baseball/index.html).

# Add a data list

This section helps you add an HHDataList instance (with minimal configuration options) to your webpage. To do so, add the following content just before the `</body>` end tag:

``` js
<script>
  new HHDataList({
    id: 'baseball-players-datalist',
    recordIdField: 'playerID',
    url: 'https://hagenhaus.com:3002/api/baseball/v1/players',
  });
</script>
```

* Line 2: Pass an `options` object to the HHDataList class constructor.
* Line 3: The `id` option tells HHDataList where to put the instance in the DOM.
* Line 4: The `recordFieldId` option identifies the name of the `id` field for these records.
* Line 5: The `url` option provides the endpoint for REST API methods. 

See the result below. See also the [source file](https://github.com/hagenhaus/hagenhaus.github.io/blob/master/hhdatalist/v0.0.1/examples/baseball/add.html) and this [hosted example](https://hagenhaus.github.io/hhdatalist/v0.0.1/examples/baseball/add.html).

<div id="add-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    id: 'add-datalist',
    queryParameters: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order' },
      pageNumber: { name: 'page' },
      pageSize: { name: 'limit' }
    },
    recordIdField: 'playerID',
    url: 'https://hagenhaus.com:3002/api/baseball/v1/players',
  });
</script>

## About options

## About defaults

Note that some default values work with any instance, and others (e.g query options) work only with instances interacting with an HHRestApi-compliant API. 

``` nonum
https://hagenhaus.com:3002/api/baseball/v1/players
  ?fields=playerID%2C%20nameFirst%2C%20nameLast
  &filter=nameFirst%20like%20%22babe%25%22
  &order=nameLast%20asc
  &page=1
  &limit=5
  &hasFieldList=true
  &hasMetadata=true
  &hasRecords=true
```

# Customize record titles

By default, record titles reflect record identifiers (e.g. `aardsda01`). This section helps you customize record titles to reflect player names and birth years (e.g. `David Aardsma (b. 1981)` and `John Barrett (b. unknown)`). To make this change, add the `recordTitleFields` and `recordTitleFormat` options:

``` js
new HHDataList({
  id: 'baseball-players-datalist',
  recordIdField: 'playerID',
  recordTitleFields: ['nameFirst', 'nameLast', 'birthYear'],
  recordTitleFormat: (f, r) => `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`,
  url: 'https://hagenhaus.com:3002/api/baseball/v1/players',
});
```

* Line 4: The `recordTitleFields` option contains the fields you want to use in record titles.
* Line 5: The `recordTitleFormat` option is a function that arranges these fields into a title string.

HHDataList invokes the `recordTitleFormat` function `(f, r) => {}` for each record it returns, processes, and displays. For the `f` argument, HHDataList passes `recordTitleFields`, and for the `r` argument, HHDdataList passes the current record object:

``` nonum
let title = this.recordTitleFormat(this.recordTitleFields, record);
```

In this case, `f[0]` is `nameFirst`, `f[1]` is `nameLast`, and `f[2]` is `birthYear`. So, `r[f[0]]` is the `nameFirst` value in the record which is either the baseball player's first name or null, `r[f[1]]` is the `nameLast` value in the record which is the player's last name, and `r[f[2]]` is the `birthYear` value in the record which is either the player's birth year or null. This function produces titles like the following:

* `David Aardsma (b. 1981)`
* `John Barrett (b. unknown)`
* `Wood (b. unknown)`

See the result below. See also the [source file](https://github.com/hagenhaus/hagenhaus.github.io/blob/master/hhdatalist/v0.0.1/examples/baseball/titles.html) and this [hosted example](https://hagenhaus.github.io/hhdatalist/v0.0.1/examples/baseball/titles.html).

<div id="titles-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    id: 'titles-datalist',
    queryParameters: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order' },
      pageNumber: { name: 'page' },
      pageSize: { name: 'limit' }
    },
    recordIdField: 'playerID',
    recordTitleFields: ['nameFirst', 'nameLast', 'birthYear'],
    recordTitleFormat: (f, r) => `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`,
    url: 'https://hagenhaus.com:3002/api/baseball/v1/players',
  });
</script>

# Customize record fields

# Apply a standard theme

# Apply a custom theme

# Add alerts

# Add confirmations

# Add tab descriptions

# Set record expansion state

# Set record limiting

# Set record filtering

# Set record ordering

# Set record column count

# Review the final version