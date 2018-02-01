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
    function resumeController(resumeService) {

        console.log("resumeController loaded");

        var vm = this;

        vm.education,
        vm.myResume,
        vm.devSkills,
        vm.work = [];
      

        (function fetchResume() {

            return resumeService.getResumeData()
      
              .then(function (response) {
      
                console.log(response);
                 
                 vm.myResume = response[0];
                 vm.work = vm.myResume.work_History;
                 vm.education = vm.myResume.education_History;
                 vm.devSkills = vm.myResume.development_Skills;
                 vm.testimonials = vm.myResume.testimonials;
                 vm.linkedin = vm.myResume.linkedin;

                 console.log(vm.devSkills);

                  
              })
              .catch(function (error) {
      
                console.log(error);
      
              });
      
      
          })();


    }

})();