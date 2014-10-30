'use strict';

module.exports = {
  app: {
    title: 'Boilerplate',
    description: 'A MEAN CMS boilerplate.',
    keywords: 'mongodb, express, angularjs, nodejs, boilerplate, cms'
  },
  port: process.env.PORT || 3000,
  secure: process.env.SECURE || false,
  templateEngine: 'swig',
  sessionSecret: 'MEAN'
};
