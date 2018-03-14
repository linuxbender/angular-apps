// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html

module.exports = function(config) {
    "use strict";

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: "../",

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ["jasmine"],

        // list of files / patterns to load in the browser
        files: [
            "web/vendor/libs/jquery/dist/jquery.js",
            "web/vendor/libs/bootstrap/dist/js/bootstrap.js",
            "web/vendor/libs/lodash/dist/lodash.js",
            "web/vendor/libs/angular/angular.js",
            "web/vendor/libs/angular-mocks/angular-mocks.js",
            "web/vendor/libs/angular-animate/angular-animate.js",
            "web/vendor/libs/angular-cookies/angular-cookies.js",
            "web/vendor/libs/angular-resource/angular-resource.js",
            "web/vendor/libs/angular-route/angular-route.js",
            "web/vendor/libs/angular-sanitize/angular-sanitize.js",
            "web/vendor/libs/angular-touch/angular-touch.js",
            "web/vendor/libs/toastr/toastr.js",
            "web/app/**.js",
            "web/app/**/*.module.js",
            "web/app/**/*.js",
            "test/specs/app/**/*.js"
        ],

        // test results reporter to use
        // possible values: "dots", "progress", "coverage"
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["mocha"],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            "PhantomJS"
        ],

        // Which plugins to enable
        plugins: [
            "karma-phantomjs-launcher",
            "karma-jasmine",
            "karma-mocha",
            "karma-mocha-reporter"
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};