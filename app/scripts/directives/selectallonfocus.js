'use strict';

angular.module('ryDirectives')
	.directive('selectAllOnFocus', function () {
		return {
			restrict: 'A',
			link: function(scope, element) {
				element.on('mouseup', function(event) {
					event.preventDefault();
				});
				element.on('focus', function() {
					this.select();
				});
			}
		};
	});
