import Phaser from 'phaser'

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

export default class Slime extends Phaser.Physics.Arcade.Sprite {
    private velocity = 100;
    private direction = Direction.RIGHT;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);
    }

    preUpdate(time: number, delta: number): void {
        super.preUpdate(time, delta);
        switch (this.direction) {
            case Direction.UP:
                this.setVelocity(0, -this.velocity);
                this.anims.play('slime-walk-up');
                break;
            case Direction.DOWN:
                this.setVelocity(0, this.velocity);
                this.anims.play('slime-walk-down');
                break;
            case Direction.LEFT:
                this.setVelocity(-this.velocity, 0);
                this.anims.play('slime-walk-left');
                break;
            case Direction.RIGHT:
                this.setVelocity(this.velocity, 0);
                this.anims.play('slime-walk-right');
                break;
        }
    }
}
