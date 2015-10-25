module.exports = ["$scope", "Note", function($scope, Note) {
	$scope.notes = Note.query();
}]