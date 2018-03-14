(function() {
    'use strict';

    angular
        .module('common.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr'];

    /* @ngInject */
    function logger($log, toastr) {
        var service = {
            showToasts: true,

            error: error,
            info: info,
            success: success,
            warning: warning,
            debug: debug,

            log: $log.log
        };
        return service;

        function error(title, message, data) {
            toastr.error(message, title);
            $log.error('Error: ' + message, data);
        }

        function info(title, message, data) {
            toastr.info(message, title);
            $log.info('Info: ' + message, data);
        }

        function success(title, message, data) {
            toastr.success(message, title);
            $log.info('Success: ' + message, data);
        }

        function warning(title, message, data) {
            toastr.warning(message, title);
            $log.warn('Warning: ' + message, data);
        }

        function debug(message) {
            toastr.warning(JSON.stringify(message, null, 2), '[DEBUG]::');
        }
    }
})();
