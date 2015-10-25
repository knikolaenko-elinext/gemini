var angular = require("angular");

var app = angular.module("geminiApp", [require("angular-gettext"), require("./components/navbar"), require("./components/notes"), require("./components/about")]);

// default route
app.config(["$urlRouterProvider", function($urlRouterProvider){
	$urlRouterProvider.otherwise("/notes");
}]);

// i18n
require("gemini-i18n-gettext");
app.run(["gettextCatalog", function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('en');
}]);