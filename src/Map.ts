import Phaser from 'phaser';

export namespace Map {
  var cellw = 256;
  var cellh = 256;
  var W = 1600;
  var H = 1000;
  var started = false;
  var images = []  ;
  var floorplan;
  var floorplanCount;
  var cellQueue;
  var endrooms;
  var maxrooms = 10;
  var minrooms = 7;

  export function initMap(scene: Phaser.Scene) {
    loadRooms(scene);
    started = true;
    images = [];
    // images.forEach(image => {
    //     image.destroy();
    // })
    floorplan = [];
    for(var i =0; i<=100; i++) floorplan[i] = 0;
    floorplanCount = 0;
    cellQueue = [];
    endrooms = [];
    visit(this, 45);
  }

  function loadRooms(scene: Phaser.Scene) {
    this.load.image('NSEW', 'dungeons/nsew_dungeon.png');
    this.load.image('NSE', ' dungeons/nes_dungeon.png');
    this.load.image('NSW', 'dungeons/nws_dungeon.png');
    this.load.image('NEW', 'dungeons/new_dungeon.png');
    this.load.image('SEW', 'dungeons/sew_dungeon.png');
    this.load.image('NE', 'dungeons/ne_dungeon.png');
    this.load.image('NW', 'dungeons/nw_dungeon.png');
    this.load.image('NS', 'dungeons/ns_dungeon.png');
    this.load.image('SE', 'dungeons/se_dungeon.png');
    this.load.image('SW', 'dungeons/sw_dungeon.png');
    this.load.image('EW', 'dungeons/ew_dungeon.png');
    this.load.image('N', 'dungeons/n_dungeon.png');
    this.load.image('S', 'dungeons/s_dungeon.png');
    this.load.image('E', 'dungeons/e_dungeon.png');
    this.load.image('W', 'dungeons/w_dungeon.png');
  }

  function visit(scene: Phaser.Scene, i) {
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
    console.log(neighbors)
    return neighbors.toString()
  }

  function img(scene, i, name) {
    var x = i % 10;
    var y = (i - x) / 10;
    var img = scene.load.image(W/2 + cellw * (x - 5), H/2 + cellh * (y - 4), name);
    images.push(img);
    return img;
  }

}