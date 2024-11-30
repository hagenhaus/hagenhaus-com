---
hasEditBtn: true
hasRefreshBtn: true
menuItem: mi-website
---

# HHPress

HHPress is a platform for building websites sourced from markdown files.

# Why HHPress?

Like similar platforms, HHPress includes a generator that transforms markdown into html:

<div><img src="md-to-html.png" class="img-fluid d-block" width=609 height=135 loading="lazy"></div>

Most other generators transform markdown files into complete webpages:

<div><img src="md-to-webpage.png" class="img-fluid d-block" width=633 height=224 loading="lazy"></div>

Browsers load these webpages in their entirety even if they contain parts identical to those on the current webpage. In the following diagram, for example, the _Finches_ webpage contains the same header and sidebar as the _Ducks_ webpage it is replacing:

<div><img src="load-webpage.png" class="img-fluid d-block" width=380 height=198 loading="lazy"></div>

This approach degrades sidebar usability. Consider the following diagram:

<div><img src="parts-of-webpage.png" class="img-fluid d-block" width=480 height=345 loading="lazy"></div>

There are two types of sidebars: bookbars and OTPs. An OTP contains links to headings in the already loaded main content area (referred to as the _page_ which is distinct from the entire webpage). Clicking a link in the OTP does not generate a request for a new webpage. 

A bookbar, on the other hand, contains links to multiple pages. So, for example, when a user expands Mammals, scrolls down past Alpaca, Honey Badger, and Rabbit, and clicks on Sea Otter, if the requested webpage was made by a traditional generator, the browser will overwrite all parts of the Finches webpage with the Sea Otter webpage, destroying the state of the current bookbar in the process.

This annoys me, so I created HHPress in which the generator and the client-side JavaScript module work together (as described below) to maintain the state of the bookbar on page loads.

# Folder structure

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div><img src="folders-all.png" class="img-fluid d-block" width=180 loading="lazy"></div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Markdown

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div><img src="folders-en.png" class="img-fluid d-block" width=180 loading="lazy"></div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Generator

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div><img src="folders-tools.png" class="img-fluid d-block" width=180 loading="lazy"></div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Assets

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div><img src="folders-assets.png" class="img-fluid d-block" width=180 loading="lazy"></div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

