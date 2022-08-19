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

  app.route('/api/devportals/v1/companies')
    .get(controllers.getCompanies);

  app.route('/api/devportals/v1/companies/:id')
    .get(controllers.getCompany);

  app.route('/api/devportals/v1/countries')
    .get(controllers.getCountries);

  app.route('/api/devportals/v1/countries/:id')
    .get(controllers.getCountry);

  app.route('/api/devportals/v1/industries')
    .get(controllers.getIndustries);

  app.route('/api/devportals/v1/industries/:id')
    .get(controllers.getIndustry);

  app.route('/api/devportals/v1/industry-groups')
    .get(controllers.getIndustryGroups);

  app.route('/api/devportals/v1/industry-groups/:id')
    .get(controllers.getIndustryGroup);

  app.route('/api/devportals/v1/portals')
    .post(controllers.postPortal)
    .get(controllers.getPortals);

  app.route('/api/devportals/v1/portals/:id')
    .get(controllers.getPortal)
    .patch(controllers.patchPortal)
    .delete(controllers.deletePortal);

  app.route('/api/devportals/v1/sectors')
    .get(controllers.getSectors);

  app.route('/api/devportals/v1/sectors/:id')
    .get(controllers.getSector);

  app.route('/api/devportals/v1/subindustries')
    .get(controllers.getSubindustries);

  app.route('/api/devportals/v1/subindustries/:id')
    .get(controllers.getSubindustry);

  /************************************************************************************************
  * Baseball
  ************************************************************************************************/

  app.route('/api/baseball/v1/leagues')
    .get(controllers.getBaseballLeagues);

  app.route('/api/baseball/v1/leagues/:id')
    .get(controllers.getBaseballLeague);

  app.route('/api/baseball/v1/managers')
    .get(controllers.getBaseballManagers);

  app.route('/api/baseball/v1/managers/:id')
    .get(controllers.getBaseballManager);

  app.route('/api/baseball/v1/parks')
    .get(controllers.getBaseballParks);

  app.route('/api/baseball/v1/parks/:id')
    .get(controllers.getBaseballPark);

  app.route('/api/baseball/v1/players')
    .post(controllers.postBaseballPlayer)
    .get(controllers.getBaseballPlayers);

  app.route('/api/baseball/v1/players/:id')
    .get(controllers.getBaseballPlayer);

  app.route('/api/baseball/v1/teams')
    .get(controllers.getBaseballTeams);

  app.route('/api/baseball/v1/teams/:id')
    .get(controllers.getBaseballTeam);
};
