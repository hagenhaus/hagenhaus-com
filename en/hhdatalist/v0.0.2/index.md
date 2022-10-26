---
bookTitle: HHDataList <span style="font-weight:normal;font-size:86%;">v0.0.2</span>
hhdatalist: v0.0.2
menuItem: mi-hhdatalist
---

# HHDataList

Include *About this version* somewhere.

Next things to do:

1. Organize options in docs and code.
1. Apply style to select and textarea elements.
1. Review all Github issues. 
1. Add open library to Swagger.
1. Write all docs.
1. Make video for v0.0.2.

Start v0.0.3
1. Put hhapi into hhdatalist.
1. Make js module
1. Contain bootstrap in module
1. Use latest versions of bootstrap and axios

https://medium.com/event-driven-utopia/event-driven-apis-understanding-the-principles-c3208308d4b2

``` js nonum
if (this.filterById) {
  let findBtn = document.createElement('button');
  findBtn.type = 'button';
  findBtn.classList.add('btn', 'btn-sm', 'hh-find-created-record');
  findBtn.innerHTML = '<i class="fas fa-search"></i>';
  findBtn.addEventListener('click', (event) => {
    let details = event.currentTarget.closest('details');
    let newId = details.id.substring(4);
    let filterStr = this.filterById(this.recordIdField, newId);
    this.el.querySelector('input.hh-filter').value = filterStr;
    if (this.queryParams.filter) {
      this.queryParams.filter.value = filterStr;
    }
    this.getAndProcessRecords();
  });
  buttons.appendChild(findBtn);
}
```