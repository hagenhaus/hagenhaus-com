# id

<table class="options-table"><tr><th>Required</th></tr></table>

The `id` option specifies the id of the html element to which the HHDataList constructor should append the HHDataList component.

# Example

``` html nonum
<div id="my-datalist" class="hh-data-list"></div>
```

``` js nonum
new HHDataList({
  id: 'my-datalist',
});
```

If the option is missing, the HHDataList constructor writes the following to `console.log`:

``` nonum
HHDataList Error: The constructor requires an id option.
```

If the html element is missing, the HHDataList constructor writes the following to `console.log`:

``` nonum
HHDataList Error: The id option does not correspond to an html element on the page.
```