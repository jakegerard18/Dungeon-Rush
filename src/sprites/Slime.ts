import Phaser from 'phaser'
import { Types } from '../Types';

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

const randomDirection = (exclude: Direction) => {
    let newDirection = Phaser.Math.Between(0, 3);
    while (newDirection === exclude) {
        newDirection = Phaser.Math.Between(0, 3);
    }

    return newDirection;
}

export default class Slime extends Phaser.Physics.Arcade.Sprite {
    private healthState = Types.SpriteState.Idle;
    private health = 2;
    private damageTime = 0;
    private velocity = 100;
    private direction = Direction.RIGHT;
    private moveEvent: Phaser.Time.TimerEvent;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);
        this.anims.play('slime-idle');
        scene.physics.world.on(Phaser.Physics.Arcade.Events.TILE_COLLIDE, this.handleTileCollision, this);
        this.moveEvent = scene.time.addEvent({
            delay: 2000,
            callback: () => {
                this.direction = randomDirection(this.direction);
            },
            loop: true
        })
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

    destroy(fromScene?: boolean) {
        this.moveEvent.destroy();
        super.destroy(fromScene);
    }

    private handleTileCollision(go: Phaser.GameObjects.GameObject, tile: Phaser.Tilemaps.Tile) {
        if(go !== this) {
            return;
        }

        this.direction = randomDirection(this.direction);
    }

    preUpdate(t: number, dt: number): void {
      super.preUpdate(t, dt);
      switch(this.healthState) {
        case Types.SpriteState.Idle:
          break;
        case Types.SpriteState.Damaged:
          this.damageTime += dt;
          if (this.damageTime >= 250) {
            this.healthState = Types.SpriteState.Idle;
            this.setTint(0xffffff)
            this.damageTime = 0;
          }
          break;
      }

      if (this.healthState === Types.SpriteState.Idle) {
          switch (this.direction) {
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
      }

    }
}
