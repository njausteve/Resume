/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function() {
    'use strict';

    angular
        .module('njausteve')
        .factory('resumeService', resumeService);

    /** @ngInject */
    function resumeService($log, $http, $q, constants) {

        var service = {
              getResumeData: _getResumeData
              
        };

        return service;

        /////////////////////////////////////////////////////////////////////////
        /// implementation
        /// all internal functions shall be prefixed with '_' for differentiating

        // Get data About me
        function _getResumeData() {

            console.log("getAboutMeData hit");

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
