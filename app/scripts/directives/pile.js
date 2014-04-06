'use strict';

angular.module('ryDirectives')
	.directive('pile', function () {
		return {
			templateUrl: 'views/pile.html',
			restrict: 'E',
			// link: function postLink(scope, element, attrs) {
			// 	element.text('this is the pile directive');
			// }
		};
	});
