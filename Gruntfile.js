/*
 * grunt-html-template
 * https://github.com/allenice/grunt-html-template
 *
 * Copyright (c) 2014 Allenice
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'js/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    html_template: {
      options: {
        beautify: {
          indent_size: 2
        }
      },
      build_html: {
        expand: true,
        cwd: "./",
        src: "**/*.twig",
        dest: "./"
      }
    },

    watch: {
      tpl: {
          files: "**/*.twig",
          tasks: ['html_template']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-template');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.

  // By default, lint and run all tests.
  grunt.registerTask('default', ['html_template', 'watch:tpl']);

};
