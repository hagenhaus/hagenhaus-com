# HHDataList Tutorial

1. Include `HHDataList.min.css` on the page:

    ``` nonum
    &lt;link rel="stylesheet" type="text/css" href="../../HHDataList.min.css"&gt;
    ```

1. Include `HHDataList.min.js` on the page:

    ``` nonum
    &lt;script src="../../HHDataList.min.js"&gt;&lt;/script&gt;
    ```

1. Add a `DIV` tag to the page:

    ``` nonum
    &lt;div id="players-datalist" class="hh-data-list"&gt;&lt;/div&gt;
    ```

1. Create an [options](#options) JavaScript object:

    ``` nonum
    let dataList = new HHDataList({
      uiId: 'players-datalist',
      url: http://localhost:8081/api/v1/players,
      ...
    });
    ```

1. Pass the options object to the JavaScript class constructor:

    ``` nonum
    let dataList = new HHDataList(options);
    ```

# Notes

1. It is useful to use swagger to get a field list. Use the field list to define recordFields.
1. Clear fields and then add them in the order you want to see them. Like, for Baseball Players, add first name, last name, birth year, death year. 
1. Find all the players where playerID != bbrefID.