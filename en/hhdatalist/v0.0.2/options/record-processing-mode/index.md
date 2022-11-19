# recordProcessingMode

When a user clicks on a collapsed record, HHDataList does the following:

1. Finds the record ID.
1. Calls `getRecord` to return an API response record consisting of a set of properties.
1. Copies the properties from the API response record to an HHDataList expanded record, potentially modifying the properties in transit.

The process of copying and modifying properties is called *record processing*. There are three record processing modes: copy, manage, and transform. The following table shows the processing actions that are valid for each mode:

<style>
  table.record-creation-mode td {
    text-align:center;
  }
</style>

<table class="record-creation-mode">
  <thead>
    <tr>
      <th></th>
      <th>Copy</th>
      <th>Manage</th>
      <th>Transform</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Copy Fields</th>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
    </tr>
    <tr>
      <th>Filter Fields</th>
      <td></td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
    </tr>
    <tr>
      <th>Order Fields</th>
      <td></td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
    </tr>
    <tr>
      <th>Add Fields</th>
      <td></td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
    </tr>
    <tr>
      <th>Merge Fields</th>
      <td></td>
      <td></td>
      <td><i class="fas fa-check"></i></td>
    </tr>
    <tr>
      <th>Alias Field Names</th>
      <td></td>
      <td></td>
      <td><i class="fas fa-check"></i></td>
    </tr>
    <tr>
      <th>Transform Field Values</th>
      <td></td>
      <td></td>
      <td><i class="fas fa-check"></i></td>
    </tr>
  </tbody>
</table>

The copy, manage, and transform modes yield copied, managed, and transformed types of records respectively. Each type of record has certain capabilities:

<table class="record-creation-mode">
  <thead>
    <tr>
      <th></th>
      <th>Copied</th>
      <th>Managed</th>
      <th>Transformed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Create Record</th>
      <td></td>
      <td><i class="fas fa-check"></i></td>
      <td></td>
    </tr>
    <tr>
      <th>Update Field Values</th>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
      <td></td>
    </tr>
    <tr>
      <th>Delete Record</th>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
    </tr>
  </tbody>
</table>

# Copy Mode

In *Copy* mode, HHDataList copies field names and values from an API response record to an HHDataList expanded record without filtering or reordering any fields. The expanded record is called a *copied* record. Each field is called a *copied* field.

# Manage Mode

In *Manage* mode, HHDataList copies (from the API response record to the HHDataList expanded record) only fields specified in the `options.fieldDefinitions.manage` array. HHDataList also orders the copied fields according to the order of the fields in the array. HHDataList does not, however, merge fields, alias field names, nor transform field values. The expanded record is called a *managed* record. Each field is called a *managed* field.

# Transform Mode

In *Transform* mode, HHDataList copies (from the API response record to the HHDataList expanded record) only fields specified in the `options.fieldDefinitions.transform` array. HHDataList also orders the copied fields according to the order of the fields in the array. HHDataList may also merge fields, alias field names, and/or transform field values. The expanded record is called a *transformed* record. Each field is called a *transformed* field.