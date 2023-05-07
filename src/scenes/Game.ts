import Phaser from 'phaser';
import { debugDraw } from '../utils/debug';
import {createAnimations} from '../Animations';
import { Keys } from '../Keys';
import { handleHeroEnemyCollision } from '../Collisions';
import { Slime } from '../sprites/Slime';
import { Hero } from '../sprites/Hero';
import { Bat } from '../sprites/Bat';
import { Rat } from '../sprites/Rat';
import { Orc } from '../sprites/Orc';
import { Goblin } from '../sprites/Goblin';
import { Sniper } from '../sprites/Sniper';
import { Spider } from '../sprites/Spider';
import { Troll } from '../sprites/Troll';

export default class Game extends Phaser.Scene {
    private hero: Hero;
    private slime: Slime;
    private bat: Bat;
    private rat: Rat;
    private orc: Orc;
    private goblin: Goblin;
    private sniper: Sniper;
    private spider: Spider;
    private troll: Troll;

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
      createAnimations(this, 'rat');
      createAnimations(this, 'orc');
      createAnimations(this, 'goblin');
      createAnimations(this, 'sniper');
      createAnimations(this, 'spider');
      createAnimations(this, 'troll');
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
      this.rat = new Rat(this, 100, 100);
      this.orc = new Orc(this, 100, 100);
      this.goblin = new Goblin(this, 100, 100);
      this.sniper = new Sniper(this, 100, 100);
      this.spider = new Spider(this, 100, 100);
      this.troll = new Troll(this, 100, 100);

      wallLayer.setCollisionByProperty({collides: true});

      this.cameras.main.startFollow(this.hero, true);
      
      this.physics.add.collider(this.hero, wallLayer);
      this.physics.add.collider(this.slime, wallLayer);
      this.physics.add.collider(this.bat, wallLayer);
      this.physics.add.collider(this.rat, wallLayer);
      this.physics.add.collider(this.orc, wallLayer);
      this.physics.add.collider(this.goblin, wallLayer);
      this.physics.add.collider(this.sniper, wallLayer);
      this.physics.add.collider(this.spider, wallLayer);
      this.physics.add.collider(this.troll, wallLayer);

      this.physics.add.collider(this.hero, this.slime, handleHeroEnemyCollision, undefined, this);
      this.physics.add.collider(this.hero, this.bat, handleHeroEnemyCollision, undefined, this);
      this.physics.add.collider(this.hero, this.rat, handleHeroEnemyCollision, undefined, this);
      this.physics.add.collider(this.hero, this.orc, handleHeroEnemyCollision, undefined, this);
      this.physics.add.collider(this.hero, this.goblin, handleHeroEnemyCollision, undefined, this);
      this.physics.add.collider(this.hero, this.sniper, handleHeroEnemyCollision, undefined, this);
      this.physics.add.collider(this.hero, this.spider, handleHeroEnemyCollision, undefined, this);
      this.physics.add.collider(this.hero, this.troll, handleHeroEnemyCollision, undefined, this);
    }

    update() {
      this.hero.update(this.keys);
    }
}