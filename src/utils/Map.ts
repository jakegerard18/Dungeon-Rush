import Phaser from 'phaser'
import Hero from '../characters/Hero'

enum Directions
{
    NORTH,
    EAST,
    SOUTH,
    WEST
}

export default class Map
{
  scene: Phaser.Scene;
  rooms_json: string[];
  rooms = [];

  constructor(scene: Phaser.Scene, rooms_json: string[]) {
    this.scene = scene;
    this.rooms_json = rooms_json;
  }

  generateMap(hero: Hero) {
    this.rooms_json.forEach((room_json) => {
      let room = this.scene.make.tilemap({ key: room_json });
      this.rooms.push(room);
    })

    var x = 0;
    var y = 0;
    this.rooms.forEach((room) => {
      let tileset = room.addTilesetImage('dungeon_tileset', 'tiles', 16, 16, 1, 2);
      room.createLayer('Floor', tileset, x, y);
      const layer = room.createLayer('Walls', tileset, x, y);
      layer.setCollisionByProperty({collides: true});

      switch(this.randomDirection()) {
        case Directions.NORTH:
          y -= 256;
          break;

        case Directions.EAST:
          x += 256;
          break;

        case Directions.SOUTH:
          y += 256;
          break;

        case Directions.WEST:
          x -= 256;
          break;
      }

      this.scene.physics.add.collider(hero, layer)
    })

    
  }

  randomDirection() {
    var newDirection = Phaser.Math.Between(0, 3);
    return newDirection
  }


}
