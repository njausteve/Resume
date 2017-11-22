/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function () {
    'use strict';

    angular
        .module('njausteve')
        .controller('contactController', contactController);

    /** @ngInject */
    function contactController(NgMap) {

        var vm = this;

        console.log("contactController loaded");

        NgMap.getMap().then(function (map) {

        });

    }

})();