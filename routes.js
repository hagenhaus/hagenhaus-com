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
  * Companies
  ************************************************************************************************/

  app.route('/api/v1/companies')
    .get(controllers.getCompanies);

  app.route('/api/v1/companies/:id')
    .get(controllers.getCompany);

  /************************************************************************************************
  * Countries
  ************************************************************************************************/

  app.route('/api/v1/countries')
    .get(controllers.getCountries);

  /************************************************************************************************
  * GICS
  ************************************************************************************************/

  app.route('/api/v1/gics/sectors')
    .get(controllers.getGicsSectors);

  app.route('/api/v1/gics/industry-groups')
    .get(controllers.getGicsIndustryGroups);

  app.route('/api/v1/gics/industries')
    .get(controllers.getGicsIndustries);

  app.route('/api/v1/gics/subindustries')
    .get(controllers.getGicsSubindustries);

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