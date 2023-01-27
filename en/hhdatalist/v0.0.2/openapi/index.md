# OpenApi

# Famous Trees

<div id="famous-trees-swagger"></div>
<script>
  SwaggerUIBundle({
    dom_id: '#famous-trees-swagger',
    url: 'hagenhaus-hagenhaus-api-1-resolved.json',
    defaultModelsExpandDepth: -1,
    displayOperationId: true,
    filter: 'Trees',
    plugins: [],
    requestSnippetsEnabled: true,
    syntaxHighlight: {
      activate: true,
      theme: 'nord'
    },
    apisSorter: 'alpha', 
    operationsSorter: function (a, b) { 
      const order = { 'get': '0', 'post': '1', 'patch': '2', 'delete': '3' };
      return order[a.get('method')].localeCompare(order[b.get('method')]);
    }
  });
</script>
