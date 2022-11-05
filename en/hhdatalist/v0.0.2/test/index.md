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
      order: { name: 'order' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 3 }
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
      },
      { 
        name: 'name', 
        label: 'Name' 
      },
      { 
        name: 'species', 
        label: 'Species', 
        transform: (v) => { 
          return { url: v.link, title: v.text };
        },
        subtype: { 
          name: 'link' 
        }
      },
      { 
        name: 'description', 
        label: 'Description', 
        colWidth: 'wide', 
        subtype: { 
          name: 'text' 
        } 
      },
      { 
        name: 'city', 
        label: 'Nearby City'
      },
      { 
        name: 'country', 
        label: 'Country', 
        subtype: { 
          name: 'key', 
          url: (value) => `http://localhost:8081/api/devportals/v1/countries/${value}`, 
          value: (res) => res.data.name 
        }
      },
      { 
        name: 'coordinates', 
        label: 'Latitude, Longitude', 
        transform: (v) => `${v.latitude}, ${v.longitude}` 
      },
      { 
        name: 'germinationYear', 
        label: 'Age (years)',
        transform: (v) => `${new Date().getFullYear() - v}`
      },
      { 
        name: 'height', 
        label: 'Height (meters)', 
        transform: (v) => Math.round(v * 0.3048) 
      },
      { 
        name: 'links', 
        label: 'Links', 
        transform: (v) => {
          const a = [];
          for (let i of v) { a.push({ url: i.link, title: i.text }); }
          return a;
        },
        subtype: { 
          name: 'link' 
        },
      }
    ],
    recordIdField: 'id',
    recordParity: true,
    recordsAreExpanded: false,
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
