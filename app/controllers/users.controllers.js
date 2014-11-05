'use strict';

var _ = require('lodash');
var swagger = require('swagger-node-express');
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.me = {
  'spec': {
    description: 'Get the current user.',
    path: '/users/me',
    method: 'GET',
    summary: 'Get the current user.',
    type : 'user',
    errorResponses: [swagger.errors.notFound('user')],
    nickname: 'me'
  },
  'action': function(req, res) {
    if (req.user) {
      res.json(req.user);
    } else {
      swagger.errors.notFound('user', res);
    }
  }
};

exports.update = {
  'spec': {
    description: 'Update the current user.',
    path: '/users/me',
    method: 'PUT',
    summary: 'Update the current user.',
    type : 'user',
    errorResponses: [swagger.errors.notFound('user')],
    nickname: 'update'
  },
  'action': function(req, res) {
    var user = req.user;

    if (user) {
      user = _.extend(user, req.body);
      user.updated = Date.now();
      //user.save()
      res.json(user);
    } else {
      swagger.errors.notFound('user', res);
    }
  }
};
