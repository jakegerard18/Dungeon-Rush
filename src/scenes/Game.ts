import Phaser from 'phaser';
import { debugDraw } from '../utils/debug';
import {createAnimations} from '../Animations';
import { Keys } from '../Keys';
import { handleHeroSlimeCollision } from '../Collisions';
import { Slime } from '../sprites/Slime';
import { Hero } from '../sprites/Hero';
import { Types } from '../Types';
import { Bat } from '../sprites/Bat';

export default class Game extends Phaser.Scene {
    private hero!: Hero;
    private slime: Slime;
    private bat: Bat;
    private keys;
    private keyCodes = {
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      attackUp: Phaser.Input.Keyboard.KeyCodes.UP,
      attackDown: Phaser.Input.Keyboard.KeyCodes.DOWN,
      attackLeft: Phaser.Input.Keyboard.KeyCodes.LEFT,
      attackRight: Phaser.Input.Keyboard.KeyCodes.RIGHT
    };

    constructor() {
      super('game');
    }

    preload() {
      this.keys = Keys.initKeys(this, this.keyCodes);
      createAnimations(this, 'hero');
      createAnimations(this, 'slime');
      createAnimations(this, 'bat');
    }

    create() {
      this.scene.run('ui');
      const dungeon = this.make.tilemap({ key: 'n_dungeon' });
      const tileset = dungeon.addTilesetImage('dungeon_tiles', 'tiles');
      const floorLayer = dungeon.createLayer('Floor', tileset);
      const wallLayer = dungeon.createLayer('Walls', tileset);

      this.hero = new Hero(this, 60, 100);
      this.slime = new Slime(this, 100, 100);
      this.bat = new Bat(this, 100, 100);

      wallLayer.setCollisionByProperty({collides: true});

      this.physics.add.collider(this.hero, wallLayer);
      this.cameras.main.startFollow(this.hero, true);
      this.physics.add.collider(this.slime, wallLayer);
      this.physics.add.collider(this.bat, wallLayer);
      this.physics.add.collider(this.hero, this.slime, handleHeroSlimeCollision, undefined, this);
    }

    update() {
      this.hero.update(this.keys);
    }
}