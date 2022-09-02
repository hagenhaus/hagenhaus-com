/************************************************************************************************
* HHApi
************************************************************************************************/

class HHApi {
  constructor(url, urls) {
    this.urls = {};

    if (url) {
      this.urls.deleteRecord = this.fixPath(url);
      this.urls.getRecord = this.fixPath(url);
      this.urls.getRecords = this.fixPath(url);
      this.urls.patchRecord = this.fixPath(url);
      this.urls.postRecord = this.fixPath(url);
      this.urls.putRecord = this.fixPath(url);
    }

    if (urls) {
      this.urls.deleteRecord = 'deleteRecord' in urls ? this.fixPath(urls.deleteRecord) : null;
      this.urls.getRecord = 'getRecord' in urls ? this.fixPath(urls.getRecord) : null;
      this.urls.getRecords = 'getRecords' in urls ? this.fixPath(urls.getRecords) : null;
      this.urls.patchRecord = 'patchRecord' in urls ? this.fixPath(urls.patchRecord) : null;
      this.urls.postRecord = 'postRecord' in urls ? this.fixPath(urls.postRecord) : null;
      this.urls.putRecord = 'putRecord' in urls ? this.fixPath(urls.putRecord) : null;
    }
  };

  /************************************************************************************************
  * createRecord
  ************************************************************************************************/

  async createRecord(data, fields) {
    return (await axios({
      url: `${this.urls.postRecord}?fields=${fields}`,
      method: 'post',
      data: data
    }));
  }

  /************************************************************************************************
  * getRecords
  ************************************************************************************************/

  async getRecords(queryObject) {
    const queryString = this.toQueryStr(queryObject);
    return (await axios({ url: `${this.urls.getRecords}?${queryString}`, method: 'get' }));
  }

  /************************************************************************************************
  * getRecord
  ************************************************************************************************/

  async getRecord(id, queryObject) {
    const queryString = this.toQueryStr({ fields: queryObject.fields });
    return (await axios({ url: `${this.urls.getRecord}/${id}?${queryString}`, method: 'get' }));
  }

  /************************************************************************************************
  * patchRecord
  ************************************************************************************************/

  async patchRecord(id, data) {
    return (await axios({
      url: `${this.urls.patchRecord}/${id}`,
      method: 'patch',
      data: data
    }));
  }

  /************************************************************************************************
  * deleteRecord
  ************************************************************************************************/

  async deleteRecord(id) {
    return (await axios({ url: `${this.urls.deleteRecord}/${id}`, method: 'delete' }));
  }

  /************************************************************************************************
  * getAndProcessRecords
  ************************************************************************************************/

  getAndProcessRecords(queryObject, success, failure) {
    (async () => {
      try {
        success(await this.getRecords(queryObject));
      } catch (error) {
        // console.log(JSON.stringify(error, null, 2));
        if (error.message === 'Network Error') {
          failure('network-error', error.message, error.stack);
        } else {
          failure(error.response.data.type, error.response.data.title, error.response.data.detail);
        }
      }
    })();
  }

  /************************************************************************************************
  * getAndProcessRecord
  ************************************************************************************************/

  getAndProcessRecord(id, queryObject, success, failure) {
    (async () => {
      try {
        success(await this.getRecord(id, queryObject), id);
      } catch (error) {
        // console.log(JSON.stringify(error, null, 2));
        if (error.message === 'Network Error') {
          failure('network-error', error.message, error.stack);
        } else {
          failure(error.response.data.type, error.response.data.title, error.response.data.detail);
        }
      }
    })();
  }

  /************************************************************************************************
  * toQueryStr
  ************************************************************************************************/

  toQueryStr(queryObject) {
    const queryArray = [];
    for (const property in queryObject) {
      queryArray.push(`${property}=${encodeURIComponent(queryObject[property])}`);
    }
    return queryArray.join('&');
  }

  /************************************************************************************************
  * fixPath
  ************************************************************************************************/

  fixPath(str) {
    if (!str || !str.length) {
      return '';
    }
    if (!str.startsWith('http')) {
      str = str.charAt(0) === '/' ? str : `/${str}`;
    }
    str = str.charAt(str.length - 1) === '/' ? str.slice(0, -1) : str;
    return str;
  }
}