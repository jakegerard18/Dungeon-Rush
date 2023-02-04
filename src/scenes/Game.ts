import Phaser from 'phaser';
import { debugDraw } from '../utils/debug';
import {createAnimations} from '../Animations';
import { addSprite } from '../SpriteHelper';
import { updateCursors } from '../CursorsHelper';
import Slime from '../enemies/Slime';

const OFFSET_LEFT = 30;
const OFFSET_RIGHT = 16;

export default class Game extends Phaser.Scene {
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private hero!: Phaser.Physics.Arcade.Sprite;
    private slime!: Phaser.Physics.Arcade.Sprite;
    private orc!: Phaser.Physics.Arcade.Sprite;
    private bat!: Phaser.Physics.Arcade.Sprite;
    private troll!: Phaser.Physics.Arcade.Sprite;
    private spider!: Phaser.Physics.Arcade.Sprite;
    private rat!: Phaser.Physics.Arcade.Sprite;
    private goblin!: Phaser.Physics.Arcade.Sprite;
    private sniper!: Phaser.Physics.Arcade.Sprite;

    constructor() {
        super('game');
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys();
        createAnimations(this, 'hero');
        createAnimations(this, 'slime');
        createAnimations(this, 'orc');
        createAnimations(this, 'bat');
        createAnimations(this, 'troll');
        createAnimations(this, 'spider');
        createAnimations(this, 'rat');
        createAnimations(this, 'goblin');
        createAnimations(this, 'sniper');
    }

    create() {
        const dungeon = this.make.tilemap({ key: 'n_dungeon' });
        const tileset = dungeon.addTilesetImage('dungeon_tiles', 'tiles');
        const floorLayer = dungeon.createLayer('Floor', tileset);
        const wallLayer = dungeon.createLayer('Walls', tileset);

        this.hero = addSprite(this, 'hero', 60, 100);
        const slimes = this.physics.add.group({
            classType: Slime
        })
        slimes.get(80, 100, 'slime');
        // this.orc = addSprite(this, 'orc', 100, 100);
        // this.bat = addSprite(this, 'bat', 120, 100);
        // this.troll = addSprite(this, 'troll', 140, 100);
        // this.spider = addSprite(this, 'spider', 160, 100);
        // this.rat = addSprite(this, 'rat', 180, 100);
        // this.goblin = addSprite(this, 'goblin', 200, 100);
        // this.sniper = addSprite(this, 'sniper', 220, 100);

        wallLayer.setCollisionByProperty({collides: true});

        this.physics.add.collider(this.hero, wallLayer);
        this.cameras.main.startFollow(this.hero, true);
        this.physics.add.collider(slimes, wallLayer);


        // this.orc.anims.play('orc-idle');
        // this.bat.anims.play('bat-idle');
        // this.troll.anims.play('troll-idle');
        // this.spider.anims.play('spider-idle');
        // this.rat.anims.play('rat-idle');
        // this.goblin.anims.play('goblin-idle');
        // this.sniper.anims.play('sniper-idle');
    }

    update(t: number, dt: number) {
        if (!this.cursors || !this.hero) {
            return;
        }

        const velocity = 100;
        updateCursors(this.cursors, this.hero, 'hero', velocity, OFFSET_LEFT, OFFSET_RIGHT);
    }
}