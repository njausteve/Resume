/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function () {
    'use strict';

    angular
        .module('njausteve')
        .controller('resumeController', resumeController);

    /** @ngInject */
    function resumeController() {

        var vm = this;

        console.log("resumeController loaded");

        vm.myResume = [{
                'workHistory': [{
                        title: 'Front End developer',
                        company: 'Tata consultancy services.',
                        desc: 'Worked on re-engineering Appmart (internal application distribution platform),  designing and Developing a complete decoupled solution built on angularjs, html5, css3, bootsrap (on the front end) with use of gulp, lazy loading and service workers and Java spring and Postgre SQL backend.',
                        location: 'Mumbai, India',
                        year: 2017
                    }, {
                        title: 'System Engineer',
                        company: 'Tata consultancy services.',
                        desc: 'Worked under mobility domain, working on enterprise mobile and web solutions specifically "Appmart" internal mobile application distribution platform like Google\'s appstore inclusive of mobile device managent (MDM) solution.',
                        location: 'Mumbai, India',
                        year: 2016,

                    },
                    {
                        title: 'Training and development Facilitator.',
                        company: 'AIESEC in Malaysia',
                        location: 'Petaling Jaya, Malaysia',
                        desc: 'Worked in Malaysia (Petaling Jaya) in collaboration with Taylors University on a literacy project to develop growth mindsets and enhance soft skills with an overall objective to bridge the gap between the school life and the corporate world thereafter.',
                        year: 2014
                    }
                ]
            },
            {
                'development Skills': ['html5', 'css3', 'jquery', 'Javascript', 'php', 'ionic', 'node js', 'express js', 'sass', 'CI/CD jenkins']
            },
            {
                'design skills': ['photoshop', 'illustrator']
            },
            {
                'educationHistory': [{
                        year: 2015,
                        course: 'Computer Science',
                        institution: 'Chuka University',
                        desc: 'I studied Computer Science as Chuka Nniversity. Learned and explored the computing world and found a liking for programming which I have grown passionate about.'
                    },
                    {
                        year: 2011,
                        course: 'ACCA',
                        institution: 'Strathmore University',
                        desc: 'I learned the basics of accounting, Management accounting including financial accounting. Also studied Corporate and Business law, Perfomance management, taxation and other financial principles.'
                    }

                ]
            },
            {
                linkedin: 'https://www.linkedin.com/in/stephen-njau-855336ba/',
            }
        ];
        // vm.jobHostory = vm.myResume[0]
        vm.work = vm.myResume[0].workHistory;
        vm.education = vm.myResume[3].educationHistory;
        console.log(vm.work);
    }

})();