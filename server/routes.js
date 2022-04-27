import * as controllers from './controllers.js';

export const routes = (app) => {

  /************************************************************************************************
   * API Users
  ************************************************************************************************/

  app.route('')
    .get(controllers.getApiInformation);

  app.route('/api')
    .get(controllers.getApiInformation);

  app.route('/api/v1')
    .get(controllers.getApiInformation);

  app.route('/api/v1/messages')
    .post(controllers.postMessage);

  /************************************************************************************************
    * API Admins
  ************************************************************************************************/


  /************************************************************************************************
   * ReadyRemit Users
  ************************************************************************************************/

  app.route('/readyremit/v2/account-fields')
    .get(controllers.getAccountFields);

  app.route('/readyremit/v2/owners/:ownerId/accounts')
    .get(controllers.getAccounts);

  app.route('/readyremit/v2/owners/:ownerId/accounts/:accountId')
    .get(controllers.getAccount);

  app.route('/readyremit/v2/owner-fields')
    .get(controllers.getAccountFields);

  app.route('/readyremit/v2/owners/:ownerID')
    .get(controllers.getOwner);
};
