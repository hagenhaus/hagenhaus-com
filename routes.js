import * as controllers from './controllers.js';

export const routes = (app) => {

  /************************************************************************************************
  * API Information
  ************************************************************************************************/

  app.route('')
    .get(controllers.getApiInformation);

  app.route('/api')
    .get(controllers.getApiInformation);

  app.route('/api/v1')
    .get(controllers.getApiInformation);

  /************************************************************************************************
  * GICS
  ************************************************************************************************/

  app.route('/api/v1/industry-classifications/gics/sectors')
    .get(controllers.getSectors);

  app.route('/api/v1/industry-classifications/gics/industry-groups')
    .get(controllers.getIndustryGroups);

  app.route('/api/v1/industry-classifications/gics/industries')
    .get(controllers.getIndustries);

  app.route('/api/v1/industry-classifications/gics/subindustries')
    .get(controllers.getSubindustries);

  /************************************************************************************************
  * Messages
  ************************************************************************************************/

  app.route('/api/v1/messages')
    .post(controllers.postMessage);

  /************************************************************************************************
  * Portals
  ************************************************************************************************/

  app.route('/api/v1/portals')
    .get(controllers.getPortals);
};