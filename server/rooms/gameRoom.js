const { Room } = require('colyseus');

class GameRoom extends Room {
  onCreate() {
    this.onMessage('create_shape', (client, data) => {
      this.broadcast('shape_created', { id: client.sessionId, shapeData: data });
    });

    this.onMessage('move_shape', (client, data) => {
      this.broadcast('shape_moved', { id: client.sessionId, position: data });
    });
  }

  onJoin(client) {
    console.log(`${client.sessionId} joined the game.`);
  }

  onLeave(client) {
    console.log(`${client.sessionId} left the game.`);
  }
}

module.exports = { GameRoom };
