/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
(function () {
    'use strict';

    angular
        .module('njausteve')
        .controller('contactController', contactController);

     /** @ngInject */
     function contactController(NgMap, contactsService, ngNotify) {

        var vm = this;
    
        console.log("contactController loaded");
    
    
        vm.mailer = {};
    
        vm.sendEmail = _sendEmail;
    
        //use contactsService to send mail
        function _sendEmail(mailer) {
    
            return contactsService.sendEmail(mailer).
                then(function (response) {
    
                    var successRegex = /^250 2\.0\.0 OK /g;
    
                    if (successRegex.test(response.response)) {
    
    
                        ngNotify.set('Email sent', { type: 'success'}, resetMail);
    
                        // reset emailform
    
                        function resetMail() {
    
                            vm.mailer = {};
                            vm.mailerForm.$setPristine();
                            
                        }
    
                    }else{
<<<<<<< HEAD
    
                        ngNotify.set( "Email not sent Try again " + mailer.name, 'error');
=======

                        ngNotify.set( "Email not sent Try again" + mailer.name, 'error');
<<<<<<< HEAD
>>>>>>> f0d8c6f... Remove console logs for prod : gulp
=======
>>>>>>> f0d8c6f... Remove console logs for prod : gulp
                    }
                })
                .catch(function (error) {
    
                    ngNotify.set(error, 'error');
    
                    console.log(error);
    
                });
    
        }
    
        NgMap.getMap().then(function (map) {
    
        });
    
    }

})();
