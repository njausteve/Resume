/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */

(function() {
  'use strict';

  angular
    .module('njausteve')
    .factory('httpInterceptor', httpInterceptor);

  /** @ngInject */
  function httpInterceptor($q, $injector, $state, $rootScope) {
    return {



      request: function(config) {

        console.log("request config", config);
        // Contains the data about the request before it is sent.

        // Return the config or wrap it in a promise if blank.
        return config || $q.when(config);
      },

      // On request failure
      requestError: function(rejection) {
        console.log('requestError', rejection);
        // Contains the data about the error on the request.

        // Return the promise rejection.
        return $q.reject(rejection);
      },

      // On response success
      response: function(response) {
        console.log('response : ', response);
        // Contains the data from the response.

        // Return the response or promise.
        return response || $q.when(response);
      },

      // On response failture
      responseError: function(rejection) {

        var rejectedAPI = rejection.config.url.split("/");

        console.log("responseError", rejection);
        switch (rejection.status) {

          // turning off for testing purpose
          // case 404:
          case 404:

            //$rootScope.flags.errorCode = 404;

            $injector.get("$state").go('error', {
              'errorData': rejection
            });
            break;

          default:
            // May handle with interceptor (but avoid)
            // It is handled at implementation level
        }

        // Return the promise rejection.
        return $q.reject(rejection);
      }
    };
  }

})();