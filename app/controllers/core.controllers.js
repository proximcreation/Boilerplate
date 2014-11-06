'use strict';

exports.index = function(req, res) {
  res.render('index', {
    user: req.user || null
  });
};

/**
 * @api {post} /signup Sign up a new User
 * @apiName SignUp
 * @apigroup Core
 *
 * @apiParam {String} firstName The User first name
 * @apiParam {String} lastName The User last name
 * @apiParam {String} email The User email
 * @apiParam {String} username The User username
 * @apiParam {String} password The User password
 *
 * @apiSuccess {Object} user The User created
 *
 * @apiError {String} message The error message
**/
exports.signup = function(req, res) {
	//todo
};

/**
 * @api {post} /signin Sign in an User
 * @apiName SignIn
 * @apigroup Core
 *
 * @apiParam {String} username The User username
 * @apiParam {String} password The User password
 *
 * @apiSuccess {Object} user The User logged
 *
 * @apiError {String} message The error message
**/
exports.signin = function(req, res) {
	//todo
};

/**
 * @api {get} /signout Sign out an User
 * @apiName SignOut
 * @apigroup Core
**/
exports.signout = function(req, res) {
	//todo
};
