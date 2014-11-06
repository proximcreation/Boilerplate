Boilerplate
===========

A MEAN CMS Boilerplate.

MEAN is a full-stack JavaScript open-source solution, which provides a solid starting point for [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications.

## Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/).
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```

## Quick Install
The first thing you should do is install the Node.js dependencies. The Boilerplate comes pre-bundled with a package.json file that contains the list of modules you need to start your application. To install Node.js dependencies you're going to use npm again, in the application folder run this in the command-line:

```
$ npm install
```

This command does a few things:
* First it will install the dependencies needed for the application to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
* Finally, when the install process is over, npm will initiate a bower install command to install all the front-end modules needed for the application

## Running Your Application
After the install process is over, you'll be able to run your application using Grunt, just run grunt default task:

```
$ grunt
```

Your application should run on the 3000 port so in your browser just go to [http://localhost:3000](http://localhost:3000).

## Live Example
Browse the Boilerplate on [http://sylvainlap.herokuapp.com](http://sylvainlap.herokuapp.com).

## Heroku
This Boilerplate comes with a Procfile for Heroku.

## API Doc
This Boilerplate comes with API Doc.

## Credits
Very inspired from [MEAN.JS](http://meanjs.org/).
