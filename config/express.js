'use strict';

var http = require('http');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');
var chalk = require('chalk');
var swig = require('swig');
var config = require('./config');

module.exports = function(db) {

  var app = express();

  // Load the models
  //require('../app/models/xxx.js');
  console.log(chalk.green('     [OK] Models loaded.'));

  // Setting application local variables
  app.locals.title = config.app.title;
  app.locals.description = config.app.description;
  app.locals.keywords = config.app.keywords;
  app.locals.facebookAppId = config.facebook.clientID;
  app.locals.secure = config.secure;

  // Compression
  app.use(compression());

  // Set swig as the template engine
  app.engine('html', swig.renderFile);

  // Set views path and view engine
  app.set('view engine', 'html');
  app.set('views', './app/views');

  // Environment dependent middleware
  if (process.env.NODE_ENV === 'development') {
    // Enable logger (morgan)
    app.use(morgan('dev'));

    // Disable views cache
    app.set('view cache', false);
  }

  // Parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // Parse application/json
  app.use(bodyParser.json())

  // Setting the static folder
  app.use(express.static(__dirname + '/public'));

  // Load the routes
  //require('../app/routes/xxx.js');
  console.log(chalk.green('     [OK] Routes loaded.'));

  // Assume 404 since no middleware responded
  app.use(function(req, res) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not Found'
    });
  });

  if (app.locals.secure) {
    console.log('Securely using https protocol');
    var https = require('https'),
    privateKey  = fs.readFileSync('./config/sslcert/key.pem', 'utf8'),
    certificate = fs.readFileSync('./config/sslcert/cert.pem', 'utf8'),
    credentials = {key: privateKey, cert: certificate},
    httpsServer = https.createServer(credentials, app);
    return httpsServer;
  } else {
    console.log('Insecurely using http protocol');
    var httpServer = http.createServer(app);
    return httpServer;
  }
};
