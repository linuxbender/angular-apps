(function() {
    'use strict';

    angular
        .module('layout')
        .controller('aboutController', aboutController);

    aboutController.$inject = ['logger'];

    /* @ngInject */
    function aboutController(logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'aboutController';
        activate();

        function activate() {
            logger.info('navigate to About', null, 'Controller is aktiv ');
        }
    }
})();
