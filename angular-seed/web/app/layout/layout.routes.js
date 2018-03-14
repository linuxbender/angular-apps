(function() {
    'use strict';

    var core = angular.module('layout');

    core.config(configure);

    configure.$inject = ['$routeProvider'];

    /* @ngInject */
    function configure($routeProvider) {
      $routeProvider
          .when('/about', {
              templateUrl: 'app/layout/about.html',
              controller: 'aboutController',
              controllerAs: 'vm'
          })
          .when('/contact', {
              templateUrl: 'app/layout/contact.html',
              controller: 'contactController',
              controllerAs: 'vm'
          })
          .when('/home', {
              templateUrl: 'app/layout/main.html',
              controller: 'mainController',
              controllerAs: 'vm'
          })
          .when('/ui', {
            templateUrl:'app/layout/ui.html'
          })
          .when('/callout', {
            templateUrl:'app/layout/callout.html'
          });
    }
})();
