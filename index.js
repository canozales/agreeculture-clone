const nconf   = require('nconf');
const AppServer = require('./bin/app/server');
const configs = require('./bin/infra/configs/config');
const mongoConnectionPooling = require('./bin/helpers/databases/mongodb/connection');
// const observer = require('./bin/modules/observer');
configs.initEnvironments(nconf);
const appServer = new AppServer();
const port = process.env.port || nconf.get('PORT') || 1337;

module.exports = appServer.server.listen(port, () => {
  mongoConnectionPooling.init();
  // observer.init();
  console.log('%s started, listening at %s', appServer.server.name, appServer.server.url);
});
