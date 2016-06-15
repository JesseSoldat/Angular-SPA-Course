angular.module('app', ['Framework']) 

.controller('AppController', ['$scope', function($scope) {
  
}])
.directive('test', function() {
  return {
    template: 'test1'
	// templateUrl: 'appTemplate.html'
	

  };
});