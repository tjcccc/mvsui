/* ==========================================================================
 * grunt.js - gruntfile for mvs-ui
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
          "dev/css/mvsui-resorted.css": ['dev/css/mvsui.css'],
          // "dev/css/mvsui-function-resorted.css": ['dev/css/mvsui-function.css'],
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
          'dev/css/mvsui-resorted.css'
          // 'dev/css/mvsui-function-resorted.css'
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
    },
    less: {
      development: {
        files: {
          "dev/css/mvsui-grid.css": "dev/less/mvsui-grid.less"
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

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');


  // Default task(s).
  grunt.registerTask('default', ['clean:dist', 'csscomb', 'concat', 'copy:fonts', 'clean:cssresorted', 'uglify', 'cssmin']);

  // LESS to CSS.
  grunt.registerTask('less2css',['less']);

};
