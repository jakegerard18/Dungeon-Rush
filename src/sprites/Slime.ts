import Phaser from 'phaser'
import { Types } from '../Types';

export class Slime extends Phaser.Physics.Arcade.Sprite {
  private healthState = Types.SpriteState.Idle;
  private health = 2;
  private damageTime = 0;
  private velocity = 100;
  private movementTime = 0;
  private direction = Slime.Direction.RIGHT;
  private moveEvent: Phaser.Time.TimerEvent;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, Slime.KEY);
    this.initSlime(scene);
  }

  initSlime(scene: Phaser.Scene) {
    this.anims.play(Slime.AnimationKeys.Idle);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setSize(this.body.width * 0.3, this.body.height * 0.3);
  }

  randomDirection(exclude: Slime.Direction) {
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
    if(this.healthState === Types.SpriteState.Idle && this.movementTime >= Slime.MOVEMENT_TIME) {
      switch (this.direction) {
        case Slime.Direction.UP:
            this.setVelocity(0, -this.velocity);
            this.anims.play(Slime.AnimationKeys.MovingUp);
            break;
        case Slime.Direction.DOWN:
            this.setVelocity(0, this.velocity);
            this.anims.play(Slime.AnimationKeys.MovingDown);
            break;
        case Slime.Direction.LEFT:
            this.scaleX = -1;
            this.setVelocity(-this.velocity, 0);
            this.anims.play(Slime.AnimationKeys.MovingRight);
            break;
        case Slime.Direction.RIGHT:
            this.scaleX = 1;
            this.setVelocity(this.velocity, 0);
            this.anims.play(Slime.AnimationKeys.MovingRight);
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

export namespace Slime {
  export const KEY = 'slime';
  export const MOVEMENT_TIME = 500;

  export enum AnimationKeys {
    Idle = 'slime-idle',
    MovingRight = 'slime-walk-right',
    MovingUp = 'slime-walk-up',
    MovingDown = 'slime-walk-down',
    AttackingRight = 'slime-attack-right',
    AttackingUp = 'slime-attack-up',
    AttackingDown = 'slime-attack-down'
  }

  export enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
  }
}


