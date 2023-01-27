// import algoliasearch from 'https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch-lite.esm.browser.js';
// const client = algoliasearch('ACB2H3EIYF', 'a68db1cd7dba243d4295be6ed2419435');
// const index = client.initIndex('rdp_en');

const currentPage = {
  folder: null,
  bookPath: null,
  hasOtp: false,
  src: null
};

const github = 'https://github.com/reach-sh/reach-lang/tree/master/docs/dev/src';

const pathnameToId = (pathname) => { return pathname.replace(/^\/|\/$/g, '').replace(/\//g, '_'); };
const idToPathName = (id) => { return id.replace(/_/g, '/'); };

let lang = window.navigator.language.split('-')[0];
const homepage = `/${lang}/home/`;

const otpPreferences = { 'none': 'none', 'show': 'show', 'hide': 'hide' };
Object.freeze(otpPreferences);
let otpPreference = otpPreferences.none;

// const hhDataListVersions = new Map();
// hhDataListVersions.set('v0.0.1', HHDataList001);
// hhDataListVersions.set('v0.0.2', HHDataList002);

/************************************************************************************************
* getWinWidth
************************************************************************************************/

const getWinWidthStr = () => {
  let s = window.innerWidth;
  if (s >= 1200) { return 'xl'; }
  else if (s >= 992) { return 'lg'; }
  else if (s >= 768) { return 'md'; }
  else if (s >= 576) { return 'sm'; }
  else return 'xs';
};

const maxColWidth = '280px';
let winWidth = getWinWidthStr();

/************************************************************************************************
* establishDisplay
************************************************************************************************/

const establishDisplay = () => {
  if (currentPage.bookPath) {
    const bookCol = document.getElementById('book-col');
    const bookBtn = document.querySelector('div.show-book-col');
    if (winWidth == 'xl' || winWidth == 'lg' || winWidth == 'md') {
      bookCol.style.maxWidth = maxColWidth;
      bookCol.style.display = 'block';
      bookBtn.style.display = 'none';
    } else if (winWidth == 'sm' || winWidth == 'xs') {
      bookCol.style.maxWidth = 'none';
      bookCol.style.display = 'none';
      bookBtn.style.display = 'block';
    }
  }

  if (currentPage.hasOtp) {
    const otpCol = document.getElementById('otp-col');
    const otpBtn = document.querySelector('button.show-otp-col');
    if (winWidth == 'xl' || winWidth == 'lg') {
      otpCol.style.maxWidth = maxColWidth;
      if (otpPreference == otpPreferences.hide) {
        otpCol.style.display = 'none';
        otpBtn.style.display = 'block';
      } else {
        otpCol.style.display = 'block';
        otpBtn.style.display = 'none';
      }
    } else if (winWidth == 'md') {
      otpCol.style.maxWidth = maxColWidth;
      if (otpPreference == otpPreferences.show) {
        otpCol.style.display = 'block';
        otpBtn.style.display = 'none';
      } else {
        otpCol.style.display = 'none';
        otpBtn.style.display = 'block';
      }
    } else if (winWidth == 'sm' || winWidth == 'xs') {
      otpCol.style.maxWidth = 'none';
      otpCol.style.display = 'none';
      otpBtn.style.display = 'block';
    }
  }
};

/************************************************************************************************
* window horizontal resize
************************************************************************************************/

window.addEventListener('resize', () => {
  let newWinWidth = getWinWidthStr();
  if (winWidth != newWinWidth) {
    winWidth = newWinWidth;
    establishDisplay();
  }
});

/************************************************************************************************
* scrollHandler
************************************************************************************************/

const scrollHandler = (event) => {
  if (document.querySelectorAll('#otp-col li.dynamic').length == false) {
    event.target.onscroll = null;
  } else {
    let found = false;

    let arr = document.querySelectorAll('#page-col div.hh-viewer h1, #page-col div.hh-viewer h2');

    if (arr.length) {
      for (let i = arr.length - 1; i >= 0; i--) {
        let rect = arr[i].getBoundingClientRect();
        if (rect.y <= 80.0) {
          found = true;
          updateHistory(arr[i].id);
          setOtpItemToActive(arr[i].id);
          break;
        }
      }
      if (found == false) {
        updateHistory('on-this-page');
        setOtpItemToActive('on-this-page');
      }
    }
  }
};

/************************************************************************************************
* scrollPage
************************************************************************************************/

const scrollPage = (id) => {
  if (id == 'on-this-page') {
    //console.log('scrollPage: on-this-page');
    document.getElementById('page-col').scrollTo(0, 0);
  }
  else {
    //console.log(`scrollPage: ${id}`);
    document.getElementById(id).scrollIntoView();
  }
};

/************************************************************************************************
* updateHistory
************************************************************************************************/

const updateHistory = (id) => {
  if (id == 'on-this-page') {
    window.history.pushState(null, null, `${window.location.origin}${currentPage.folder}`);
  }
  else {
    window.history.pushState(null, null, `${window.location.origin}${currentPage.folder}#${id}`);
  }
};

/************************************************************************************************
* setOtpItemToActive
************************************************************************************************/

const setOtpItemToActive = (id) => {
  let link = null;
  if (id == 'on-this-page') {
    link = document.querySelector('#otp-col ul li a[href="#on-this-page"]');
    if (link && link.classList.contains('active') == false) {
      const el = document.querySelector('#otp-col a.active');
      if (el && el.classList.contains('active')) { el.classList.remove('active'); }
      link.classList.add('active');
    }
  }
  else {
    link = document.querySelector('#otp-col ul li a[href="' + "#" + id + '"]');
    if (link && link.classList.contains('active') == false) {
      const el = document.querySelector('#otp-col a.active');
      if (el && el.classList.contains('active')) { el.classList.remove('active'); }
      link.classList.add('active');
    }
  }
};

/************************************************************************************************
* getWebpage
************************************************************************************************/

const getWebpage = async (folder, hash, shallUpdateHistory) => {

  folder = folder.replace(/index\.html$/, '');

  folder = folder == '/' || folder == `/${lang}/` ? homepage : folder;
  const url = `${window.location.origin}${folder}`;
  const configJsonUrl = `${url}config.json`;
  const pageHtmlUrl = `${url}page.html`;
  const otpHtmlUrl = `${url}otp.html`;
  const folderId = pathnameToId(folder);

  // console.log({ folder, hash, url, configJsonUrl, pageHtmlUrl, otpHtmlUrl, folderId });

  try {
    let [configJson, pageHtml, otpHtml] =
      (await Promise.all([
        axios.get(configJsonUrl),
        axios.get(pageHtmlUrl),
        axios.get(otpHtmlUrl),
      ])).map((x) => x.data);

    //console.log(JSON.stringify(configJson, null, 2));
    //console.log(pageHtml);
    //console.log(otpHtml);

    // For HHDataList (see near top of file, too)
    // if (configJson.hhdatalist && configJson.hhdatalist !== HHDataList.getVersion()) {
    //   let hhstyle = document.getElementById('hhstyle');
    //   let style = document.createElement('link');
    //   style.setAttribute('id', 'hhstyle');
    //   style.setAttribute('rel', 'stylesheet');
    //   style.setAttribute('type', 'text/css');
    //   style.setAttribute('href', hhstyle.href.replace(HHDataList.getVersion(), configJson.hhdatalist));
    //   hhstyle.parentNode.replaceChild(style, hhstyle);
    //   HHDataList = hhDataListVersions.get(configJson.hhdatalist);
    // }

    // Set body background color.
    //document.querySelector('body').style.background = configJson.background;

    // Book or different book?
    if (configJson.bookPath && configJson.bookPath != currentPage.bookPath) {
      document.getElementById('about-this-book').innerHTML = configJson.bookTitle;
      let bookHtml = document.createRange().createContextualFragment((await axios.get(`${window.location.origin}/${configJson.bookPath}/book.html`)).data);
      document.querySelectorAll('#book-col div.dynamic').forEach(n => n.remove());
      document.querySelector('#book-col').append(bookHtml);

      // On click chapter-icon.
      document.querySelectorAll('#book-col i.chapter-icon').forEach(el => {
        el.addEventListener('click', (event) => {
          const item = event.target;
          let pages = item.closest('div.chapter').querySelector('div.pages');
          if (item.classList.contains('fa-angle-right')) {
            item.classList.remove('fa-angle-right');
            item.classList.add('fa-angle-down');
            pages.style.display = 'block';
          } else {
            item.classList.remove('fa-angle-down');
            item.classList.add('fa-angle-right');
            pages.style.display = 'none';
          }
        });
      });

      // On click book-col chapter-title or page-title.
      document.querySelectorAll('#book-col div.chapter-title, #book-col div.page-title').forEach(el => {
        el.addEventListener('click', (evt) => {
          const t = evt.target;
          const l = `/${idToPathName(t.id)}/`;
          followLink(l);
        });
      });
    }
    currentPage.bookPath = configJson.bookPath;

    // Write page title.
    document.querySelector('div.hh-viewer-wrapper span.title').textContent = configJson.title;

    // Update and show/hide edit btn.
    currentPage.src = `${github}${folder}index.md`;
    if (configJson.hasEditBtn) {
      document.querySelector('div.hh-page-header button.edit-btn').style.display = 'block';
    } else {
      document.querySelector('div.hh-page-header button.edit-btn').style.display = 'none';
    }

    // Show/hide refresh btn.
    if (configJson.hasRefreshBtn) {
      document.querySelector('div.hh-page-header button.refresh').style.display = 'block';
    } else {
      document.querySelector('div.hh-page-header button.refresh').style.display = 'none';
    }

    // Write author
    if (configJson.author) {
      document.querySelector('div.hh-viewer-wrapper span.author').innerHTML = `By ${configJson.author}`;
    } else {
      document.querySelector('div.hh-viewer-wrapper span.author').innerHTML = '';
    }

    // Write published data
    if (configJson.publishedDate) {
      // let date = new Date(configJson.publishedDate);
      if (document.querySelector('div.hh-viewer-wrapper span.author').innerHTML) {
        document.querySelector('div.hh-viewer-wrapper span.published-date').innerHTML = `on ${configJson.publishedDate}`;
      } else {
        document.querySelector('div.hh-viewer-wrapper span.published-date').innerHTML = `Published on ${configJson.publishedDate}`;
      }
    } else {
      document.querySelector('div.hh-viewer-wrapper span.published-date').innerHTML = '';
    }

    // Write page html.
    pageHtml = document.createRange().createContextualFragment(pageHtml);
    document.querySelector('div.hh-viewer-wrapper div.hh-viewer').textContent = '';
    document.querySelector('div.hh-viewer-wrapper div.hh-viewer').append(pageHtml);

    // Show/hide page scrollbar
    if (configJson.hasPageScrollbar) {
      document.getElementById('page-col').classList.remove('noscroll');
    } else {
      document.getElementById('page-col').classList.add('noscroll');
    }

    // If search page.
    let searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.focus();
      searchInput.addEventListener('keyup', function (event) {
        index.search(searchInput.value).then(({ hits }) => {
          if (hits.length) {
            let searchResultsList = document.getElementById('search-results-list');
            searchResultsList.innerHTML = '';
            hits.forEach((el, index) => {
              //console.log(JSON.stringify(el, null, 2));
              let a = document.createElement('a');
              a.href = el.url;
              let anchorTextSpan = document.createElement('span');
              anchorTextSpan.innerHTML = el._highlightResult.title.value;
              a.append(anchorTextSpan);
              let summarySpan = document.createElement('span');
              summarySpan.innerHTML = ` - ${el._highlightResult.summary.value}`;
              let li = document.createElement('li');
              li.append(a);
              li.append(summarySpan);
              searchResultsList.append(li);
            });
          }
        });
      });
    }

    // On click link on page.
    document.querySelectorAll('div.hh-viewer-wrapper div.hh-viewer a:not(.hh-no-follow)').forEach(el => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        followLink(event.target.closest('a').href);
      });
    });

    // Write otp html.
    if (configJson.hasOtp) {
      document.querySelectorAll('#otp-col ul ul.dynamic').forEach(n => { n.remove(); });
      document.querySelectorAll('#otp-col ul li.dynamic').forEach(n => { n.remove(); });
      const otpUl = document.querySelector('#otp-col ul');
      const otpDoc = document.createRange().createContextualFragment(otpHtml);
      otpDoc.querySelector('ul').querySelectorAll(':scope > li').forEach((el, index) => {
        if (index == 0) {
          let ul = el.querySelector('ul');
          if (ul) {
            otpUl.querySelector('li').append(ul);
          }
        } else {
          otpUl.append(el);
        }
      });
    }
    currentPage.hasOtp = configJson.hasOtp;

    // On click link on otp.
    document.querySelectorAll('#otp-col li.dynamic a').forEach(el => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        followLink(event.target.href);
      });
    });

    // Adjust navbar active indicator.
    if (configJson.menuItem) {
      let el = document.getElementById(configJson.menuItem);
      if (el && !el.classList.contains('active')) {
        document.querySelectorAll('header a').forEach(el => { el.classList.remove('active'); });
        document.getElementById(configJson.menuItem).classList.add('active');
      }
    } else {
      document.querySelectorAll('header a').forEach(el => { el.classList.remove('active'); });
    }

    // Adjust book-col active indicators.
    document.querySelectorAll('#book-col div.chapter-title, #book-col div.page-title').forEach(el => {
      el.classList.remove('active');
    });

    let el = document.getElementById(folderId);
    if (el) {
      el.classList.add('active');
      let chapter = el.closest('div.chapter');
      let pages = chapter.querySelector('div.pages');
      if (pages && pages.hasChildNodes()) {
        let icon = chapter.querySelector('i.chapter-icon');
        icon.classList.remove('fa-angle-right');
        icon.classList.add('fa-angle-down');
        pages.style.display = 'block';
      }
    }

    // Establish correct display values.
    establishDisplay();

    // Display book.
    if (configJson.bookPath) {
      document.getElementById('book-col').classList.remove('banish');
      document.querySelector('div.show-book-col').classList.remove('banish');
    } else {
      document.getElementById('book-col').classList.add('banish');
      document.querySelector('div.show-book-col').classList.add('banish');
    }

    // Display page.
    if (configJson.hasPageHeader) { document.querySelector('div.hh-page-header').style.display = 'block'; }
    else { document.querySelector('div.hh-page-header').style.display = 'none'; }
    document.getElementById('page-col').style.display = 'block';

    // Display OTP.
    if (configJson.hasOtp) {
      document.getElementById('otp-col').classList.remove('banish');
      document.querySelector('button.show-otp-col').classList.remove('banish');
    } else {
      document.getElementById('otp-col').classList.add('banish');
      document.querySelector('button.show-otp-col').classList.add('banish');
    }

    // Scroll to proper place and update history
    currentPage.folder = folder;
    if (hash) {
      scrollPage(hash.substring(1));
      if (shallUpdateHistory) { updateHistory(hash.substring(1)); }
      setOtpItemToActive(hash.substring(1));
    } else {
      scrollPage('on-this-page');
      window.history.pushState(null, null, `${window.location.origin}${currentPage.folder}`);
    }

  } catch (error) {
    console.log('getWebPage', error);
  }
};

