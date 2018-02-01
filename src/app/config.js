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
<<<<<<< HEAD
                    files: ['app/components/blog/blog.controller.js','app/components/blog/blog.service.js']
                }, 
                // About me module
=======
                    files: ['app/components/blog/blog.controller.js', 'app/components/blog/blog.service.js']
                }, // About me module
>>>>>>> 5a96886... added medium article fetching front End
                {
                    name: 'AboutMeModule',
                    files: ['app/components/aboutMe/aboutme.controller.js', 'app/components/aboutMe/aboutme.service.js']
                },
                // contact module
                {
                    name: 'ContactModule',
                    files: ['app/components/contact/contact.controller.js', 'app/components/contact/contact.service.js', {
                        type: 'js',
                        path: 'http://maps.google.com/maps/api/js?key=AIzaSyD34UntJEPJVv0Kix-CjL0PfpUF5I3Jf7Q'
                    }, 'assests/lib/ng-map.min.js']
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
