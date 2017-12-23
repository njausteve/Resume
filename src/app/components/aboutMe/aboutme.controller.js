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
  function aboutMeController($interval, aboutMeService) {

    var vm = this;

    var myInterests = ["human behaviour", "body language", 'personal development', 'Technology', 'Data Science', 'Disruptive Technology'];
    vm.interest = myInterests[5];
    
    vm.aboutme = {};
    vm.latestTweet = {};
    
    function fetchAboutMe(){
          
          return aboutMeService.getAboutMeData().

          then(function (response) {

                   console.log(response);

              vm.latestTweet.full_text = response.full_text;

              vm.latestTweet.datePosted = response.created_at;

     
          })
          .catch(function (error) {

              ngNotify.set(error, 'error');

              console.log(error);

          });


    }

    fetchAboutMe();

    randomizeInterest();


    // randomizing the Interest Array

    function randomizeInterest() {

      $interval(function () {

        vm.interest = myInterests[Math.floor(Math.random() * myInterests.length)];

      }, 4500);

    }
  }

})();