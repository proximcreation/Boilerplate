'use strict';

var http = require('http');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');
var chalk = require('chalk');
var swig = require('swig');
var path = require('path');
var config = require('./config');

module.exports = function(db) {

  var app = express();

  // Load the models
  require('../app/models/users.models');
  console.log(chalk.green('     [OK] Models loaded.'));

  // Setting application local variables
  app.locals.title = config.app.title;
  app.locals.description = config.app.description;
  app.locals.keywords = config.app.keywords;
  app.locals.jsFiles = config.assets.lib.js;
  app.locals.cssFiles = config.assets.lib.css;

  // Compression
  app.use(compression());

  // Set swig as the template engine
  app.engine('views.html', swig.renderFile);

  // Set views path and view engine
  app.set('view engine', 'views.html');
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
  app.use(bodyParser.json());

  // Setting the static folder
  app.use(express.static(path.resolve('./public')));

  // Load the routes
  require('../app/routes/core.routes.js')(app);
  console.log(chalk.green('     [OK] Routes loaded.'));

  // API router
  var api = express.Router();

  // Load the API routes
  require('../app/routes/users.routes')(api);
  console.log(chalk.green('     [OK] API Routes loaded.'));

  // Load the API router
  app.use('/api', api);

  // Assume 404 since no middleware responded
  app.use(function(req, res) {
    res.status(404).render('404', {
      url: req.originalUrl
    });
  });

  // Start the HTTP server
  var httpServer = http.createServer(app);
  return httpServer;
};
