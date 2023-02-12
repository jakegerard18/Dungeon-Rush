import Phaser from 'phaser';
import { debugDraw } from '../utils/debug';
import {createAnimations} from '../Animations';
import { addSprite } from '../SpriteHelper';
import { handleHeroSlimeCollision } from '../Collisions';
import Slime from '../sprites/Slime';
import '../sprites/Hero'

export default class Game extends Phaser.Scene {
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private hero!: Phaser.Physics.Arcade.Sprite;
    private hit = 0;

    constructor() {
        super('game');
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys();
        createAnimations(this, 'hero');
        createAnimations(this, 'slime');
    }

    create() {
        const dungeon = this.make.tilemap({ key: 'n_dungeon' });
        const tileset = dungeon.addTilesetImage('dungeon_tiles', 'tiles');
        const floorLayer = dungeon.createLayer('Floor', tileset);
        const wallLayer = dungeon.createLayer('Walls', tileset);

        this.hero = this.add.hero(60, 100, 'hero');
        const slimes = this.physics.add.group({
            classType: Slime,
            createCallback: (go) => {
                const slimeGo = go as Slime;
                slimeGo.body.onCollide = true;
                slimeGo.body.setSize(slimeGo.width * 0.3, slimeGo.height * 0.3);
            }
        })
        slimes.get(80, 100, 'slime');

        wallLayer.setCollisionByProperty({collides: true});

        this.physics.add.collider(this.hero, wallLayer);
        this.cameras.main.startFollow(this.hero, true);
        this.physics.add.collider(slimes, wallLayer);
        this.physics.add.collider(slimes, this.hero, handleHeroSlimeCollision, undefined, this);
    }



    update(t: number, dt: number) {
        if (this.hit > 0) {
            ++this.hit
            if (this.hit > 10) {
                this.hit = 0;
            }
            return;
        }
        if (this.hero) {
            this.hero.update(this.cursors);
        }
    }
}