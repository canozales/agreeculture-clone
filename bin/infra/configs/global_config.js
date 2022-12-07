

const nconf = require('nconf');

const getAuthAPI = () => {
  return nconf.get('AUTH_API_BASIC');
};

const getSentryDSN = () => {
  return nconf.get('DSN_SENTRY_URL');
};

const getDevelopmentDB = () => {
  return nconf.get('DEVELOPMENT_MONGO_DATABASE_URL');
};

const getDevelopmentDBMySQL = () => {
  return nconf.get('DEVELOPMENT_MYSQL_DATABASE_CONFIG');
};

const getMockupTopic = () => {
  return nconf.get('MOCKUP_TOPIC');
};

const getAWSCredential = () => {
  return nconf.get('AWS_CREDENTIAL');
};

const getSecretToken = () => {
  return nconf.get('SECRET_TOKEN');
};

const getPublicKey = () => {
  return nconf.get('PUBLIC_KEY_PATH');
};

const getPrivateKey = () => {
  return nconf.get('PRIVATE_KEY_PATH');
};

const getEmailAccount = () => {
  return nconf.get('EMAIL_ACC');
};

module.exports = {
  getAuthAPI: getAuthAPI,
  getSentryDSN: getSentryDSN,
  getDevelopmentDB: getDevelopmentDB,
  getDevelopmentDBMySQL: getDevelopmentDBMySQL,
  getMockupTopic: getMockupTopic,
  getAWSCredential: getAWSCredential,
  getSecretToken: getSecretToken,
  getPublicKey: getPublicKey,
  getPrivateKey: getPrivateKey,
  getEmailAccount: getEmailAccount
};
