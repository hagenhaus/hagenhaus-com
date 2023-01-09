# small

<table class="options-table"><tr><th>Optional</th></tr></table>

The `small` option specifies whether various HHDataList HTML elements appear normally sized or small. The option also controls the existence, visibility, and label of the corresponding *Small* tool.

# Examples

## Example 1

This example shows the default values for this option.

``` js nonum
new HHDataList({
  small: {
    value: true,
    hasTool: true,
    showTool: false,
    toolLabel: 'Small'
  },
});
```

## Example 2

This example shows a typical setting that relies on most of the defaults:

``` js nonum
new HHDataList({
  expand: { showTool: true },
});
```

# Demonstration

To see this option in action, try toggling the *Small* tool:

<div id="datalist" class="hh-data-list"></div>
<script>
  var options = new DLTreesOptions002('datalist');
  options.expand.showTool = false;
  options.expand.value = true;
  options.queryParams.limit.default = 1;
  options.queryParams.limit.showTool = false;
  options.small.showTool = true;
  new HHDataList(options);