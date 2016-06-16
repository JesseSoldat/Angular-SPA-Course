angular.module('Framework', ['Menu', 'Dashboard'])

.controller('FrameController', ['$scope', function($scope) {
  
}])
.directive('framework', function() {
  return {
  	transclude: false,
  	scope: {
  		title: '@',
  		subtitle: '@', 
  		iconFile: '@'
  	},
    // template: '<h1>Framework</h1>'
    templateUrl: 'ext-modules/framework/framework.html'
    

  };
});