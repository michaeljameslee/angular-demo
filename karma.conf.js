'use strict';

module.exports = function(config) {

  var configuration = {
    autoWatch : true,

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/lodash/lodash.js',
      'bower_components/lodash-angular-wrapper/lodash-angular-wrapper.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/app/index.js',
      'src/app/products/*.js'
      //'src/app/products/products.service.js',
      //'src/app/products/products.controller.js',
      //'src/app/products/products.controller.spec.js'
    ],

    frameworks: ['jasmine'],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'gulpAngular'
    },

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    }
  };

  // This block is needed to execute Chrome on Travis
  // If you ever plan to use Chrome and Travis, you can keep it
  // If not, you can safely remove it
  // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
  if(configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    configuration.browsers = ['chrome-travis-ci'];
  }

  config.set(configuration);
};
