'use strict';

module.exports = function(app) {
  var core = require('../controllers/core.controllers');

  app.route('/').get(core.index);

  // Setting up the users authentication
  app.route('/signup').post(core.signup);
  app.route('/signin').post(core.signin);
  app.route('/signout').get(core.signout);
};
