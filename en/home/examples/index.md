# Examples

# Baseball

1. Add error checking and error codes to server.

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
  