/************************************************************************************************
* followLink
* href is a full or partial path that starts with /. It may have a hash.
************************************************************************************************/

const followLink = async (href) => {
  let a = document.createElement('a');
  a.href = href;

  //console.log(a.pathname);
  //if(a.hash) {console.log(a.hash)};

  if (a.pathname.endsWith('.pdf')) {
    window.open(a.href, '_blank').focus();
  } else if (a.hostname === window.location.hostname) {
    if (currentPage.folder == a.pathname && a.hash) {
      scrollPage(a.hash.substring(1));
      //updateHistory(a.hash.substring(1));
      //setOtpItemToActive(a.hash.substring(1));
    } else {
      await getWebpage(a.pathname, a.hash, true);
    }
  } else {
    window.open(a.href, '_blank').focus();
  }
};

/************************************************************************************************
* window onpopstate
************************************************************************************************/

window.onpopstate = function (event) {
  let a = document.createElement('a');
  a.href = document.location.href;
  getWebpage(a.pathname, null, false);
};

/************************************************************************************************
* book and otp listeners
************************************************************************************************/

document.querySelector('button.hide-book-icon').addEventListener('click', (event) => {
  if (winWidth == 'sm' || winWidth == 'xs') {
    document.getElementById('page-col').style.display = 'block';
  }
  document.getElementById('book-col').style.display = 'none';
  document.querySelector('div.show-book-col').style.display = 'block';
});

