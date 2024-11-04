import * as BABYLON from 'babylonjs';

export function moveShape(shape, newPosition) {
  shape.position = new BABYLON.Vector3(newPosition.x, newPosition.y, newPosition.z);
}
