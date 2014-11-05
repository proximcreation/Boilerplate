'use strict';

module.exports = {
  app: {
    title: 'Boilerplate',
    description: 'A MEAN CMS boilerplate.',
    keywords: 'mongodb, express, angularjs, nodejs, boilerplate, cms'
  },
  port: process.env.PORT || 3000,
  templateEngine: 'swig',
  sessionSecret: 'MEAN',
  assets: {
    lib: {
      css: [
        'lib/bootstrap/dist/css/bootstrap.css'
      ],
      js: [
        'lib/angular/angular.js'
      ]
    }
  }
};
