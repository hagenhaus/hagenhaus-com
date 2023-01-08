# recordTitle

<table class="options-table"><tr><th>Optional, but recommended</th></tr></table>

The `recordTitle` option provides websites with a mechanism for building record titles from record fields. The option value is an object with two properties: `fields` and `format`. The value of the first is an array of fields. The value of the second is a function that HHDataList calls to arrange the fields into a title and return the title.

# Examples

## Example 1

This example shows the default values for this option.

``` js nonum
new HHDataList({
  recordTitle: {
    fields: [this.recordIdField],
    format: (fields, record) => { return record[fields[0]]; }
  },
});
```

So, if `options` does not specify a `recordTitle` option, `recordTitle.fields` is an array with one element (`recordIdField`), and `recordTitle.format` is a function that returns `recordIdField` as the record title:

<div id="defaults-datalist" class="hh-data-list mt-4"></div>
<script>
  var defaultOptions = new DLPlayersOptions002('defaults-datalist');
  defaultOptions.recordTitle.fields = ['playerID'];
  defaultOptions.recordTitle.format = (fields, record) => { return record[fields[0]]; };
  defaultOptions.themeDefinition.name = 'shadowbox';
  new HHDataList(defaultOptions);
</script>

## Example 2

This example builds a record title from three fields: `nameFirst`, `nameLast`, and `birthYear`:

``` js nonum
new HHDataList({
  recordTitle: {
    fields: ['nameFirst', 'nameLast', 'birthYear'],
    format: (fields, record) => `${record[fields[0]]} ${record[fields[1]]} (b. ${record[fields[2]]})`
  },
});
```

`recordTitle.format` arranges the three fields to produce the following titles:

<p><img src="record-title-001.png" class="img-fluid d-block" width=600 loading="lazy"></p>

The following datalist reflects these titles:

<div id="better-datalist" class="hh-data-list mt-4"></div>
<script>
  var betterOptions = new DLPlayersOptions002('better-datalist');
  betterOptions.themeDefinition.name = 'shadowbox';
  new HHDataList(betterOptions);
</script>

## Example 3

This example builds a record title that supports unknown `birthyear` values:

``` js nonum
new HHDataList({
  recordTitle: {
    fields: ['nameFirst', 'nameLast', 'birthYear'],
    format: (f, r) => `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`
  },
});
```

The following datalist reflects these titles:

<div id="unknown-datalist" class="hh-data-list mt-4"></div>
<script>
  var unknownOptions = new DLPlayersOptions002('unknown-datalist');
  unknownOptions.queryParams.filter.default = '';
  unknownOptions.queryParams.order.default = 'birthyear asc';
  unknownOptions.themeDefinition.name = 'shadowbox';
  new HHDataList(unknownOptions);
</script>