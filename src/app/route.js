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

                        .state('resume', {

                                url: '/resume',
                                templateUrl: '/app/components/resume/resume.html',
                                controller: 'resumeController',
                                controllerAs: 'resume'
                        })

                        .state('portifolio', {

                                url: '/portifolio',
                                templateUrl: '/app/components/portfolio/portfolio.html',
                                controller: 'portifolioController',
                                controllerAs: 'portif'
                        })
                        .state('about me', {
                                url: '/about',
                                templateUrl: '/app/components/aboutMe/about.html',
                                controller: 'aboutMeController',
                                controllerAs: 'about'
                        })

                        .state('blog', {

                                url: '/blog',
                                templateUrl: '/app/components/blog/blog.html',
                                controller: 'blogController',
                                controllerAs: 'blog'
                        })
                        .state('contact', {

                                url: '/contact',
                                templateUrl: '/app/components/contact/contact.html',
                                controller: 'contactController',
                                controllerAs: 'contact'
                        });


                $urlRouterProvider.otherwise('/about');

                // // use the HTML5 History API
                // $locationProvider.html5Mode(true);
        }

})();