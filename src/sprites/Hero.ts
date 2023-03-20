import Phaser from 'phaser'
import { updateKeys } from '../KeysHelper';

const VELOCITY = 100;

declare global {
    namespace Phaser.GameObjects {
        interface GameObjectFactory {
            hero(x: number, y: number, texture: string, frame?: string | number): Hero;
        }
    }
}

enum HealthState {
    IDLE,
    DAMAGE,
    DEAD
}

export default class Hero extends Phaser.Physics.Arcade.Sprite {
    private healthState = HealthState.IDLE;
    private damageTime = 0;
    private _health = 3;

    get health() {
        return this._health;
    }

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);
        this.anims.play('hero-idle');
    }

    handleDamage(dir: Phaser.Math.Vector2) {
        if(this.healthState === HealthState.DAMAGE) {
            return;
        }
        if (this._health < 0) {
            this.healthState = HealthState.DEAD;
        } else {
            this.setVelocity(dir.x, dir.y);
            this.setTint(0xff0000);
            this.healthState = HealthState.DAMAGE;
            this.damageTime = 0;
            --this._health
        }
    }

    preUpdate(t: number, dt: number) {
        super.preUpdate(t, dt);

        switch (this.healthState) {
        case HealthState.IDLE:
            break;

        case HealthState.DAMAGE:
            this.damageTime += dt;
            if (this.damageTime >= 250) {
                this.healthState = HealthState.IDLE;
                this.setTint(0xffffff);
                this.damageTime = 0;
            }
            break;
        }
    }

    update(keys) {
        if(this.healthState === HealthState.DAMAGE
           || this.healthState === HealthState.DEAD) {
            return;
        }
        updateKeys(keys, this, 'hero', VELOCITY);
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