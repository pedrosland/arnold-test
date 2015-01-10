'use strict';

var unitTests = require('./gulp/unit-tests');

module.exports = function(config) {

  config.set({
    autoWatch : false,

    files: unitTests.getTestFiles(),

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine'
    ]
  });
};
