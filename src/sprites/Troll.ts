import Phaser from 'phaser'
import { Types } from '../Types';
import { Enemy } from './Enemy';
import { sceneEvents } from '../events/EventCenter';

export class Troll extends Enemy {
  public animationKeys: Types.AnimationKeys = {
    Idle: 'troll-idle',
    MovingRight: 'troll-walk-right',
    MovingUp: 'troll-walk-up',
    MovingDown: 'troll-walk-down',
    AttackingRight: 'troll-attack-right',
    AttackingUp: 'troll-attack-up',
    AttackingDown: 'troll-attack-down',
    DamagedRight: 'troll-damage-right',
    DamagedUp: 'troll-damage-up',
    DamagedDown: 'troll-damage-down'
  }

  // Trolls get 2 health because they're tough AF
  public health = 2;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'troll');
  }

  preUpdate(t: number, dt: number): void {
    if (!this) { return; }
    super.preUpdate(t, dt);
    this.movementTime += dt;
    this.direction = this.randomDirection(this.direction);
    if(this.healthState === Types.SpriteState.Idle && this.movementTime >= this.MAX_MOVEMENT_TIME) {
      switch (this.direction) {
        case Types.Direction.UP:
          this.scaleX = 1;
          this.body.offset.x = this.bodyOffsetX.MovingUp;
          this.body.offset.y = this.bodyOffsetY.MovingUp;
          this.setVelocity(0, -this.velocity);
          this.anims.play(this.animationKeys.MovingUp);
          break;
        case Types.Direction.DOWN:
          this.scaleX = 1;
          this.body.offset.x = this.bodyOffsetX.MovingDown;
          this.body.offset.y = this.bodyOffsetY.MovingDown;
          this.setVelocity(0, this.velocity);
          this.anims.play(this.animationKeys.MovingDown);
          break;
        case Types.Direction.LEFT:
          this.scaleX = -1;
          this.body.offset.x = this.bodyOffsetX.MovingLeft;
          this.body.offset.y = this.bodyOffsetY.MovingLeft;
          this.setVelocity(-this.velocity, 0);
          this.anims.play(this.animationKeys.MovingRight);   // This is flipped
          break;
        case Types.Direction.RIGHT:
          this.scaleX = 1;
          this.body.offset.x = this.bodyOffsetX.MovingRight;
          this.body.offset.y = this.bodyOffsetY.MovingRight;
          this.setVelocity(this.velocity, 0);
          this.anims.play(this.animationKeys.MovingRight);
          break;
      }
      this.movementTime = 0;
    } else if (this.healthState === Types.SpriteState.Damaged || this.healthState === Types.SpriteState.Dead) {
      this.damageTime += dt;
    }

    if (this.damageTime >= 250) {
      if (this.healthState === Types.SpriteState.Dead) {
        sceneEvents.emit('increase-timer', 5000);
        this.destroy();
      } else {
        this.healthState = Types.SpriteState.Idle;
        this.setTint(0xffffff)
        this.damageTime = 0;
      }
    }
  }
}
