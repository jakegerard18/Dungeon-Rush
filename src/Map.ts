import Phaser from 'phaser';

export namespace Map {
  var cellw = 256;
  var cellh = 256;
  var W = 1600;
  var H = 1000;
  var started = false;
  var images;
  var floorplan;
  var floorplanCount;
  var cellQueue;
  var endrooms;
  var maxrooms = 10;
  var minrooms = 7;

  export function initMap(scene: Phaser.Scene) {
    started = true;
    images = [];
    floorplan = [];
    for(var i = 0; i <= 100; i++) floorplan[i] = 0;
    floorplanCount = 0;
    cellQueue = [];
    endrooms = [];
    visit(45);
    for(let i = 0; i < 100; i++) {
      if(started){
        if(cellQueue.length > 0)
        {
          var cell = cellQueue.shift();
          var x = cell % 10;
          var created = false;
          if(x > 1) created = created || visit(cell - 1);
          if(x < 9) created = created || visit(cell + 1);
          if(cell > 20) created = created || visit(cell - 10);
          if(cell < 70) created = created || visit(cell + 10);
          if(!created) {
            endrooms.push(i);
          }
        }
        apply_dungeon_maps(scene, floorplan)
      }
    }
  }

  function visit(i) {
    if(floorplan[i])
        return false;

    var neighbours = ncount(i);

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

  function ncount(i) {
    return floorplan[i-10] + floorplan[i-1] + floorplan[i+1] + floorplan[i+10];
  }

  function apply_dungeon_maps(scene, floorplan) {
    for (var i = 0; i < floorplan.length; i++) {
      if (floorplan[i] == 1) {
          var map = check_neighbors(i)
          img(scene, i, map)
      }
    }
  }

  function check_neighbors(cell) {
    let neighbors: string[] = []
    if (floorplan[cell-10])
        neighbors.push('N');
    if (floorplan[cell+10])
        neighbors.push('S');
    if (floorplan[cell+1])
        neighbors.push('E');
    if (floorplan[cell-1])
        neighbors.push('W');

    let result = neighbors.toString().replace(',','');
    return result;
  }

  function img(scene, i, name) {
    var x = i % 10;
    var y = (i - x) / 10;
    var img = scene.add.image(W/2 + cellw * (x - 5), H/2 + cellh * (y - 4), name);
    images.push(img);
    return img;
  }

}