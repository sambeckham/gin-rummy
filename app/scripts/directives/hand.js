'use strict';

angular.module('ryDirectives')
	.directive('hand', function () {
		return {
			templateUrl: 'views/hand.html',
			restrict: 'E',
			// link: function postLink(scope, element, attrs) {
			// 	element.text('this is the hand directive');
			// }
		};
	});
