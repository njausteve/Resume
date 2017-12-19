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
    function contactController(NgMap, contactsService) {

        var vm = this;

        console.log("contactController loaded");

        vm.mailer = {};


        vm.sendEmail = _sendEmail;


        //use contactsService to send mail
        function _sendEmail(mailer) {

            return contactsService.sendEmail(mailer).
                then(function (response) {

                console.log(response);

                })
                .catch(function (error) {

                    console.log(error);

                });

        }



        NgMap.getMap().then(function (map) {

        });






    }

})();