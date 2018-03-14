(function() {
    'use strict';

    angular
        .module('common.offline')
        .factory('offlineProvider', offlineProvider);

    offlineProvider.$inject = ['eventBus'];

    /* @ngInject */
    function offlineProvider(eventBus) {
        var service = {
            request: request
        };
        return service;

        function request(config) {
            if (!navigator.onLine) {
                eventBus.pub('OFFLINE', {
                    data: config
                });
            } else {
                eventBus.pub('ONLINE');
            }
            return config;
        }
    }
})();
