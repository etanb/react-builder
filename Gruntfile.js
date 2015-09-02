'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    clean: {
      build: {
        src : ['build/*','build/**/*']
      }
    },

    copy: {
      main: {
        files: [
          
          {
            expand: true,
            src: ['node_modules/@salesforce-ux/landmark/node_modules/@salesforce-ux/icons/dist/salesforce_landmark_icons/action-sprite/svg/*'], 
            dest: './public/assets/icons/action-sprite/svg/',
            flatten: true
          },
          
          {
            expand: true,
            src: ['node_modules/@salesforce-ux/landmark/node_modules/@salesforce-ux/icons/dist/salesforce_landmark_icons/custom-sprite/svg/*'], 
            dest: './public/assets/icons/custom-sprite/svg/',
            flatten: true
          },
          
          {
            expand: true,
            src: ['node_modules/@salesforce-ux/landmark/node_modules/@salesforce-ux/icons/dist/salesforce_landmark_icons/doctype-sprite/svg/*'], 
            dest: './public/assets/icons/doctype-sprite/svg/',
            flatten: true
          },
          
          {
            expand: true,
            src: ['node_modules/@salesforce-ux/landmark/node_modules/@salesforce-ux/icons/dist/salesforce_landmark_icons/standard-sprite/svg/*'], 
            dest: './public/assets/icons/standard-sprite/svg/',
            flatten: true
          },

          {
            expand: true,
            src: ['node_modules/@salesforce-ux/landmark/node_modules/@salesforce-ux/icons/dist/salesforce_landmark_icons/utility-sprite/svg/*'], 
            dest: './public/assets/icons/utility-sprite/svg/',
            flatten: true
          },

        ],
      },
    },

  });


  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy']);

};