document.querySelector('button.show-book-col').addEventListener('click', (event) => {
  if (winWidth == 'sm' || winWidth == 'xs') {
    document.getElementById('page-col').style.display = 'none';
  }
  document.getElementById('book-col').style.display = 'block';
  document.querySelector('div.show-book-col').style.display = 'none';
});

document.querySelector('button.hide-otp-icon').addEventListener('click', (event) => {
  if (winWidth == 'sm' || winWidth == 'xs') {
    document.getElementById('page-col').style.display = 'block';
  }
  document.getElementById('otp-col').style.display = 'none';
  document.querySelector('button.show-otp-col').style.display = 'block';
  otpPreference = otpPreferences.hide;
});

document.querySelector('button.show-otp-col').addEventListener('click', (event) => {
  if (winWidth == 'sm' || winWidth == 'xs') {
    document.getElementById('page-col').style.display = 'none';
  }
  document.getElementById('otp-col').style.display = 'block';
  document.querySelector('button.show-otp-col').style.display = 'none';
  otpPreference = otpPreferences.show;
});

/************************************************************************************************
* on click
************************************************************************************************/

document.querySelectorAll('header a.navbar-brand').forEach(el => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    followLink(event.currentTarget.href);
  });
});

document.querySelectorAll('header a.follow').forEach(el => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    followLink(event.currentTarget.href);
  });
});

