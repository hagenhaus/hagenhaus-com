# confirm

<table class="options-table">
  <tr><th>Necessity:</th><td>Recommended</td></tr>
</table>

The `confirm` option specifies a function for HHDataList to call before doing certain actions (e.g. deleting a record).

# Primary Example

``` js nonum
const confirm = (title, body, yesLabel, yesCb) => {
  modalEl.querySelector('h5.modal-title').textContent = title;
  modalEl.querySelector('div.modal-body').textContent = body;
  modalEl.querySelector('button.yes').innerHTML = yesLabel;
  modalYesCb = yesCb;
  modal.show();
};
 
new HHDataList({
  confirm: confirm,
});
```

Before performing certain actions like deleting a record, HHDataList invokes this function to enable the website to ask the user to confirm the action. HHDataList passes action-specific arguments to the function. For example, before deleting a record for a baseball player named *Casey Jones*, HHDataList might pass the following arguments to the function:

|Parameter|Argument|
|-|-|
|*title*|"Delete Record?"|
|*body*|"Casey Jones (b. 1863)"|
|*yesLabel*|"Delete"|
|*yesCb*|HHDataList internal `DELETE` function|

The job of the *confirm* function is to present the *yesLabel* to the user, obtain a response, and, if the response is affirmative, call *yesCb* with no arguments. For example, a website might display a modal:

<p><img src="confirm.png" class="img-fluid d-block" width=400 loading="lazy"></p>

If the website does not provide a *confirm* option to the HHDataList constructor, HHDataList performs all actions without pausing to ask the user for confirmations.