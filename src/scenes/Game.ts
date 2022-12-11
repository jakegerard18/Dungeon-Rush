import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {

    }

    create() {
        const dungeon = this.make.tilemap({ key: 'n_dungeon' });
        const tileset = dungeon.addTilesetImage('dungeon_tiles', 'tiles');

        dungeon.createLayer('Floor', tileset);
        const wallsLayer = dungeon.createLayer('Walls', tileset);

        wallsLayer.setCollisionByProperty({collides: true});
        const debugGraphics = this.add.graphics().setAlpha(0.75);
        // wallsLayer.renderDebug(debugGraphics, {
        //     tileColor: null,
        //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        //     faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
        // });

        const hero = this.add.sprite(128, 128, 'hero')

        this.anims.create({
            key: 'hero-idle',
            frames: this.anims.generateFrameNames('hero', {prefix: 'hero-idle-', start: 0, end: 2 }),
            yoyo: true,
            repeat: -1,
            frameRate: 5
        })
        this.anims.create({
            key: 'hero-walk-down',
            frames: this.anims.generateFrameNames('hero', {prefix: 'hero-walk-down-', start: 0, end: 3 }),
            repeat: -1,
            frameRate: 10
        })
        this.anims.create({
            key: 'hero-walk-up',
            frames: this.anims.generateFrameNames('hero', {prefix: 'hero-walk-up-', start: 0, end: 3 }),
            repeat: -1,
            frameRate: 10
        })
        this.anims.create({
            key: 'hero-walk-right',
            frames: this.anims.generateFrameNames('hero', {prefix: 'hero-walk-right-', start: 0, end: 3 }),
            repeat: -1,
            frameRate: 10
        })

        hero.anims.play('hero-idle')
    }
}