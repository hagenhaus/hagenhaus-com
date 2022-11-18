# fieldDefinitions

<table class="options-table">
<tr><th>Required:</th><td><code>false</code></td></tr>
<tr><th>Type:</th><td><code>object</code></td></tr>
</table>

``` js nonum
new HHDataList({
  fieldDefinitions: {
    managed: [ ],
    transformed: [ ]
  }
});
```

# managed

``` js nonum
new HHDataList({
  recordFields: [
    { name: "key", label: "Key", isChecked: false },
    { name: "type", label: "Type", isChecked: false, transform: (value) => value.key },
    { name: "title", label: "Title", isEditable: true, isRequired: true, colWidth: 'wide' },
    { name: "subtitle", label: "Subtitle", isChecked: false, isEditable: true, colWidth: 'wide' },
    { name: "first_publish_date", label: "First Published Date", isEditable: true },
    { name: "first_sentence", label: "First Sentence", transform: (value) => value.value, display: { type: "text" } },
    { name: "subjects", label: "Subjects" },
    { name: "links", label: "Links", display: { type: "link" } }
  ],
});
```

Note the following:

1. Each `field` object must include a `name` property and may include additional properties.
1. The order of `field` objects determines the order of fields on the *Fields* tab and in expanded records.
1. The `field.name` property ties a `field` object to a record property in `REST API` response data.
1. The `field.label` property is a user-friendly alias for a `field.name`.
1. The `field.isChecked` property dictates field visibility on page load.
1. The `field.isEditable` property declares that the field can participate in `POST`, `PUT`, and `PATCH` operations.
1. The `field.isRequired` property indicates that the field is required in `POST` operations.
1. The `field.colWidth` property sets the field width for that particular field.
1. The `field.transform` function presents an opportunity to modify a field value.
1. The `field.display` property defines any special instructions for a transformed field value.

The sections below describe each *field* property in more detail.

## field.name

<table class="options-table h2">
<tr><th>Required:</th><td><code>true</code></td></tr>
<tr><th>Type:</th><td><code>string</code></td></tr>
</table>

Consider the `key` and `title` properties in following REST API response data:

``` nonum
{
  "key": "/works/OL53908W",
  "title": "Adventures of Huckleberry Finn"
}
```

The *name* property acts as a reference to corresponding response data field:

``` js nonum
new HHDataList({
  recordColWidth: 'medium',
  recordFields: [
    { name: "key" }, 
    { name: "title" }
  ],
});
```

With no other *field* properties specified, HHDataList (internally) applies the following default property values:

``` js nonum
new HHDataList({
  recordColWidth: 'medium',
  recordFields: [
    {
      name: 'key', 
      label: 'key', 
      isChecked: true, 
      isEditable: false, 
      isRequired: false, 
      colWidth: 'medium',
      transform: (value) => value,
      display: { type: 'none' },
    },
    {
      name: 'title', 
      label: 'title', 
      isChecked: true, 
      isEditable: false, 
      isRequired: false, 
      colWidth: 'medium',
      transform: (value) => value, 
      display: { type: 'none' }
    }
  ],
});
```

## field.label

<table class="options-table h2">
<tr><th>Required:</th><td><code>false</code></td></tr>
<tr><th>Type:</th><td><code>string</code></td></tr>
<tr><th>Default:</th><td><code>field.name</code></td></tr>
</table>

Consider the labels in the following expanded record:

<p><img src="record-fields-002.png" class="img-fluid d-block" width=440 loading="lazy"></p>

The `label` property can provide a user-friendly alias for the `name` value:

``` js nonum
new HHDataList({
  recordFields: [
    { name: "key", label: "Key" }, 
    { name: "title", label: "Title" }
  ],
});
```

## field.isChecked

<table class="options-table h2">
<tr><th>Required:</th><td><code>false</code></td></tr>
<tr><th>Type:</th><td><code>boolean</code></td></tr>
<tr><th>Default:</th><td><code>true</code></td></tr>
</table>

Consider the `key` and `title` checkboxes on the following *Fields* tab:

<p><img src="record-fields-003.png" class="img-fluid d-block" width=440 loading="lazy"></p>

The `isChecked` property dictates whether a field is (on page load) checked or unchecked on the *Fields* tab:

``` js nonum
new HHDataList({
  recordFields: [
    { name: "key", label: "Key", isChecked: false }, 
    { name: "title", label: "Title", isChecked: true }
  ],
});
```

## field.isEditable

<table class="options-table h2">
<tr><th>Required:</th><td><code>false</code></td></tr>
<tr><th>Type:</th><td><code>boolean</code></td></tr>
<tr><th>Default:</th><td><code>false</code></td></tr>
</table>

When the *Edit* button is clicked on the following expanded record, the *Title* field becomes editable:

