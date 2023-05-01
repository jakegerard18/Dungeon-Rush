import Phaser from 'phaser'
import { Types } from '../Types';
import { Keys } from '../Keys';

export class Bat extends Phaser.Physics.Arcade.Sprite {
  private MAX_MOVEMENT_TIME = 500;
  private animationKeys = Bat.AnimationKeys;
  private healthState = Types.SpriteState.Idle;
  private health = 2;
  private damageTime = 0;
  private velocity = 100;
  private movementTime = 0;
  private direction = Types.Direction.RIGHT;
  private moveEvent: Phaser.Time.TimerEvent;

  private adjustedWidths = {
    MovingLeft: this.width * Bat.BODY_SIZE_ADJUSTMENT + 2,
    MovingRight: this.width * Bat.BODY_SIZE_ADJUSTMENT + 2,
    MovingUp: this.width * Bat.BODY_SIZE_ADJUSTMENT,
    MovingDown: this.width * Bat.BODY_SIZE_ADJUSTMENT,
    AttackingLeft: (this.width * Bat.BODY_SIZE_ADJUSTMENT) + 16,
    AttackingRight: (this.width * Bat.BODY_SIZE_ADJUSTMENT) + 16,
    AttackingUp: this.width * Bat.BODY_SIZE_ADJUSTMENT,
    AttackingDown: this.width * Bat.BODY_SIZE_ADJUSTMENT,
    Idle: this.width * Bat.BODY_SIZE_ADJUSTMENT
  }

  private adjustedHeights = {
    MovingLeft: this.height * Bat.BODY_SIZE_ADJUSTMENT,
    MovingRight: this.height * Bat.BODY_SIZE_ADJUSTMENT,
    MovingUp: this.height * Bat.BODY_SIZE_ADJUSTMENT,
    MovingDown: this.height * Bat.BODY_SIZE_ADJUSTMENT,
    AttackingLeft: this.height * Bat.BODY_SIZE_ADJUSTMENT + 2,
    AttackingRight: this.height * Bat.BODY_SIZE_ADJUSTMENT + 2,
    AttackingUp: (this.height * Bat.BODY_SIZE_ADJUSTMENT) + 16,
    AttackingDown: (this.height * Bat.BODY_SIZE_ADJUSTMENT) + 12,
    Idle: this.height * Bat.BODY_SIZE_ADJUSTMENT
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, Bat.KEY);
    this.init(scene);
  }

  init(scene: Phaser.Scene) {
    this.anims.play(this.animationKeys.Idle);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setSize(this.body.width * 0.3, this.body.height * 0.3);
  }

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
      this.anims.play(this.animationKeys.DamagedDown);
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
    if(this.healthState === Types.SpriteState.Idle && this.movementTime >= this.MAX_MOVEMENT_TIME) {
      switch (this.direction) {
        case Types.Direction.UP:
          this.scaleX = 1;
          this.body.offset.x = Bat.BodyOffsetX.MovingUp;
          this.body.offset.y = Bat.BodyOffsetY.MovingUp;
          this.setVelocity(0, -this.velocity);
          this.anims.play(this.animationKeys.MovingUp);
          break;
        case Types.Direction.DOWN:
          this.scaleX = 1;
          this.body.offset.x = Bat.BodyOffsetX.MovingDown;
          this.body.offset.y = Bat.BodyOffsetY.MovingDown;
          this.setVelocity(0, this.velocity);
          this.anims.play(this.animationKeys.MovingDown);
          break;
        case Types.Direction.LEFT:
          this.scaleX = -1;
          this.body.offset.x = Bat.BodyOffsetX.MovingLeft;
          this.body.offset.y = Bat.BodyOffsetY.MovingLeft;
          this.setVelocity(-this.velocity, 0);
          this.anims.play(this.animationKeys.MovingRight);   // This is flipped
          break;
        case Types.Direction.RIGHT:
          this.scaleX = 1;
          this.body.offset.x = Bat.BodyOffsetX.MovingRight;
          this.body.offset.y = Bat.BodyOffsetY.MovingRight;
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
  // update(keys: Types.PlayerKeys) {
  //   if(this.healthState === Types.SpriteState.Damaged || this.healthState === Types.SpriteState.Dead) {
  //     return;
  //   }

  //   Keys.updateKeys(keys, this, Bat.AnimationKeys, this.adjustedWidths, this.adjustedHeights, Bat.BodyOffsetX, Bat.BodyOffsetY, Bat.VelocityX, Bat.VelocityY);
  // }
}

export namespace Bat {

  export const KEY = 'bat';
  export const BODY_SIZE_ADJUSTMENT = 0.28;
  export const MAX_MOVEMENT_TIME = 1000;

  export enum AnimationKeys {
    Idle = 'bat-idle',
    MovingRight = 'bat-walk-right',
    MovingUp = 'bat-walk-up',
    MovingDown = 'bat-walk-down',
    AttackingRight = 'bat-attack-right',
    AttackingUp = 'bat-attack-up',
    AttackingDown = 'bat-attack-down',
    DamagedRight = 'bat-damage-right',
    DamagedUp = 'bat-damage-up',
    DamagedDown = 'bat-damage-down'
  }

  export enum BodyOffsetX {
    MovingLeft = 35,
    MovingRight = 20,
    MovingUp = 16.8,
    MovingDown = 16.8,
    AttackingLeft = 46.8,
    AttackingRight = 16.8,
    AttackingUp = 16.8,
    AttackingDown = 16.8,
    Idle = 17.8
  };

  export enum BodyOffsetY {
    MovingLeft = 18.8,
    MovingRight = 18.8,
    MovingUp = 16.8,
    MovingDown = 20.8,
    AttackingLeft = 14.8,
    AttackingRight = 14.8,
    AttackingUp = 5.8,
    AttackingDown = 20.8,
    Idle = 18.8
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
}


