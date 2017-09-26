(function () {
    'use strict';

    angular
        .module('njausteve')
        .config(config);

    /** @ngInject */
    function config($ocLazyLoadProvider, $httpProvider, $logProvider) {

        // Enable log
        $logProvider.debugEnabled(true);


        // ocLazyLoding config
        $ocLazyLoadProvider.config({
            modules: [
                // resume module
                {
                    name: 'ResumeModule',
                    files: ['app/components/resume/resume.controller.js']
                },
                // portifolio module
                {
                    name: 'PortifolioModule',
                    files: ['app/components/portfolio/portfolio.controller.js']
                },
                // blog module
                {
                    name: 'BlogModule',
                    files: ['app/components/blog/blog.controller.js']
                }, // About me module
                {
                    name: 'AboutMeModule',
                    files: ['app/components/aboutMe/aboutme.controller.js']
                },
                // contact module
                {
                    name: 'ContactModule',
                    files: ['app/components/contact/contact.controller.js']
                }
            ]
        });

        // ocLazyLoad debuging mode true/false
        // set false or COMMENT this while building Production version
        $ocLazyLoadProvider.config({
            debug: true
        });

    }

})();