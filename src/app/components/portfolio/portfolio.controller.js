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
    function portifolioController() {

        var vm = this;

        console.log("portifolioController loaded");

        vm.myProjects = [{
                title: 'Online Resume',
                id: 1,
                img_url: 'https://unsplash.it/400/300?=2',
                Project_url: 'https://github.com/njausteve/Resume',
                type: 'an illustration work',
                desc: '',
                client: 'njausteve, self',
                tech: 'Angular js , gulp, html5 , css3 , Sass'
            },
            {
                title: 'flatmates',
                id: 2,
                img_url: 'https://unsplash.it/400/300?image=23',
                Project_url: '',
                type: 'hybrid mobile application',
                desc: '',
                client: '',
                tech: ''
            },
            {
                title: 'magni nam dolores ipsam',
                id: 3,
                img_url: 'https://unsplash.it/400/300?image=49',
                Project_url: '',
                type: 'Consequatur quisquam',
                desc: '',
                client: '',
                tech: ''
            },
            {
                title: 'Lorem ipsum dolor, ',
                id: 4,
                img_url: 'https://unsplash.it/400/300?image=34',
                Project_url: '',
                type: 'reprehenderit quas',
                client: '',
                desc: '',
                tech: ''
            },
            {
                title: 'Molestias sapiente',
                id: 5,
                img_url: 'https://unsplash.it/400/300?image=22',
                Project_url: '',
                type: 'consectetur adipisicing',
                desc: '',
                client: '',
                tech: ''
            },
            {
                title: 'veritatis porro',
                id: 6,
                img_url: 'https://unsplash.it/400/300?image=76',
                Project_url: '',
                desc: '',
                type: 'odio magni quibusdam',
                client: '',
                tech: ''
            },
            {
                title: 'magni nam dolores ipsam',
                id: 3,
                img_url: 'https://unsplash.it/400/300?image=47',
                Project_url: '',
                type: 'Consequatur quisquam',
                desc: '',
                client: '',
                tech: ''
            },
            {
                title: 'Lorem ipsum dolor, ',
                id: 4,
                img_url: 'https://unsplash.it/400/300?image=35',
                Project_url: '',
                type: 'reprehenderit quas',
                client: '',
                desc: '',
                tech: ''
            }
        ];


    }

})();