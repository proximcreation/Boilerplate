'use strict';

module.exports = function(app) {
  var core = require('../controllers/core.controllers');
  app.route('/').get(core.index);
}
