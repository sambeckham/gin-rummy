'use strict';

angular.module('rummyApp')
.controller('GameCtrl', function ($scope, $routeParams, socket) {
	var room = $routeParams.roomId || $scope.roomId;
	socket.room = room;
	socket.emit('switchRoom', { room: room });

	$scope.messages = [];

	socket.on('message', function(data) {
		if(data.text) {
			data.user = data.user || 'Server';
			$scope.messages.push(data);
		}else{
			console.log('There is a problem:', data);
		}
	});

	$scope.sendMessage = function() {
		if($scope.name === '') {
			// alert('Please type your name!');
		}else{
			socket.emit('send', {
				text: $scope.message,
				user: $scope.name
			});
			$scope.message = '';
		}
	};
});