(function() {
    'use strict';

    var core = angular.module('prototype.reportBuilder');

    core.config(configure);

    configure.$inject = ['$routeProvider'];

    /* @ngInject */
    function configure($routeProvider) {
        $routeProvider
            .when('/reportBuilder', {
                templateUrl: 'app/reportBuilder/reportBuilder.html',
                controller: 'reportBuilderController',
                controllerAs: 'vm',
                resolve: {
                    initialData: initialData
                }
            });
        
        initialData.$inject = ['reportBuilderService'];
        /* @ngInject */
        function initialData(reportBuilderService) {
            return reportBuilderService.getInitialData();
        }
    }
})();
