---
author: Matt Hagen
---

# Add an instance

The following video demonstrates how to add an HHDataList instance to a webpage, and how to configure it:

<p><img src="img-800.png" class="img-fluid" width=560 height=315 loading="lazy"></p>

# Create a starter file

Create your own [baseball-players-starter.html](https://hagenhaus.github.io/hhdatalist/v1.0.0/examples/baseball-players-starter.html) file with the following content:

``` js
load: https://hagenhaus.github.io/hhdatalist/v1.0.0/examples/baseball-players-starter.html
```

* Line 10 includes `hhdatalist.min.css` which applies theme and other properties.
* Line 18 provides a `<div>` element into which HHDataList will load your HHDataList instance.
* Line 23 includes `hhapi.min.js` which makes Axios calls to REST API endpoints.
* Line 24 includes `hhdatalist-themes.min.js` which provides some standard themes.
* Line 25 incluees `hhdatalist.min.js` which provides HHDataList core functionality. 

# Create a rudimentary data list

