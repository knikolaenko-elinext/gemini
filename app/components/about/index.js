var angular = require("angular");

var aboutModule = angular.module("about", [require("angular-ui-router")]);
module.exports = aboutModule.name;

aboutModule.config(require("./routes.js"));