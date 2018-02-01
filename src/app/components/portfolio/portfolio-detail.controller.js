/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function () {
    'use strict';

    angular
        .module('njausteve')
        .controller('portifolioDetailsController', portifolioDetailsController);

    /** @ngInject */
    function portifolioDetailsController($stateParams) {

        var vm = this;
       
        console.log("portifolioDetailsController loaded");
        console.log($stateParams);

        vm.details = $stateParams.projectDetails;

       
    }

})();