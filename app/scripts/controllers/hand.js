'use strict';

angular.module('rummyApp')
	.controller('HandCtrl', function ($scope, socket) {
	// TODO: Swap this for a service that retrieves the cards from the deck;
		$scope.cards = [
			{
				id: 0,
				suit: 'spades',
				value: '1'
			},
			{
				id: 1,
				suit: 'spades',
				value: '2'
			},
			{
				id: 2,
				suit: 'spades',
				value: '3'
			},
			{
				id: 3,
				suit: 'spades',
				value: '4'
			},
			{
				id: 4,
				suit: 'spades',
				value: '5'
			},
			{
				id: 5,
				suit: 'spades',
				value: '6'
			},
			{
				id: 6,
				suit: 'spades',
				value: '7'
			}
		];

		$scope.name = 'Guest';

		//TODO For some reason this broadcasts to all rooms, look into this
		socket.emit('send', {
			text: $scope.name + ' has entered the game'
		});

		$scope.playCard = function(card) {
			socket.emit('send', {
				text: card.value + ' of ' + card.suit,
				user: $scope.name
			});
		};
	});