(function() {
    'use strict';

    angular
        .module('common')
        .factory('common', common);

    common.$inject = ['$q'];

    /* @ngInject */
    function common($q) {
        var service = {
            q: $q,
            isNumber: isNumber,
            textContains: textContains,
            prettyPrintJson: prettyPrintJson,
            isNullOrEmpty: isNullOrEmpty,
            hasNoData: hasNoData
        };

        return service;

        function isNumber(parm) {
            // negative or positive
            return /^[-]?\d+$/.test(parm);
        }

        function isNullOrEmpty(param)
        {
            if ( param === "" || param === undefined) {
                return true;
            } else {
                return false;
            }
        }

        function textContains(text, searchText) {
            return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
        }

        function prettyPrintJson(object)
        {
            return JSON.stringify(object, null, 2); 
        }

        function hasNoData(data)
        {
            if (_.size(data) > 0 ) {
                return false;  
            }
            return true;
        }
    }
})();