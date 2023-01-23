import Phaser from 'phaser';
import { debugDraw } from '../utils/debug';
import {createHeroAnims, createSlimeAnims} from '../Animations';

const OFFSET_LEFT = 30;
const OFFSET_RIGHT = 16;

export default class Game extends Phaser.Scene {
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private hero!: Phaser.Physics.Arcade.Sprite;
    private slime!: Phaser.Physics.Arcade.Sprite;

    constructor() {
        super('game');
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys();
        createHeroAnims(this);
        // createSlimeAnims(this);
    }

    create() {
        const dungeon = this.make.tilemap({ key: 'n_dungeon' });
        const tileset = dungeon.addTilesetImage('dungeon_tiles', 'tiles');

        dungeon.createLayer('Floor', tileset);
        const wallsLayer = dungeon.createLayer('Walls', tileset);

        wallsLayer.setCollisionByProperty({collides: true});

        this.hero = this.physics.add.sprite(128, 128, 'hero');
        this.hero.body.setSize(this.hero.width * 0.3, this.hero.height * 0.3)

        this.physics.add.collider(this.hero, wallsLayer);
        this.cameras.main.startFollow(this.hero, true);
    }

    update(t: number, dt: number) {
        if (!this.cursors || !this.hero) {
            return;
        }

        const speed = 100;

        if (this.cursors.left.isDown) {
            this.hero.anims.play('hero-walk-left', true);
            this.hero.scaleX = -1;
            this.hero.body.offset.x = OFFSET_LEFT;
            this.hero.setVelocity(-speed, 0);
        } else if (this.cursors.right.isDown) {
            this.hero.anims.play('hero-walk-right', true);
            this.hero.scaleX = 1;
            this.hero.body.offset.x = OFFSET_RIGHT;
            this.hero.setVelocity(speed, 0);
        } else if (this.cursors.up.isDown) {
            this.hero.anims.play('hero-walk-up', true);
            this.hero.setVelocity(0, -speed);
        } else if (this.cursors.down.isDown) {
            this.hero.anims.play('hero-walk-down', true);
            this.hero.setVelocity(0, speed);
        } else {
            this.hero.anims.play('hero-idle', true);
            this.hero.setVelocity(0, 0);
        }
    }
}