// const nconf   = require('nconf');
// const apm = require('elastic-apm-node').start({
//   // Override service name from package.json
//   // Allowed characters: a-z, A-Z, 0-9, -, _, and space
//   serviceName: 'productService',
//   secretToken: 'RkcwNHBvTUJHSVpQaHFFMkhVaHI6a0I4eHFLTGhUZ1NSWXUyUVFUQTF0Zw==',
//   // Set custom APM Server URL (default: http://localhost:8200)
//   serverUrl: 'https://agree-deployment.kb.us-central1.gcp.cloud.es.io:9243',
// });

const restify = require('restify');
// const serveStatic = require('serve-static-restify');
const project = require('../../package.json');
const basicAuth = require('../auth/basic_auth_helper');
// const jwtAuth = require('../auth/jwt_auth_helper');
const wrapper = require('../helpers/utils/wrapper');
const jwtAuth = require('../auth/jwt_helper');
// const sentryLog = require('../helpers/components/sentry/sentry_log');
// const logger = require('../helpers/utils/logger');
const corsMiddleware = require('restify-cors-middleware');
const articleHandler = require('../modules/article/handlers/api_handler');


let crossOrigin = (req,res,next) => {
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  return next();
};

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['Origin, X-Requested-With, Content-Type, Accept, OPTIONS'],
  exposeHeaders: ['OPTIONS']
});

let AppServer = function(){
  this.server = restify.createServer({
    name: project.name + '-server',
    version: project.version
  });

  this.server.serverKey = '';
  this.server.pre(cors.preflight);
  this.server.use(cors.actual);
  this.server.use(restify.plugins.acceptParser(this.server.acceptable));
  this.server.use(restify.plugins.queryParser());
  this.server.use(restify.plugins.bodyParser());
  this.server.use(restify.plugins.authorizationParser());

  //required for basic auth
  this.server.use(basicAuth.init());
  this.server.use(crossOrigin);

  //anonymous can access the end point, place code bellow
  this.server.get('/', (req, res, next) => {
    wrapper.response(res,'success',wrapper.data('Index'),'This service is running properly');
  });

  //Article
  this.server.post('/api/v1/article/', jwtAuth.verifyToken, articleHandler.postOneArticle);
  this.server.get('/api/v1/article/', jwtAuth.verifyToken, articleHandler.getAllArticles);
  this.server.get('/api/v1/article/:id', jwtAuth.verifyToken, articleHandler.getOneArticle);
  //this.server.get('/api/v1/article/:id', jwtAuth.verifyToken, articleHandler.getByAuthor);
  this.server.del('/api/v1/article/:id', jwtAuth.verifyToken, articleHandler.deleteOneArticle);
  this.server.patch('/api/v1/article/:id', jwtAuth.verifyToken, articleHandler.putOneArticle);
};

module.exports = AppServer;
