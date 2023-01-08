# error

<table class="options-table"><tr><th>Optional, but recommended</th></tr></table>

The `error` option specifies a function for HHDataList to call when reporting errors.

# Example

``` js nonum
const reportError = (error) => {
  showToast('error', error.message, error.response.data);
};
 
new HHDataList({
  error: reportError,
});
```
