---
hasOtp: false
hasRefreshBtn: false
---

# Swagger

<link rel="stylesheet" type="text/css" href="/assets/swagger-ui.css">
<style>
  #swagger-ui div.swagger-ui div.information-container h2 {
    font-size: 2rem;
  }
  #swagger-ui div.swagger-ui .info .title small {
    background:#89bf04;
  }
  #swagger-ui div.swagger-ui .info .title small pre.version {
    background:#89bf04;
    padding:0;
  }
  #swagger-ui div.swagger-ui div.information-container hgroup.main a {
    display:none;
  }
  #swagger-ui div.swagger-ui .scheme-container {
    background: #f9f9eb;
    padding: 12px 0;
  }
  #swagger-ui div.swagger-ui .btn.authorize {
    background-color: white !important;
    border-color: #49cc90 !important;
}
</style>
<div id="swagger-ui"></div>

<script>
  window.ui = SwaggerUIBundle({
    url: 'openapi.json',
    dom_id: '#swagger-ui',
    docExpansion: 'none',
    presets: [
      SwaggerUIBundle.presets.apis
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: 'BaseLayout',
    queryConfigEnabled: true,
    displayOperationId: false
  })
</script>