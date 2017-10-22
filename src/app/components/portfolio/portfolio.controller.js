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
            Project_url: 'https://github.com/njausteve/Resume',
            type: 'an illustration work',
            desc: '',
            category: 'coding',
            client: 'njausteve, self',
            tech: 'Angular js , gulp, html5 , css3 , Sass'
        },
        {
            title: 'flatmates',
            id: 2,
            alias: 'flatmates',
            img_url: 'https://unsplash.it/400/300?image=23',
            Project_url: '',
            type: 'hybrid mobile application',
            desc: '',
            category: 'coding',
            client: '',
            tech: ''
        },
        {
            title: 'magni nam dolores ipsam',
            id: 3,
            alias: 'magni',
            img_url: 'https://unsplash.it/400/300?image=49',
            Project_url: '',
            type: 'Consequatur quisquam',
            desc: '',
            category: 'logo',
            client: '',
            tech: ''
        },
        {
            title: 'Lorem ipsum dolor, ',
            id: 4,
            alias: 'lorem',
            img_url: 'https://unsplash.it/400/300?image=34',
            Project_url: '',
            type: 'reprehenderit quas',
            client: '',
            category: 'design',
            desc: '',
            tech: ''
        },
        {
            title: 'Molestias sapiente',
            id: 5,
            alias: 'molestias',
            img_url: 'https://unsplash.it/400/300?image=22',
            Project_url: '',
            type: 'consectetur adipisicing',
            desc: '',
            category: 'coding',
            client: '',
            tech: ''
        },
        {
            title: 'veritatis porro',
            id: 6,
            alias: 'veritatis',
            img_url: 'https://unsplash.it/400/300?image=39',
            Project_url: '',
            desc: '',
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
            Project_url: '',
            type: 'Consequatur quisquam',
            desc: '',
            category: 'design',
            client: '',
            tech: ''
        },
        {
            title: 'Lorem ipsum dolor, ',
            id: 8,
            alias: 'ipsum',
            img_url: 'https://unsplash.it/400/300?image=35',
            Project_url: '',
            type: 'reprehenderit quas',
            client: '',
            category: 'logo',
            desc: '',
            tech: ''
        }
        ];


    }

})();