import Phaser from 'phaser'
import { debugDraw } from '../utils/debug';

const OFFSET_LEFT = 30;
const OFFSET_RIGHT = 16;

export default class Game extends Phaser.Scene {
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private hero!: Phaser.Physics.Arcade.Sprite;

    constructor() {
        super('game');
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create() {
        const dungeon = this.make.tilemap({ key: 'n_dungeon' });
        const tileset = dungeon.addTilesetImage('dungeon_tiles', 'tiles');

        dungeon.createLayer('Floor', tileset);
        const wallsLayer = dungeon.createLayer('Walls', tileset);

        wallsLayer.setCollisionByProperty({collides: true});

        this.hero = this.physics.add.sprite(128, 128, 'hero')
        this.hero.body.setSize(this.hero.width * 0.3, this.hero.height * 0.3)

        this.anims.create({
            key: 'hero-idle',
            frames: this.anims.generateFrameNames('hero', {prefix: 'hero-idle-', start: 0, end: 2 }),
            yoyo: true,
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'hero-victory',
            frames: this.anims.generateFrameNames('hero', {prefix: 'hero-victory-', start: 0, end: 2 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'hero-walk-down',
            frames: this.anims.generateFrameNames('hero', {prefix: 'hero-walk-down-', start: 0, end: 3 }),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: 'hero-walk-up',
            frames: this.anims.generateFrameNames('hero', {prefix: 'hero-walk-up-', start: 0, end: 3 }),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: 'hero-walk-right',
            frames: this.anims.generateFrameNames('hero', {prefix: 'hero-walk-right-', start: 0, end: 3 }),
            repeat: -1,
            frameRate: 10
        });
        this.anims.create({
            key: 'hero-walk-left',
            frames: this.anims.generateFrameNames('hero', {prefix: 'hero-walk-right-', start: 0, end: 3 }),
            repeat: -1,
            frameRate: 10
        });

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
            this.hero.anims.play('hero-idle');
            this.hero.setVelocity(0, 0);
        }
    }
}