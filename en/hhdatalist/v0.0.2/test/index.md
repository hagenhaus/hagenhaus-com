# Test

<div id="famous-trees-datalist" class="hh-data-list mt-4"></div>

<script>
  new HHDataList({
    controlsAreSmall: { value: false, hasUI: true },
    id: 'famous-trees-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'filter' },
      order: { name: 'order', default: 'name' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 1 }
    },
    recordColWidth: { value: 'medium', hasUI: true },
    recordFieldContentMode: { value: 'value', hasUI: true },
    recordFieldDefinitions: {
      managed: [
        { fieldName: 'id', isChecked: false }, 
        { fieldName: 'name', isEditable: true }, 
        { fieldName: 'species',
          transform: (v) => ({ url: v.link, title: v.text }),
          // transformer: (v) => ({ url: v.link, title: v.text }),
          display: { type: 'link' }
        }, 
        { fieldName: 'description', colWidth: 'wide', 
          display: { type: 'text', rows: 3 }
        }, 
        { fieldName: 'city' },
        { fieldName: 'country',
          transform: async (v) => (await HHDataList.get(`http://localhost:8081/api/devportals/v1/countries/${v}`)).data.name,
          // transformer: async (v) => (await HHDataList.get(`http://localhost:8081/api/devportals/v1/countries/${v}`)).data.name
        },
        { fieldName: 'coordinates', 
          transform: (v) => ({ 
            url: `https://www.google.com/maps/search/?api=1&query=${v.lat},${v.long}`, 
            title: `${v.lat}, ${v.long}` 
          }),
          // transformer: (v) => ({ 
          //   url: `https://www.google.com/maps/search/?api=1&query=${v.lat},${v.long}`, 
          //   title: `${v.lat}, ${v.long}` 
          // }),
          display: { type: 'link' }
        }, 
        { fieldName: 'birthYear',
          transform: (v) => `${ (new Date().getFullYear() - v).toLocaleString() }`,
          // transformer: (v) => `${ (new Date().getFullYear() - v).toLocaleString() }`
        }, 
        { fieldName: 'height', 
          transform: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown',
          // transformer: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown'
        }, 
        { fieldName: 'links', 
          transform: (v) => {
            const a = [];
            for (let i of v) { a.push({ url: i.link, title: i.text }); }
            return a;
          },
          // transformer: (v) => {
          //   const a = [];
          //   for (let i of v) { a.push({ url: i.link, title: i.text }); }
          //   return a;
          // },
          display: { type: 'link' }
        }
      ],
      transformed: [
        { label: 'ID', fieldNames: ['id'], isChecked: false }, 
        { label: 'Name', fieldNames: ['name'] }, 
        { label: 'Species', fieldNames: ['species'],
          transform: (v) => ({ url: v.link, title: v.text }),
          display: { type: 'link' }
        }, 
        { label: 'Description', fieldNames: ['description'], colWidth: 'wide', 
          display: { type: 'text', rows: 3 }
        }, 
        { label: 'Nearby City', fieldNames: ['city'] },
        { label: 'Country', fieldNames: ['country'],
          transform: async (v) => (await HHDataList.get(`http://localhost:8081/api/devportals/v1/countries/${v}`)).data.name
        },
        { label: 'Coordinates', fieldNames: ['lat', 'long'], 
          transform: (v) => ({ 
            url: `https://www.google.com/maps/search/?api=1&query=${v.lat},${v.long}`, 
            title: `${v.lat}, ${v.long}` 
          }),
          display: { type: 'link' }
        }, 
        { label: 'Age (years)', fieldNames: ['birthYear'],
          transform: (v) => `${ (new Date().getFullYear() - v).toLocaleString() }`
        }, 
        { label: 'Height (meters)', fieldNames: ['height'], 
          transform: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown'
        }, 
        { label: 'Links', fieldNames: ['links'], 
          transform: (v) => {
            const a = [];
            for (let i of v) { a.push({ url: i.link, title: i.text }); }
            return a;
          },
          display: { type: 'link' }
        }
      ]
    },
    recordIdField: 'id',
    recordParity: { value: true, hasUI: true },
    recordProcessingMode: { hasUI: true },
    recordsAreExpanded: { value: true, hasUI: true },
    recordsAreNumbered: { value: true, hasUI: true },
    recordsHaveAllFields: { value: true, hasUI: true, fieldValue: 'No data' },
    recordTitle: { fields: ['name'], format: (f, r) => `${r[f[0]]}` },
    reportError: (title, detail) => { reportError(title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportRecordFieldDefinitions: { hasUI: true },
    reportTheme: { hasUI: true },
    responseHelper: {
      record: (res) => res.data,
      records: (res) => res.data.records,
      numPages: (res, limit) => res.data.metadata.numTotalPages,
      numResponseRecords: (res) => res.data.metadata.numResponseRecords,
      numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
      numTotalRecords: (res) => res.data.metadata.numTotalRecords
    },
    selectableFieldColWidth: 'narrow',
    tabDescriptions: {
      home: 'This is the home description.',
      search: 'This is the search description.',
      transformedSelectableFields: 'This is the formed field names description.',
      selectableFields: 'This is the simple field names description.',
      new: 'This is the new description.',
      created: 'This is the created description.',
      config: 'This is the config description.'
    },
    tabsHaveDescriptions: { value: true, hasUI: true },
    themeName: { value: 'dodger blue', hasUI: true },
    // themeFromPaletteName: {
    //   paletteName: 'dodger blue',
    //   newThemeName: 'My Theme'
    // },
    url: `${getDomain()}/api/famous/v1/trees`,
  });
</script>
