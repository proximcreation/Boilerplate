'use strict';

var config = require('./config/config');
var mongoose = require('mongoose');
var chalk = require('chalk');

var db = mongoose.connect(config.db, function(err) {
  if (err) {
    console.error(chalk.red('  [ERROR] Could not connect to MongoDB!'));
  }
});

var app = require('./config/express')(db);
app.listen(config.port);

console.log(chalk.green('     [OK] Boilerplate started on port ' + config.port));
