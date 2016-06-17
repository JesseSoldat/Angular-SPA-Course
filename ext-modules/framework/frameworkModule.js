angular.module('Framework', ['Menu', 'Dashboard'])

.controller('FrameController', ['$scope', '$window', '$timeout', function($scope, $window, $timeout) {

      $scope.isMenuVisible = true;
      $scope.isMenuButtonVisible = true;

      $scope.$on('menu-item-selected-event', function (evt, data) {
                console.log(evt);
                $scope.routeString = data.route;
            });

      $($window).on('resize.Framework', function () {
       
        $scope.$apply(function () {
            checkWidth();
        });
      });
      $scope.$on('$destroy', function () {
        $($window).off('resize.Framework');
      });

      var checkWidth = function () {
        var width = Math.max($($window).width(), $window.innerWidth);
        // console.log(width);
        $scope.isMenuVisible = (width > 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;
      }
      $timeout(function () {
        checkWidth();
      }, 0);
    
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