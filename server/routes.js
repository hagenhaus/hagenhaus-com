import * as controllers from './controllers.js';

export const routes = (app) => {

  /************************************************************************************************
   * API information
  ************************************************************************************************/

  app.route('')
    .get(controllers.getApiInformation);

  app.route('/api')
    .get(controllers.getApiInformation);

  app.route('/api/v1')
    .get(controllers.getApiInformation);

  /************************************************************************************************
   * User API
  ************************************************************************************************/

  app.route('/api/v1/messages')
    .post(controllers.postMessage);

  /************************************************************************************************
   * Admin API
  ************************************************************************************************/

};
