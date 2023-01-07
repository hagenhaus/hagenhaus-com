# Content Mode

Content mode controls how HHDataList displays expanded record values. Possibilities are type, string, or value. To view these modes in action, try changing the *Content* dropdown in the HHDataList instance below:

<div id="content-mode-datalist" class="hh-data-list my-4"></div>
<script>
  var options = new DLTreesOptions002('content-mode-datalist');
  options.contentMode.showTool = true;
  options.contentMode.value = 'type';
  options.descriptions.value = false;
  options.expand.value = true;
  options.processMode.showTool = true;
  options.processMode.value = 'transform';
  options.queryParams.limit.default = 1;
  options.queryParams.limit.showTool = false;
  options.themeDefinition.name = 'thistle';
  new HHDataList(options);
</script>

Note the following:

1. In *type* mode, record fields display value types. For strings, the parenthetical number (e.g. `string (14)`) means the number of characters in the string. For object, it means the number of properties in the object. For array, it means the number of elements in the array. 

1. In *string* mode, record fields display the values as strings.

1. In *value* mode, record fields display values as actual or (if [Process Mode](/en/hhdatalist/v0.0.2/guide/process-mode/) is *transform*) transformed values.