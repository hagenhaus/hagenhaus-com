---
hasEditBtn: true
hasOtp: true
hasRefreshBtn: true
hhdatalist: v0.0.2
menuItem: mi-portfolio
---

# Portfolio

# API documentation

### Hagenhaus API

Using [SwaggerHub](https://app.swaggerhub.com/apis/hagenhaus/hagenhaus-api/2.0.0) and [Postman](https://documenter.getpostman.com/view/8773841/2sAYBVhC1m), I created this [OpenAPI file](/en/website/swagger-ui/hagenhaus-hagenhaus-api-2.0.0-resolved.yaml) describing the REST API that I designed and implemented for my website, hagenhaus.com, and rendered the OpenAPI file on my [Swagger UI](/en/website/swagger-ui/) page using [SwaggerUIBundle](https://github.com/swagger-api/swagger-ui) augmented with custom CSS and JS.

### ReadyRemit Portal

Using the [ReadMe](https://readme.com/) developer hub, I created the [ReadyRemit Developer Portal](https://developer.readyremit.com/) and all the original content for [Brightwell](https://www.brightwell.com/), a fintech company that makes a cross-border payment platform.

# PaaS documentation

I created the [Ayla Developer Portal](https://docs.aylanetworks.com/) and much of the content explaining and demonstrating how to programmatically interact with the [Ayla IoT Platform](https://www.aylanetworks.com/iot-platform), and how events flow through the platform. Examples:

1. [Ayla Development Kit](https://docs.aylanetworks.com/docs/ayla-development-kit)
1. [Ayla Development Kit-ESP32C3 Module](https://docs.aylanetworks.com/docs/ayla-development-kit-esp32c3-module)
1. [Integrated Agent: ESP32 v1.3.8](https://docs.aylanetworks.com/docs/version-138)
1. [Linux Agent](https://docs.aylanetworks.com/docs/ayla-linux-device-solution)
1. [Linux Gateway Agent](https://docs.aylanetworks.com/docs/ayla-linux-gateway-solution)
1. [Ayla Rule Service (ARS)](https://docs.aylanetworks.com/docs/ayla-rule-service-ars-preview)
1. [Ayla Cloud Events](https://docs.aylanetworks.com/docs/ayla-data-export-and-streaming-features)
1. [Handling Ack-enabled Properties](https://docs.aylanetworks.com/docs/handling-ack-enabled-properties)

# UI Component & docs

I created a website UI component named HHDataList that enables CRUD operations targeting any REST API. I also wrote the corresponding developer guide and tutorial. See [HHDataList](/en/hhdatalist/v0.0.2/). Here is an HHDataList instance:

<div id="players-datalist" class="hh-data-list mt-4"></div>
<script>
  var playersOptions = new DLPlayersOptions002('players-datalist');
  playersOptions.themeDefinition.name = 'dodger blue';
  new HHDataList(playersOptions);
</script>

# Web application

