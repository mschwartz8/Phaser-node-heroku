import Phaser from "phaser";

export class Engineering extends Phaser.Scene {
    constructor() {
      super({ key: "Engineering" });
    }

preload() {
    // this.load.tilemapTiledJSON("map", "../public/assets/tilemaps/engineeringnew2.json");
    this.load.image('sky', 'assets/images/sky.png');

}

create (){
  this.add.image(-160, 0, 'sky').setOrigin(0).setScale(.5);

}

}