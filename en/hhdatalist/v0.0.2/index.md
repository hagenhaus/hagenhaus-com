---
bookTitle: HHDataList <span style="font-weight:normal;font-size:86%;">v0.0.2</span>
hhdatalist: v0.0.2
menuItem: mi-hhdatalist
---

# HHDataList

Include *About this version* somewhere.

Next things to do:

1. Integrate `hhapi.js` into `hhdatalist.js`. You may need to break out later, but integrate for now. 
1. When checking All Fields checkbox or any of the individual field checkboxes  (when records are expanded), complete building of records before displaying. In `updateExpandedRecords`, instead of calling `getAndUpdateRecord` iteratively, call `getRecord` iteratively to get all the records, then build each record, and then display them.
1. Organize options in docs and code.
1. Apply style to select and textarea elements.
1. Add open library to Swagger.
1. Write all docs.

Start v0.0.3
1. Put hhapi into hhdatalist.
1. Make js module
1. Contain bootstrap in module
1. Use latest versions of bootstrap and axios

https://medium.com/event-driven-utopia/event-driven-apis-understanding-the-principles-c3208308d4b2
