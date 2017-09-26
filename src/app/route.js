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
        function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider

                        .state('resume', {

                                url: '/resume',
                                templateUrl: '/app/components/resume/resume.html',
                                controller: 'resumeController',
                                controllerAs: 'resume',

                                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                                // you can lazy load files for an existing module
                                                return $ocLazyLoad.load('ResumeModule');
                                        }]
                                }
                        })

                        .state('portifolio', {
                                url: '/portifolio',
                                templateUrl: '/app/components/portfolio/portfolio.html',
                                controller: 'portifolioController',
                                controllerAs: 'portif',
                                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                                // you can lazy load files for an existing module
                                                return $ocLazyLoad.load('PortifolioModule');
                                        }]
                                }
                        })

                        .state('about me', {
                                url: '/about',
                                templateUrl: '/app/components/aboutMe/about.html',
                                controller: 'aboutMeController',
                                controllerAs: 'about',
                                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                                // you can lazy load files for an existing module
                                                return $ocLazyLoad.load('AboutMeModule');
                                        }]
                                }
                        })
                        .state('blog', {

                                url: '/blog',
                                templateUrl: '/app/components/blog/blog.html',
                                controller: 'blogController',
                                controllerAs: 'blog',
                                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                                // you can lazy load files for an existing module
                                                return $ocLazyLoad.load('BlogModule');
                                        }]
                                }
                        })

                        .state('contact', {

                                url: '/contact',
                                templateUrl: '/app/components/contact/contact.html',
                                controller: 'contactController',
                                controllerAs: 'contact',
                                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                                // you can lazy load files for an existing module
                                                return $ocLazyLoad.load('ContactModule');
                                        }]
                                }
                        });


                $urlRouterProvider.otherwise('/about');

                // // use the HTML5 History API
                // $locationProvider.html5Mode(true);
        }

})();