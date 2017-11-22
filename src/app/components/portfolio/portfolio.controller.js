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

        vm.category = {
            category: ''
        };

        vm.myCategory = _mycategory;

        function _mycategory(Selectedcategory) {

            return vm.category = {
                category: Selectedcategory
            };
        }

        console.log("portifolioController loaded");

        vm.myProjects = [{
            title: 'Online Resume',
            id: 1,
            alias: 'resume',
            img_url: 'https://unsplash.it/400/300?=27',
            project_url: 'https://njausteve.github.io',
            type: 'an illustration work',
            desc1: 'Desc here',
            desc2: 'Desc here',
            category: 'coding',
            client: 'njausteve, self',
            tech: ['Angular js', 'gulp', 'html5', 'css3', 'Sass']
        },
        {
            title: 'flatmates',
            id: 2,
            alias: 'flatmates',
            img_url: 'https://unsplash.it/400/300?image=23',
            project_url: '',
            type: 'hybrid mobile application',
            desc1: 'Desc here',
            desc2: 'Desc here',
            category: 'coding',
            client: '',
            tech: ''
        },
        {
            title: 'magni nam dolores ipsam',
            id: 3,
            alias: 'magni',
            img_url: 'https://unsplash.it/400/300?image=49',
            project_url: '',
            type: 'Consequatur quisquam',
            desc1: 'Desc here',
            desc2: 'Desc here',
            category: 'logo',
            client: '',
            tech: ''
        },
        {
            title: 'Lorem ipsum dolor, ',
            id: 4,
            alias: 'lorem',
            img_url: 'https://unsplash.it/400/300?image=34',
            project_url: '',
            type: 'reprehenderit quas',
            client: '',
            category: 'design',
            desc1: 'Desc here',
            desc2: 'Desc here',
            tech: ''
        },
        {
            title: 'Molestias sapiente',
            id: 5,
            alias: 'molestias',
            img_url: 'https://unsplash.it/400/300?image=22',
            project_url: '',
            type: 'consectetur adipisicing',
            desc1: 'Desc here',
            desc2: 'Desc here',
            category: 'coding',
            client: '',
            tech: ''
        },
        {
            title: 'veritatis porro',
            id: 6,
            alias: 'veritatis',
            img_url: 'https://unsplash.it/400/300?image=39',
            project_url: '',
            ddesc1: 'Desc here',
            desc2: 'Desc here',
            category: 'logo',
            type: 'odio magni quibusdam',
            client: '',
            tech: ''
        },
        {
            title: 'magni nam dolores ipsam',
            id: 7,
            alias: 'dolores',
            img_url: 'https://unsplash.it/400/300?image=47',
            project_url: '',
            type: 'Consequatur quisquam',
            desc1: 'Desc here',
            desc2: 'Desc here',
            category: 'design',
            client: '',
            tech: ''
        },
        {
            title: 'Lorem ipsum dolor, ',
            id: 8,
            alias: 'ipsum',
            img_url: 'https://unsplash.it/400/300?image=35',
            project_url: '',
            type: 'reprehenderit quas',
            client: '',
            category: 'logo',
            desc1: 'Desc here',
            desc2: 'Desc here',
            tech: ''
        }
        ];


    }

})();