<p><img src="record-fields-004.png" class="img-fluid d-block" width=440 loading="lazy"></p>

And, the *Title* field appears on the following *New Record* form:

<p><img src="record-fields-005.png" class="img-fluid d-block" width=440 loading="lazy"></p>

Setting the `isEditable` property to `true` causes (with one caveat) a field (1) to become editable in *Edit* mode, and (2) to appear on the *New Record* form:

``` js nonum
new HHDataList({
  recordFields: [
    { name: "key", label: "Key", isChecked: false, isEditable: false }, 
    { name: "title", label: "Title", isChecked: true, isEditable: true }
  ],
});
```

The caveat is a field can be editable only if the display type is *none* or *text*.

## field.isRequired

<table class="options-table h2">
<tr><th>Required:</th><td><code>false</code></td></tr>
<tr><th>Type:</th><td><code>boolean</code></td></tr>
<tr><th>Default:</th><td><code>false</code></td></tr>
</table>

On the following *New Record* form, the *Title* field is required:

<p><img src="record-fields-006.png" class="img-fluid d-block" width=440 loading="lazy"></p>

Setting the `isRequired` property to `true` causes this behavior:

``` js nonum
new HHDataList({
  recordFields: [
    { name: "key", label: "Key", isChecked: false }, 
    { name: "title", label: "Title", isChecked: true, isEditable: true, isRequired: true }
  ],
});
```

## field.colWidth

<table class="options-table h2">
<tr><th>Required:</th><td><code>false</code></td></tr>
<tr><th>Type:</th><td><code>string</code></td></tr>
<tr><th>Default:</th><td><code>options.recordColWidth</code></td></tr>
<tr><th>Choices:</th><td><code>narrow, medium, wide</code></td></tr>
</table>

On the following expanded record, with a screen width of large or extra large, fields have various widths:

<p><img src="record-fields-007.png" class="img-fluid d-block" width=700 loading="lazy"></p>

The `colWidth` property determines the width (e.g. narrow, medium, wide) of a record field element (e.g. input, select, textarea) in an expanded record:

``` js nonum
new HHDataList({
  recordColWidth: 'medium',
  recordFields: [
    { name: "key", label: "Key", isChecked: false }, 
    { name: "title", label: "Title", isChecked: true, isEditable: true, isRequired: true, colWidth: 'wide' },
    { name: "subject_places", label: "Subject Places", isChecked: true },
    { name: "subject_times", label: "Subject Times", isChecked: true },
    { name: "dewey_number", label: "Dewey Number", isChecked: true, colWidth: 'narrow' }, 
    { name: "revision", label: "Revision", isChecked: true, colWidth: 'narrow' }, 
    { name: "created", label: "Created", isChecked: true, colWidth: 'narrow' },
    { name: "last_modified", label: "Last Modified", isChecked: true, colWidth: 'narrow' }
  ],
});
```

`colWidth` settings are responsive, so even *narrow* and *medium* settings appear *wide* for narrower screen widths:

<p><img src="record-fields-008.png" class="img-fluid d-block" width=500 loading="lazy"></p>

