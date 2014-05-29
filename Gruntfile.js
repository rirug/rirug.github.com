module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'assets/stylesheets/rirug.css': 'scss/rirug.scss'
        }
      }
    },

    concat: {
      jquery: {
        src: [
          'bower_components/jquery/dist/jquery.min.js'
        ],
        dest: 'assets/js/jquery.min.js',
      },
      dist: {
        src: [
          'bower_components/modernizr/modernizr.js',
          'bower_components/jquery/dist/jquery.js',
          'bower_components/foundation/js/foundation/foundation.js',
          'bower_components/foundation/js/foundation/foundation.topbar.js',
          'js/rirug.js'
        ],
        dest: 'js/build/rirug.js',
      }
    },

    uglify: {
      build: {
        src: 'js/build/rirug.js',
        dest: 'assets/js/rirug.js'
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['concat', 'uglify', 'sass']);
  grunt.registerTask('default', ['build','watch']);
}