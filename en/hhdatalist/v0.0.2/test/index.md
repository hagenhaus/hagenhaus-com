# Test

## Famous Trees

<div id="famous-trees-datalist" class="hh-data-list mt-4"></div>

<script>
  new HHDataList({
    controlsAreSmall: false,
    fieldColWidth: 'narrow',
    id: 'famous-trees-datalist',
    queryParams: {
      fields: { name: 'fields', default: '*' },
      filter: { name: 'filter' },
      order: { name: 'order', default: 'name' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 1 }
    },
    recordColWidth: 'medium',
    recordFieldAnalyzer: { 
      aspect: 'value',
      isTransformed: true 
    },
    recordFields: [
      { 
        name: 'id', 
        label: 'ID', 
        isChecked: false 
      }, { 
        name: 'name', 
        label: 'Name'
      }, { 
        name: 'species', 
        label: 'Species', 
        isChecked: true,
        transform: (v) => ({ url: v.link, title: v.text }),
        specialty: { type: 'link' }
      }, { 
        name: 'description', 
        label: 'Description', 
        isChecked: true,
        colWidth: 'wide', 
        specialty: { type: 'text', rows: 3 } 
      }, { 
        name: 'city', 
        label: 'Nearby City',
        isChecked: true,
      }, { 
        name: 'country', 
        label: 'Country', 
        isChecked: true,
        specialty: { 
          type: 'key', 
          url: (value) => `http://localhost:8081/api/devportals/v1/countries/${value}`, 
          value: (res) => res.data.name 
        }
      }, { 
        name: 'coordinates', 
        label: 'Latitude, Longitude', 
        isChecked: true,
        transform: (v) => ({ 
          url: `https://www.google.com/maps/search/?api=1&query=${v.lat},${v.long}`, 
          title: `${v.lat}, ${v.long}` 
        }),
        specialty: { type: 'link' }
      }, { 
        name: 'germinationYear', 
        label: 'Age (years)',
        isChecked: true,
        transform: (v) => `${ (new Date().getFullYear() - v).toLocaleString() }`
      }, { 
        name: 'height', 
        label: 'Height (meters)', 
        transform: (v) => Math.round(v * 0.3048) 
      }, { 
        name: 'links', 
        label: 'Links', 
        isChecked: true,
        transform: (v) => {
          const a = [];
          for (let i of v) { a.push({ url: i.link, title: i.text }); }
          return a;
        },
        specialty: { type: 'link' }
      }
    ],
    recordIdField: 'id',
    recordParity: true,
    recordsAreExpanded: true,
    recordsAreNumbered: true,
    recordTitle: {
      fields: ['name'],
      format: (f, r) => `${r[f[0]]}`
    },
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
    // themeFromPaletteName: {
    //   paletteName: 'Wheatgerm',
    //   newThemeName: 'Wheatgerm'
    // },
    // themeName: 'WheatGerm',
    url: `${getDomain()}/api/famous/v1/trees`,
  });
</script>

<script>
  // console.log(HHDataList.getThemeNames());
  // console.log(HHDataList.getPaletteKeys());
</script>
