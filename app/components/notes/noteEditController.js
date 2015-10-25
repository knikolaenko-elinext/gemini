module.exports = ["$scope", "$state", "$stateParams", "Note", function($scope, $state, $stateParams, Note) {
  $scope.note = Note.get({id:$stateParams.noteId});
  
  $scope.save = function(note){
    note.$update().then(function(){
      $state.go('notes.detail', $stateParams);
    });
  };
}]