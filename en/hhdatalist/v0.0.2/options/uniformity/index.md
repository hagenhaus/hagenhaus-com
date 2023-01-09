# uniformity

<table class="options-table"><tr><th>Optional</th></tr></table>

The `uniformity` option directs HHDataList to interject missing fields into expanded records. The option also controls the existence, visibility, and label of the corresponding *Uniformity* tool.

# Example

This example shows the default values for this option.

``` js nonum
new HHDataList({
  uniformity: {
    value: false,
    fieldValue: '',
    hasTool: true,
    showTool: false,
    toolLabel: 'Uniformity',
  },
});
```

# Demonstration

Like some other APIs, the [Open Library API](https://openlibrary.org/developers) does not return the same fields for each record in a set of the same type of records (e.g. books). To test this, click the forward and backward arrows on the *Paginator* tool below:

<div id="datalist" class="hh-data-list mt-4"></div>
<script>
  var options = new DLWorksOptions002('datalist');
  options.expand.value = true;
  options.expand.showTool = false;
  options.queryParams.limit.default = 1;
  options.queryParams.limit.showTool = false;
  options.themeDefinition.name = 'wheatgerm';
  options.uniformity.showTool = true;
  options.uniformity.value = false;
  new HHDataList(options);
</script>

Scrolling expanded records with varying numbers of fields is not ideal. The `uniformity` option is a solution to this problem. To see `uniformity` in action, toggle-on the *Uniformity* button above, and then click the forward and backward arrows again. Note that `uniformity.fieldValue` is `No Data`.
