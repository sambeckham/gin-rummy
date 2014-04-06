'use strict';

angular.module('rummyApp')
.controller('GameCtrl', function ($scope, socket, deck) {
	var handSize = 7;

	// TODO: A better way of getting a random hash
	$scope.username = Math.random().toString(36).slice(10);
	$scope.deck = [];
	$scope.pile = [];
	$scope.hand = [];

	socket.emit('deal', deck.shuffle());

	socket.on('update-deck', function(cards) {
		$scope.deck = cards;
	});

	socket.on('update-pile', function(cards) {
		$scope.pile = cards;
	});

	socket.on('update-hand-' + $scope.username, function(cards) {
		$scope.hand = cards;
	});

	$scope.dealToHand = function() {
		if ( $scope.hand.length > handSize ) {
			return;
		}

		var amount = 1;

		if ($scope.hand.length === 0) {
			amount = handSize;
		}

		socket.emit('move-cards', {
			'origin' : 'deck',
			'destination' : 'hand-' + $scope.username,
			'amount' : amount
		});
	};

	$scope.pickUpFromPile = function(card) {
		if ( $scope.hand.length < handSize ) {
			console.log('You need to deal first');
			return;
		}
		if ( $scope.hand.length > handSize ) {
			console.log('You’ve already picked a card up');
			return;
		}
		if ( card !== $scope.pile.length - 1 ) {
			console.log('You can only pick up the top card', card, $scope.pile.length);
			return;
		}

		socket.emit('move-cards', {
			'origin' : 'pile',
			'destination' : 'hand-' + $scope.username,
			'amount' : 1,
			'root' : card
		});
	};

	$scope.throwFromHand = function(card) {
		if($scope.hand.length < handSize + 1) {
			console.log('You have to pick up a card first');
			return;
		}
		socket.emit('move-cards', {
			'origin' : 'hand-' + $scope.username,
			'destination' : 'pile',
			'amount' : 1,
			'root' : card
		});
		if ($scope.pile.length > 2) {
			socket.emit('move-cards', {
				'origin' : 'pile',
				'destination' : 'deck',
				'amount' : 1
			});
		}
	};
});