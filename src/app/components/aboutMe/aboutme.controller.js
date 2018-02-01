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

    var myInterests = ['javascript'];
    vm.interest = myInterests[0];

    vm.aboutme = {};
    vm.latestTweet = {};



    (function fetchAboutMe() {

      return aboutMeService.getAboutMeData().

        then(function (response) {

          console.log(response);
           
           vm.latestTweet = response[0].latest_tweet;

            
             myInterests.push(...response[0].interests);


          //  (function(){
          //     for (var i = 0, l = response[0].interests.length; i < l; i++) {
          //          myInterests.push(response[0].interests[i]);
          //      }
          //    }
          //  )();

        })
        .catch(function (error) {

          console.log(error);

        });


    })();

    (function randomizeInterest() {

      $interval(function () {

        vm.interest = myInterests[Math.floor(Math.random() * myInterests.length)];

      }, 4500);

    })();

  }

})();