document.querySelector("#otp-col a[href='#on-this-page']").addEventListener('click', (event) => {
  event.preventDefault();
  followLink('#on-this-page');
});

document.querySelector('div.hh-viewer-wrapper button.edit-btn').addEventListener('click', (event) => {
  event.preventDefault();
  followLink(currentPage.src);
});

document.querySelector('div.hh-page-header button.refresh').addEventListener('click', (event) => {
  event.preventDefault();
  getWebpage(window.location.pathname, null, false);
});

document.getElementById('about-this-book').addEventListener('click', (event) => {
  event.preventDefault();
  getWebpage(`/${currentPage.bookPath}/`, null, true);
});

/************************************************************************************************
* onPageColScroll
************************************************************************************************/

document.getElementById('page-col').addEventListener('scroll', scrollHandler);

/************************************************************************************************
* Account page listeners
************************************************************************************************/

window.signInListener = (event) => {
  event.preventDefault();
  let data = {};
  Object.keys(event.target.elements).forEach(key => {
    let element = event.target.elements[key];
    if (element.type !== 'submit') {
      data[element.name] = element.value;
    }
  });
  (async () => {
    try {
      let res = await axios({ url: `${getHHApiDomain()}/api/v1/tokens`, method: 'post', data: data });
      localStorage.setItem('user', JSON.stringify(res.data));

      res = await axios({ url: `${getHHApiDomain()}/api/v1/users/${res.data.userId}`, method: 'get' });
      let firstNameForm = document.getElementById('first-name-form');
      firstNameForm.querySelector('input').value = res.data.firstName;
      let lasttNameForm = document.getElementById('last-name-form');
      lasttNameForm.querySelector('input').value = res.data.lastName;
      let emailForm = document.getElementById('email-form');
      emailForm.querySelector('input').value = res.data.email;

      document.getElementById('sign-in').style.display = 'none';
      document.getElementById('account').style.display = 'block';
    } catch (error) { reportError(error); }
  })();
};

