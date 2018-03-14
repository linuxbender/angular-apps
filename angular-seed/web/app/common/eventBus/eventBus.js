(function() {
    'use strict';

    angular
        .module('common.eventBus')
        .factory('eventBus', eventBus);

    eventBus.$inject = ['$rootScope','$q'];

    /* @ngInject */
    function eventBus($rootScope, $q) {

        var service = {
            pub: pub,
            sub: sub
        };
        return service;

        function pub(source, eventsArgs) {
            $rootScope.$broadcast(source, eventsArgs);
        }

        function sub(source, callback) {
            var eventListener = $rootScope.$on(source, function (sender, data) {
                callback(sender, data);
                eventListener();
            });
        }
    }
})();
