# fieldDefinitions

<table class="options-table">
  <tr><th>Necessity:</th><td>Recommended</td></tr>
</table>

The `fieldDefinitions` option helps determine how HHDataList displays expanded records. The object contains up to two properties named `manage` and `transform`. The property values are arrays of field definition objects:

# Examples

## Default Example

``` js nonum
new HHDataList({
  fieldDefinitions: {
    manage: [
      { 
        fieldName: 'id', 
        isChecked: false,
        isEditable: false, 
        isRequired: false,
        colWidth: null,
        contentMode: null
      },
      { 
        fieldName: 'name',
        isChecked: true,
        isEditable: true, 
        isRequired: true, 
        colWidth: 'medium',
        contentMode: null,
        popValue: 'Koiwai Farm Ipponzakura'
      },
      { 
        fieldName: 'lat', 
        isChecked: true,
        isEditable: true,
        isRequired: false,
        colWidth: null,
        contentMode: null,
        popValue: '39.7560461061616'
      },
      { 
        fieldName: 'lng', 
        isChecked: true,
        isEditable: true,
        isRequired: false,
        colWidth: null,
        contentMode: null,
        popValue: '141.004011260734'
      }
    ],
    transform: [
      { 
        label: 'ID', 
        fieldName: 'id', 
        isChecked: false,
        colWidth: null,
        transformer: (v) => v,
        contentMode: null,
        display: { type: 'none' }
      }, 
      { 
        label: 'Name', 
        fieldName: 'name',
        isChecked: true,
        colWidth: null,
        transformer: (v) => v,
        contentMode: null,
        display: { type: 'none' }
      }, 
      { 
        label: 'Coordinates', 
        fieldNames: ['lat', 'lng'],
        isChecked: true,
        colWidth: null,
        transformer: (lat, lng) => ({ 
          url: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, 
          title: `${lat}, ${lng}` 
        }),
        contentMode: null,
        display: { type: 'link' }
      }
    ]
  }
});
```

## Common Example

``` js nonum
new HHDataList({
  fieldDefinitions: {
    manage: [
      { fieldName: 'id', isChecked: false },
      { fieldName: 'name', isEditable: true, isRequired: true, colWidth: 'medium' },
      { fieldName: 'lat', isEditable: true },
      { fieldName: 'lng', isEditable: true, isRequired: false }
    ],
    transform: [
      { label: 'ID', fieldName: 'id', isChecked: false },
      { label: 'Name', fieldName: 'name' },
      { 
        label: 'Coordinates',
        fieldNames: ['lat', 'lng'],
        transformer: (lat, lng) => ({
          url: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
          title: `${lat}, ${lng}`
        }),
        display: { type: 'link' }
      }
    ]
  }
});
```

## Manage Field Definition

Below is a manage field definition showing default values:

``` js nonum
{ 
  fieldName: 'name',   // required
  isChecked: true,
  isEditable: false, 
  isRequired: false, 
  colWidth: null,      // options.colWidths.records.value 
  contentMode: null,   // options.contentMode.value
  popValue: null       // options.populate(fieldName)
}
```

## Transform Field Definition

Below is a transform field definition showing default values where applicable:

``` js nonum
{ 
  label: 'Name', 
  fieldName: 'name',
  isChecked: true,
  colWidth: null,
  transformer: (v) => v,
  contentMode: null,
  display: { type: 'none' }
}
```