window.signUpListener = (event) => {
  event.preventDefault();
  let data = {};
  Object.keys(event.target.elements).forEach(key => {
    let element = event.target.elements[key];
    if (element.type !== 'submit') { data[element.name] = element.value; }
  });
  (async () => {
    try {
      const res = await axios({ url: `${getHHApiDomain()}/api/v1/users`, method: 'post', data: data });
      event.target.reset();
      reportInfo('Success', 'User account created successfully.');
      document.getElementById('sign-in-form').elements['email'].value = res.data.email;
    } catch (error) { reportError(error); }
  })();
};

window.signOutListener = (event) => {
  event.preventDefault();
  confirm('Sign out', 'Click "Sign out" to sign out or "Cancel" to remain signed in.', 'Sign out', () => {
    localStorage.removeItem('user');
    document.getElementById('account').style.display = 'none';
    document.getElementById('sign-in').style.display = 'block';
  });
};

window.updateAccountListener = (event) => {
  event.preventDefault();
  (async () => {
    try {
      const input = event.target.querySelector('input');
      const user = localStorage.getItem('user');
      if (user) {
        const res = await axios({
          url: `${getHHApiDomain()}/api/v1/users/${JSON.parse(user).userId}`,
          method: 'patch',
          headers: { authorization: `Bearer ${JSON.parse(user).token}` },
          data: { updates: `${input.name}="${input.value}"` }
        });
        reportInfo('Success', 'Field updated successfully.');
      }
    } catch (error) { reportError(error); }
  })();
};

