---
hasRefreshBtn: true
---

# OpenApi

<!-- https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/ -->
<!-- https://github.com/swagger-api/swagger-ui/blob/master/dist/index.html -->

<div id="swagger"></div>
<script>
  SwaggerUIBundle({
    dom_id: '#swagger',
    url: 'hagenhaus-hagenhaus-api-2.0.0-resolved.yaml',
    defaultModelsExpandDepth: -1,
    displayOperationId: false,
    // filter: 'About',
    plugins: [],
    requestSnippetsEnabled: true,
    syntaxHighlight: {
      activate: true,
      theme: 'nord'
    },
    apisSorter: 'alpha', 
    operationsSorter: function (a, b) { 
      const order = { 'post': '0', 'get': '1', 'patch': '2', 'delete': '3' };
      return order[a.get('method')].localeCompare(order[b.get('method')]);
    }
  });
</script>
