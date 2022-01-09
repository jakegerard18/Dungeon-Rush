import Phaser from 'phaser'
import Hero from '../characters/Hero'
import Slime from '../characters/Slime'
import Rat from '../characters/Rat'
import Bat from '../characters/Bat'
import Spider from '../characters/Spider'
import Goblin from '../characters/Goblin'
import Archer from '../characters/Archer'
import Orc from '../characters/Orc'
import Troll from '../characters/Troll'
import Controls from '../utils/Controls'
import Map from '../utils/Map'
import { createBatAnims, createHeroAnims, createRatAnims, createSlimeAnims, createSpiderAnims, createGoblinAnims, createArcherAnims, createOrcAnims, createTrollAnims } from '../animations/Animations'
import { handleHeroRatCollision, handleHeroSlimeCollision, handleSwordRatCollision, handleSwordSlimeCollision, handleDoorCollision } from '../colliders/Collision_Callbacks'
import { showCollisions } from '../utils/ShowCollisions'
import { controlCamera } from '../utils/ControlCamera'
import { game } from '../main'


export default class Test_Dungeon extends Phaser.Scene {
  private map: Map;
  private cursors: Controls;
  private hero: Hero;
  private slime: Slime;
  private rat: Rat;
  private bat: Bat;
  private spider: Spider;
  private goblin: Goblin;
  private archer: Archer;
  private orc: Orc;
  private troll: Troll;
  private enemies: Phaser.Physics.Arcade.Sprite[];


  constructor() {
    super('testdungeon');
  }

  preload() {
    createHeroAnims(this.anims);
    createSlimeAnims(this.anims);
    createRatAnims(this.anims);
    createBatAnims(this.anims);
    createSpiderAnims(this.anims);
    createGoblinAnims(this.anims);
    createArcherAnims(this.anims);
    createOrcAnims(this.anims);
    createTrollAnims(this.anims);
  }

  create() {

    //Instantiate sprites
    this.hero = new Hero(this, 300, 100, 'hero');

    this.enemies = [
      this.bat = new Bat(this, 100, 100, 'bat'),
      this.spider = new Spider(this, 100, 100, 'spider'),
        // this.goblin = new Goblin(this, 200, 200, 'goblin'),
        // this.archer = new Archer(this, 200, 200, 'archer'),
        // this.orc = new Orc(this, 300, 300, 'orc'),
        this.troll = new Troll(this, 400, 100, 'troll'),
        this.slime = new Slime(this, 100, 100, 'slime'),
        this.rat = new Rat(this, 200, 200, 'rat')
    ]

    //Set cursor keys
    this.cursors = new Controls(this, 'W', 'S', 'A', 'D', 'UP', 'DOWN', 'RIGHT', 'LEFT');

    //Generate tilemap and floor layer
    let rooms_json = ['room_1_json', 'room_2_json', 'room_3_json', 'room_4_json']
    this.map = new Map(this, rooms_json);
    this.map.generateMap()

    //Add sprites to scenes
    this.add.existing(this.hero);
    this.enemies.forEach((enemy) => {
      this.add.existing(enemy);
    })

    //const wallLayer = map.createLayer('Walls', tileset, 0, 0);
    //Set colliders
    //wallLayer.setCollisionByProperty({collides: true});

    //Add colliders
    // this.physics.add.collider(this.hero, wallLayer);
    // this.physics.add.collider(this.enemies, wallLayer);
    // this.physics.add.collider(this.hero, this.enemies, handleHeroRatCollision, undefined, this);
    // this.physics.add.collider(this.hero.getSwordBody(this), this.enemies, handleSwordRatCollision, undefined, this);


    //Set camera to follow hero sprite
    this.cameras.main.startFollow(this.hero, true)
    //showCollisions(wallLayer, this)
  }


  update() {
    this.hero.update(this.cursors);
    //controlCamera(this, this.cursors);
  }
}
