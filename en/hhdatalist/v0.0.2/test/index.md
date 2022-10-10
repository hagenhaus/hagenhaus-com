# Test

<div id="open-library-works-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    fieldColumnCount: 4,
    id: 'open-library-works-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'q', default: 'snow' }, // *
      order: { name: 'sort' },
      page: { name: 'page' },
      limit: { name: 'limit' }
    },
    recordColumnCount: 1,
    recordParity: false,
    recordFieldExplorer: {
      showType: false,
      stringifyObjects: true,
      // reportRecordFields: (recordFields) => {console.log(JSON.stringify(recordFields))}
    },
    recordFields: [
      { name: "key", label: "Key", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "title", label: "Title", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "authors", label: "Authors", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "type", label: "Type", isChecked: true, isEditable: false, isRequired: false, get: (value) => value.key }, 
      { name: "covers", label: "Covers", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "description", label: "Description", isChecked: true, isEditable: false, isRequired: false, get: (value) => value.value }, 
      { name: "first_sentence", label: "First Sentence", isChecked: true, isEditable: false, isRequired: false, get: (value) => value.value }, 
      { name: "subject_places", label: "Subject Places", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "first_publish_date", label: "First Published Date", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "subject_people", label: "Subject People", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "excerpts", label: "Excerpts", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "subjects", label: "Subjects", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "location", label: "Location", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "latest_revision", label: "Latest Revision", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "revision", label: "revision", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "created", label: "Created", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "last_modified", label: "Last Modified", isChecked: false, isEditable: false, isRequired: false }
    ],
    recordIdField: 'key',
    recordTitleFields: ['title'],
    recordTitleFormat: (f, r) => `${r[f[0]]}`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      numPages: (data, limit) => Math.ceil(data.numFound / limit),
      numResponseRecords: (data) => data.docs.length,
      numMatchedRecords: (data) => data.numFound,
      recordsArray: (data) => data.docs
    },
    themeName: 'Wheatgerm',
    urls: {
      getRecord: (id) => `https://openlibrary.org${id}.json`,
      getRecords: `https://openlibrary.org/search.json`
    }
  });
</script>
