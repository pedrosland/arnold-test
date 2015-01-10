'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

function getTestFiles(){
  var bowerDeps = wiredep({
    directory: 'bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  return bowerDeps.js.concat([
    'src/{app,components}/**/*.js'
  ]);
}

gulp.task('test', function() {

  return gulp.src(getTestFiles())
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

exports.getTestFiles = getTestFiles;
