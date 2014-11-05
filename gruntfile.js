'use strict';

module.exports = function(grunt) {
  // Unified Watch Object
  var watchFiles = {
    serverViews: ['app/views/**/*.*'], 
    serverJS: ['gruntfile.js', 'server.js', 'config/**/*.js', 'app/**/*.js'],
    clientViews: ['public/modules/**/views/*.html'],
    clientJS: ['public/js/*.js', 'public/modules/**/*.js'],
    clientCSS: ['public/modules/**/*.css']
  };

  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      serverViews: {
        files: watchFiles.serverViews,
        options: {
          livereload: true
        }
      },
      serverJS: {
        files: watchFiles.serverJS,
        options: {
          livereload: true
        }
      }
    },
    nodemon: {
      dev: {
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['concurrent:default']);
};
