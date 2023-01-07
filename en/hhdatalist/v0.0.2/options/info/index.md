# info

<table class="options-table">
  <tr>
    <th>Necessity:</th>
    <td>Recommended</td>
  </tr>
</table>

The `info` option ...

``` js nonum
new HHDataList({
  info: '',
});
```

# Old Stuff

HHDataList invokes the client-defined *reportInfo* function (if specified) when HHDataList completes certain tasks:

``` js nonum
const dataList = new HHDataList({
  reportInfo: (title, detail) => { reportInfo(title, detail); },
});
```

`reportInfo(title, detail)` is a client-defined message handler that might, for example, display a *toast* component like this:

<p><img src="report-info.png" class="img-fluid d-block" width=380 loading="lazy"></p>