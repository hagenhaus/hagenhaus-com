# Examples

This page showcases the HHDataList UI component.

# Baseball API

## Players

<div id="players-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: (title, body, yesBtn, yesCb) => {
      modalEl.querySelector('h5.modal-title').textContent = title;
      modalEl.querySelector('div.modal-body').textContent = body;
      modalEl.querySelector('button.yes').innerHTML = yesBtn;
      modalYesCb = yesCb;
      modal.show();
    },
    controlsAreSmall: true,
    filter: 'birthYear is not null',
    filterPlaceholder: 'birthYear is not null and nameLast like "b%"',
    id: 'players-datalist',
    limit: 5,
    limits: [5, 10, 20, 50, 100],
    order: 'birthYear',
    orderPlaceholder: 'birthYear asc, nameLast asc',
    recordColumnCount: 4,
    // recordFields: [
    //   { name: 'playerID', label: 'ID' },
    //   { name: 'nameGiven', label: 'Name', isEditable: true, isRequired: true },
    // ],
    recordIdField: 'playerID',
    recordsAreExpanded: false,
    recordsAreNumbered: true,
    recordTitleFields: ['nameFirst', 'nameLast', 'birthYear'],
    recordTitleFormat: (f, r) => { return `${r[f[0]] ? r[f[0]] : ''} ${r[f[1]]} (b. ${r[f[2]] ? r[f[2]] : 'unknown'})`; },
    showTabDescriptions: false,
    url: 'http://localhost:8081/api/v1/players',

    reportInfo: (msg) => { writeMsg('info', msg); },
    reportError: (error) => {
      if ('response' in error) {
        writeMsg('Error', `${error.response.status}: ${JSON.stringify(error.response.data)}`);
      } else {
        writeMsg('Error', error);
      }
    }
  });
</script>

# Portals API

## Portals

<div id="portals-datalist" class="hh-data-list"></div>

<script>
  new HHDataList({
    confirm: (title, body, yesBtn, yesCb) => {
      modalEl.querySelector('h5.modal-title').textContent = title;
      modalEl.querySelector('div.modal-body').textContent = body;
      modalEl.querySelector('button.yes').innerHTML = yesBtn;
      modalYesCb = yesCb;
      modal.show();
    },
    controlsAreSmall: true,
    filter: 'name like "test%"',
    filterPlaceholder: 'name like "a%" and companyCountry like "USA"',
    id: 'portals-datalist',
    limit: 5,
    limits: [5, 10, 20, 50, 100],
    order: 'name',
    orderPlaceholder: 'name asc, companyCountry desc',
    recordColumnCount: 3,
    recordFields: [
      { name: 'id', label: 'ID' },
      { name: 'name', label: 'Name', isEditable: true, isRequired: true },
      { name: 'url', label: 'Url', isEditable: true, isRequired: true },
      { name: 'companyId', label: 'Company ID', isEditable: true, isRequired: true, isForeignKey: true },
      { name: 'companyName', label: 'Company Name' },
      { name: 'companyUrl', label: 'Company Url' },
      { name: 'companyCity', label: 'Company City' },
      { name: 'companyRegion', label: 'Company Region' },
      { name: 'companyCountryId', label: 'Company Country ID' },
      { name: 'companyCountryName', label: 'Company Country Name' },
      { name: 'companySectorId', label: 'Company Sector ID', isChecked: false },
      { name: 'companySectorName', label: 'Company Sector Name', isChecked: false }
    ],
    recordIdField: 'id',
    recordsAreExpanded: false,
    recordsAreNumbered: true,
    recordTitleFields: ['name'],
    recordTitleFormat: (f, r) => { return r[f[0]]; },
    showTabDescriptions: false,
    urls: {
      deleteRecord: 'http://localhost:8081/api/v1/portals',
      getRecord: 'http://localhost:8081/api/v1/portals',
      getRecords: 'http://localhost:8081/api/v1/portals',
      patchRecord: 'http://localhost:8081/api/v1/portals',
      postRecord: 'http://localhost:8081/api/v1/portals',
      putRecord: 'http://localhost:8081/api/v1/portals'
    },

    reportInfo: (msg) => { writeMsg('info', msg); },
    reportError: (error) => {
      if ('response' in error) {
        writeMsg('Error', `${error.response.status}: ${error.response.data}`);
      } else {
        writeMsg('Error', error);
      }
    }
  });
</script>

<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<script>
  document.getElementById('liveToastBtn').addEventListener('click', () => {
    new bootstrap.Toast(document.getElementById('liveToast')).show();
  });
</script>
