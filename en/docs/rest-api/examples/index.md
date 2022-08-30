---
author: Matt Hagen
---

# REST API Examples

# Baseball API

## Players

<div id="baseball-players"></div>
<script>
  SwaggerUIBundle({
    defaultModelsExpandDepth: -1,
    displayOperationId: true,
    dom_id: '#baseball-players',
    filter: 'Players',
    plugins: [],
    requestSnippetsEnabled: true,
    syntaxHighlight: {
      activate: true,
      theme: 'nord'
    },
    url: 'hagenhaus-hagenhaus-api-1-resolved.json'
  });
</script>

# Portals API

## Portals

<div id="swagger-portals"></div>
<script>
  SwaggerUIBundle({
    defaultModelsExpandDepth: -1,
    displayOperationId: true,
    dom_id: '#swagger-portals',
    filter: 'Portals',
    plugins: [],
    requestSnippetsEnabled: true,
    syntaxHighlight: {
      activate: true,
      theme: 'nord'
    },
    url: 'hagenhaus-hagenhaus-api-1-resolved.json'/*,
    operationsSorter: (a, b) => {
      var methodsOrder = ['get', 'post', 'put', 'delete', 'patch', 'options', 'trace'];
      var result = methodsOrder.indexOf( a.get('method') ) - methodsOrder.indexOf( b.get('method') );
      if (result === 0) {
        result = a.get('path').localeCompare(b.get('path'));
      }
      return result;
    }*/
  });
</script>

## Companies

<div id="swagger-companies"></div>
<script>
  SwaggerUIBundle({
    defaultModelsExpandDepth: -1,
    displayOperationId: true,
    dom_id: '#swagger-companies',
    filter: 'Companies',
    plugins: [],
    requestSnippetsEnabled: true,
    syntaxHighlight: {
      activate: true,
      theme: 'nord'
    },
    url: 'hagenhaus-hagenhaus-api-1-resolved.json'
  });
</script>

## Countries

<div id="swagger-countries"></div>
<script>
  SwaggerUIBundle({
    defaultModelsExpandDepth: -1,
    displayOperationId: true,
    dom_id: '#swagger-countries',
    filter: 'Countries',
    plugins: [],
    requestSnippetsEnabled: true,
    syntaxHighlight: {
      activate: true,
      theme: 'nord'
    },
    url: 'hagenhaus-hagenhaus-api-1-resolved.json'
  });
</script>

## Sectors

<div id="swagger-sectors"></div>
<script>
  SwaggerUIBundle({
    defaultModelsExpandDepth: -1,
    displayOperationId: true,
    dom_id: '#swagger-sectors',
    filter: 'Sectors',
    plugins: [],
    requestSnippetsEnabled: true,
    syntaxHighlight: {
      activate: true,
      theme: 'nord'
    },
    url: 'hagenhaus-hagenhaus-api-1-resolved.json'
  });
</script>

# Soccer API

* https://www.kaggle.com/datasets/hugomathien/soccer