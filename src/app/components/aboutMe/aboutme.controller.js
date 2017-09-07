/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function () {
  'use strict';

  angular
    .module('njausteve')
    .controller('aboutMeController', aboutMeController);

  /** @ngInject */
  function aboutMeController($interval) {

    var vm = this;

    var myInterests = ["human behaviour", "body language", 'personal development', 'Technology', 'Data Science', 'Disruptive Technology'];
    vm.interest = myInterests[5];

    randomizeInterest();


    // randomizing the Interest Array

    function randomizeInterest() {

      $interval(function () {

        vm.interest = myInterests[Math.floor(Math.random() * myInterests.length)];

      }, 4500);

    }
  }

})();