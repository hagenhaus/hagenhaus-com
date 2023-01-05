# Record Titles

Note the record titles in the following record headers:

<div id="record-titles-datalist" class="hh-data-list mt-4"></div>
<script>
  var options = DLPlayers002.options('record-titles-datalist');
  options.queryParams.limit.default = 3;
  new HHDataList(options);
</script>

These titles reflect a particular arrangement of three record fields: `nameFirst`, `nameLast`, and `birthYear`. HHDataList enables websites to build record titles like these by providing (to the HHDataList constructor via the [recordTitle](/en/hhdatalist/v0.0.2/options/recordtitle/) option) an object that specifies which record fields to use and how to arrange them:

``` js nonum
new HHDataList({
  recordTitle: {
    fields: ['nameFirst', 'nameLast', 'birthYear'],
    format: (f, r) => `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`
  },
});
```

After obtaining an array of records, and while building the record headers, HHDataList calls (for each record) `recordTitle.format`, passing the `fields` array for `f` and the record for `r`. 