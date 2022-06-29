import Phaser from 'phaser'



export default class Test_Dungeon extends Phaser.Scene {
  var startText;
  var started = false;
  var placedSpecial;
  var images = [];
  var floorplan;
  var floorplanCount;
  var cellQueue;
  var endrooms;
  var maxrooms = 15;
  var minrooms = 7;
  var bossl; 

  constructor() {
    super('testdungeon');
  }

  preload() {

  }

  create() {
    startText = this.add.text(W/2, H/2, 'Click to Start', { fontSize: '32px', fill: '#FFF' });
    startText.x -= startText.width / 2;

    this.input.on('pointerdown', start, this);
  }


  update() {
    this.hero.update(this.cursors);
    //controlCamera(this, this.cursors);
  }

}
