---
author: Matt Hagen
---

# HHDataList Release Notes

Each release should do the following:

1. Update dependencies to latest versions.

1. With a record in edit mode, if the user modifies and saves a foreign-key field or a field that contributes to the record title, then HHDataList refreshes all the record's fields. So, if the user modifies (but does not save) multiple fields before saving the foreign-key field or the title-contributing field, then HHDataList overwrites these other unsaved modifications on the page.