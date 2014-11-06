'use strict';

exports.index = function(req, res) {
  res.render('index', {
    user: req.user || null
  });
};

exports.signup = function(req, res) {
	//todo
};

exports.signin = function(req, res) {
	//todo
};

exports.signout = function(req, res) {
	//todo
};
