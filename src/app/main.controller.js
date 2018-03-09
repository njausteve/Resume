/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function() {
  'use strict';

  angular
    .module('njausteve')
    .controller('mainController', mainController);

  /** @ngInject */
  function mainController($rootScope, $state, $timeout) {

    var vm = this;


    vm.pageNames = [];

    // change initial values depending on ui-router default state

    vm.navRight = 3;
    vm.navleft = 1;
    vm.navRightOuter = vm.navRight + 1;
    vm.navleftOuter = vm.navleft - 1;
    $rootScope.moveLeft, $rootScope.moveRight = 0;


    //get states and remove the detail state

    var statesToPush = $state.get().map(function(state) {

      return state.name;

    }).filter(Boolean).slice(2);

    console.log('PageNames length: ', vm.pageNames.length);

    // TODO: remove //["resume", "portifolio", "about me", "blog", "contact"]

    vm.pageNames = angular.copy(statesToPush);

    // nextPage function

    vm.nextPage = function(nextStateIndex) {

      var previousStateIndex = vm.pageNames.indexOf($state.current.name);
      console.log(" the previousStateIndex : " + previousStateIndex + "  => \n the next state is : " + nextStateIndex);


      // TODO: refactor this logic

      vm.navRight = nextStateIndex + 1;
      vm.navleft = nextStateIndex - 1;

      switch (nextStateIndex) {
        case 0:
          vm.navleft = vm.pageNames.length - 1;
          vm.navRightOuter = vm.navRight + 1;
          vm.navleftOuter = vm.navleft - 1;

          break;
        case 1:
          vm.navleftOuter = 3;
          vm.navRightOuter = vm.navRight + 1;
          break;
        case 2:

          vm.navRightOuter = vm.navRight + 1;
          vm.navleftOuter = vm.navleft - 1;
          break;
        case 3:
          vm.navRightOuter = 1;
          break;
        case 4:
          vm.navRight = 0;
          vm.navleftOuter = vm.navleft - 1;

          break;
      }

      $state.go(vm.pageNames[nextStateIndex]);

//clear move left/right classes after

      $timeout(function(){
        $rootScope.moveLeft=0;
         $rootScope.moveRight=0;

      $rootScope.$apply();
        

      },2000);


    };

  }

})();