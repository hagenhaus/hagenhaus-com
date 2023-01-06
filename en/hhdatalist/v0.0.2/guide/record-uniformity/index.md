# Record Uniformity

The [Open Library API](https://openlibrary.org/developers) does not necessarily return the same record fields for each `GET` request. To test this, try clicking the forward and backward arrows on the *Paginator* tool below:

<div id="no-uniformity-datalist" class="hh-data-list mt-4"></div>
<script>
  var options = DLBooks002.options('no-uniformity-datalist');
  options.contentMode.showTool = true;
  options.expand.value = true;
  options.processMode.showTool = true;
  options.queryParams.limit.default = 1;
  options.themeDefinition.name = 'shadowbox';
  new HHDataList(options);
</script>

Scrolling expanded records with variable fields is not ideal. The *Record Uniformity* feature is a solution to this problem. To see this solution, try clicking the forward and backward arrows on the *Paginator* tool below:

<div id="uniformity-datalist" class="hh-data-list mt-4"></div>
<script>
  var options = DLBooks002.options('uniformity-datalist');
  options.contentMode.showTool = true;
  options.expand.value = true;
  options.processMode.showTool = true;
  options.queryParams.limit.default = 1;
  options.themeDefinition.name = 'wheatgerm';
  options.uniformity.fieldValue = 'No Data';
  options.uniformity.value = true;
  new HHDataList(options);
</script>

The *Record Uniformity* feature is implemented using the [uniformity](/en/hhdatalist/v0.0.2/options/uniformity/) option. The `No Data` string is configurable.