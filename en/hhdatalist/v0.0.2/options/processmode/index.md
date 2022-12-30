# processMode

<table class="options-table">
  <tr>
    <th>Necessity:</th>
    <td>Optional</td>
  </tr>
</table>

The `processMode` option specifies how HHDataList processes and displays record fields. 


 and displays REST API response record fields. Valid values for the `value` property are `['copy', 'manage', 'transform']`. Below are default values for the `hasTool` and `showTool` properties:

``` js nonum
new HHDataList({
  processMode: { value: 'copy', hasTool: true, showTool: false },
});
```

The default value for the `value` property depends on other options. If the `fieldDefinitions` option is absent, the default value is `copy`. If `fieldDefinitions.manage` is defined, the default value is `manage`. If `fieldDefinitions.transform` is defined, the default value is `transform`.

Notes about `processMode`:

1. In `copy` mode, `queryParams.fields` is never included in the request url.
1. Changing process mode from `transform` sets content mode to `string`.
1. Changing process mode to `transform` sets content mode to `value`.