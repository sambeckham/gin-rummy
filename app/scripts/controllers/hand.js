'use strict';

angular.module('rummyApp')
	.controller('HandCtrl', function ($scope, socket, deck) {
	// TODO: Swap this for a service that retrieves the cards from the deck;
		$scope.cards = deck.dealFromDeck(7);

		$scope.name = 'Guest';

		//TODO For some reason this broadcasts to all rooms, look into this
		socket.emit('send', {
			text: $scope.name + ' has entered the game'
		});

		$scope.playCard = function(card) {
			socket.emit('send', {
				text: card.display.value + ' of ' + card.display.suit,
				user: $scope.name
			});
		};
	});