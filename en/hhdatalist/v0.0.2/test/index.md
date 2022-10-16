# Test

## Works

<div id="open-library-works-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: confirm,
    fieldColumnCount: 4,
    id: 'open-library-works-datalist',
    missingFields: {
      include: true,
      placeholder: ''
    },
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'q', none: '*', default: 'snow' }, // *
      order: { name: 'sort' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 5, 10, 20, 50, 100], default: 5 }
    },
    recordColumnCount: 3,
    recordFieldValue: 'key',
    recordFields: [
      { name: "key", label: "Key", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "title", label: "Title", isChecked: true, isEditable: true, isRequired: false }, 
      { name: "subtitle", label: "Subtitle", isChecked: false, isEditable: true, isRequired: false }, 
      { name: "authors", label: "Authors", isChecked: true, isEditable: false, isRequired: false, subtype: 'endpoint', get: (value) => {
        const a = [];
        for (let i of value) { a.push(i.author.key); }
        return a;
      }},
      { name: "type", label: "Type", isChecked: false, isEditable: false, isRequired: false, get: (value) => value.key }, 
      { name: "covers", label: "Covers", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "lc_classifications", label: "LC Classifications", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "links", label: "Links", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "dewey_number", label: "Dewey Number", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "description", label: "Description", isChecked: true, isEditable: true, isRequired: false, get: (value) => {
        if (typeof value === 'object') {
          return value.value;
        } else {
          return value;
        }
      }},
      { name: "first_sentence", label: "First Sentence", isChecked: true, isEditable: true, isRequired: false, get: (value) => value.value }, 
      { name: "subject_times", label: "Subject Times", isChecked: true, isEditable: true, isRequired: false },
      { name: "subject_places", label: "Subject Places", isChecked: true, isEditable: false, isRequired: false},
      { name: "subject_people", label: "Subject People", isChecked: true, isEditable: false, isRequired: false}, 
      { name: "first_publish_date", label: "First Published Date", isChecked: true, isEditable: true, isRequired: false }, 
      { name: "excerpts", label: "Excerpts", isChecked: true, isEditable: false, isRequired: false, get: (value) => {
        const a = [];
        for (let i of value) { a.push(i.excerpt); }
        return a;
      }},
      { name: "subjects", label: "Subjects", isChecked: true, isEditable: false, isRequired: false}, 
      { name: "location", label: "Location", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "latest_revision", label: "Latest Revision", isChecked: false, isEditable: false, isRequired: false }, 
      { name: "revision", label: "Revision", isChecked: true, isEditable: false, isRequired: false }, 
      { name: "created", label: "Created", isChecked: true, isEditable: false, isRequired: false, get: (value) => 
        new Date(value.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
      },
      { name: "last_modified", label: "Last Modified", isChecked: true, isEditable: false, isRequired: false, get: (value) => 
        new Date(value.value).toLocaleDateString(window.navigator.language, { year: 'numeric', month: 'long', day: 'numeric' }) 
      }
    ],
    recordIdField: 'key',
    recordsAreExpanded: true,
    recordTitleFields: ['title'],
    recordTitleFormat: (f, r) => `${r[f[0]]}`,
    reportError: (type, title, detail) => { reportError(type, title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    // reportRecordFields: (recordFields) => {
    //   console.log(JSON.stringify(recordFields).replace(/"([^"]+)":/g, '$1:'));
    // },
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
