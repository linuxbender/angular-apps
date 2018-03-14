(function() {
    'use strict';

    angular
        .module('common.exception')
        .provider('exceptionHandler', exceptionProvider)
        .config(config);

    function exceptionProvider() {

        /* jshint validthis:true */
        this.config = {
            appErrorPrefix: undefined
        };

        this.configure = function(appErrorPrefix, debugMode) {
            this.config.appErrorPrefix = appErrorPrefix;
            this.config.debugMode = debugMode;
        };

        this.$get = function() {
            return {
                config: this.config
            };
        };
    }

    config.$inject = ['$provide'];

    /* @ngInject */
    function config($provide) {
        $provide.decorator('$exceptionHandler', exceptionHandlerProvider);
    }
    
    exceptionHandlerProvider.$inject = ['$delegate', 'exceptionHandler', 'logger'];
    /* @ngInject */
    function exceptionHandlerProvider($delegate, exceptionHandler, logger) {
        return function(exception, cause) {
            var errorData = {};
            if (exceptionHandler.config.debugMode) {
                var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
                errorData = {
                    exception: exception,
                    cause: cause
                };
                exception.message = appErrorPrefix + exception.message;
            }

            $delegate(exception, cause);

            if (exceptionHandler.config.debugMode) {
                logger.error(exception.message, errorData);
            }
        };
    }
})();