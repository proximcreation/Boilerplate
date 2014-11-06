'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.me = function(req, res) {
  res.json(req.user || null);
};

exports.update = function(req, res) {
  var user = req.user;

  if (user) {
    user = _.extend(user, req.body);
    user.updated = Date.now();
    user.displayName = user.firstName + ' ' + user.lastName;
    //user.save(cb);
    res.json(user);
  } else {
    res.status(400).json({
      message: 'User is not signed in.'
    });
  }
};
