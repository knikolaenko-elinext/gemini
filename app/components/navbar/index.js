var angular = require("angular");

var navbarModule = angular.module("navbar", [require("angular-ui-router")]);
module.exports = navbarModule.name;

navbarModule.directive("navbar", require("./navbarDirective.js"));