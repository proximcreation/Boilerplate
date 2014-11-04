'use strict';

var swagger = require('swagger-node-express');

module.exports = function() {
  var users = require('../controllers/users.controllers');

  // Setting up the users profile api
  swagger.addGet(users.me);
  swagger.addPut(users.update);

  // Setting up the users authentication api
  //swagger.addPost(users.signup);
  //swagger.addPost(users.signin);
  //swagger.addGet(users.signout);
}
