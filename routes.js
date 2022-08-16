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
  * Messages
  ************************************************************************************************/

  app.route('/api/v1/messages')
    .post(controllers.postMessage);

  /************************************************************************************************
  * Portals
  ************************************************************************************************/

  app.route('/api/v1/companies')
    .get(controllers.getCompanies);

  app.route('/api/v1/companies/:id')
    .get(controllers.getCompany);

  app.route('/api/v1/countries')
    .get(controllers.getCountries);

  app.route('/api/v1/countries/:id')
    .get(controllers.getCountry);

  app.route('/api/v1/industries')
    .get(controllers.getIndustries);

  app.route('/api/v1/industries/:id')
    .get(controllers.getIndustry);

  app.route('/api/v1/industry-groups')
    .get(controllers.getIndustryGroups);

  app.route('/api/v1/industry-groups/:id')
    .get(controllers.getIndustryGroup);

  app.route('/api/v1/portals')
    .post(controllers.postPortal)
    .get(controllers.getPortals);

  app.route('/api/v1/portals/:id')
    .get(controllers.getPortal)
    .patch(controllers.patchPortal)
    .delete(controllers.deletePortal);

  app.route('/api/v1/sectors')
    .get(controllers.getSectors);

  app.route('/api/v1/sectors/:id')
    .get(controllers.getSector);

  app.route('/api/v1/subindustries')
    .get(controllers.getSubindustries);

  app.route('/api/v1/subindustries/:id')
    .get(controllers.getSubindustry);

  /************************************************************************************************
  * Baseball
  ************************************************************************************************/

  app.route('/api/v1/parks')
    .get(controllers.getBaseballParks);

  app.route('/api/v1/parks/:id')
    .get(controllers.getBaseballPark);

  app.route('/api/v1/players')
    .get(controllers.getBaseballPlayers);

  app.route('/api/v1/players/:id')
    .get(controllers.getBaseballPlayer);
};
