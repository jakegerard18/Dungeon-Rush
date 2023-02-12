import Phaser from 'phaser'
import { updateCursors } from '../CursorsHelper';

const OFFSET_LEFT = 30;
const OFFSET_RIGHT = 16;
const VELOCITY = 100;

declare global {
    namespace Phaser.GameObjects {
        interface GameObjectFactory {
            hero(x: number, y: number, texture: string, frame?: string | number): Hero;
        }
    }
}

export default class Hero extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);
        this.anims.play('hero-idle');
    }

    update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
        updateCursors(cursors, this, 'hero', VELOCITY, OFFSET_LEFT, OFFSET_RIGHT);
    }
}

Phaser.GameObjects.GameObjectFactory.register('hero',
    function(this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, texture: string, frame?: string | number) {
        let sprite = new Hero(this.scene, x, y, texture, frame);
        this.displayList.add(sprite);
        this.updateList.add(sprite);
        this.scene.physics.world.enableBody(sprite, Phaser.Physics.Arcade.DYNAMIC_BODY);
        sprite.body.setSize(sprite.width * 0.3, sprite.height * 0.3);
        return sprite;
    })