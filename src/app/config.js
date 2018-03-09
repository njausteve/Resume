(function() {
  'use strict';

  angular
    .module('njausteve')
    .config(config);

  /** @ngInject */
  function config($ocLazyLoadProvider, $httpProvider, $logProvider) {


    //push our httpinterceptor to $httpProvider's interceptor array

    $httpProvider.interceptors.push('httpInterceptor');

    // Enable log
    $logProvider.debugEnabled(true);


    // ocLazyLoding config
    $ocLazyLoadProvider.config({
      modules: [
        // resume module
        {
          name: 'ResumeModule',
          files: ['app/components/resume/resume.controller.js', 'app/components/resume/resume.service.js']
        },
        // portifolio module
        {
          name: 'PortifolioModule',
          files: ['app/components/portfolio/portfolio.controller.js', 'app/components/portfolio/portfolio.service.js']
        },


        //portifolio module
        {
          name: 'PortifolioDetailsModule',
          files: ['app/components/portfolio/portfolio-detail.controller.js']

        },
        // blog module
        {
          name: 'BlogModule',
          files: ['app/components/blog/blog.controller.js', 'app/components/blog/blog.service.js']
        },
        // About me module
        {
          name: 'AboutMeModule',
          files: ['app/components/aboutMe/aboutme.controller.js', 'app/components/aboutMe/aboutme.service.js']
        },
        // contact module
        {
          name: 'ContactModule',
          files: ['app/components/contact/contact.controller.js', 'app/components/contact/contact.service.js', {
            type: 'js',
            path: 'http://maps.google.com/maps/api/js?key=AIzaSyAGcb_rYSDpKnLE7-rIe8t-d15x7Tl1mdQ'
          }, 'app/externalModules/ng-map.min.js']
        },
        //error module
        {
          name: 'ErrorModule',
          files: ['app/components/error/error.controller.js']

        }
      ]
    });

    // ocLazyLoad debuging mode true/false
    // set false or COMMENT this while building Production version
    $ocLazyLoadProvider.config({
      debug: false
    });

  }

})();