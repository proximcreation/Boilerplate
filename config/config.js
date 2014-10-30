'use strict';

var _ = require('lodash');
var chalk = require('chalk');

if (!process.env.NODE_ENV) {
  console.error(chalk.yellow('[WARNING] NODE_ENV is not defined! Using default development environment.'));
  process.env.NODE_ENV = 'development';
}

console.log(chalk.green('     [OK] Application loaded using the "' + process.env.NODE_ENV + '" environment configuration.'));

module.exports = _.extend(
  require('./env/all'),
  require('./env/' + process.env.NODE_ENV)
);
