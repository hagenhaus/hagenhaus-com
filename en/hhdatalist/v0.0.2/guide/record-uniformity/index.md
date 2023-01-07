# Record Uniformity

The [Open Library API](https://openlibrary.org/developers) does not necessarily return the same record fields for each `GET` request. To test this, try clicking the forward and backward arrows on the *Paginator* tool below:

<div id="uniformity-datalist" class="hh-data-list mt-4"></div>
<script>
  var options = new DLWorksOptions002('uniformity-datalist');
  options.contentMode.showTool = true;
  options.expand.value = true;
  options.expand.showTool = false;
  options.processMode.showTool = true;
  options.queryParams.limit.default = 1;
  options.queryParams.limit.showTool = false;
  options.themeDefinition.name = 'shadowbox';
  options.uniformity.showTool = true;
  options.uniformity.value = false;
  new HHDataList(options);
</script>

Scrolling expanded records with a varying number of fields is not ideal. The *Record Uniformity* feature is a solution to this problem. To see this solution, toggle-on the *Uniformity* button, and then click the forward and backward arrows again. The *Record Uniformity* feature is implemented using the [uniformity](/en/hhdatalist/v0.0.2/options/uniformity/) option. The `No Data` string is configurable.