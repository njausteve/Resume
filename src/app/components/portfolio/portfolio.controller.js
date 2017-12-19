/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function () {
    'use strict';

    angular
        .module('njausteve')
        .controller('portifolioController', portifolioController);

    /** @ngInject */
    function portifolioController($location, portfolioService) {

        var vm = this;
        var url = $location.protocol() + '://' + $location.host() + ':' + $location.port();
        vm.category = {
            category: ''
        };

        vm.myCategory = _mycategory;

        function _mycategory(Selectedcategory) {

            return vm.category = {
                category: Selectedcategory
            };
        }

        // to move to constants
        vm.imageUrl = url + "/assests/images/projects/";

        console.log("portifolioController loaded");

        vm.myProjects = [];

        //invoke fetch projects

        _myProjects();

        // fetch projects data from service

        function _myProjects() {

            return portfolioService.getProjects().


                then(function (response) {


                    // append url to img_name

                    for (var prop in response) {

                        var imageArray = response[prop].img_name;

                        for (var key in imageArray) {

                            imageArray[key] = vm.imageUrl + imageArray[key];
                        }


                    }

                    vm.myProjects = response;

                })
                .catch(function (error) {

                });

        }

    }

})();