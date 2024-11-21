---
hasEditBtn: true
hasRefreshBtn: true
menuItem: mi-about-my-site
---

# Hagenhaus API

I created **Hagenhaus API** as a testbed for [HHDataList](/en/hhdatalist/v0.0.2/) development. It is a REST API that deals with data about famous trees and American baseball, enforcing `BEARER` authentication for some `GET` and for all `POST`, `PATCH`, and `DELETE` operations. I also created a corresponding [OpenAPI file](./hagenhaus-hagenhaus-api-2.0.0-resolved.yaml) as the official API documentation, and uploaded the file to Apidog, Postman, and SwaggerHub for the sake of comparison. The sections below summarize my approach to various aspects of API design.

# Authentication

# Methods and endpoints

# Query parameters

# Request bodies

# Response data

# Errors
 
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

<!-- * [/api/v2/baseball/players/aardsda01](http://localhost:8081/api/v2/baseball/players/aardsda01)
* [/api/v2/famous-trees/1](http://localhost:8081/api/v2/famous-trees/1) -->