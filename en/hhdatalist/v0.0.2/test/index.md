# Test

# Famous Data

## Famous Trees

<div id="famous-trees-datalist" class="hh-data-list mt-4"></div>

<script>
  new HHDataList({
    controlsAreSmall: { value: false, hasUI: true },
    fieldColWidth: 'narrow',
    fieldDefs: {
      managedFieldDefs: [
        { name: 'id', label: 'ID', isChecked: false }, 
        { name: 'name', label: 'Name', isEditable: true }, 
        { name: 'species', label: 'Species',
          transform: (v) => ({ url: v.link, title: v.text }),
          display: { type: 'link' }
        }, 
        { name: 'description', label: 'Description', colWidth: 'wide', 
          display: { type: 'text', rows: 3 }
        }, 
        { name: 'city', label: 'Nearby City' },
        { name: 'country', label: 'Country',
          transform: async (v) => (await HHDataList.get(`http://localhost:8081/api/devportals/v1/countries/${v}`)).data.name
        },
        { name: 'coordinates', label: 'Coordinates', 
          transform: (v) => ({ 
            url: `https://www.google.com/maps/search/?api=1&query=${v.lat},${v.long}`, 
            title: `${v.lat}, ${v.long}` 
          }),
          display: { type: 'link' }
        }, 
        { name: 'birthYear', label: 'Age (years)',
          transform: (v) => `${ (new Date().getFullYear() - v).toLocaleString() }`
        }, 
        { name: 'height', label: 'Height (meters)', 
          transform: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown'
        }, 
        { name: 'links', label: 'Links', 
          transform: (v) => {
            const a = [];
            for (let i of v) { a.push({ url: i.link, title: i.text }); }
            return a;
          },
          display: { type: 'link' }
        }
      ],
      transformedFieldDefs: [
        { name: 'ID', sources: ['id'], isChecked: false }, 
        { name: 'Name', sources: ['name'] }, 
        { name: 'Species', sources: ['species'],
          transform: (v) => ({ url: v.link, title: v.text }),
          display: { type: 'link' }
        }, 
        { name: 'Description', sources: ['description'], colWidth: 'wide', 
          display: { type: 'text', rows: 3 }
        }, 
        { name: 'Nearby City', sources: ['city'] },
        { name: 'Country', sources: ['country'],
          transform: async (v) => (await HHDataList.get(`http://localhost:8081/api/devportals/v1/countries/${v}`)).data.name
        },
        { name: 'Coordinates', sources: ['lat', 'long'], 
          transform: (v) => ({ 
            url: `https://www.google.com/maps/search/?api=1&query=${v.lat},${v.long}`, 
            title: `${v.lat}, ${v.long}` 
          }),
          display: { type: 'link' }
        }, 
        { name: 'Age (years)', sources: ['birthYear'],
          transform: (v) => `${ (new Date().getFullYear() - v).toLocaleString() }`
        }, 
        { name: 'Height (meters)', sources: ['height'], 
          transform: (v) => v > 0 ? Math.round(v * 0.3048) : 'Unknown'
        }, 
        { name: 'Links', sources: ['links'], 
          transform: (v) => {
            const a = [];
            for (let i of v) { a.push({ url: i.link, title: i.text }); }
            return a;
          },
          display: { type: 'link' }
        }
      ]
    },
    id: 'famous-trees-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'filter' },
      order: { name: 'order', default: 'name' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 5 }
    },
    recordColWidth: 'medium',
    recordContentMode: { value: 'values', hasUI: true },
    recordCreationMode: { value: 'transform', hasUI: true },
    recordIdField: 'id',
    recordParity: { value: true, hasUI: true },
    recordsAreExpanded: { value: false, hasUI: true },
    recordsAreNumbered: { value: true, hasUI: true },
    recordsHaveAllFields: { value: true, hasUI: true, fieldValue: 'No data' },
    recordTitle: { fields: ['name'], format: (f, r) => `${r[f[0]]}` },
    reportError: (title, detail) => { reportError(title, detail); },
    reportInfo: (title, detail) => { reportInfo(title, detail); },
    reportWarning: (type, title, detail) => { reportWarning(type, title, detail); },
    responseHelper: {
      record: (res) => res.data,
      records: (res) => res.data.records,
      numPages: (res, limit) => res.data.metadata.numTotalPages,
      numResponseRecords: (res) => res.data.metadata.numResponseRecords,
      numMatchedRecords: (res) => res.data.metadata.numFilteredRecords,
      numTotalRecords: (res) => res.data.metadata.numTotalRecords
    },
    // reportTheme: (theme) => { 
    //   const t1 = JSON.stringify(theme, null, 2);
    //   const t2 = t1.replace(/"([^"]+)":/g, '$1:');
    //   const t3 = t2.replace(/"/g, "'");      
    //   console.log(t3);
    // },
    tabDescriptions: {
      home: 'This is the home description.',
      search: 'This is the search description.',
      formedFieldNames: 'This is the formed field names description.',
      simpleFieldNames: 'This is the simple field names description.',
      new: 'This is the new description.',
      created: 'This is the created description.',
      config: 'This is the config description.'
    },
    tabsHaveDescriptions: { value: true, hasUI: true },
    themeName: { value: 'dodger blue', hasUI: true },
    // themeFromPaletteName: {
    //   paletteName: 'Wheatgerm',
    //   newThemeName: 'My Theme'
    // },
    url: `${getDomain()}/api/famous/v1/trees`,
  });
</script>
