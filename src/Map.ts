import Phaser from 'phaser';

export namespace Map {
  var cellw = 256;
  var cellh = 256;
  var W = 1600;
  var H = 1000;
  var maxrooms = 100;
  var minrooms = 10;
  var rooms;
  var floorplan;
  var floorplanCount;
  var cellQueue;

  export function initMap(scene: Phaser.Scene) {
    rooms = [];
    floorplan = [];
    cellQueue = [];
    floorplanCount = 0;
    for(var i = 0; i <= maxrooms; i++) floorplan[i] = 0;
    visit(45);
    visitCells(scene);
    applyDungeonMaps(scene, floorplan)
    return rooms;
  }

  function visit(i) {
    var neighbours = ncount(i);
    if(floorplan[i])
        return false;
    if (neighbours > 1)
        return false;
    if (floorplanCount >= maxrooms)
        return false;
    if(Math.random() < 0.5 && i != 45)
        return false;
    cellQueue.push(i);
    floorplan[i] = 1;
    floorplanCount += 1;
    return true;
  }

  function visitCells(scene) {
    while(cellQueue.length > 0)
    {
      var cell = cellQueue.shift();
      var x = cell % 10;
      var created = false;
      if(x > 1) created = created || visit(cell - 1);
      if(x < 9) created = created || visit(cell + 1);
      if(cell > 20) created = created || visit(cell - 10);
      if(cell < 70) created = created || visit(cell + 10);
    }
    // Re-run if we don't reach the min number of rooms
    if(floorplanCount < minrooms)
      initMap(scene);
  }

  function ncount(i) {
    return floorplan[i-10] + floorplan[i-1] + floorplan[i+1] + floorplan[i+10];
  }

  function applyDungeonMaps(scene, floorplan) {
    for (var i = 0; i < floorplan.length; i++) {
      if (floorplan[i] == 1) {
          var map = checkNeighbors(i)
          addRoom(scene, i, map)
      }
    }
  }

  function checkNeighbors(cell) {
    let neighbors: string[] = []
    if (floorplan[cell-10])
        neighbors.push('N');
    if (floorplan[cell+10])
        neighbors.push('S');
    if (floorplan[cell+1])
        neighbors.push('E');
    if (floorplan[cell-1])
        neighbors.push('W');

    return neighbors.toString().replace(',','');
  }

  function addRoom(scene, i, name) {
    var x = i % 10;
    var y = (i - x) / 10;
    let room = scene.make.tilemap({ key: name })
    const tileset = room.addTilesetImage('dungeon_tiles', 'tiles');
    room.createLayer('Floor', tileset, W/2 + cellw * (x - 5), H/2 + cellh * (y - 4));
    room.createLayer('Walls', tileset, W/2 + cellw * (x - 5), H/2 + cellh * (y - 4));
    rooms.push(room);
    return room;
  }

}