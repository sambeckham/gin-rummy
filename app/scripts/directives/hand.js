'use strict';

angular.module('ryDirectives')
	.directive('hand', function () {
		return {
			templateUrl: 'views/hand.html',
			restrict: 'E',
			scope: {
				cards: '=',
				action: '&'
			},
			link: function(scope) {
				var haveIWon = function() {
					// TODO: Add in winning hand check
				};
				scope.$watch('cards', function() {
					if( scope.cards.length !== 7 ){
						return;
					}
					haveIWon();
				});
			}
		};
	});
