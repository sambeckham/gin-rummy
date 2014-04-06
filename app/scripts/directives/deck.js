'use strict';

angular.module('ryDirectives')
	.directive('deck', function () {
		return {
			templateUrl: 'views/deck.html',
			restrict: 'E',
			// link: function postLink(scope, element, attrs) {
			// 	element.text('this is the deck directive');
			// }
		};
	});
