(function() {
    'use strict';

    angular
        .module('layout')
        .controller('mainController', mainController);

    mainController.$inject = ['logger', 'eventBus'];

    /* @ngInject */
    function mainController(logger, eventBus) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'mainController';

        logger.info("Hi, in main controller");
        
        eventBus.sub('START_BUSY',function(source, data){
           logger.debug(data);
        });
        
    }
})();
