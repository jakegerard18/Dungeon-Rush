import Phaser from 'phaser'
import { Types } from '../Types';

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  public MOVEMENT_TIME = 500;
  public animationKeys: Types.AnimationKeys;
  public healthState = Types.SpriteState.Idle;
  public health = 2;
  public damageTime = 0;
  public velocity = 100;
  public movementTime = 0;
  public direction = Types.Direction.RIGHT;
  public moveEvent: Phaser.Time.TimerEvent;

  init(scene: Phaser.Scene) {}

  randomDirection(exclude: Types.Direction) {
    let newDirection = Phaser.Math.Between(0, 3);
    while (newDirection === exclude) {
        newDirection = Phaser.Math.Between(0, 3);
    }
    return newDirection;
  }

  handleDamage(dir: Phaser.Math.Vector2) {
    if(this.healthState === Types.SpriteState.Damaged) {
      return
    } else if (this.health < 0) {
      this.healthState = Types.SpriteState.Dead;
    } else {
      this.healthState = Types.SpriteState.Damaged;
      this.setVelocity(dir.x, dir.y);
      this.setTint(0xff0000);
      this.damageTime = 0;
      --this.health;
    }
  }

  preUpdate(t: number, dt: number): void {
    super.preUpdate(t, dt);
    this.movementTime += dt;
    this.direction = this.randomDirection(this.direction);
    if(this.healthState === Types.SpriteState.Idle && this.movementTime >= this.MOVEMENT_TIME) {
      switch (this.direction) {
        case Types.Direction.UP:
            this.setVelocity(0, -this.velocity);
            this.anims.play(this.animationKeys.MovingUp);
            break;
        case Types.Direction.DOWN:
            this.setVelocity(0, this.velocity);
            this.anims.play(this.animationKeys.MovingDown);
            break;
        case Types.Direction.LEFT:
            this.scaleX = -1;
            this.setVelocity(-this.velocity, 0);
            this.anims.play(this.animationKeys.MovingRight);
            break;
        case Types.Direction.RIGHT:
            this.scaleX = 1;
            this.setVelocity(this.velocity, 0);
            this.anims.play(this.animationKeys.MovingRight);
            break;
      }
      this.movementTime = 0;
    } else if (this.healthState === Types.SpriteState.Damaged) {
      this.damageTime += dt;
      if (this.damageTime >= 250) {
        this.healthState = Types.SpriteState.Idle;
        this.setTint(0xffffff)
        this.damageTime = 0;
      }
    }
  }

  destroy(fromScene?: boolean) {
    this.moveEvent.destroy();
    super.destroy(fromScene);
  }
}


