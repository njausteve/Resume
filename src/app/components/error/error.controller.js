
/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function() {
    'use strict';
  
    angular
      .module('njausteve')
      .controller('errorController', errorController);
  
    /** @ngInject */
    function errorController($stateParams) {
  
      var vm = this;

      console.log($stateParams);



      vm.errorInfom = $stateParams.errorData;
  
  
      
    }
  
  })();