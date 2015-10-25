module.exports = [ "$stateProvider", function($stateProvider) {
  $stateProvider.state('about', {
    url : "/about",
    templateUrl : "components/about/aboutView.html"
  });
} ]
