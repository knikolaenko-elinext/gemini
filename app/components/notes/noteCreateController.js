module.exports = ["$scope", "$state", "Note", function($scope, $state, Note) {
  $scope.note = new Note();
  
  $scope.save = function(note){
    note.$save().then(function(){
      $state.go("notes.list");
    });
  };
}]