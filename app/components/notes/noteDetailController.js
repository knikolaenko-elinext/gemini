module.exports = ["$scope", "$state", "$stateParams", "Note", function($scope, $state, $stateParams, Note) {
  $scope.note = Note.get({id:$stateParams.noteId});
   
  $scope.remove = function(note){
    note.$remove().then(function(){
      $state.go("notes.list");
    });
  };
}]