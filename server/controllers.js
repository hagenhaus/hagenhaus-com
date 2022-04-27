import fs from 'fs';

/************************************************************************************************
 * API Users
************************************************************************************************/

export const getApiInformation = (req, res) => {
  res.status(200).send({
    'name': 'Hagenhaus API',
    'method': req.method,
    'url': req.url,
    'timestamp': new Date().toISOString()
  });
};

export const postMessage = (req, res) => {
  const record = {};
  record.timestamp = new Date().toISOString();
  record.method = req.method;
  record.endpoint = req.url;
  record.name = req.body.name;
  record.email = req.body.email;
  record.website = req.body.website;
  record.message = req.body.message;
  record.userAgent = req.headers['user-agent'];

  try {
    const stats = fs.statSync('messages.log');
    if (stats.size < 1000000) {
      fs.appendFileSync('messages.log', JSON.stringify(record, null, 2));
      res.status(204).end();
    } else {
      res.status(429).end();
    }
  } catch (err) {
    res.status(404).end();
  }
};

/************************************************************************************************
 * ReadyRemit Users
************************************************************************************************/

export const getAccountFields = (req, res) => {
  res.status(200).send([]);
};

export const getAccounts = (req, res) => {
  res.status(200).send([
    {
      "accountName": "Account Name",
      "accountId": "00000000-0000-0000-0000-000000000000"
    },
    {
      "accountName": "Account Name",
      "accountId": "00000000-0000-0000-0000-000000000000"
    }
  ]);
};

export const getAccount = (req, res) => {
  res.status(200).send({
    "accountId": "00000000-0000-0000-0000-000000000000"
  });
};

export const getOwnerFields = (req, res) => {
  res.status(200).send([]);
};

export const getOwner = (req, res) => {
  res.status(200).send({
    "ownerId": "00000000-0000-0000-0000-000000000000",
    "profile": {
      "type": "person",
      "firstName": "First Name",
      "lastName": "Last Name"
    },
    "accounts": [
      {
        "type": "bank",
        "countryCode": "IND",
        "currencyCode": "INR",
        "accountName": "Account Name",
        "accountId": "00000000-0000-0000-0000-000000000000"
      },
      {
        "type": "bank",
        "countryCode": "IND",
        "currencyCode": "INR",
        "accountName": "Account Name",
        "accountId": "00000000-0000-0000-0000-000000000000"
      }
    ]
  });
};
