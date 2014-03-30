var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io'),
    socket = io.listen(server);

socket.set('log level', 1);

var people = {},
    map = {
        deck : false
    };

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/app/index.html');
});

app.use(express.static(__dirname + '/app'));

socket.on('connection', function (client) {

    client.on('join', function(name) {
        if ( Object.keys(people).length >= 3 ) {
            client.emit('denied', 'There are too many people playing right now, please try again later.');
            return;
        }
        people[client.id] = name;
        client.emit('update', 'You have connected to the server.');
        socket.sockets.emit('update', name + ' has joined the server.')
        socket.sockets.emit('update-people', people);
    });

    client.on('move-cards', function(data) {
        map[data.destination] = map[data.destination] || [];
        data.root = data.root || 0;

        map[data.destination] = map[data.destination].concat(map[data.origin].splice(data.root, data.amount));

        socket.sockets.emit('update-' + data.origin, map[data.origin]);
        socket.sockets.emit('update-' + data.destination, map[data.destination]);
    });

    client.on('deal', function(cards) {
        if ( !map.deck ) {
            map.deck = cards;
            map.pile = map.deck.splice(0,1);
        }

        socket.sockets.emit('update-deck', map.deck);
        socket.sockets.emit('update-pile', map.pile);
    });

    client.on('disconnect', function() {
        socket.sockets.emit('update', people[client.id] + ' has left the server.');
        delete people[client.id];
        socket.sockets.emit('update-people', people);
    });
});

exports = module.exports = server;
// delegates user() function
exports.use = function() {
    app.use.apply(app, arguments);
};