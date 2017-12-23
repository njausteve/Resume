/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function() {
    'use strict';

    angular
        .module('njausteve')
        .factory('portfolioService', portfolioService);

    /** @ngInject */
    function portfolioService($log, $http, $q, constants) {

        var service = {
            getProjects: _getProjects,
        };

        return service;

        /////////////////////////////////////////////////////////////////////////
        /// implementation
        /// all internal functions shall be prefixed with '_' for differentiating

        // Get projects 
        function _getProjects() {


              console.log("service called");

            return $http.get(constants.apiHost + '/projects')
                .then(getProjectsComplete)
                .catch(getProjectsFailed);

            function getProjectsComplete(response) {
                return response.data;
            }

            function getProjectsFailed(error) {
                //ignore... handlled in implemetation...
                return $q.reject(error);
            }
        }

    }
})();
