import * as BABYLON from 'babylonjs';
import { Client, Room } from 'colyseus.js';
import { ShapeTool } from './components/shape-tool';
import config from '../config';

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

const shapeTool = new ShapeTool(scene);
const client = new Client(config.SERVER_URL);
let room;

(async () => {
  room = await client.joinOrCreate('game_room');
  
  room.onMessage('shape_created', (message) => {
    shapeTool.createShape(message.shapeData);
  });
})();

engine.runRenderLoop(() => {
  scene.render();
});
