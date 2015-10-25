var angular = require("angular");

var notesModule = angular.module("notes", [require("angular-ui-router"), require("angular-resource")]);
module.exports = notesModule.name;

notesModule.config(require("./routes.js"));
notesModule.factory("Note", require("./note.js"));
notesModule.controller("notesListController", require("./notesListController.js"));
notesModule.controller("noteDetailController", require("./noteDetailController.js"));
notesModule.controller("noteEditController", require("./noteEditController.js"));
notesModule.controller("noteCreateController", require("./noteCreateController.js"));
