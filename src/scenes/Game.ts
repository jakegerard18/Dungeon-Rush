import Phaser from 'phaser';
import { debugDraw } from '../utils/debug';
import {createAnimations} from '../Animations';
import { Map } from '../Map';
import { Keys } from '../Keys';
import { setHeroEnemyColliders } from '../Collisions';
import { Slime } from '../sprites/Slime';
import { Hero } from '../sprites/Hero';
import { Bat } from '../sprites/Bat';
import { Rat } from '../sprites/Rat';
import { Orc } from '../sprites/Orc';
import { Goblin } from '../sprites/Goblin';
import { Sniper } from '../sprites/Sniper';
import { Spider } from '../sprites/Spider';
import { Troll } from '../sprites/Troll';
import { Enemy } from '../sprites/Enemy';
import { Sprite } from '../sprites/Sprite';

export default class Game extends Phaser.Scene {
  private sprites: Sprite[];
  private enemies: Enemy[];
  private map: any;
  private hero: Hero;
  private rooms: any[];
  private spritePool: any[];

  // TODO: Add to types
  private cellw = 256;
  private cellh = 256;
  private W = 1600;
  private H = 1000;
  private minOffset = 25;
  private maxOffset = 225;
  private maxEnemiesPerRoom = 100;

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
    this.spritePool = [ Slime, Bat, Rat, Orc, Goblin, Spider, Troll ];
    createAnimations(this, 'hero');
    createAnimations(this, 'slime');
    createAnimations(this, 'bat');
    createAnimations(this, 'rat');
    createAnimations(this, 'orc');
    createAnimations(this, 'goblin');
    createAnimations(this, 'spider');
    createAnimations(this, 'troll');
  }

  create() {
    this.sprites = [];
    this.enemies = [];
    this.hero = new Hero(this, 900, 600);
    this.sprites.push(this.hero);

    // Render map
    this.map = new Map(this)
    this.map.renderMap();
    this.rooms = this.map.getRooms()

    // Render sprites
    this.hero.render(this);
    this.generateEnemies()
    this.sprites.forEach(sprite => sprite.render(this))

    // Set colliders
    setHeroEnemyColliders(this, this.hero, this.sprites);
    this.scene.run('ui');
    this.cameras.main.startFollow(this.hero, true);
  }

  update() {
    this.hero.update(this.keys);
  }

  generateEnemies() {
    while(this.rooms.length) {
      let i = this.rooms.shift();
      for (let j = 0; j < Math.floor(Math.random() * this.maxEnemiesPerRoom); j++) {
        this.sprites.push(this.generateSprite(i));
      }
    }
  }

  generateOffset(min, max) {
    return Math.random() * (max - min) + min;
  }

  generateSprite(i) {
    const rand = Math.floor(Math.random() * this.spritePool.length)
    const sprite = this.spritePool[rand]
    let x = i % 10;
    let y = (i - x) / 10;
    let randOffsetX = this.generateOffset(this.minOffset, this.maxOffset);
    let randOffsetY = this.generateOffset(this.minOffset, this.maxOffset);
    let adjustedX = this.W/2 + this.cellw * (x - 5) + randOffsetX;
    let adjustedY = this.H/2 + this.cellh * (y - 4) + randOffsetY;
    return new sprite(this, adjustedX, adjustedY)
  }
}