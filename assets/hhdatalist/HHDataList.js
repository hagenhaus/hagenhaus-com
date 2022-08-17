class HHDataList {

  /************************************************************************************************
  * constructor
  ************************************************************************************************/

  constructor(options) {

    // console.log(window.navigator.language);
    // console.log(window.navigator.language.split('-')[0]);

    // Set default values for unspecified options.
    options.filterPlaceholder = 'filterPlaceholder' in options ? options.filterPlaceholder : '';
    options.hasTabDescriptions = 'tabDescriptions' in options;
    options.limits = 'limits' in options && options.limits.length ? options.limits : [5, 10, 20, 50, 100];
    options.limit = 'limit' in options && options.limits.includes(options.limit) ? options.limit : options.limits[0];
    options.orderPlaceholder = 'orderPlaceholder' in options ? options.orderPlaceholder : '';
    options.recordsAreExpanded = 'recordsAreExpanded' in options ? options.recordsAreExpanded : false;
    options.recordsAreNumbered = 'recordsAreNumbered' in options ? options.recordsAreNumbered : true;
    options.showTabDescriptions = 'showTabDescriptions' in options ? options.showTabDescriptions : false;
    options.tabDescriptions = 'tabDescriptions' in options ? options.tabDescriptions : {};
    options.theme = 'theme' in options ? options.theme : {};

    // Set class options.
    this.dataSrc = new HHApi('url' in options ? options.url : null, 'urls' in options ? options.urls : null);
    this.id = options.id;
    this.el = document.getElementById(options.id);
    this.recordFields = 'recordFields' in options ? options.recordFields : [];
    this.recordIdField = 'recordIdField' in options ? options.recordIdField : 'id';
    this.recordTitleFields = 'recordTitleFields' in options ? options.recordTitleFields : ['name'];
    this.recordTitleFormat = 'recordTitleFormat' in options ? options.recordTitleFormat : (f, r) => { return r[f[0]]; };
    this.essentialFields = [this.recordIdField].concat(this.recordTitleFields);
    this.metadata = null;
    this.controlsAreSmall = 'controlsAreSmall' in options ? options.controlsAreSmall : false;
    this.filterById = 'filterById' in options ? options.filterById : null;
    this.queryObject = {};
    this.queryObject.page = 1;
    this.queryObject.filter = 'filter' in options ? options.filter : '';
    this.queryObject.order = 'order' in options ? options.order : '';
    this.queryObject.fields = '*';
    this.confirm = options.confirm;
    this.reportError = options.reportError;
    this.reportInfo = options.reportInfo;

    this.recordColMap = new Map();
    this.recordColMap.set(2, 6);
    this.recordColMap.set(3, 4);
    this.recordColMap.set(4, 3);
    this.recordColMap.set(6, 2);
    this.getRecordColSize = (count) => this.recordColMap.has(count) ? this.recordColMap.get(count) : 6;
    this.recordColSize = this.getRecordColSize('recordColumnCount' in options ? options.recordColumnCount : 2);

    this.tabDescriptions = {};
    this.tabDescriptions.home = 'home' in options.tabDescriptions ? options.tabDescriptions.home : null;
    this.tabDescriptions.search = 'search' in options.tabDescriptions ? options.tabDescriptions.search : null;
    this.tabDescriptions.fields = 'fields' in options.tabDescriptions ? options.tabDescriptions.fields : null;
    this.tabDescriptions.newCreate = 'newCreate' in options.tabDescriptions ? options.tabDescriptions.newCreate : null;
    this.tabDescriptions.newCreated = 'newCreated' in options.tabDescriptions ? options.tabDescriptions.newCreated : null;
    this.tabDescriptions.config = 'config' in options.tabDescriptions ? options.tabDescriptions.config : null;

    // Set theme values.
    // this.el.style.setProperty('--hh-color-1', '#b3d9ff');
    this.el.style.setProperty('--hh-color-1', 'color1' in options.theme ? options.theme.color1 : '#b3d9ff');
    this.el.style.setProperty('--hh-color-2', 'color2' in options.theme ? options.theme.color2 : '#e6f2ff');
    this.el.style.setProperty('--hh-color-3', 'color3' in options.theme ? options.theme.color3 : '#004d99');
    this.el.style.setProperty('--hh-color-4', 'color4' in options.theme ? options.theme.color4 : '#f5faff');

    // Create rows
    this.el.appendChild(this.createTabsRow(options));
    this.el.appendChild(this.createCountersRow());
    this.el.appendChild(this.createNavigationRow(options));
    this.el.appendChild(this.createRecordsRow());

    this.getAndProcessRecords();
  };

  /************************************************************************************************
 * createTabsRow
 ************************************************************************************************/

  createTabsRow(options) {
    let row = document.createElement('div');
    row.classList.add('row', 'hh-tabs-row');

    let col = document.createElement('div');
    col.classList.add('col-12', 'hh-tabs-col');

    let tabs = document.createElement('ul');
    tabs.classList.add('nav', 'nav-tabs', 'mb-3', 'hh-tabs');
    tabs.setAttribute('role', 'tablist');

    tabs.appendChild(this.createTab('home', 'fas fa-home', true));
    tabs.appendChild(this.createTab('search', 'fas fa-search', false));
    tabs.appendChild(this.createTab('fields', 'fas fa-list-ul', false));
    tabs.appendChild(this.createTab('new', 'fas fa-plus', false));
    tabs.appendChild(this.createTab('config', 'fas fa-cog', false));

    let panes = document.createElement('div');
    panes.classList.add('tab-content');

    panes.appendChild(this.createHomePane(options));
    panes.appendChild(this.createSearchPane(options));
    panes.appendChild(this.createFieldsPane(options));
    panes.appendChild(this.createNewPane(options));
    panes.appendChild(this.createConfigPane(options));

    col.appendChild(tabs);
    col.appendChild(panes);
    row.appendChild(col);
    return row;
  }

  /************************************************************************************************
  * createTab
  ************************************************************************************************/

  createTab(target, faClasses, active) {
    let tab = document.createElement('li');
    tab.classList.add('nav-item');
    tab.setAttribute('role', 'presentation');

    let btn = document.createElement('button');
    btn.classList.add('nav-link');
    if (active) { btn.classList.add('active'); }
    btn.setAttribute('data-bs-toggle', 'tab');
    btn.setAttribute('data-bs-target', `#${this.id}-${target}-pane`);
    btn.setAttribute('type', 'button');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-controls', `${this.id}-${target}-pane`);
    btn.setAttribute('aria-selected', `${active}`);
    btn.innerHTML = `<i class="${faClasses}"></i>`;

    tab.appendChild(btn);
    return tab;
  }

  /************************************************************************************************
  * createPane
  ************************************************************************************************/

  createPane(name, active) {
    let pane = document.createElement('div');
    pane.classList.add('tab-pane', 'fade', `hh-${name}-pane`);
    if (active) { pane.classList.add('show', 'active'); }
    pane.setAttribute('id', `${this.id}-${name}-pane`);
    pane.setAttribute('role', 'tabpanel');
    pane.setAttribute('aria-labelledby', `${this.id}-${name}-pane`);
    return pane;
  }

  /************************************************************************************************
   * createTabDescription
   ************************************************************************************************/

  createTabDescription(text, showTabDescriptions) {
    const display = showTabDescriptions ? 'block' : 'none';

    let row = document.createElement('div');
    row.classList.add('row', 'hh-tab-description-row', 'gx-2');
    row.style.display = display;

    let col = document.createElement('div');
    col.classList.add('col-12', 'hh-tab-description', 'mb-3');
    col.innerHTML = text;

    row.appendChild(col);
    return row;
  }

  /************************************************************************************************
  * createHomePane
  ************************************************************************************************/

  createHomePane(options) {
    let pane = this.createPane('home', true);
    if (this.tabDescriptions.home) {
      pane.appendChild(this.createTabDescription(this.tabDescriptions.home, options.showTabDescriptions));
    }
    return pane;
  }

  /************************************************************************************************
  * createSearchPane
  ************************************************************************************************/

  createSearchPane(options) {
    let pane = this.createPane('search', false);

    let row = document.createElement('div');
    row.classList.add('row', 'gx-2');

    row.appendChild(this.createInputGroupCol('Filter', options.filterPlaceholder, this.queryObject.filter, 'hh-filter',
      (event) => {
        this.queryObject.page = 1;
        this.queryObject.filter = this.el.querySelector('input.hh-filter').value;
        this.getAndProcessRecords();
      },
      (event) => {
        this.el.querySelector('input.hh-filter').value = '';
        this.queryObject.filter = '';
        this.getAndProcessRecords();
      }
    ));

    row.appendChild(this.createInputGroupCol('Order', options.orderPlaceholder, this.queryObject.order, 'hh-order',
      (event) => {
        this.queryObject.order = this.el.querySelector('input.hh-order').value;
        this.getAndProcessRecords();
      },
      (event) => {
        this.el.querySelector('input.hh-order').value = '';
        this.queryObject.order = '';
        this.getAndProcessRecords();
      }
    ));

    if (this.tabDescriptions.search) {
      pane.appendChild(this.createTabDescription(this.tabDescriptions.search, options.showTabDescriptions));
    }
    pane.appendChild(row);

    return pane;
  }

  /************************************************************************************************
  * createInputGroupCol
  ************************************************************************************************/

  createInputGroupCol(labelText, placeholder, value, inputClass, findListener, clearListener) {
    let col = document.createElement('div');
    col.classList.add('col-12', 'col-lg-6', 'mb-3');

    let group = document.createElement('div');
    group.classList.add('input-group', `${inputClass}-group`);
    if (this.controlsAreSmall) { group.classList.add('input-group-sm'); }

    let label = document.createElement('label');
    label.classList.add('input-group-text');
    label.innerHTML = labelText;

    let input = document.createElement('input');
    input.type = 'text';
    input.classList.add('form-control', inputClass);
    if (this.controlsAreSmall) { input.classList.add('form-control-sm'); }
    input.placeholder = placeholder;
    input.value = value;

    let findBtn = document.createElement('button');
    findBtn.type = 'button';
    findBtn.classList.add('btn', 'btn-outline-secondary');
    if (this.controlsAreSmall) { findBtn.classList.add('btn-sm'); }
    findBtn.innerHTML = '<i class="fas fa-search"></i>';
    findBtn.addEventListener('click', findListener);

    let clearBtn = document.createElement('button');
    clearBtn.type = 'button';
    clearBtn.classList.add('btn', 'btn-outline-secondary');
    if (this.controlsAreSmall) { clearBtn.classList.add('btn-sm'); }
    clearBtn.innerHTML = '<i class="fas fa-broom"></i>';
    clearBtn.addEventListener('click', clearListener);

    group.appendChild(label);
    group.appendChild(input);
    group.appendChild(findBtn);
    group.appendChild(clearBtn);
    col.appendChild(group);

    return col;
  }

  /************************************************************************************************
  * createFieldsPane
  ************************************************************************************************/

  createFieldsPane(options) {
    let pane = this.createPane('fields', false);

    let row = document.createElement('div');
    row.classList.add('row', 'gx-2');

    let col = document.createElement('div');
    col.classList.add('col-12', 'hh-all-fields');

    let checkDiv = document.createElement('div');
    checkDiv.classList.add('form-check', 'form-check-inline');

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('form-check-input');
    input.value = 'id';

    input.addEventListener('click', (event) => {
      const checkboxes = this.el.querySelectorAll('div.hh-fields input.form-check-input');
      for (let checkbox of checkboxes) {
        checkbox.checked = event.target.checked;
      }
      this.updateExpandedRecords();
    });

    let label = document.createElement('label');
    label.classList.add('form-check-label');
    label.innerHTML = 'All Fields';

    let wrapper = document.createElement('div');
    wrapper.classList.add('hh-fields-wrapper');

    let fields = document.createElement('div');
    fields.classList.add('row', 'gx-2', 'hh-fields');

    this.displayFields(input, fields);

    checkDiv.appendChild(input);
    checkDiv.appendChild(label);
    col.appendChild(checkDiv);
    row.appendChild(col);
    wrapper.appendChild(fields);

    if (this.tabDescriptions.fields) {
      pane.appendChild(this.createTabDescription(this.tabDescriptions.fields, options.showTabDescriptions));
    }

    pane.appendChild(row);
    pane.appendChild(wrapper);
    return pane;
  }

  /************************************************************************************************
  * displayFields
  ************************************************************************************************/

  displayFields(allFieldsEl, fieldsEl) {
    let checkedCount = 0;
    for (let field of this.recordFields) {
      let input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.classList.add('form-check-input');
      input.value = field.name;

      if (('isChecked' in field) == false || (field.isChecked) == true) {
        input.setAttribute('checked', '');
        checkedCount++;
      }

      input.addEventListener('change', (event) => {
        let checkedCount = this.getCheckedRecordFields().count;
        if (checkedCount == 0 || checkedCount == this.recordFields.length) {
          allFieldsEl.indeterminate = false;
          allFieldsEl.checked = checkedCount == this.recordFields.length;
        } else {
          allFieldsEl.indeterminate = true;
        }
        this.updateExpandedRecords();
      });

      let label = document.createElement('label');
      label.classList.add('form-check-label');
      label.innerHTML = field.name;

      let div = document.createElement('div');
      div.classList.add('col-12', 'col-lg-6', 'form-check');

      div.appendChild(input);
      div.appendChild(label);
      fieldsEl.appendChild(div);
    }

    if (checkedCount == 0 || checkedCount == this.recordFields.length) {
      allFieldsEl.indeterminate = false;
      allFieldsEl.checked = checkedCount == this.recordFields.length;
    } else {
      allFieldsEl.indeterminate = true;
    }
  };

  /************************************************************************************************
  * createNewPane
  ************************************************************************************************/

  createNewPane(options) {
    let pane = this.createPane('new', false);
    pane.appendChild(this.createNewForm(options));
    pane.appendChild(this.createCreatedForm(options));
    return pane;
  }

  /************************************************************************************************
  * createNewForm
  ************************************************************************************************/

  createNewForm(options) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('hh-new-record-wrapper', 'mb-3');

    let row = document.createElement('div');
    row.classList.add('row');

    let col = document.createElement('div');
    col.classList.add('col-12', 'hh-new-record');

    let details = document.createElement('details');
    details.setAttribute('open', '');

    let summary = document.createElement('summary');

    let title = document.createElement('div');
    title.classList.add('col', 'hh-title-col');
    title.innerHTML = 'New Record';

    let buttons = document.createElement('div');
    buttons.classList.add('col-auto', 'hh-buttons');

    let btn = document.createElement('button');
    btn.type = 'button';
    btn.classList.add('btn', 'btn-sm', 'hh-clear-create-record');
    btn.innerHTML = '<i class="fas fa-broom"></i>';

    let form = document.createElement('form');
    form.classList.add('row', 'gx-2', 'hh-new-record-form');

    this.populateNewForm(form);

    btn.addEventListener('click', (event) => {
      let inputs = form.querySelectorAll('input');
      for (let input of inputs) {
        input.value = '';
      }
    });

    buttons.appendChild(btn);
    summary.appendChild(title);
    summary.appendChild(buttons);
    details.appendChild(summary);
    details.appendChild(form);
    col.appendChild(details);
    row.appendChild(col);

    if (this.tabDescriptions.newCreate) {
      wrapper.appendChild(this.createTabDescription(this.tabDescriptions.newCreate, options.showTabDescriptions));
    }

    wrapper.appendChild(row);
    return wrapper;
  }

  /************************************************************************************************
  * populateNewForm
  ************************************************************************************************/

  populateNewForm(newForm) {
    const newRecordFields = [];

    for (let field of this.recordFields) {
      if ('isEditable' in field && field.isEditable) {
        newRecordFields.push({
          name: field.name,
          label: 'label' in field ? field.label : field.name,
          isRequired: 'isRequired' in field ? field.isRequired : false
        });
      }
    }

    if (newRecordFields.length) {

      for (let field of newRecordFields) {
        let label = document.createElement('label');
        label.classList.add('form-label');
        label.innerHTML = field.label;

        let input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('title', field.name);
        input.classList.add('form-control');
        if (this.controlsAreSmall) { input.classList.add('form-control-sm'); }
        input.required = field.isRequired;

        let div = document.createElement('div');
        div.classList.add('col-12', `col-xl-${this.recordColSize}`, 'mb-2');

        div.appendChild(label);
        div.appendChild(input);
        newForm.appendChild(div);
      }

      let createBtn = document.createElement('button');
      createBtn.type = 'submit';
      createBtn.classList.add('btn');
      if (this.controlsAreSmall) { createBtn.classList.add('btn-sm'); }
      createBtn.innerHTML = 'Create';

      let btnDiv = document.createElement('div');
      btnDiv.classList.add('col-12', 'mb-2');

      btnDiv.appendChild(createBtn);
      newForm.appendChild(btnDiv);

      newForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = {};
        const elements = this.el.querySelectorAll('form.hh-new-record-form input');
        for (let element of elements) {
          data[element.title] = element.value;
        }
        (async () => {
          try {
            let record = (await this.dataSrc.createRecord(data, this.getCheckedRecordFields().string, true)).data;
            let createdForm = this.el.querySelector('form.hh-created-record-form');
            let details = createdForm.closest('details');
            details.setAttribute('id', `new-${record[this.recordIdField]}`);
            let title = this.recordTitleFormat(this.recordTitleFields, record);
            details.querySelector('div.hh-title-col').innerHTML = title;

            for (const property in record) {
              let label = document.createElement('label');
              label.classList.add('form-label');
              let field = this.recordFields.find(field => field.name == property);
              label.innerHTML = typeof field !== 'undefined' && 'label' in field ? field.label : property;

              let input = document.createElement('input');
              input.type = 'text';
              input.classList.add('form-control');
              if (this.controlsAreSmall) { input.classList.add('form-control-sm'); }
              input.setAttribute('disabled', '');
              input.value = record[property];

              let div = document.createElement('div');
              div.classList.add('col-12', `col-xl-${this.recordColSize}`, 'mb-2');

              div.appendChild(label);
              div.appendChild(input);
              createdForm.appendChild(div);
            }

            //this.reportInfo(`Record "${title}" was created.`);
            this.displayCreatedRecordPane();
            this.getAndProcessRecords();
          } catch (error) {
            this.reportError(error);
          }
        })();
      });

    } else {
      let noEditableFieldsDiv = document.createElement('div');
      noEditableFieldsDiv.style.marginBottom = '0.5em';
      noEditableFieldsDiv.innerHTML = 'No editable fields defined.';
      newForm.appendChild(noEditableFieldsDiv);
    }
  }

  /************************************************************************************************
  * createCreatedForm
  ************************************************************************************************/

  createCreatedForm(options) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('hh-created-record-wrapper', 'mb-3');
    wrapper.style.display = 'none';

    if (this.tabDescriptions.newCreated) {
      wrapper.appendChild(this.createTabDescription(this.tabDescriptions.newCreated, options.showTabDescriptions));
    }

    let row = document.createElement('div');
    row.classList.add('row');

    let col = document.createElement('div');
    col.classList.add('col-12', 'hh-created-record');

    let details = document.createElement('details');
    details.setAttribute('open', '');

    let summary = document.createElement('summary');

    let form = document.createElement('form');
    form.classList.add('row', 'gx-2', 'hh-created-record-form');

    let title = document.createElement('div');
    title.classList.add('col', 'hh-title-col');
    summary.appendChild(title);

    let buttons = document.createElement('div');
    buttons.classList.add('col-auto', 'hh-buttons');

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
        this.queryObject.filter = filterStr;
        this.getAndProcessRecords();
      });
      buttons.appendChild(findBtn);
    }

    let closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.classList.add('btn', 'btn-sm', 'hh-close-created-record');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.addEventListener('click', (event) => {
      form.innerHTML = '';
      this.displayNewRecordPane();
    });
    buttons.appendChild(closeBtn);

    summary.appendChild(buttons);
    details.appendChild(summary);
    details.appendChild(form);
    col.appendChild(details);
    row.appendChild(col);
    wrapper.appendChild(row);
    return wrapper;
  }

  /************************************************************************************************
  * createConfigPane
  ************************************************************************************************/

  createConfigPane(options) {

    let checkRow = document.createElement('div');
    checkRow.classList.add('row', 'mb-3');

    checkRow.appendChild(this.createConfigCheckboxCol('Records are numbered.', 'hh-records-are-numbered', options.recordsAreNumbered,
      (event) => {
        let display = event.target.checked ? 'inline' : 'none';
        let spans = this.el.querySelectorAll('span.hh-record-number, span.hh-record-number-punc');
        for (let span of spans) { span.style.display = display; }
      }
    ));

    if (options.hasTabDescriptions) {
      checkRow.appendChild(this.createConfigCheckboxCol('Show tab descriptions.', 'hh-show-tab-descriptions', options.showTabDescriptions,
        (event) => {
          const display = event.target.checked ? 'block' : 'none';
          const descRows = this.el.querySelectorAll('div.hh-tab-description-row');
          for (let descRow of descRows) {
            descRow.style.display = display;
          }
        }
      ));
    }

    let pane = this.createPane('config', false);

    if (this.tabDescriptions.config) {
      pane.appendChild(this.createTabDescription(this.tabDescriptions.config, options.showTabDescriptions));
    }

    pane.appendChild(checkRow);
    return pane;
  }

  /************************************************************************************************
  * createConfigCheckboxCol
  ************************************************************************************************/

  createConfigCheckboxCol(text, cls, isChecked, listener) {
    let col = document.createElement('div');
    col.classList.add('col-12', 'col-xl-6');

    let check = document.createElement('div');
    check.classList.add('form-check');

    let input = document.createElement('input');
    input.classList.add('form-check-input', cls);
    input.type = 'checkbox';
    input.checked = isChecked;
    input.addEventListener('change', listener);

    let label = document.createElement('label');
    label.classList.add('form-check-label');
    label.innerHTML = text;

    check.appendChild(input);
    check.appendChild(label);
    col.appendChild(check);

    return col;
  }

  /************************************************************************************************
  * createCountersRow
  ************************************************************************************************/

  createCountersRow() {
    let row = document.createElement('div');
    row.classList.add('row', 'hh-counters-row');

    let col = document.createElement('div');
    col.classList.add('col-12', 'hh-counters', 'mb-3');
    col.innerHTML = 'Page <span class="hh-page-number"></span> of <span class="hh-num-total-pages"></span> with <span class="hh-num-returned-records"></span> <span class="hh-singular-plural"></span> returned, <span class="hh-num-filtered-records"></span> matched, <span class="hh-num-total-records"></span> total. ';
    row.appendChild(col);

    return row;
  }

  /************************************************************************************************
  * createNavigationRow
  ************************************************************************************************/

  createNavigationRow(options) {
    let row = document.createElement('div');
    row.classList.add('row', 'hh-navigation-row', 'gx-2');

    row.appendChild(this.createPaginationCol());
    row.appendChild(this.createLimitCol(options));
    row.appendChild(this.createExpandedCol(options));

    return row;
  }

  /************************************************************************************************
  * createPaginationCol
  ************************************************************************************************/

  createPaginationCol() {
    let col = document.createElement('div');
    col.classList.add('col-auto', 'mb-3');

    let group = document.createElement('div');
    group.classList.add('input-group', 'hh-paginator');
    if (this.controlsAreSmall) { group.classList.add('input-group-sm'); }

    let bBtn = document.createElement('button');
    bBtn.type = 'button';
    bBtn.classList.add('btn', 'btn-outline-secondary', 'beginning');
    bBtn.innerHTML = '<i class="fas fa-step-backward"></i>';
    bBtn.disabled = true;

    bBtn.addEventListener('click', (event) => {
      this.queryObject.page = 1;
      this.getAndProcessRecords();
    });

    let lBtn = document.createElement('button');
    lBtn.type = 'button';
    lBtn.classList.add('btn', 'btn-outline-secondary', 'left');
    lBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    lBtn.disabled = true;

    lBtn.addEventListener('click', (event) => {
      this.queryObject.page--;
      this.getAndProcessRecords();
    });

    let rBtn = document.createElement('button');
    rBtn.type = 'button';
    rBtn.classList.add('btn', 'btn-outline-secondary', 'right');
    rBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    rBtn.disabled = true;

    rBtn.addEventListener('click', (event) => {
      this.queryObject.page++;
      this.getAndProcessRecords();
    });

    let eBtn = document.createElement('button');
    eBtn.type = 'button';
    eBtn.classList.add('btn', 'btn-outline-secondary', 'end');
    eBtn.innerHTML = '<i class="fas fa-step-forward"></i>';
    eBtn.disabled = true;

    eBtn.addEventListener('click', (event) => {
      this.queryObject.page = this.metadata.numTotalPages;
      this.getAndProcessRecords();
    });

    group.appendChild(bBtn);
    group.appendChild(lBtn);
    group.appendChild(rBtn);
    group.appendChild(eBtn);
    col.appendChild(group);

    return col;
  }

  /************************************************************************************************
  * createLimitCol
  ************************************************************************************************/

  createLimitCol(options) {
    let col = document.createElement('div');
    col.classList.add('col-auto', 'mb-3');

    let group = document.createElement('div');
    group.classList.add('input-group', 'hh-limiter');
    if (this.controlsAreSmall) { group.classList.add('input-group-sm'); }

    let label = document.createElement('label');
    label.classList.add('input-group-text');
    label.innerHTML = 'Limit';

    let select = document.createElement('select');
    select.classList.add('form-select', 'hh-limits');

    for (let limit of options.limits) {
      let option = document.createElement('option');
      option.text = limit;
      if (limit == options.limit) {
        option.selected = true;
        this.queryObject.limit = limit;
      }
      select.add(option);
    }

    select.addEventListener('change', (event) => {
      this.queryObject.page = 1;
      this.queryObject.limit = event.target.value;
      this.getAndProcessRecords();
    });

    group.appendChild(label);
    group.appendChild(select);
    col.appendChild(group);

    return col;
  }

  /************************************************************************************************
  * createExpandedCol
  ************************************************************************************************/

  createExpandedCol(options) {
    let col = document.createElement('div');
    col.classList.add('col-auto', 'mb-3');

    let group = document.createElement('div');
    group.classList.add('input-group', 'hh-expander');
    if (this.controlsAreSmall) { group.classList.add('input-group-sm'); }

    let label = document.createElement('label');
    label.classList.add('input-group-text');
    label.innerHTML = 'Expanded';

    let text = document.createElement('div');
    text.classList.add('input-group-text', 'hh-expander-checkbox-group');

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('form-check-input', 'hh-records-are-expanded');
    input.checked = options.recordsAreExpanded;
    input.addEventListener('change', (event) => {
      if (event.target.checked) {
        this.getAndProcessRecords();
      } else {
        this.recordsRowEl.querySelectorAll('details').forEach(details => {
          details.removeAttribute('open');
          details.querySelector('div.hh-record-fields').innerHTML = '';
        });
      }
    });

    text.appendChild(input);
    group.appendChild(label);
    group.appendChild(text);
    col.appendChild(group);

    return col;
  }

  /************************************************************************************************
  * createRecordsRow
  ************************************************************************************************/

  createRecordsRow() {
    this.recordsRowEl = document.createElement('div');
    this.recordsRowEl.classList.add('row', 'hh-records-row');
    return this.recordsRowEl;
  }

  /************************************************************************************************
  * processRecords
  ************************************************************************************************/

  processRecords(res) {
    this.displayRecords(res.data);
  };

  /************************************************************************************************
  * displayRecords
  ************************************************************************************************/

  displayRecords(data) {

    // Update paginator.

    this.metadata = data.metadata;
    let paginator = this.el.querySelector('div.hh-paginator');

    let disableRight = !(this.metadata.page < this.metadata.numTotalPages);
    paginator.querySelector('button.right').disabled = disableRight;
    paginator.querySelector('button.end').disabled = disableRight;

    let disableLeft = !(this.metadata.page > 1);
    paginator.querySelector('button.beginning').disabled = disableLeft;
    paginator.querySelector('button.left').disabled = disableLeft;

    // Update counters.

    this.el.querySelector('div.hh-counters span.hh-page-number').innerHTML = this.metadata.page;
    this.el.querySelector('div.hh-counters span.hh-num-total-pages').innerHTML = this.metadata.numTotalPages;
    this.el.querySelector('div.hh-counters span.hh-num-returned-records').innerHTML = this.metadata.numResponseRecords;
    this.el.querySelector('div.hh-counters span.hh-singular-plural').innerHTML = this.metadata.numResponseRecords == 1 ? 'record' : 'records';
    this.el.querySelector('div.hh-counters span.hh-num-filtered-records').innerHTML = this.metadata.numFilteredRecords;
    this.el.querySelector('div.hh-counters span.hh-num-total-records').innerHTML = this.metadata.numTotalRecords;

    // Create DIV to contain records.

    let recordsEl = document.createElement('div');
    recordsEl.classList.add('col-12', 'hh-records');

    // Create details element with summary element for each record.

    data.records.forEach((record, i) => {

      let details = document.createElement('details');
      details.setAttribute('id', this.toUniqueId(record[this.recordIdField]));

      details.addEventListener('toggle', (event) => {
        let details = document.getElementById(event.target.id);
        if (details.classList.contains('new')) {
          details.classList.remove('new');
        } else {
          if (details.open) {
            details.querySelector('button.hh-refresh-record').style.display = 'inline-block';
            if (!this.recordFields.length || this.getCheckedRecordFields().count) {
              this.getAndProcessRecord(this.toRealId(details.id));
            } else {
              details.querySelector('div.hh-record-fields').innerHTML = '';
            }
          } else {
            details.querySelector('button.hh-refresh-record').style.display = 'none';
            const btn = details.querySelector('button.hh-edit-record');
            if (btn.classList.contains('active')) {
              btn.classList.remove('active');
            }
            details.querySelector('div.hh-record-fields').innerHTML = '';
          }
        }
      });

      details.appendChild(this.createSummary(this.metadata.firstItemOnPage + i, record));

      let recordFieldsRow = document.createElement('div');
      recordFieldsRow.classList.add('row', 'gx-2', 'hh-record-fields');
      details.appendChild(recordFieldsRow);

      recordsEl.appendChild(details);

      if (this.el.querySelector('input.hh-records-are-expanded').checked) {
        this.displayRecord(record, details);
        details.classList.add('new');
        details.open = true;
      }

    });

    this.recordsRowEl.innerHTML = '';
    this.recordsRowEl.appendChild(recordsEl);
  }

  /************************************************************************************************
  * createSummary
  ************************************************************************************************/

  createSummary(number, record) {
    let summary = document.createElement('summary');

    summary.addEventListener('click', (event) => {
      const details = event.target.closest('details');
      let unsavedProps = details.querySelectorAll('div.hh-col-btn button:not(:disabled)');
      if (details.open && unsavedProps.length) {
        event.preventDefault();
        this.confirm('Collapse without Saving?', `The record has ${unsavedProps.length} unsaved ${unsavedProps.length == 1 ? ' field.' : ' fields.'}`, 'Collapse', () => {
          details.open = false;
        });
      }
    });

    let titleCol = document.createElement('div');
    let title = this.recordTitleFormat(this.recordTitleFields, record);
    titleCol.innerHTML = this.createRecordTitle(number, title);
    titleCol.classList.add('col', 'hh-title-col');

    let buttonsCol = document.createElement('div');
    buttonsCol.classList.add('col-auto', 'hh-buttons');

    let refreshBtn = document.createElement('button');
    refreshBtn.type = 'button';
    refreshBtn.classList.add('btn', 'btn-sm', 'hh-refresh-record');
    refreshBtn.style.display = 'none';
    refreshBtn.innerHTML = '<i class="fas fa-sync"></i>';

    refreshBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const details = event.target.closest('details');
      if (this.getCheckedRecordFields().count) {
        this.getAndProcessRecord(this.toRealId(details.id));
      } else {
        details.querySelector('div.hh-record-fields').innerHTML = '';
      }
    });

    let editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.classList.add('btn', 'btn-sm', 'hh-edit-record');
    editBtn.innerHTML = '<i class="fas fa-pen"></i>';

    editBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const details = event.target.closest('details');
      const btn = details.querySelector('button.hh-edit-record');
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        const editables = details.querySelectorAll('input.hh-is-editable');
        editables.forEach(editable => {
          editable.disabled = true;
          editable.parentNode.nextSibling.style.display = 'none';
        });
      } else {
        btn.classList.add('active');
        if (!details.open) {
          details.setAttribute('open', '');
        } else {
          const editables = details.querySelectorAll('input.hh-is-editable');
          editables.forEach(editable => {
            editable.disabled = false;
            editable.parentNode.nextSibling.style.display = 'inline-block';
          });
        }
      }
    });

    let trashBtn = document.createElement('button');
    trashBtn.type = 'button';
    trashBtn.classList.add('btn', 'btn-sm', 'hh-delete-record');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

    trashBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      this.confirm('Delete Record?', title, 'Delete', () => {
        event.preventDefault();
        (async () => {
          try {
            await this.dataSrc.deleteRecord(this.toRealId(event.target.closest('details').id));
            this.reportInfo(`Record "${title}" was deleted.`);
            this.getAndProcessRecords();
          } catch (error) {
            this.reportError(error);
          }
        })();
      });
    });

    summary.appendChild(titleCol);
    buttonsCol.appendChild(refreshBtn);
    buttonsCol.appendChild(editBtn);
    buttonsCol.appendChild(trashBtn);
    summary.appendChild(buttonsCol);
    return summary;
  }

  /************************************************************************************************
  * processRecord
  ************************************************************************************************/

  processRecord(res, id) {
    this.displayRecord(res.data, document.getElementById(this.toUniqueId(id)));
  }

  /************************************************************************************************
  * displayRecord
  ************************************************************************************************/

  displayRecord(record, details) {
    const inEditMode = details.querySelector('button.hh-edit-record').classList.contains('active');
    const row = details.querySelector('div.row');
    row.innerHTML = '';
    let fieldsArray = this.getCheckedRecordFields().array;

    const titleEl = details.querySelector('div.hh-title-col');
    let currentTitle = titleEl.querySelector('span.hh-record-title').innerHTML;
    let newTitle = this.recordTitleFormat(this.recordTitleFields, record);
    if (currentTitle !== newTitle) {
      titleEl.querySelector('span.hh-record-title').innerHTML = newTitle;
    }

    for (const property in record) {

      if (!this.recordFields.length || fieldsArray.includes(property)) {

        let label = document.createElement('label');
        label.classList.add('form-label', 'record');
        label.setAttribute('title', property);
        let field = this.recordFields.find(field => field.name == property);
        label.innerHTML = typeof field !== 'undefined' && 'label' in field ? field.label : property;

        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.classList.add('form-control', 'record');
        if (this.controlsAreSmall) { input.classList.add('form-control-sm'); }
        input.value = record[property];
        input.defaultValue = record[property];
        const isEditable = typeof field !== 'undefined' && 'isEditable' in field ? field.isEditable : false;
        if (isEditable) { input.classList.add('hh-is-editable'); }
        const isForeignKey = typeof field !== 'undefined' && 'isForeignKey' in field ? field.isForeignKey : false;
        if (isForeignKey) { input.classList.add('hh-is-foreign-key'); }

        input.addEventListener('input', (event) => {
          const btn = event.target.closest('div.hh-record-field').querySelector('div.hh-data-row button');
          if (event.target.value !== event.target.defaultValue) {
            btn.disabled = false;
          } else {
            btn.disabled = true;
          }
        });

        let labelCol = document.createElement('div');
        labelCol.classList.add('col-12');
        labelCol.appendChild(label);

        let labelRow = document.createElement('div');
        labelRow.classList.add('row', 'hh-label-row');
        labelRow.appendChild(labelCol);

        let dataElCol = document.createElement('div');
        dataElCol.classList.add('col', 'hh-col-data');
        dataElCol.append(input);

        let btn = document.createElement('button');
        btn.type = 'button';
        btn.classList.add('btn');
        if (this.controlsAreSmall) { btn.classList.add('btn-sm'); }
        btn.setAttribute('disabled', '');
        btn.innerHTML = '<i class="fas fa-database"></i>';

        // Update btn
        btn.addEventListener('click', (event) => {
          event.stopPropagation();
          const details = event.target.closest('details');
          const row = event.target.closest('div.hh-record-field');
          const propName = row.querySelector('div.hh-label-row label').title;
          const input = row.querySelector('div.hh-data-row input');
          const value = input.value;
          const btn = row.querySelector('div.hh-data-row button');
          (async () => {
            try {
              await this.dataSrc.patchRecord(this.toRealId(details.id), { updates: `${propName}="${value}"` });
              btn.disabled = true;
              if (input.classList.contains('hh-is-foreign-key') || this.recordTitleFields.includes(propName)) {
                this.getAndProcessRecord(this.toRealId(details.id));
              } else {
                input.defaultValue = value;
              }
            } catch (error) {
              this.reportError(error);
            }
          })();
        });

        let dataBtnCol = document.createElement('div');
        dataBtnCol.classList.add('col-auto', 'hh-col-btn');
        dataBtnCol.append(btn);

        let dataRow = document.createElement('div');
        dataRow.classList.add('row', 'gx-1', 'hh-data-row');
        dataRow.appendChild(dataElCol);
        dataRow.appendChild(dataBtnCol);

        let col = document.createElement('div');
        col.classList.add('col-12', `col-xl-${this.recordColSize}`, 'mt-1', 'mb-2', 'hh-record-field');
        col.appendChild(labelRow);
        col.appendChild(dataRow);

        if (!inEditMode || !isEditable) {
          input.setAttribute('disabled', '');
          dataBtnCol.style.display = 'none';
        }

        row.appendChild(col);
      }
    }
  }

  /************************************************************************************************
  * getCheckedRecordFields
  ************************************************************************************************/

  getCheckedRecordFields() {
    const checkboxArray = this.el.querySelectorAll('div.hh-fields input.form-check-input:checked');
    const fieldArray = [];
    checkboxArray.forEach(el => { fieldArray.push(el.value); });
    return {
      array: fieldArray,
      count: fieldArray.length,
      string: fieldArray.join(',')
    };
  }

  /************************************************************************************************
  * updateExpandedRecords
  ************************************************************************************************/

  updateExpandedRecords() {
    this.recordsRowEl.querySelectorAll('details[open]').forEach(details => {
      if (this.getCheckedRecordFields().count) {
        this.getAndProcessRecord(this.toRealId(details.id));
      } else {
        details.querySelector('div.hh-record-fields').innerHTML = '';
      }
    });
  }

  /************************************************************************************************
  * displayNewRecordPane
  ************************************************************************************************/

  displayNewRecordPane() {
    this.el.querySelector('div.hh-created-record-wrapper').style.display = 'none';
    this.el.querySelector('div.hh-new-record-wrapper').style.display = 'block';
  }

  /************************************************************************************************
  * displayCreatedRecordPane
  ************************************************************************************************/

  displayCreatedRecordPane() {
    this.el.querySelector('div.hh-new-record-wrapper').style.display = 'none';
    this.el.querySelector('div.hh-created-record-wrapper').style.display = 'block';
  }

  /************************************************************************************************
  * getAndProcessRecords
  ************************************************************************************************/

  getAndProcessRecords() {
    if (this.el.querySelector('input.hh-records-are-expanded').checked) {
      if (this.recordFields.length) {
        let arr = this.essentialFields;
        for (let field of this.getCheckedRecordFields().array) {
          if (!this.essentialFields.includes(field)) { arr.push(field); }
        }
        this.queryObject.fields = arr.join(',');
      } else { this.queryObject.fields = '*'; }
    } else { this.queryObject.fields = this.essentialFields.join(','); }
    this.dataSrc.getAndProcessRecords(this.queryObject, this.processRecords.bind(this), this.reportError.bind(this));
  }

  /************************************************************************************************
  * getAndProcessRecord
  ************************************************************************************************/

  getAndProcessRecord(id) {
    if (this.recordFields.length) {
      let arr = this.essentialFields;
      for (let field of this.getCheckedRecordFields().array) {
        if (!this.essentialFields.includes(field)) { arr.push(field); }
      }
      this.queryObject.fields = arr.join(',');
    } else { this.queryObject.fields = '*'; }
    this.dataSrc.getAndProcessRecord(id, this.queryObject, this.processRecord.bind(this), this.reportError.bind(this));
  }

  /************************************************************************************************
  * createRecordTitle
  ************************************************************************************************/

  createRecordTitle(number, title) {
    let display = this.el.querySelector('input.hh-records-are-numbered').checked ? 'inline' : 'none';
    return `<span class="hh-record-number" style="display:${display};">${number}</span><span class="hh-record-number-punc" style="display:${display};">. </span><span class="hh-record-title">${title}</span>`;
  }

  /************************************************************************************************
  * toUniqueId
  ************************************************************************************************/

  toUniqueId(id) { return `${this.id}-${id}`; }

  /************************************************************************************************
  * toRealId
  ************************************************************************************************/

  toRealId(uniqueId) { return uniqueId.replace(`${this.id}-`, ''); }
}
