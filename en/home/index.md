---
hasOtp: false
hasPageHeader: false
hasScrollbar: false
hhdatalist: v0.0.2
menuItem: mi-home
---

# Home

<div class='row justify-content-center'>
<div class='col-12 col-md-11 col-lg-10 col-xl-9'>

<span style="color:black;font-weight:500;">HHDataList</span> is an option-rich <span style="color:black;font-weight:500;">UI Component Class</span>. Instances interact with <span style="color:black;font-weight:500;">REST APIs</span>. Try the example below. [See the docs](/en/hhdatalist/v0.0.2/) to add instances to your website. Submit feature requests, issues, and questions via [GitHub]().
</div>
</div>

<div class='row justify-content-center'>
  <div class='col-12 col-md-11 col-lg-10 col-xl-9'>
    <div id="famous-trees-datalist" class="hh-data-list mt-3"></div>
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

  new HHDataList({
    colWidths: {
      fields: { value: 'narrow' },
      records: { value: 'medium' },
      tools: { value: 'narrow' }
    },
    confirm: confirm,
    contentMode: { value: 'string', showTool: true },
    descriptions: { 
      home: 'Each record is an individual famous tree.',
      value: true 
    },
    error: (title, detail) => { reportError(title, detail); },
    expand: { value: true },
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
        { fieldName: 'links', isEditable: true },
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
    number: { value: true },
    parity: {
      get: { value: true },
      post: { value: true }
    },
    populate: (fieldName) => popValues.get(fieldName),
    processMode: { value: 'transform', showTool: true },
    queryParams: {
      fields: { name: 'fields' },
      filter: { name: 'filter' },
      order: { name: 'order', default: 'name asc' },
      page: { name: 'page' },
      limit: { name: 'limit', choices: [1, 3, 5, 10, 15, 20, 50, 100], default: 1 }
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
    themeDefinition: {
      // name: 'shadowbox', 
      // hasTool: true,
      // showTool: true
    },
    uniformity: { value: true, fieldValue: 'No data' },
    url: `${getDomain()}/api/famous/v1/trees`
  });
</script>

<div class='row justify-content-center'>
<div class='col-12 col-md-11 col-lg-10 col-xl-9'>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 

Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

</div>
</div>