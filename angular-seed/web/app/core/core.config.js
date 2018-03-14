(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(defaultToastrConfig);

    defaultToastrConfig.$inject = ['toastr'];

    /* @ngInject */
    function defaultToastrConfig(toastr) {
        toastr.options.timeOut = 2000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    // gobal application service object
    var config = {
        appErrorPrefix: '[APP ERROR] ',
        appTitle: 'Angular Demos',
        version: '0.0.1',
        debugMode: true
    };

    core.value('config', config);

    configure.$inject = ['$logProvider', 'exceptionHandlerProvider', '$httpProvider'];

    /* @ngInject */
    function configure($logProvider,exceptionHandlerProvider, $httpProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(config.debugMode);
        }

        // register exceptionHandlerProvider
        exceptionHandlerProvider.configure(config.appErrorPrefix, config.debugMode);

        $httpProvider.interceptors.push('offlineProvider');
        // register busyIndicatorProvider
        $httpProvider.interceptors.push('busyIndicatorProvider');
    }

    core.config(configure);

})();
