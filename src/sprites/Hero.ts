import Phaser from 'phaser';
import { Types } from '../Types';
import { sceneEvents } from '../events/EventCenter';
import { Keys } from '../Keys';
import { Sprite } from './Sprite';

export class Hero extends Sprite {
  public BODY_SIZE_ADJUSTMENT = 0.3;
  public animationKeys: Types.AnimationKeys = {
    Idle: 'hero-idle',
    MovingRight: 'hero-walk-right',
    MovingUp: 'hero-walk-up',
    MovingDown: 'hero-walk-down',
    AttackingRight: 'hero-attack-right',
    AttackingUp: 'hero-attack-up',
    AttackingDown: 'hero-attack-down',
    DamagedRight: 'hero-damaged-right',
    DamagedUp: 'hero-damaged-up',
    DamagedDown: 'hero-damaged-down'
  }

  public bodyOffsetX: Types.MovementState = {
    MovingLeft: 30.8,
    MovingRight: 16.8,
    MovingUp: 16.8,
    MovingDown: 16.8,
    AttackingLeft: 46.8,
    AttackingRight: 16.8,
    AttackingUp: 16.8,
    AttackingDown: 16.8,
    Idle: 16.8
  };

  public bodyOffsetY: Types.MovementState = {
    MovingLeft: 16.8,
    MovingRight: 16.8,
    MovingUp : 16.8,
    MovingDown: 16.8,
    AttackingLeft: 16.8,
    AttackingRight: 16.8,
    AttackingUp: 2.8,
    AttackingDown: 16.8,
    Idle: 16.8
  };

  public velocityX: Types.MovementState = {
    MovingLeft: -100,
    MovingRight: 100,
    MovingUp: 0,
    MovingDown: 0,
    AttackingLeft: 0,
    AttackingRight: 0,
    AttackingUp: 0,
    AttackingDown: 0,
    Idle: 0
  }

  public velocityY: Types.MovementState = {
    MovingLeft: 0,
    MovingRight: 0,
    MovingUp: -100,
    MovingDown: 100,
    AttackingLeft: 0,
    AttackingRight: 0,
    AttackingUp: 0,
    AttackingDown: 0,
    Idle: 0
  }

  public adjustedWidths = {
    MovingLeft: this.width * this.BODY_SIZE_ADJUSTMENT,
    MovingRight: this.width * this.BODY_SIZE_ADJUSTMENT,
    MovingUp: this.width * this.BODY_SIZE_ADJUSTMENT,
    MovingDown: this.width * this.BODY_SIZE_ADJUSTMENT,
    AttackingLeft: (this.width * this.BODY_SIZE_ADJUSTMENT) + 16,
    AttackingRight: (this.width * this.BODY_SIZE_ADJUSTMENT) + 16,
    AttackingUp: this.width * this.BODY_SIZE_ADJUSTMENT,
    AttackingDown: this.width * this.BODY_SIZE_ADJUSTMENT,
    Idle: this.width * this.BODY_SIZE_ADJUSTMENT
  }

  public adjustedHeights = {
    MovingLeft: this.height * this.BODY_SIZE_ADJUSTMENT,
    MovingRight: this.height * this.BODY_SIZE_ADJUSTMENT,
    MovingUp: this.height * this.BODY_SIZE_ADJUSTMENT,
    MovingDown: this.height * this.BODY_SIZE_ADJUSTMENT,
    AttackingLeft: this.height * this.BODY_SIZE_ADJUSTMENT,
    AttackingRight: this.height * this.BODY_SIZE_ADJUSTMENT,
    AttackingUp: (this.height * this.BODY_SIZE_ADJUSTMENT) + 16,
    AttackingDown: (this.height * this.BODY_SIZE_ADJUSTMENT) + 12,
    Idle: this.height * this.BODY_SIZE_ADJUSTMENT
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'hero');
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

    Keys.updateKeys(keys, this, this.animationKeys, this.adjustedWidths, this.adjustedHeights, this.bodyOffsetX, this.bodyOffsetY, this.velocityX, this.velocityY);
  }
}
