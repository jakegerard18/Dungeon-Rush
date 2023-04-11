import Phaser from 'phaser';
import { Types } from '../Types';
import { sceneEvents } from '../events/EventCenter';
import { Keys } from '../Keys';

export namespace Hero {
  export const KEY = 'hero';
  export const BODY_SIZE_ADJUSTMENT = 0.3;

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

		private healthState = Types.SpriteState.Idle;
		private health = 2;
		private damageTime = 0;


		constructor(scene: Phaser.Scene, x: number, y: number) {
				super(scene, x, y, Hero.KEY);
				this.anims.play('hero-idle');
        scene.add.existing(this);
        scene.physics.add.existing(this);
		}

		getHealth() {
				return this.health;
		}

		handleDamage(dir: Phaser.Math.Vector2) {
      sceneEvents.emit('player-health-changed', this.health);
			if(this.healthState === Types.SpriteState.Damaged) {
					return;
			}
			if (this.health < 0) {
					this.healthState = Types.SpriteState.Dead;
			} else {
					this.setVelocity(dir.x, dir.y);
					this.setTint(0xff0000);
					this.healthState = Types.SpriteState.Damaged;
					this.damageTime = 0;
					--this.health
			}
		}

		preUpdate(t: number, dt: number) {
				super.preUpdate(t, dt);
				switch (this.healthState) {
				case Types.SpriteState.Idle:
				    break;
				case Types.SpriteState.Damaged:
						this.damageTime += dt;
						if (this.damageTime >= 250) {
								this.healthState = Types.SpriteState.Idle;
								this.setTint(0xffffff);
								this.damageTime = 0;
						}
						break;
          case Types.SpriteState.Dead:
            // Play death animation
          break;
				}
		}

		update(keys: Types.PlayerKeys) {
				if(this.healthState === Types.SpriteState.Damaged || this.healthState === Types.SpriteState.Dead) {
				  return;
				}

				Keys.updateKeys(keys, this, AnimationKeys, this.bodyWidths, this.bodyHeights, BodyOffsetX, BodyOffsetY, VelocityX, VelocityY);
		}
	}
}
