import * as BABYLON from 'babylonjs';

export class ShapeTool {
  scene: BABYLON.Scene;

  constructor(scene: BABYLON.Scene) {
    this.scene = scene;
  }

  createShape(shapeData) {
    const box = BABYLON.MeshBuilder.CreateBox("box", {}, this.scene);
    box.position.y = shapeData.position.y || 1;
    return box;
  }
}
