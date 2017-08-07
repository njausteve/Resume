/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function () {
        'use strict';

        angular.module('njausteve')

                .config(routerConfig);

        /** @ngInject */
        function routerConfig($stateProvider, $urlRouterProvider) {
                $stateProvider
                        .state('about-me', {
                                url: '/about',
                                templateUrl: '/app/components/aboutMe/about.html',
                                controller: 'aboutMeController',
                                controllerAs: 'about'
                        })
                        .state('portifolio', {

                                url: '/portifolio',
                                templateUrl: '',
                                controller: '',
                                controllerAs: ''
                        })
                        .state('contact', {

                                url: '/contact',
                                templateUrl: '',
                                controller: '',
                                controllerAs: ''
                        })
                        .state('blog', {

                                url: '/blog',
                                templateUrl: '',
                                controller: '',
                                controllerAs: ''
                        })
                        .state('resume', {

                                url: '/resume',
                                // templateUrl : '',
                                // controller: '',
                                // controllerAs: ''
                        })


                $urlRouterProvider.otherwise('/about');

                // // use the HTML5 History API
                // $locationProvider.html5Mode(true);
        }

})();