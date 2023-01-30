import Phaser from 'phaser';
import { debugDraw } from '../utils/debug';
import {createAnimations} from '../Animations';
import { addSprite } from '../SpriteHelper';
import { updateCursors } from '../CursorsHelper';

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

        this.hero = addSprite(this, 'hero', 100, 100);
        this.slime = addSprite(this, 'slime', 200, 100);
        this.orc = addSprite(this, 'orc', 300, 100);
        this.bat = addSprite(this, 'bat', 400, 100);
        this.troll = addSprite(this, 'troll', 500, 100);
        this.spider = addSprite(this, 'spider', 600, 100);
        this.rat = addSprite(this, 'rat', 700, 100);
        this.goblin = addSprite(this, 'goblin', 800, 100);
        this.sniper = addSprite(this, 'sniper', 900, 100);

        wallLayer.setCollisionByProperty({collides: true});

        this.physics.add.collider(this.hero, wallLayer);
        this.cameras.main.startFollow(this.hero, true);
    }

    update(t: number, dt: number) {
        if (!this.cursors || !this.hero) {
            return;
        }

        const velocity = 100;
        updateCursors(this.cursors, this.hero, 'hero', velocity, OFFSET_LEFT, OFFSET_RIGHT);
        updateCursors(this.cursors, this.slime, 'slime', velocity, OFFSET_LEFT, OFFSET_RIGHT);
        updateCursors(this.cursors, this.orc, 'orc', velocity, OFFSET_LEFT, OFFSET_RIGHT);
        updateCursors(this.cursors, this.bat, 'bat', velocity, OFFSET_LEFT, OFFSET_RIGHT);
        updateCursors(this.cursors, this.troll, 'troll', velocity, OFFSET_LEFT, OFFSET_RIGHT);
        updateCursors(this.cursors, this.spider, 'spider', velocity, OFFSET_LEFT, OFFSET_RIGHT);
        updateCursors(this.cursors, this.rat, 'rat', velocity, OFFSET_LEFT, OFFSET_RIGHT);
        updateCursors(this.cursors, this.goblin, 'goblin', velocity, OFFSET_LEFT, OFFSET_RIGHT);
        updateCursors(this.cursors, this.sniper, 'sniper', velocity, OFFSET_LEFT, OFFSET_RIGHT);

    }
}