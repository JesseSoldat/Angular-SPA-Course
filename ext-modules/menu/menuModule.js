angular.module('Menu', [])



.controller('MenuController', ['$scope', '$rootScope', function ($scope, $rootScope) {

  	this.setActiveElement = function(el) {
  		$scope.activeElement = el;
  	};
  	this.setRoute = function(route) {
  		// console.log(route);
  		$rootScope.$broadcast('menu-item-selected-event', {route: route})
  		};
}])
.directive('menu', function() {
  return {
  	transclude: true,
  	controller: 'MenuController',
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
  		icon: '@',
  		route: '@'
  	},
    templateUrl: 'ext-modules/menu/menuItem.html',
    link: function (scope, el, attr, ctrl) {
            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            }); 
    }
    
  };
})
;