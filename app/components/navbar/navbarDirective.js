module.exports = ["$state", "gettextCatalog", function($state, gettextCatalog) {
	return {
		restrict : 'E',
		replace : true,
		templateUrl : "components/navbar/navbarView.html",
		scope : {},
		link : function($scope, element, attrs, controller) {
			$scope.$state = $state;
			$scope.gettextCatalog = gettextCatalog;

			$scope.languages = [ 'en', 'ru' ];
		}
	}
} ]