To learn more, see the [recordColWidth](#recordcolwidth) option.

## field.transform

<table class="options-table h2">
<tr><th>Required:</th><td><code>false</code></td></tr>
<tr><th>Type:</th><td><code>function</code></td></tr>
<tr><th>Default:</th><td><code>(value) => value</code></td></tr>
</table>

The `field.transform` function presents an opportunity to modify a field value.

### Example 1

Consider the `created` field in the following response data:

``` nonum
{
  "key": "/works/OL53908W",
  "title": "Adventures of Huckleberry Finn",
  "created": {
    "type": "/type/datetime",
    "value": "2009-10-15T18:06:09.703894"
  }
}
```

The `created` field value is an object with two properties: `type` and `value`. And, `value` is a timestamp with a particular format. Now, consider the (developer-chosen) display format of the `created` field value in an expanded record:

<p><img src="record-fields-009.png" class="img-fluid d-block" width=410 loading="lazy"></p>

A *transform* function is part of the bridge between raw data and display data for a field:

``` js nonum
new HHDataList({
  recordFields: [
    { name: "key", label: "Key", isChecked: false }, 
    { name: "title", label: "Title", isEditable: true, isRequired: true, colWidth: 'wide' },
    { name: "created", label: "Created", isChecked: false, transform: (value) => 
      new Date(value.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
    },
  ],
});
```

HHDataList invokes `field.transform(value)`, passing the raw data. The client-defined `transform` function modifies the raw value as needed, and returns the modified value.

### Example 2

Consider the `title` field in the following response data:

``` nonum
{
  "key": "/works/OL53908W",
  "title": "Adventures of Huckleberry Finn"
}
```

The *title* value needs no modification prior to display:

<p><img src="record-fields-010.png" class="img-fluid d-block" width=410 loading="lazy"></p>

The default `transform` function (e.g. `(value) => value`) returns the raw value unchanged, so there is no need to specify a `transform` function for this particular *title* field:

``` js nonum
new HHDataList({
  recordFields: [
    { name: "key", label: "Key", isChecked: false }, 
    { name: "title", label: "Title", isEditable: true, isRequired: true, colWidth: 'wide' }
  ],
});
```

### Example 3

Compare the `description` fields of these two records:

``` nonum
{
  "key": "/works/OL53908W",
  "title": "Adventures of Huckleberry Finn",
  "description": "Adventures of Huckleberry Finn or as it is known ..."
}
```

``` nonum
{
  "key": "/works/OL4134125W",
  "title": "The snow goose",
  "description": {
    "type": "/type/text",
    "value": "Against the backdrop of World War II, friendship develops ..."
  }
}
```

The first is a string and the second is an object, but the display format for both should be a string:

<p><img src="record-fields-011.png" class="img-fluid d-block" width=760 loading="lazy"></p>

So, the `transform` function must account for both possibilities:

``` js nonum
new HHDataList({
  recordFields: [
    { name: "title", label: "Title", isEditable: true, isRequired: true, colWidth: 'wide' },
    { name: "description", label: "Description", isEditable: true, colWidth: 'wide', transform: (value) => {
      if (typeof value === 'object') { return value.value; } 
      else { return value; }
    }}
  ],
});
```

### Example 4

Consider the `authors` field in the following response data:

``` nonum
{
  "title": "White Snow, Bright Snow",
  "authors": [
    {
      "author": { "key": "/authors/OL2763372A" },
      "type": { "key": "/type/author_role" }
    },
    {
      "author": { "key": "/authors/OL916848A" }
      "type": { "key": "/type/author_role" },
    },
    {
      "author": { "key": "/authors/OL1300693A" }
      "type": { "key": "/type/author_role" },
    }
  ]
}
```

The `authors` field is an array of objects. Each object represents an author, and includes a key rather than a name. Regardless, the target display is the following:

<p><img src="record-fields-012.png" class="img-fluid d-block" width=700 loading="lazy"></p>

The transformation from raw to display requires two steps:

1. Create an array of keys that will fit into a `SELECT` element:

    ``` nonum
    ['/authors/OL2763372A', '/authors/OL916848A', '/authors/OL1300693A']
    ```

1. Replace the `key` strings with author names:

    ``` nonum
    ['Alvin Tresselt', 'Roger Duvoisin', 'Catherine Bonhomme']
    ```

The `field.transform` function targets the first step:

``` js nonum
new HHDataList({
  recordFields: [
    { name: "title", label: "Title", isEditable: true, isRequired: true, colWidth: 'wide' },
    { name: "authors", label: "Authors", transform: (value) => {
      const a = [];
      for (let i of value) { a.push(i.author.key); }
      return a;
    }},
  ],
});
```

The result is an array of keys:

<p><img src="record-fields-013.png" class="img-fluid d-block" width=700 loading="lazy"></p>

The second step involves the use of a `field.display` object:

``` js nonum
new HHDataList({
  recordFields: [
    { name: "title", label: "Title", isEditable: true, isRequired: true, colWidth: 'wide' },
    { name: "authors", label: "Authors", 
      transform: (value) => {
        const a = [];
        for (let i of value) { a.push(i.author.key); }
        return a;
      },
      display: { type: "endpoint", field: (data) => data.name }
    },
  ],
});
```

See [field.display](#fielddisplay) below.

## field.contentMode

## field.display

<table class="options-table h2">
<tr><th>Required:</th><td><code>false</code></td></tr>
<tr><th>Type:</th><td><code>object</code></td></tr>
<tr><th>Default:</th><td><code>{ type: 'none' }</code></td></tr>
</table>

The *field.display* option specifies display instructions.

### type = default

### type = text

### type = link

For a single link, search *works* for *"a wild swan"*.

Consider the `links` field in the following response data:

``` nonum
{
  "title": "The Call of the Wild",
  "links": [
    {
      "url": "https://en.wikipedia.org/wiki/The_Call_of_the_Wild",
      "title": "Wikipedia",
      "type": { "key": "/type/link" }
    },
    {
      "url": "https://www.wikidata.org/wiki/Q476871",
      "title": "Wikidata",
      "type": { "key": "/type/link" }
    },
    {
      "url": "https://viaf.org/viaf/179138821",
      "title": "VIAF ID: 179138821",
      "type": { "key": "/type/link" }
    }
  ]
}
```

The `links` field is an array of objects. Each object represents a link, and includes a `url` and a `title`. The target display is the following:

<p><img src="record-fields-014.png" class="img-fluid d-block" width=700 loading="lazy"></p>

# transformed
