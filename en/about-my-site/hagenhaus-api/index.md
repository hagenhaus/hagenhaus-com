---
hasEditBtn: true
hasRefreshBtn: true
menuItem: mi-about-my-site
---

# Hagenhaus API

I created **Hagenhaus API** as a testbed for HHDataList development. It is a REST API that exposes data about two completely different topics: famous trees and baseball:

* [/api/v2/baseball/players/aardsda01](http://localhost:8081/api/v2/baseball/players/aardsda01)
* [/api/v2/famous-trees/1](http://localhost:8081/api/v2/famous-trees/1)

I also created a corresponding [OpenAPI file](./hagenhaus-hagenhaus-api-2.0.0-resolved.yaml), and uploaded it to Apidog, Postman, and SwaggerHub.
 
<!-- <div id="swagger"></div>
<script>
  SwaggerUIBundle({
    dom_id: '#swagger',
    url: 'hagenhaus-hagenhaus-api-2.0.0-resolved.yaml',
    deepLinking: true,
    defaultModelsExpandDepth: -1,
    displayOperationId: false,
    layout: "BaseLayout",
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
</script> -->