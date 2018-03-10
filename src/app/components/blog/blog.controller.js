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
                
               vm.posts =  response.map(function(respond, index, array){

                  respond.imgUrl = [];  

                       var m, 
              regx= /<img.*?src="([^">]*\/([^">]*?))".*?>/g;

              while ( m = regx.exec(respond.content) ) {
                
                         respond.imgUrl.push( m[1] );

                  
              }

                   return respond;

               })


               console.log(vm.posts);

                


            //       vm.posts = response;
            //       vm.posts[0].imgUrls = [];

            //   var content = response[0].content;
              
               
            //   console.log( angular.element(content).text());

               
            //   var m, 
            //   regx= /<img.*?src="([^">]*\/([^">]*?))".*?>/g;

            //   while ( m = regx.exec(content) ) {
            //     vm.posts[0].imgUrls.push( m[1] );
            //   }
            //   console.log(vm.posts); 

            })
            .catch( function(error){

                ngNotify.set(error, 'error');    

                    console.log(error);
            });
        }

        


        getArticles();

    }

})();