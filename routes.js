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

  app.route('/api/v1/countries/:code')
    .get(controllers.getCountry);

  /************************************************************************************************
  * Industries
  ************************************************************************************************/

  app.route('/api/v1/industries')
    .get(controllers.getIndustries);

  app.route('/api/v1/industries/:id')
    .get(controllers.getIndustry);

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

  app.route('/api/v1/portals/:id')
    .get(controllers.getPortal);

  /************************************************************************************************
  * Sectors
  ************************************************************************************************/

  app.route('/api/v1/sectors')
    .get(controllers.getSectors);

  app.route('/api/v1/sectors/:id')
    .get(controllers.getSector);
};