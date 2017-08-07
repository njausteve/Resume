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

    var myInterests = ["human behaviour", "body language", 'personal development', 'Technology', 'Data Science', 'Disruptive technologies'];

    vm.interest = $interval(function () {

      vm.interest = myInterests[Math.floor(Math.random() * myInterests.length)];


    }, 3000);


  }


})();