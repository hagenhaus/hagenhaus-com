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
      limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 5 }
    },
    recordColWidth: 'medium',
    recordFieldAnalyzer: { 
      aspect: 'value',
      isTransformed: true 
    },
    recordFields: [
      { name: 'id', label: 'ID', isChecked: false },
      { name: 'name', label: 'Name' },
      { name: 'species', label: 'Species', subtype: { name: "link" }, transform: (v) => { 
        return { url: v.link, title: v.text };
      }},
      { name: 'description', label: 'Description', colWidth: 'wide', subtype: { name: 'text' } },
      { name: 'city', label: 'City' },
      { name: 'country', label: 'Country' },
      { name: 'coordinates', label: 'Latitude, Longitude', transform: (v) => `${v.latitude}, ${v.longitude}` },
      { name: 'age', label: 'Age (years)' },
      { name: 'height', label: 'Height (meters)', transform: (v) => Math.round(v * 0.3048) },
      { name: 'links', label: 'Links', subtype: { name: "link" }, transform: (v) => {
        const a = [];
        for (let i of v) { a.push({ url: i.link, title: i.text }); }
        return a;
      }}
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
      recordsArray: (data) => data.records,
      numPages: (data, limit) => data.metadata.numTotalPages,
      numResponseRecords: (data) => data.metadata.numResponseRecords,
      numMatchedRecords: (data) => data.metadata.numFilteredRecords,
      numTotalRecords: (data) => data.metadata.numTotalRecords
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
