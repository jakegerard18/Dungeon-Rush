import Phaser from 'phaser'
import { updateKeys } from '../KeysHelper';

export namespace Hero {
  export const SPRITE_KEY = 'hero';
  export const BODY_SIZE_ADJUSTMENT = 0.3;

  export enum HealthState {
    IDLE,
    DAMAGE,
    DEAD
  };

  export enum AnimationKeys {
    MovingLeft = 'hero-walk-left',
    MovingRight = 'hero-walk-right',
    MovingUp = 'hero-walk-up',
    MovingDown = 'hero-walk-down',
    AttackingLeft = 'hero-attack-left',
    AttackingRight = 'hero-attack-right',
    AttackingUp = 'hero-attack-up',
    AttackingDown = 'hero-attack-down',
    Idle = 'hero-idle'
}

  export enum BodyOffsetX {
    MovingLeft = 30.8,
    MovingRight = 16.8,
    MovingUp = 16.8,
    MovingDown = 16.8,
    AttackingLeft = 46.8,
    AttackingRight = 16.8,
    AttackingUp = 16.8,
    AttackingDown = 16.8,
    Idle = 16.8
  };

  export enum BodyOffsetY {
    MovingLeft = 16.8,
    MovingRight = 16.8,
    MovingUp = 16.8,
    MovingDown = 16.8,
    AttackingLeft = 16.8,
    AttackingRight = 16.8,
    AttackingUp = 2.8,
    AttackingDown = 16.8,
    Idle = 16.8
  };

  export enum VelocityX {
    MovingLeft = -100,
    MovingRight = 100,
    MovingUp = 0,
    MovingDown = 0,
    AttackingLeft = 0,
    AttackingRight = 0,
    AttackingUp = 0,
    AttackingDown = 0,
    Idle = 0
  }

  export enum VelocityY {
    MovingLeft = 0,
    MovingRight = 0,
    MovingUp = -100,
    MovingDown = 100,
    AttackingLeft = 0,
    AttackingRight = 0,
    AttackingUp = 0,
    AttackingDown = 0,
    Idle = 0
  }

  export class HeroClass extends Phaser.Physics.Arcade.Sprite {
    private bodyWidths = {
      MovingLeft: this.width * BODY_SIZE_ADJUSTMENT,
      MovingRight: this.width * BODY_SIZE_ADJUSTMENT,
      MovingUp: this.width * BODY_SIZE_ADJUSTMENT,
      MovingDown: this.width * BODY_SIZE_ADJUSTMENT,
      AttackingLeft: (this.width * BODY_SIZE_ADJUSTMENT) + 16,
      AttackingRight: (this.width * BODY_SIZE_ADJUSTMENT) + 16,
      AttackingUp: this.width * BODY_SIZE_ADJUSTMENT,
      AttackingDown: this.width * BODY_SIZE_ADJUSTMENT,
      Idle: this.width * BODY_SIZE_ADJUSTMENT
    }

    private bodyHeights = {
      MovingLeft: this.height * BODY_SIZE_ADJUSTMENT,
      MovingRight: this.height * BODY_SIZE_ADJUSTMENT,
      MovingUp: this.height * BODY_SIZE_ADJUSTMENT,
      MovingDown: this.height * BODY_SIZE_ADJUSTMENT,
      AttackingLeft: this.height * BODY_SIZE_ADJUSTMENT,
      AttackingRight: this.height * BODY_SIZE_ADJUSTMENT,
      AttackingUp: (this.height * BODY_SIZE_ADJUSTMENT) + 16,
      AttackingDown: (this.height * BODY_SIZE_ADJUSTMENT) + 12,
      Idle: this.height * BODY_SIZE_ADJUSTMENT
    }

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
				updateKeys(keys, this, AnimationKeys, this.bodyWidths, this.bodyHeights, BodyOffsetX, BodyOffsetY, VelocityX, VelocityY);
		}
	}
}

declare global {
	namespace Phaser.GameObjects {
			interface GameObjectFactory {
					hero(x: number, y: number, texture: string, frame?: string | number): Hero.HeroClass;
			}
	}
}

Phaser.GameObjects.GameObjectFactory.register('hero', registerHeroCallback);

function registerHeroCallback(this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, texture: string, frame?: string | number) {
	let sprite = new Hero.HeroClass(this.scene, x, y, texture, frame);
	this.displayList.add(sprite);
	this.updateList.add(sprite);
	this.scene.physics.world.enableBody(sprite, Phaser.Physics.Arcade.DYNAMIC_BODY);
	sprite.body.setSize(sprite.width * Hero.BODY_SIZE_ADJUSTMENT, sprite.height * Hero.BODY_SIZE_ADJUSTMENT);
	return sprite;
}
