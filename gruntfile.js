'use strict';

module.exports = function(grunt) {
  // Unified Watch Object
  var watchFiles = {
    serverViews: ['app/views/**/*.*'], 
    serverJS: ['gruntfile.js', 'server.js', 'config/**/*.js', 'app/**/*.js'],
    clientJS: ['public/js/*.js', 'public/modules/**/*.js'],
    clientCSS: ['public/modules/**/*.css']
  };

  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      serverJS: {
        files: watchFiles.serverJS,
        tasks: ['jshint:serverJS']
      },
      clientJS: {
        files: watchFiles.clientJS,
        tasks: ['jshint:clientJS']
      }
    },
    jshint: {
      serverJS: {
        src: watchFiles.serverJS,
        options: {
          jshintrc: true
        }
      },
      clientJS: {
        src: watchFiles.clientJS,
        options: {
          jshintrc: true
        }
      }
    },
    nodemon: {
      default: {
        script: 'server.js',
        options: {
          ext: 'js,html',
          watch: watchFiles.serverViews.concat(watchFiles.serverJS)
        }
      }
    },
    concurrent: {
      default: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },
    apidoc: {
      default: {
        src: './app',
        dest: './doc',
        options: {
          excludeFilters: 'node_modules/'
        }
      }
    }
  });

  // Load NPM tasks
  require('load-grunt-tasks')(grunt);

  // Tasks
  grunt.registerTask('default', ['concurrent:default']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('doc', ['apidoc']);
};
