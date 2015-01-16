/* ==========================================================================
 * grunt.js - gruntfile for Condiments
 * version 0.0.200: 2014.12.16
 * --------------------------------------------------------------------------
 * Copyright tjcccc
 * Licensed under MIT
 * ========================================================================== */


module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',

    // Task configuration.
    clean: {
      dist: 'dist',
      cssresorted: 'dev/css/*-resorted.css'
    },
    csscomb: {
      options: {
        sortOrder: ".csscomb.json"
      },
      css: {
        files: {
          "dev/css/mvsui-common-resorted.css": ['dev/css/mvsui-common.css'],
          "dev/css/mvsui-function-resorted.css": ['dev/css/mvsui-function.css'],
          "dev/theme/default/style-resorted.css": ['dev/theme/default/style.css']
        }
      }
    },
    concat: {
      options: {
        banner: '/* ==========================================================================\n' +
                ' * <%= pkg.name %>\n' +
                ' * version <%= pkg.version %>: ' + grunt.template.today('yyyy.mm.dd') + '\n' +
                ' * ==========================================================================\n' +
                ' * Copyright tjcccc\n' +
                ' * Licensed under MIT\n' +
                ' * ========================================================================== */\n\n\n\n\n',
        stripBanners: false,
        separator: '\n\n\n\n'
      },
//      js: {
//        src: [
//          'dev/js/mvs-x.js'
//        ],
//        dest: 'dist/js/<%= pkg.project %>.js'
//      },
      css: {
        src: [
          'dev/css/mvsui-common-resorted.css',
          'dev/css/mvsui-function-resorted.css'
        ],
        dest: 'dist/css/<%= pkg.project %>.css'
      }
    },
    copy: {
      fonts: {
        src: 'fonts/*',
        dest: 'dist/'
      }
    },
    uglify: {
      minjs: {
        options: {
          mangle: false,
          preserveComments: false
        },
        files: {
          'dist/js/mvsui.min.js': ['dist/js/mvsui.js']
        }
      }
    },
    cssmin: {
      mincss: {
        files: {
          'dist/css/mvsui.min.css': ['dist/css/mvsui.css']
        }
      }
    }

  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);

  // Load the plugin that provides the "resort" task.
  grunt.loadNpmTasks('grunt-csscomb');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('default', ['clean:dist', 'csscomb', 'concat', 'copy:fonts', 'clean:cssresorted', 'uglify', 'cssmin']);

};
