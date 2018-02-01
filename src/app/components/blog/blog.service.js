/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function() {
    'use strict';

    angular
        .module('njausteve')
        .factory('blogService', blogService);

    /** @ngInject */
    function blogService($log, $http, $q, constants) {

        var service = {
            getBlogArticles: _getBlogArticles,
        };

        return service;

        /////////////////////////////////////////////////////////////////////////
        /// implementation
        /// all internal functions shall be prefixed with '_' for differentiating

        // Get projects 
        function _getBlogArticles() {
              
              console.log(" blog service called");

            return $http.get(constants.apiHost + '/articles')
                .then(getBlogArticlesComplete)
                .catch(getBlogArticlesFailed);

            function getBlogArticlesComplete(response) {
                return response.data;

            }

            function getBlogArticlesFailed(error) {
                //ignore... handlled in implemetation...
                return $q.reject(error);
            }
        }

    }
})();