window.deleteAccountListener = (event) => {
  event.preventDefault();
  confirm('Delete my account', 'Click "Delete" to delete your account or "Cancel" to retain your account.', 'Delete', () => {
    (async () => {
      try {
        const user = localStorage.getItem('user');
        if (user) {
          const res = await axios({ url: `${getHHApiDomain()}/api/v1/users/${JSON.parse(user).userId}`, method: 'delete' });
          localStorage.removeItem('user');
        }
        document.getElementById('account').style.display = 'none';
        document.getElementById('sign-in').style.display = 'block';
        reportInfo('Success', 'User account deleted successfully.');
      } catch (error) {
        reportError(error);
      }
    })();
  });
};

/************************************************************************************************
* Local Storage
************************************************************************************************/

// null means cancel. '' means no auth token.
window.getBearerToken = () => {
  let user = localStorage.getItem('user');
  return user ? `Bearer ${JSON.parse(user).token}` : '';
};

/************************************************************************************************
* Modal-related
************************************************************************************************/

const modalDefaultYesCb = () => { console.log('Default yesCb'); };
var modalYesCb = modalDefaultYesCb;
const modalEl = document.getElementById('modal');
const modal = new bootstrap.Modal(modalEl);
modalEl.querySelector('button.yes').addEventListener('click', (event) => {
  modal.hide();
  modalYesCb();
  modalYesCb = modalDefaultYesCb;
});

window.confirm = (title, detail, yesLabel, yesCb) => {
  modalEl.querySelector('h5.modal-title').textContent = title;
  modalEl.querySelector('div.modal-body').textContent = detail;
  modalEl.querySelector('button.yes').innerHTML = yesLabel;
  modalYesCb = yesCb;
  modal.show();
};

/************************************************************************************************
* Toast-related
************************************************************************************************/

window.showToast = (level, title, message) => {
  let toast = document.createElement('div');
  toast.classList.add('toast', 'fade', 'text-dark', 'bg-light', 'border-0');
  toast.setAttribute('data-bs-autohide', 'false');
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.setAttribute('aria-atomic', 'true');
  toast.setAttribute('solid', 'true');
  toast.addEventListener('hidden.bs.toast', (event) => {
    event.target.remove();
  });

  let header = document.createElement('div');
  const foreground = (level) => {
    if (level === 'warning') { return 'text-dark'; }
    else { return 'text-white'; }
  };
  const background = (level) => {
    if (level === 'error') { return 'bg-danger'; }
    else if (level === 'warning') { return 'bg-warning'; }
    else { return 'bg-success'; }
  };
  const btnOutline = (level) => {
    if (level === 'warning') { return 'btn-outline-dark'; }
    else { return 'btn-outline-light'; }
  };
  header.classList.add('toast-header', foreground(level), background(level));

  let strong = document.createElement('strong');
  strong.classList.add('me-auto');
  strong.innerHTML = title;

  let btn = document.createElement('button');
  btn.type = 'button';
  btn.classList.add('btn', 'btn-sm', btnOutline(level));
  btn.setAttribute('data-bs-dismiss', 'toast');

  let i = document.createElement('i');
  i.classList.add('fas');
  i.classList.add('fa-times');

  let body = document.createElement('div');
  body.classList.add('toast-body');
  body.innerHTML = message;

  btn.appendChild(i);
  header.appendChild(strong);
  header.appendChild(btn);
  toast.appendChild(header);
  toast.appendChild(body);
  document.getElementById('toast-list').appendChild(toast);
  new bootstrap.Toast(toast, {}).show();
};

function getTitleAndMessage(error) {
  let tm = { title: 'Unknown Error', message: 'Unknown Message' };
  if ('response' in error && 'statusText' in error.response && error.response.statusText) { tm.title = `${error.response.statusText}`; }
  else if ('message' in error && error.message) { tm.title = error.message; }
  if ('response' in error && 'data' in error.response && error.response.data) { tm.message = error.response.data; }
  else if ('name' in error && error.name) { tm.message = error.name; }
  return tm;
}

window.reportError = (error) => { let tm = getTitleAndMessage(error); showToast('error', tm.title, tm.message); };
window.reportInfo = (code, title, detail) => { showToast(code === 0 ? 'info' : 'warning', title, detail); };

/************************************************************************************************
* on load
************************************************************************************************/

//console.log(window.location.origin);
//console.log(window.location.href);
//console.log(window.location.pathname);
getWebpage(window.location.pathname, window.location.hash, true);

//function callGetWebpage() {
//  getWebpage(window.location.pathname, window.location.hash, true);
//}
//window.setTimeout(callGetWebpage, 500);
