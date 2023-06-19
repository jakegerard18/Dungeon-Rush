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
  private updateCounter = 0;

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
    this.sprites = [];
    this.enemies = [];
    this.hero = new Hero(this, 900, 600);
    this.sprites.push(this.hero);
    this.enemies.push(new Slime(this, 100, 100));
    this.enemies.push(new Bat(this, 100, 100));
    this.enemies.push(new Rat(this, 100, 100));
    this.enemies.push(new Orc(this, 100, 100));
    this.enemies.push(new Goblin(this, 100, 100));
    this.enemies.push(new Sniper(this, 100, 100));
    this.enemies.push(new Spider(this, 100, 100));
    this.enemies.push(new Troll(this, 100, 100));
    this.sprites = this.sprites.concat(this.enemies);

    // Render map
    this.map = new Map(this)
    this.map.renderMap();

    // Render sprites
    this.sprites.forEach(sprite => sprite.render(this))

    // Set colliders
    setHeroEnemyColliders(this, this.hero, this.enemies);
    this.scene.run('ui');
    this.cameras.main.startFollow(this.hero, true);
  }

  update() {
    this.hero.update(this.keys);
  }

}