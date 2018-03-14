(function() {
    'use strict';

    angular
        .module('common.busyIndicator')
        .factory('busyIndicatorProvider', busyIndicatorProvider);

    busyIndicatorProvider.$inject = ['$q'];

    /* @ngInject */
    function busyIndicatorProvider($q) {
        
        var service = {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError
        };
        return service;

        function request(config) {
            return config || $q.when(config);
        }

        function requestError(rejection) {
            return $q.reject(rejection);
        }

        function response(res) {
            return res || $q.when(res);
        }

        function responseError(rejection) {
            return $q.reject(rejection);
        }
    }
})();