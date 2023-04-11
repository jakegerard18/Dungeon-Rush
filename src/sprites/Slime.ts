import Phaser from 'phaser'
import { Types } from '../Types';

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

export default class Slime extends Phaser.Physics.Arcade.Sprite {
  private healthState = Types.SpriteState.Idle;
  private health = 2;
  private damageTime = 0;
  private velocity = 100;
  private direction = Direction.RIGHT;
  private moveEvent: Phaser.Time.TimerEvent;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'slime');
    this.initSlime(scene);
  }

  initSlime(scene: Phaser.Scene) {
    this.anims.play('slime-idle');
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setSize(this.body.width * 0.3, this.body.height * 0.3);
  }

  randomDirection(exclude: Direction) {
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
    if(this.healthState === Types.SpriteState.Idle) {
      let direction = this.randomDirection(this.direction);
      switch (direction) {
        case Direction.UP:
            this.setVelocity(0, -this.velocity);
            break;
        case Direction.DOWN:
            this.setVelocity(0, this.velocity);
            break;
        case Direction.LEFT:
            this.setVelocity(-this.velocity, 0);
            break;
        case Direction.RIGHT:
            this.setVelocity(this.velocity, 0);
            break;
      }
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
