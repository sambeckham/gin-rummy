'use strict';

angular.module('rummyApp')
	.controller('MainCtrl', function ($scope, socket) {
		$scope.ip = '0.0.0.0'; //The ip address of your machine/server
		$scope.port = '9000'; // The port. This is set in Gruntfile.js

		socket.emit('join', $scope.username);

		socket.on('denied', function(reason) {
			console.log('denied for ' + reason);
		});

		socket.on('disconnect', function() {
			console.log('You have been disconnected from the server');
		});
	});