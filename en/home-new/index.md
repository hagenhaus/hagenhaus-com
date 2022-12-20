---
hasOtp: false
hasPageHeader: false
hasScrollbar: false
hhdatalist: v0.0.2
menuItem: mi-home
---

# Home

<div class='row justify-content-center'>
<div class='col-12 col-md-11 col-lg-10 col-xl-10'>

<b>HHDataList</b> is a JavaScript class. Instances enable websites to interact with REST APIs. Here is an example:

</div>
</div>

<div class='row justify-content-center my-2'>
  <div class='col-12 col-md-11 col-lg-10 col-xl-10'>
    <div id="famous-trees-datalist" class="hh-data-list"></div>
  </div>
</div>

<script>
  var popValues = new Map()
    .set('name', 'Koiwai Farm Ipponzakura')
    .set('species', `{"link":"https://en.wikipedia.org/wiki/Prunus_serrulata","text":"Prunus serrulata"}`)
    .set('description', `The solitary cherry tree stands in Koiwai Farm, a privately owned farm not far from Iwate’s capital city Morioka (盛岡市 Morioka-shi). With over 500,000 visitors annually, the farm is immensely popular among the locals, and has been around since its establishment in 1891. In fact, the tree was said to be planted over 100 years ago too, and since then many people have visited the farm during different seasons just to see it. But among all the seasons, spring is often considered the best to see the tree in its full glory.`)
    .set('city', 'Morioka')
    .set('country', 'JPN')
    .set('lat', '39.7560461061616')
    .set('lng', '141.004011260734')
    .set('birthYear', '1922')
    .set('height', '0')
    .set('girth', '0')
    .set('links', `[{"link":"https://japanrailtimes.japanrailcafe.com.sg/web/article/seasons/sakura-series-4","text":"Japan Rail Cafe"},{"link":"https://www.koiwai.co.jp/makiba/","text":"Koiwai Farm"}]`);
</script>

<script>
  new HHDataList({
    colWidths: {
      fields: { value: 'narrow' },
      records: { value: 'medium' },
      tools: { value: 'narrow' }
    },
    confirm: confirm,
    contentMode: { value: 'string' },
    descriptions: { 
      home: 'This data list interacts with a REST API that provides access to a small dataset of famous trees.',
      search: 'Search and order syntax is API-specific.',
      fields: 'Checked fields appear in records.',
      tools: 'Checked tools appear on the toolbar.',
      new: 'The New Record form consists of managed fields.',
      value: true 
    },
    error: (error) => { reportError(error); },
    expand: { value: false, showTool: true },
    fieldDefinitions: {
      manage: [
        { fieldName: 'id', isChecked: false },
        { fieldName: 'name', isEditable: true, isRequired: true, colWidth: 'medium' },
        { fieldName: 'species', isEditable: true, colWidth: 'medium' },
        { fieldName: 'description', isEditable: true },
        { fieldName: 'city', isEditable: true },
        { fieldName: 'country', isEditable: true },
        { fieldName: 'lat', isEditable: true },
        { fieldName: 'lng', isEditable: true },
        { fieldName: 'birthYear', isEditable: true },
        { fieldName: 'height', isEditable: true },
        { fieldName: 'girth', isEditable: true },
        { fieldName: 'links', isEditable: true }
      ],
      transform: [
        { label: 'ID', fieldNames: ['id'], isChecked: false }, 
        { label: 'Name', fieldNames: ['name'] }, 
        { label: 'Species', fieldNames: ['species'],
          transform: (v) => ({ url: v.link, title: v.text }),
          transformer: (v) => ({ url: v.link, title: v.text }),
          display: { type: 'link' }
        }, 
        { label: 'Description', fieldNames: ['description'], colWidth: 'wide', 
          display: { type: 'text', rows: 3 }
        }, 
        { label: 'Nearby City', fieldNames: ['city'] },
        { label: 'Country', fieldNames: ['country'],
          transform: async (v) => (await HHDataList.get(`http://localhost:8081/api/devportals/v1/countries/${v}`)).data.name,
          transformer: async (v) => (await HHDataList.get(`http://localhost:8081/api/devportals/v1/countries/${v}`)).data.name
        },
        { label: 'Coordinates', fieldNames: ['lat', 'lng'], 
          transformer: (lat, lng) => ({ 
            url: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, 
            title: `${lat}, ${lng}` 
          }),
          display: { type: 'link' }
        }, 
        { label: 'Age (years)', fieldNames: ['birthYear'],
          transform: (v) => `${ (new Date().getFullYear() - v).toLocaleString() }`,
          transformer: (v) => `${ (new Date().getFullYear() - v).toLocaleString() }`
        }, 
        { label: 'Height (meters)', fieldNames: ['height'], 
          transform: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown',
          transformer: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown'
        }, 
        { label: 'Links', fieldNames: ['links'], 
          transform: (v) => {
            const a = [];
            for (let i of v) { a.push({ url: i.link, title: i.text }); }
            return a;
          },
          transformer: (v) => {
            const a = [];
            for (let i of v) { a.push({ url: i.link, title: i.text }); }
            return a;
          },
          display: { type: 'link' }
        }
      ]
    },
    id: 'famous-trees-datalist',
    info: (title, detail) => { reportInfo(title, detail); },
    methods: {
      createRecord: () => { 
        reportWarning('Cannot Create Record', 'This feature is disabled for this data list.'); 
      },
      deleteRecord: () => { 
        reportWarning('Cannot Delete Record', 'This feature is disabled for this data list.'); 
      },
      patchRecord: () => {
        reportWarning('Cannot Modify Record Field', 'This feature is disabled for this data list.');
      }
    },
    number: { value: true },
    parity: {
      get: { value: true },
      post: { value: true }
    },
    populate: (fieldName) => popValues.get(fieldName),
    processMode: { value: 'transform', showTool: true },
    queryParams: {
      fields: { name: 'fields' },
      filter: { name: 'filter',  placeholder: 'name like "%tree%" and country like "AUS"' },
      order: { name: 'order', default: 'name asc' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 3, showTool: true }
    },
    recordIdField: 'id',
    recordTitle: { fields: ['name'], format: (f, r) => r[f[0]] },
    reporters: {
      fieldDefinitions: {  },
      queryParams: {  },
      requests: {  },
      theme: {  },
      themes: {  }
    },
    responseHelper: {
      record: (res) => res.data,
      records: (res) => res.data.records,
      numPages: (res, limit) => res.data.metadata.numTotalPages,
      numResponseRecords: (res) => res.data.metadata.numResponseRecords,
      numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
      numTotalRecords: (res) => res.data.metadata.numTotalRecords
    },
    small: { value: true },
    themeDefinition: { showTool: true },
    uniformity: { value: true, fieldValue: 'No data' },
    url: `${getDomain()}/api/famous/v1/trees`
  });
</script>

<div class='row justify-content-center'>
<div class='col-12 col-md-11 col-lg-10 col-xl-10'>

An <b>HHDataList</b> instance is highly configurable, so it can serve as an enduser interface or a developer tool. To learn how to add instances to your website, see the [HHDataList](/en/hhdatalist/v0.0.2/) docs. You are welcome to submit feature requests, ask questions, and report bugs on [Gitter](https://gitter.im/hagenhaus/hhdatalist).

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</div>
</div>