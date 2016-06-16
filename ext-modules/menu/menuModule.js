angular.module('Menu', [])



.controller('MenuController', ['$scope', function($scope) {
  
}])
.directive('menu', function() {
  return {
  	transclude: true,
  	scope: {
  		
  	},
    templateUrl: 'ext-modules/menu/menu.html',
    link: function(scope, e, attr) {

    }
    
  };
})

.directive('menuItem', function() {
  return {
  	require: '^menu',
  	scope: {
  		label: '@',
  		icon: '@'
  	},
    templateUrl: 'ext-modules/menu/menuItem.html',
    link: function(scope, e, attr, ctrl) {

    }
    
  };
})




;