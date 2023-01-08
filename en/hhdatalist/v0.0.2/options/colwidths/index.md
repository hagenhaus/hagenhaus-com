# colWidths

<table class="options-table"><tr><th>Optional</th></tr></table>

The `colWidths` option plays a part in controlling the column widths associated with the Fields tab, Tools tab, and expanded records:

<p><img src="controlled-column-places.png" class="img-fluid d-block" width=500 loading="lazy"></p>

# Examples

## Example 1

This example shows the default values for this option.

``` js nonum
new HHDataList({
  colWidths: {
    fields: { value: 'narrow', showTool: true },
    tools: { value: 'narrow', showTool: true },
    records: { value: 'narrow', hasTool: true, showTool: false, toolLabel: 'Column Width' }
  },
});
```

The option value is an object with three properties: `fields`, `tools`, and `records`. Each property controls the column widths of the Fields tab, Tools tab, and expanded records respectively and an associated tool.

## Example 2

This example shows a typical setting that relies on most of the defaults:

``` js nonum
new HHDataList({
  colWidths: {
    records: { value: 'medium', showTool: true }
  },
});
```

# Valid values

 Valid settings for `colWidths.fields.value`, `colWidths.tools.value`, and `colWidths.records.value` are `narrow` , `medium`, and `wide`. A `narrow` setting does not mean the field remains narrow for all screen sizes, however. Each of these settings is responsive to screen size. The diagrams below illustrate (using record fields as an example):

**narrow**

<p><img src="record-col-width-narrow.png" class="img-fluid d-block" width=700 loading="lazy"></p>

**medium**

<p><img src="record-col-width-medium.png" class="img-fluid d-block" width=700 loading="lazy"></p>

**wide**

<p><img src="record-col-width-wide.png" class="img-fluid d-block" width=700 loading="lazy"></p>

# Tools

## Fields Tab ColWidth tool

`colWidths.fields` controls the tool on the Fields tab:

<p><img src="fields-tab-colwidth-tool.png" class="img-fluid d-block" width=600 loading="lazy"></p>

## Tools Tab ColWidth tool

`colWidths.tools` controls the tool on the Tools tab:

<p><img src="tools-tab-colwidth-tool.png" class="img-fluid d-block" width=600 loading="lazy"></p>

## Record Field ColWidth tool

`colWidths.records` controls the *Column Widths* tool on the Tools tab:

<p><img src="record-fields-colwidth-tool.png" class="img-fluid d-block" width=600 loading="lazy"></p>

> Note: `colWidths.records` sets the default width for record fields. Field definitions can override this setting for individual record fields. See the [fieldDefinitions](/en/hhdatalist/v0.0.2/options/fielddefinitions/) option.
