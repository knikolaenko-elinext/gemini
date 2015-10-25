module.exports = [ "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('notes', {
    abstract : true,
    url : "/notes",
    templateUrl : "components/notes/index.html"
  });
  $stateProvider.state('notes.list', {
    url : "",
    templateUrl : "components/notes/notesListView.html"
  });
  $stateProvider.state('notes.create', {
    url : "/create",
    templateUrl : "components/notes/noteCreateView.html"
  });
  $stateProvider.state('notes.detail', {
    url : "/{noteId:[0-9]{1,4}}",
    templateUrl : "components/notes/noteDetailView.html"
  });
  $stateProvider.state('notes.detail.edit', {
    views : {
      "@notes" : {
        templateUrl : "components/notes/noteEditView.html"
      }
    }
  });
} ]
