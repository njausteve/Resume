/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function() {
    'use strict';

    angular
        .module('njausteve')
        .factory('aboutMeService', aboutMeService);

    /** @ngInject */
    function aboutMeService($log, $http, $q, constants) {

        var service = {
              getAboutMeData: _getAboutMeData
              
        };

        return service;

        /////////////////////////////////////////////////////////////////////////
        /// implementation
        /// all internal functions shall be prefixed with '_' for differentiating

        // Get data About me
        function _getAboutMeData() {

            return $http.get(constants.apiHost + '/aboutMe')
                .then(getAboutMeDataComplete)
                .catch(getAboutMeDataFailed);

            function getAboutMeDataComplete(response) {
                return response.data;
            }

            function getAboutMeDataFailed(error) {
                //ignore... handlled in implemetation...
                return $q.reject(error);
            }
        }

    }
})();
