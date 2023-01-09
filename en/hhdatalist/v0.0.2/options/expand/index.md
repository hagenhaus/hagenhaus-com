# expand

<table class="options-table"><tr><th>Optional</th></tr></table>

The `expand` option specifies whether records on the records list are expanded or collapsed. The option also controls the existence, visibility, and label of the corresponding *Expand* tool.

# Examples

## Example 1

This example shows the default values for this option.

``` js nonum
new HHDataList({
  expand: {
    value: false,
    hasTool: true,
    showTool: false,
    toolLabel: 'Expand'
  },
});
```

## Example 2

This example shows a typical setting that relies on most of the defaults:

``` js nonum
new HHDataList({
  expand: { value: true },
});
```

# Demonstration

To see this option in action, try toggling the *Expand* tool:

<div id="datalist" class="hh-data-list"></div>
<script>
  var options = new DLTreesOptions002('datalist');
  options.queryParams.limit.showTool = false;
  new HHDataList(options);
</script>