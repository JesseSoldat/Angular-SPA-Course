angular.module('Framework', ['Menu', 'Dashboard'])

.controller('FrameController', ['$scope', function($scope) {
      $scope.test = 'test';
      $scope.$on('menu-item-selected-event', function (evt, data) {
                console.log(evt);
                $scope.routeString = data.route;
            });
    
}])
.directive('framework', function() {
  return {
  	transclude: true,
    controller: 'FrameController',
  	scope: { 
  		title: '@',
  		subtitle: '@', 
  		iconFile: '@'
  	},
    // template: '<h1>Framework</h1>'
    templateUrl: 'ext-modules/framework/framework.html'
    

  };
});