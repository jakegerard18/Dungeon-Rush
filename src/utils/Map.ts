import Phaser from 'phaser'
export default class Map
{
  scene: Phaser.Scene;
  rooms_json: string[];
  rooms = [];

  constructor(scene: Phaser.Scene, rooms_json: string[]) {
    this.scene = scene;
    this.rooms_json = rooms_json;
  }

  generateMap() {
    this.rooms_json.forEach((room_json) => {
      let room = this.scene.make.tilemap({ key: room_json });
      this.rooms.push(room);
    })

    let i = 0;
    this.rooms.forEach((room) => {
      let tileset = room.addTilesetImage('dungeon_tileset', 'tiles', 16, 16, 1, 2);
      room.createLayer('layer', tileset, i, 0);
      i += 256;
    })
  }



}
