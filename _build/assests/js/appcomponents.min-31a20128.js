/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
!function(){"use strict";angular.module("njausteve",["ui.router","angular-loading-bar","ngAnimate","ngMap"])}(),/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
function(){"use strict";function t(t,o){t.state("resume",{url:"/resume",templateUrl:"/app/components/resume/resume.html",controller:"resumeController",controllerAs:"resume"}).state("portifolio",{url:"/portifolio",templateUrl:"/app/components/portfolio/portfolio.html",controller:"portifolioController",controllerAs:"portif"}).state("about me",{url:"/about",templateUrl:"/app/components/aboutMe/about.html",controller:"aboutMeController",controllerAs:"about"}).state("blog",{url:"/blog",templateUrl:"/app/components/blog/blog.html",controller:"blogController",controllerAs:"blog"}).state("contact",{url:"/contact",templateUrl:"/app/components/contact/contact.html",controller:"contactController",controllerAs:"contact"}),o.otherwise("/about")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("njausteve").config(t)}(),/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
function(){"use strict";function t(t,o,e){t.info("Njausteve , 2017 \n Online Resume \n lets do this! "),o.$state=e}t.$inject=["$log","$rootScope","$state"],angular.module("njausteve").run(t)}(),/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
function(){"use strict";function t(t){var o=this,e=["resume","portifolio","about me","blog","contact"];o.pageNames=t.get().map(function(t){return t.name}).filter(Boolean),o.nextPage=function(n){var r=o.pageNames.indexOf(t.current.name);console.log(" the previousStateIndex : "+r+"  => \n the next state is : "+n),t.go(e[n])}}t.$inject=["$state"],angular.module("njausteve").controller("mainController",t)}();