'use strict';

module.exports = function(api) {
  var users = require('../controllers/users.controllers');

  // Setting up the users profile api
  api.route('/users/me')
  	.get(users.me)
  	.put(users.update);
};
