# error

<table class="options-table">
  <tr><th>Necessity:</th><td>Recommended</td></tr>
</table>

The `error` option specifies a function for HHDataList to call when reporting errors.

# Primary Example

``` js nonum
const reportError = (error) => {
  showToast('error', error.message, error.response.data);
};
 
new HHDataList({
  error: reportError,
});
```
