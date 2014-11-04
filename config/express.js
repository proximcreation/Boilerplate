'use strict';

var http = require('http');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');
var chalk = require('chalk');
var swig = require('swig');
var swagger = require('swagger-node-express');
var path = require('path');
var config = require('./config');

module.exports = function(db) {

  var app = express();

  // Load the models
  require('../app/models/users.models');
  console.log(chalk.green('     [OK] Models loaded.'));

  // Compression
  app.use(compression());

  // Set swig as the template engine
  app.engine('html', swig.renderFile);

  // Set views path and view engine
  app.set('view engine', 'html');
  app.set('views', './app/views');

  // Enable logger (morgan)
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else {
    app.use(morgan('tiny'));
  }

  // Parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // Parse application/json
  app.use(bodyParser.json())

  // Setting the static folder
  app.use(express.static(path.resolve('./public')));

  // Load the routes
  //require('../app/routes/xxx.js');
  console.log(chalk.green('     [OK] Routes loaded.'));

  // API router
  var api = express.Router();

  // Load the Swagger module
  swagger.setAppHandler(api);
  var swaggerModels = require('../app/models/swagger');
  swagger.addModels(swaggerModels);

  // Load the API routes
  require('../app/routes/users.routes')();
  console.log(chalk.green('     [OK] API Routes loaded.'));

  swagger.configureSwaggerPaths("", "api-docs", "");
  swagger.configure("http://localhost:3000", "1.0");
  console.log(chalk.green('     [OK] Swagger loaded.'));

  // Load the API router
  app.use('/api/v1', api);

  // Expose the Swagger-UI
  app.use('/swagger', express.static(path.resolve('./swagger-ui')));

  // Assume 404 since no middleware responded
  app.use(function(req, res) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not Found'
    });
  });

  // Start the HTTP server
  var httpServer = http.createServer(app);
  return httpServer;
};
