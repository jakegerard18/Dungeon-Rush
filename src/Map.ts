import Phaser from 'phaser';

export class Map {
  private scene;
  private cellw = 256;
  private cellh = 256;
  private W = 1600;
  private H = 1000;
  private maxrooms = 3;
  private minrooms = 1;
  private floorplan;
  private floorplanCount;
  private cellQueue;
  private rooms;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
	}

  renderMap() {
    this.floorplan = [];
    this.cellQueue = [];
    this.rooms = [];
    this.floorplanCount = 0;
    for(var i = 0; i <= this.maxrooms; i++) this.floorplan[i] = 0;
    this.visit(45);
    this.visitCells();
    this.applyDungeonMaps()
  }

  visit(i) {
    let neighbours = this.ncount(i);
    if(this.floorplan[i])
        return false;
    if (neighbours > 1)
        return false;
    if (this.floorplanCount >= this.maxrooms)
        return false;
    if(Math.random() < 0.5 && i != 45)
        return false;
    this.cellQueue.push(i);
    this.floorplan[i] = 1;
    this.floorplanCount += 1;
    this.rooms.push(i);
    return true;
  }

  visitCells() {
    while(this.cellQueue.length > 0)
    {
      var cell = this.cellQueue.shift();
      var x = cell % 10;
      var created = false;
      if(x > 1) created = created || this.visit(cell - 1);
      if(x < 9) created = created || this.visit(cell + 1);
      if(cell > 20) created = created || this.visit(cell - 10);
      if(cell < 70) created = created || this.visit(cell + 10);
    }
    // Re-run if we don't reach the min number of rooms
    if(this.floorplanCount < this.minrooms)
      this.renderMap();
  }

  ncount(i) {
    return this.floorplan[i-10] + this.floorplan[i-1] + this.floorplan[i+1] + this.floorplan[i+10];
  }

  applyDungeonMaps() {
    for (var i = 0; i < this.floorplan.length; i++) {
      if (this.floorplan[i] == 1) {
          var mapName = this.checkNeighbors(i)
          this.buildRoom(i, mapName)
      }
    }
  }

  checkNeighbors(cell) {
    let neighbors: string[] = []
    if (this.floorplan[cell-10])
        neighbors.push('N');
    if (this.floorplan[cell+10])
        neighbors.push('S');
    if (this.floorplan[cell+1])
        neighbors.push('E');
    if (this.floorplan[cell-1])
        neighbors.push('W');

    return neighbors.toString().replaceAll(',','');
  }

  buildRoom(i, name) {
    let x = i % 10;
    let y = (i - x) / 10;
    let adjustedX = this.W/2 + this.cellw * (x - 5);
    let adjustedY = this.H/2 + this.cellh * (y - 4);
    let room = this.scene.make.tilemap({ key: name })
    const tileset = room.addTilesetImage('dungeon_tiles', 'tiles');
    room.createLayer('Floor', tileset, adjustedX, adjustedY);
    const walls = room.createLayer('Walls', tileset, adjustedX, adjustedY);
    walls.setCollisionByProperty({ collides: true })
    this.scene.physics.add.collider(this.scene.sprites, walls);
  }

  getRooms() {
    return this.rooms;
  }

}