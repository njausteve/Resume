/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function() {
    'use strict';

    angular
        .module('njausteve')
        .factory('contactsService', contactsService);

    /** @ngInject */
    function contactsService($log, $http, $q, constants) {

        var service = {
            sendEmail: _sendEmail,
        };

        return service;

        /////////////////////////////////////////////////////////////////////////
        /// implementation
        /// all internal functions shall be prefixed with '_' for differentiating

        // Get projects 
        function _sendEmail(data) {
               console.log(constants.apiHost);

              console.log("service called");

            return $http.post(constants.apiHost + '/sendmail', data)
                .then(sendEmailComplete)
                .catch(sendEmailFailed);

            function sendEmailComplete(response) {
                return response.data;

            }

            function sendEmailFailed(error) {
                //ignore... handlled in implemetation...
                return $q.reject(error);
            }
        }

    }
})();
