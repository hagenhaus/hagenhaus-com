---
author: ""
hasOtp: true
hasPageHeader: true
hasScrollbar: true
hhdatalist: v0.0.2
menuItem: mi-home
---

# Introduction

My name is [Matt Hagen](/en/about/), a *freelance* creator of elegant content for software developers. The following responsive diagram illustrates both my webapp, [hagenhaus.com](/en/home/), and intuitive content:

<div class="mb-3">
  <div class="d-none d-md-block">
    <div><img src="diagram-h.png" class="img-fluid mx-auto d-block" width="800" height="334"; loading="lazy"></div>
  </div>
  <div class="d-md-none">
    <div><img src="diagram-v-1.png" class="img-fluid mx-auto d-block" width="391" height="437"; loading="lazy"></div>
    <div><img src="diagram-v-2.png" class="img-fluid mx-auto d-block" width="391" height="437"; loading="lazy"></div>
  </div>
</div>

# HHDataList

Shown in the diagram above, [HHDataList](/en/hhdatalist/v0.0.2/) is a highly configurable UI component for interacting with any REST API. The following instance accesses the [Lahman Baseball Dataset](http://seanlahman.com/) imported into MariaDB behind Hagenhaus API Server:

<div id="players-datalist" class="hh-data-list mt-4"></div>
<script>
  var playersOptions = new DLPlayersOptions002('players-datalist');
  playersOptions.themeDefinition.name = 'firebrick';
  new HHDataList(playersOptions);
</script>

Try the following:

1. Scroll using the arrows.
1. Click a record to expand. Click it again to collapse.
1. Click the Expand button to expand all. Scroll. Click Expand again to collapse all.
1. Click the Wrench icon. Check Theme. Try different themes.

The [HHDataList](/en/hhdatalist/v0.0.2/) documentation is another example of elegant content.

# Developer Guides

I created the first [Developer Portal](https://docs.aylanetworks.com/) for [Ayla Networks](https://www.aylanetworks.com/), and much of my work remains intact except for small updates. These docs help developers set up and configure devices, developer environments, and test environments by providing elegant explanations, diagrams, steps, and example code:

* [Ayla Development Kit](https://docs.aylanetworks.com/docs/ayla-development-kit)
* [Ayla Development Kit-ESP32C3 Module](https://docs.aylanetworks.com/docs/ayla-development-kit-esp32c3-module)
* [Integrated Agent: ESP32 v1.3.8](https://docs.aylanetworks.com/docs/version-138)
* [Ayla Linux Agent](https://docs.aylanetworks.com/docs/ayla-linux-device-solution)
* [Ayla Linux Gateway Agent](https://docs.aylanetworks.com/docs/ayla-linux-gateway-solution)
* [Ayla Rule Service](https://docs.aylanetworks.com/docs/ayla-rule-service-ars-preview)
* [Ayla Cloud Events](https://docs.aylanetworks.com/docs/ayla-data-export-and-streaming-features)
* [Handling Ack-enabled Properties](https://docs.aylanetworks.com/docs/handling-ack-enabled-properties)

# Diagrams

[Handling Ack-enabled Properties](https://docs.aylanetworks.com/docs/handling-ack-enabled-properties)

<p><img src="ayla-two-step-ack-success.png" class="img-fluid d-block" loading="lazy"></p>

<p><img src="ayla-ack-enabled-success.png" class="img-fluid d-block" loading="lazy"></p>

[Ayla Rule Service](https://docs.aylanetworks.com/docs/ayla-rule-service-ars-preview)

<p><img src="ayla-rule-service.png" class="img-fluid d-block" loading="lazy"></p>

[Ayla Cloud Events](https://docs.aylanetworks.com/docs/ayla-data-export-and-streaming-features)

<p><img src="ayla-cloud-events.png" class="img-fluid d-block" loading="lazy"></p>

[Ayla Dataflow Overview](https://docs.aylanetworks.com/docs/message-properties#dataflow-overview)

<p><img src="ayla-dataflow.png" class="img-fluid d-block" loading="lazy"></p>

[Ayla Development Kit](https://docs.aylanetworks.com/docs/ayla-development-kit).

<p><img src="ayla-device-cloud-app.png" class="img-fluid d-block" loading="lazy"></p>

[Ayla Host Library](https://docs.aylanetworks.com/docs/ayla-development-kit-esp32c3-module)

<p><img src="ayla-package-organization.png" class="img-fluid d-block" loading="lazy"></p>

[Abstract Rule Expressions](https://docs.aylanetworks.com/docs/rules#abstract-rule-expressions)

<p><img src="ayla-rule.png" class="img-fluid d-block" loading="lazy"></p>

[Aura Main Menu](https://docs.aylanetworks.com/docs/aura-mobile-app#main-menu)

<p><img src="ayla-aura-menu.png" class="img-fluid d-block" loading="lazy"></p>
