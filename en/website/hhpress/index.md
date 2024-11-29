---
hasEditBtn: true
hasRefreshBtn: true
menuItem: mi-website
---

# HHPress

HHPress is a simple platform for building markdown-sourced websites. Like similar platforms, it includes a generator that transforms markdown into html:

<div><img src="md-to-html.png" class="img-fluid d-block" width=609 height=135 loading="lazy"></div>

However, unlike HHPress, most traditional generators transform markdown files into complete html webpages:

<div><img src="md-to-webpage.png" class="img-fluid d-block" width=633 height=224 loading="lazy"></div>

So, when replacing this type of generated html webpage with another, in addition to displaying new content, the browser often overwrites existing parts with identical parts:

<div><img src="load-webpage.png" class="img-fluid d-block" width=480 height=250 loading="lazy"></div>

This approach is not without merits. 



One of the primary drawbacks to this approach is associated with sidebars. There are two types of sidebars:

1. Bookbar. This is a sidebar that contains links to multiple pages.
1. OTPbar. This is a sidebar that contains links to headings on the current page (On This Page).

The diagram below illustrates the difference between a bookbar and an OTPbar:

<div><img src="parts-of-webpage.png" class="img-fluid d-block" width=480 height=345 loading="lazy"></div>

Whenever 
