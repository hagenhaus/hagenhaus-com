# confirm

<table class="options-table"><tr><th>Optional, but recommended</th></tr></table>

The `confirm` option specifies a function that, before deleting records or abandoning the saving of record field modifications, HHDataList invokes to enable the website to ask the user to confirm the action.

# Example

HHDataList passes four action-specific arguments to the `confirm` function: `title`, `detail`, `yesLabel`, and `yesCb`.

``` js nonum
// developer-defined
const confirm = (title, detail, yesLabel, yesCb) => {
  modalEl.querySelector('h5.modal-title').textContent = title;
  modalEl.querySelector('div.modal-body').textContent = detail;
  modalEl.querySelector('button.yes').innerHTML = yesLabel;
  modalYesCb = yesCb;
  modal.show();
};
 
new HHDataList({
  confirm: confirm,
});
```

For example, before deleting a record for a baseball player named *Casey Jones*, HHDataList might pass the following arguments to the function:

|Parameter|Argument|
|-|-|
|title|Delete Record?|
|detail|Casey Jones (b. 1863)|
|yesLabel|Delete|
|yesCb|HHDataList internal `DELETE` function|

The job of the *confirm* function is to present the *yesLabel* to the user, obtain a response, and, if the response is affirmative, call *yesCb* with no arguments. For example, a website might display a modal:

<p><img src="confirm.png" class="img-fluid d-block" width=400 loading="lazy"></p>

If the website does not provide a *confirm* option to the HHDataList constructor, HHDataList performs all actions without pausing to ask the user for confirmations.

# Demonstration

To see this option in action, try deleting one of the records below:

<div id="datalist" class="hh-data-list mt-4"></div>
<script>
  var options = new DLPlayersOptions002('datalist');
  options.expand.showTool = false;
  options.queryParams.limit.showTool = false;
  new HHDataList(options);
</script>

