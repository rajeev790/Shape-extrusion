const { Server } = require('colyseus');
const express = require('express');
const http = require('http');
const { GameRoom } = require('../rooms/gameRoom');

const app = express();
const server = http.createServer(app);
const gameServer = new Server({ server });

gameServer.define('game_room', GameRoom);
gameServer.listen(2567);

console.log("Colyseus server listening on ws://localhost:2567");
