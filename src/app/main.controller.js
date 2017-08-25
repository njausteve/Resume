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

        vm.toTheLeft;
        vm.toTheRight;
        vm.pageNames = $state.get().map(function (state) {

            return state.name;

        }).filter(Boolean);

        console.log(vm.pageNames);

        vm.moveToCenter = function (pageName) {

            var currentState = $state.current.name;

            if (vm.pageNames.indexOf(pageName) > vm.pageNames.indexOf(currentState)) {

                console.log("right");
                vm.toTheRight = 1;
                vm.toTheLeft = 0;


            } else if (vm.pageNames.indexOf(pageName) < vm.pageNames.indexOf(currentState)) {

                console.log("left");
                vm.toTheLeft = 1;
                vm.toTheRight = 0;

            } else {


            }

            console.log("from state -> " + currentState + "\n  to state -> " + pageName);

        };

    }

})();