const modalDefaultYesCb = () => { console.log('Default yesCb'); };
let modalYesCb = modalDefaultYesCb;
const modalEl = document.getElementById('modal');
const modal = new bootstrap.Modal(modalEl);
modalEl.querySelector('button.yes').addEventListener('click', (event) => {
  modal.hide();
  modalYesCb();
  modalYesCb = modalDefaultYesCb;
});

let messageCount = 0;

const writeMsg = (level, msg) => {
  let el = document.querySelector('div.messages');
  let li = document.createElement('li');
  li.innerHTML = `${level}. ${new Date().toLocaleTimeString('en-US')}. ${msg}`;
  el.querySelector('ol').appendChild(li);
  el.scrollTop = el.scrollHeight;
  let widget = document.querySelector('div.messages-widget');
  if (widget.style.display == 'none') {
    widget.style.display = 'block';
  }
};