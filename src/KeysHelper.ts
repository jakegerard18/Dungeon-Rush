import Phaser from "phaser";

export function updateKeys(keys, sprite: Phaser.Physics.Arcade.Sprite, spriteKey: string, velocity: number,
                           OFFSET_LEFT: number, OFFSET_RIGHT: number) {
    // Movement keys
    if (keys.left.isDown) {
        sprite.anims.play(`${spriteKey}-walk-left`, true);
        sprite.scaleX = -1;
        sprite.body.offset.x = OFFSET_LEFT;
        sprite.setVelocity(-velocity, 0);
    } else if (keys.right.isDown) {
        sprite.anims.play(`${spriteKey}-walk-right`, true);
        sprite.scaleX = 1;
        sprite.body.offset.x = OFFSET_RIGHT;
        sprite.setVelocity(velocity, 0);
    } else if (keys.up.isDown) {
        sprite.anims.play(`${spriteKey}-walk-up`, true);
        sprite.setVelocity(0, -velocity);
    } else if (keys.down.isDown) {
        sprite.anims.play(`${spriteKey}-walk-down`, true);
        sprite.setVelocity(0, velocity);

    // Attack keys
    } else if (keys.attackLeft.isDown) {
        sprite.anims.play(`${spriteKey}-attack-left`, true);
        sprite.scaleX = -1;
        sprite.body.offset.x = OFFSET_LEFT;
    } else if (keys.attackRight.isDown) {
        sprite.anims.play(`${spriteKey}-attack-right`, true);
        sprite.scaleX = 1;
        sprite.body.offset.x = OFFSET_RIGHT;
    } else if (keys.attackUp.isDown) {
        sprite.anims.play(`${spriteKey}-attack-up`, true);
    } else if (keys.attackDown.isDown) {
        sprite.anims.play(`${spriteKey}-attack-down`, true);
    } else {
        sprite.anims.play(`${spriteKey}-idle`, true);
        sprite.setVelocity(0, 0);
    }
}