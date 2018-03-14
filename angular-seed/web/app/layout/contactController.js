(function() {
    'use strict';

    angular
        .module('layout')
        .controller('contactController', contactController);

    contactController.$inject = ['logger'];
    /* @ngInject */
    function contactController(logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'contactController';

        activate();

        function activate() {
            logger.info('navigate to Contact', null, 'Controller is aktiv ');
        }
    }
})();
