/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function () {
    'use strict';

    angular
        .module('njausteve')
        .controller('blogController', blogController);

    /** @ngInject */
    function blogController(blogService, ngNotify) {

        var vm = this;

        console.log("blogController loaded");

        vm.posts = [];

        vm.quantity = 3;
        vm.level =  "ALL";

        vm.toggleQuantity = function (){
            if (vm.quantity == 3){
                 
                 vm.quantity = "";
                 vm.level ="LESS";  
            }else{
                 
                vm.quantity = 3;
                vm.level =  "ALL";  
            }

        };

        function getArticles(){

            return blogService.getBlogArticles()

            .then( function(response){
                  
                  vm.posts = response;

              var content = response[0].content;

              console.log(response); 
               
              console.log( angular.element(content).text());
               
            //   getImageUrl(content);
                  
            //   function getImageUrl(content) {
             
            //     var res = content.match(/src="(https?\:\/\/[^"]+)"/g);
                
            //     console.log("Banner image url : ", res );
            // }

            })
            .catch( function(error){

                ngNotify.set(error, 'error');    

                    console.log(error);
            });
        }


        getArticles();

    }

})();