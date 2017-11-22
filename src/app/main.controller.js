/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function () {
    'use strict';

    angular
        .module('njausteve')
        .controller('mainController', mainController);

    /** @ngInject */
    function mainController($state) {

        var vm = this;



        vm.pageNames = $state.get().map(function (state) {

            return state.name;

        }).filter(Boolean);

        var statesToPush = angular.copy(vm.pageNames);

        vm.nextPage = function (nextStateIndex) {

            var previousStateIndex = vm.pageNames.indexOf($state.current.name);

            console.log(" the previousStateIndex : " + previousStateIndex + "  => \n the next state is : " + nextStateIndex);

            $state.go(statesToPush[nextStateIndex]);

        };

    }

})();