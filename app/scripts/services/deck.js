'use strict';

angular.module('rummyApp')
    .factory('deck', function () {
        // Set up the deck
        var deck = [],
            suits = ['spades', 'hearts', 'clubs', 'diamonds'],
            values = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'],
            i,
            j,
            k = 0,
            buildDeck = function() {
                for ( i = 0; i < suits.length; i++ ) {
                    for ( j = 0; j < values.length; j++ ) {
                        var card = {
                            id : k,
                            suit : i,
                            value : j,
                            display : {
                                suit : suits[i],
                                value : values[j]
                            }
                        };
                        deck.push(card);
                        k ++;
                    }
                }
            },
            shuffle = function(deck) {
                var i = deck.length,
                    j,
                    temp;

                while ( --i ) {
                    j = Math.floor( Math.random() * ( i - 1 ) );
                    temp = deck[i];
                    deck[i] = deck[j];
                    deck[j] = temp;
                }

                return deck;
            };

        buildDeck();

        // Public API here
        return {
            shuffle: function() {
                return shuffle(deck);
            }
        };
    });
