# info

<table class="options-table"><tr><th>Optional, but recommended</th></tr></table>

The `info` option specifies a function for HHDataList to call when reporting that a record was created/deleted or a record field was updated.

# Example


HHDataList passes two action-specific arguments to the `info` function: `title`, and `message`.

``` js nonum
// developer-defined
const reportInfo = (title, message) => {
  showToast('info', title, message);
};
 
new HHDataList({
  info: reportInfo,
});
```

For example, after deleting a record for a baseball player named *Casey Jones*, HHDataList might pass the following arguments to the function:

|Parameter|Argument|
|-|-|
|*title*|"Delete Record?"|
|*message*|\`Record "Casey Jones (b. 1863)" was deleted.\`|

It is up to the website to decide how to display the information. Below is an example:

<p><img src="report-info.png" class="img-fluid d-block" width=320 loading="lazy"></p>

If the website does not provide an *info* option to the HHDataList constructor, HHDataList does not report the information.