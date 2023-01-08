# contentMode

<table class="options-table"><tr><th>Optional</th></tr></table>

The `contentMode` option controls the display of expanded record values. HHDataList can display the value `type`, the value as a `string`, or the value itself. The option also controls the existence, visibility, and label of the corresponding *Content* tool.

# Example

This example shows the default values for this option.

``` js nonum
new HHDataList({
  contentMode: { 
    value: 'value',
    hasTool: true,
    showTool: false,
    toolLabel: 'Content',
  },
});
```

`contentMode.value` can be `type`, `string`, or `value`. If `processMode.value` is `copy` or `manage`, the `contentMode.value` default is `string`. If `processMode.value` is `transform`, the `contentMode.value` default is `value`. 

# Demonstration

To view these modes in action, try changing the *Content* dropdown in the HHDataList instance below:

<div id="content-mode-datalist" class="hh-data-list my-4"></div>
<script>
  var options = new DLTreesOptions002('content-mode-datalist');
  options.contentMode.showTool = true;
  options.contentMode.value = 'type';
  options.descriptions.value = false;
  options.expand.value = true;
  options.expand.showTool = false;
  options.processMode.showTool = true;
  options.processMode.value = 'transform';
  options.queryParams.limit.default = 1;
  options.queryParams.limit.showTool = false;
  options.themeDefinition.name = 'thistle';
  new HHDataList(options);
</script>

1. In *type* mode, record fields display value types. For values of type `string`, the parenthetical number (e.g. `string (14)`) means the number of characters in the string. For values of type `object`, it means the number of properties in the object. For values of type `array`, it means the number of elements in the array.

1. In *string* mode, record fields display the values as strings.

1. In *value* mode, record fields display values as actual or, if `processMode.value === 'transform'`, transformed values.