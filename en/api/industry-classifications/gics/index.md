# GICS

See [Global Industry Classification Standard](https://en.wikipedia.org/wiki/Global_Industry_Classification_Standard).

<div class="row">
  <div class="col-12 col-md-6 col-lg-3 mb-3">
    <label for="disabledSelect" class="form-label">Sectors</label>
    <select id="disabledSelect" class="form-select">
      <option>Select</option>
    </select>
  </div>
  <div class="col-12 col-md-6 col-lg-3 mb-3">
    <label for="disabledSelect" class="form-label">Industry Categories</label>
    <select id="disabledSelect" class="form-select">
      <option>Select</option>
    </select>
  </div>
  <div class="col-12 col-md-6 col-lg-3 mb-3">
    <label for="disabledSelect" class="form-label">Industries</label>
    <select id="disabledSelect" class="form-select">
      <option>Select</option>
    </select>
  </div>
  <div class="col-12 col-md-6 col-lg-3 mb-3">
    <label for="disabledSelect" class="form-label">Subindustries</label>
    <select id="disabledSelect" class="form-select">
      <option>Select</option>
    </select>
  </div>
</div>

<div id="swagger-ui"></div>
<script>
  SwaggerUIBundle({
    defaultModelsExpandDepth: -1,
    // displayOperationId: true,
    // docExpansion: 'full',
    dom_id: '#swagger-ui',
    // filter: 'Sectors',
    plugins: [],
    requestSnippetsEnabled: true,
    syntaxHighlight: {
      activate: true,
      theme: 'nord'
    },
    url: 'hh-gics-v1-20220519-openapi.json'
  });
</script>
