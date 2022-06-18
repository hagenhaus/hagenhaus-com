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

  app.route('/api/v1/countries/:id')
    .get(controllers.getCountry);

  /************************************************************************************************
  * Industries
  ************************************************************************************************/

  app.route('/api/v1/industries')
    .get(controllers.getIndustries);

  app.route('/api/v1/industries/:id')
    .get(controllers.getIndustry);

  /************************************************************************************************
  * Industry Groups
  ************************************************************************************************/

  app.route('/api/v1/industry-groups')
    .get(controllers.getIndustryGroups);

  app.route('/api/v1/industry-groups/:id')
    .get(controllers.getIndustryGroup);

  /************************************************************************************************
   * Messages
   ************************************************************************************************/

  app.route('/api/v1/messages')
    .post(controllers.postMessage);

  /************************************************************************************************
  * Portals
  ************************************************************************************************/

  app.route('/api/v1/portal-fields')
    .get(controllers.getPortalFields);

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

  /************************************************************************************************
  * Subindustries
  ************************************************************************************************/

  app.route('/api/v1/subindustries')
    .get(controllers.getSubindustries);

  app.route('/api/v1/subindustries/:id')
    .get(controllers.getSubindustry);
};