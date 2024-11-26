---
hasEditBtn: true
hasOtp: true
hasPageHeader: true
hasRefreshBtn: true
menuItem: mi-website
---

# Swagger UI

<style>
  div.swagger-ui div.information-container div.info {margin: 12px 0 12px 0;}
  div.swagger-ui div.information-container div.info h1 {font-weight:500;font-size:1.50rem;}
  div.swagger-ui div.information-container div.info h2.title {font-size:24px;}
  div.swagger-ui div.information-container div.info h2:not(.title) {font-weight:600;font-size:1.20rem;}
  div.swagger-ui div.information-container div.info h3 {
    color: #b37400;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    margin-top: 1rem;
    /* text-transform: uppercase; */
  }
  div.swagger-ui div.information-container div.info div.description pre code {
    background:#f2f6fa;
    border-left: 5px solid #c8daea;
    color:#212529;
    font-size:92%;
    font-weight:normal;
    line-height: 1.5;
    padding: 8px;
  }
  div.swagger-ui h3.opblock-tag small,
  div.swagger-ui div.information-container div.info li,
  div.swagger-ui div.information-container div.info a, 
  div.swagger-ui div.information-container div.info p, 
  div.swagger-ui div.information-container div.info table {font-size:1rem;}
  div.swagger-ui div.scheme-container {
    background:#fff;
    box-shadow:none;
    margin:0;
    padding:0;
}
</style>

<div id="swagger" class="hh-shield"></div>

<script>
  document.querySelector('div.hh-viewer').classList.add('hh-shield');

  function loadSwagger() {
    SwaggerUIBundle({
      dom_id: '#swagger',
      url: 'hagenhaus-hagenhaus-api-2.0.0-resolved.yaml',
      deepLinking: true,
      defaultModelsExpandDepth: 1,
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
  }

  // var swaggerCssUrl = 'http://localhost:8080/swagger/dist/swagger-ui.css';
  // var swaggerScriptUrl = 'http://localhost:8080/swagger/dist/swagger-ui-bundle.js';
  var swaggerCssUrl = 'https://unpkg.com/swagger-ui-dist@5.18.2/swagger-ui.css';
  var swaggerScriptUrl = 'https://unpkg.com/swagger-ui-dist@5.18.2/swagger-ui-bundle.js';

  if(!document.querySelector(`link[href="${swaggerCssUrl}"]`)) {
    var swaggerCss = document.createElement('link');
    swaggerCss.rel = 'stylesheet';
    swaggerCss.type = 'text/css';
    swaggerCss.href = swaggerCssUrl;
    document.head.appendChild(swaggerCss);
  }

  if(document.querySelector(`script[src="${swaggerScriptUrl}"]`)) {
    loadSwagger();
  } else {
    var swaggerUiScript = document.createElement('script');
    swaggerUiScript.onload = function () {
      loadSwagger();
    };
    swaggerUiScript.src = swaggerScriptUrl;
    document.head.appendChild(swaggerUiScript);
  }
</script>
