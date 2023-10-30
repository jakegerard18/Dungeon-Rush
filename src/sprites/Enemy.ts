import Phaser from 'phaser'
import { Types } from '../Types';
import { Sprite } from './Sprite';
import { sceneEvents } from '../events/EventCenter';

export class Enemy extends Sprite {
  public BODY_SIZE_ADJUSTMENT = 0.28;
  public MAX_MOVEMENT_TIME = 1000;
  public velocity = 100;
  public health = 1;

  // Set movementTime to max initially so enemies aren't idle when spawned
  public movementTime = this.MAX_MOVEMENT_TIME;
  public direction = Types.Direction.RIGHT;
  public moveEvent: Phaser.Time.TimerEvent;

  public bodyOffsetX: Types.MovementState = {
    MovingLeft : 35,
    MovingRight : 20,
    MovingUp : 16.8,
    MovingDown : 16.8,
    AttackingLeft : 46.8,
    AttackingRight : 16.8,
    AttackingUp : 16.8,
    AttackingDown : 16.8,
    Idle : 17.8
  }

  public bodyOffsetY: Types.MovementState = {
    MovingLeft : 18.8,
    MovingRight : 18.8,
    MovingUp : 16.8,
    MovingDown : 20.8,
    AttackingLeft : 14.8,
    AttackingRight : 14.8,
    AttackingUp : 5.8,
    AttackingDown : 20.8,
    Idle : 18.8
  }

  randomDirection(exclude: Types.Direction): any {
    let newDirection = Phaser.Math.Between(0, 3);
    while (newDirection === exclude) {
        newDirection = Phaser.Math.Between(0, 3);
    }
    return newDirection;
  }

  handleDamage(dir: Phaser.Math.Vector2) {
    if(this.healthState === Types.SpriteState.Damaged) {
      return
    } else {
      this.anims.play(this.animationKeys.DamagedDown);
      this.healthState = Types.SpriteState.Damaged;
      this.setVelocity(dir.x, dir.y);
      this.setTint(0xff0000);
      this.damageTime = 0;
      --this.health;
    }

    if (this.health <= 0) {
      this.healthState = Types.SpriteState.Dead;
    }
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

  destroy(fromScene?: boolean) {
    super.destroy(fromScene);
  }
}


