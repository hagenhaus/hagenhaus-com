---
bookTitle: Documentation
menuItem: mi-docs
---

# Documentation

Here is my to-do list:

1. Create a hagenhaus-press repository. Use by hagenhaus.com and genesis.
1. For getPortals and getPortal, push `allowJoinedFields` into stored procedure like insertPortal.
1. Make updatePortal the same as insertPortal.
1. List categories to customize. Then, customize each.
    1. Theme which means colors and sizes.
    1. Tab descriptions.
1. Save to Local Storage and allow user config.
    1. Recent filters.
    1. Current tab.
1. Standardize use of for loops.
1. Alias all record field names (in Tabs 4 and 5).
1. Filter v. Search. The latter involves something like Algolia.
1. Make HHApi a base class.
1. Add keystrokes.
1. When select tab, put focus on element inside tab.
1. Option to not get records right away because user may need to supply auth token first.
1. Support various id fields (name and type).
    ``` nonum
    show columns from people where `Key` = "PRI";

    SELECT column_name
    FROM information_schema.columns
    WHERE  column_key = 'PRI' AND table_name = 'people' AND table_schema = 'lahmansbaseballdb';
    ```
1. `recordTitleField` should handle concatenation of fields.
1. Deal with large fields.
1. Add sector ids to company records.
1. Add portal fields.
1. Add portals and corresponding companies.
1. What do I do when a user refreshes an open record that has been deleted from the database?
1. What do I do when a user refreshes a page of records (some open)?
1. Consider using typescript instead of javascript.
1. Consider adding tab for logs.
1. Add support for keyboard users and assistive tech users.
