import Phaser from "phaser";

export function updateKeys(keys, sprite: Phaser.Physics.Arcade.Sprite, spriteKey: string, velocity: number) {

    // Movement keys
    if (keys.left.isDown) {
        sprite.scaleX = -1;
        sprite.body.setSize(sprite.width * 0.3, sprite.height * 0.3);
        sprite.body.offset.x = 30.8;
        sprite.body.offset.y = 16.8
        sprite.setVelocity(-velocity, 0);
        sprite.anims.play(`${spriteKey}-walk-left`, true);
    } else if (keys.right.isDown) {
        sprite.scaleX = 1;
        sprite.body.setSize(sprite.width * 0.3, sprite.height * 0.3);
        sprite.body.offset.x = 16.8;
        sprite.body.offset.y = 16.8
        sprite.setVelocity(velocity, 0);
        sprite.anims.play(`${spriteKey}-walk-right`, true);
    } else if (keys.up.isDown) {
        sprite.scaleX = 1;
        sprite.body.setSize(sprite.width * 0.3, sprite.height * 0.3);
        sprite.body.offset.x = 16.8;
        sprite.body.offset.y = 16.8
        sprite.setVelocity(0, -velocity);
        sprite.anims.play(`${spriteKey}-walk-up`, true);
    } else if (keys.down.isDown) {
        sprite.scaleX = 1;
        sprite.body.setSize(sprite.width * 0.3, sprite.height * 0.3);
        sprite.body.offset.x = 16.8;
        sprite.body.offset.y = 16.8
        sprite.setVelocity(0, velocity);
        sprite.anims.play(`${spriteKey}-walk-down`, true);

    // Attack keys
    } else if (keys.attackLeft.isDown) {
        sprite.scaleX = -1;
        sprite.body.setSize(sprite.width * 0.3 + 16, sprite.height * 0.3);
        sprite.body.offset.x = 46.8;
        sprite.body.offset.y = 16.8;
        sprite.setVelocity(0, 0);
        sprite.anims.play(`${spriteKey}-attack-left`, true);
    } else if (keys.attackRight.isDown) {
        sprite.scaleX = 1;
        sprite.body.setSize(sprite.width * 0.3 + 16, sprite.height * 0.3);
        sprite.body.offset.x = 16.8;
        sprite.body.offset.y = 16.8;
        sprite.setVelocity(0, 0);
        sprite.anims.play(`${spriteKey}-attack-right`, true);
    } else if (keys.attackUp.isDown) {
        sprite.scaleX = 1;
        sprite.body.setSize(sprite.width * 0.3, sprite.height * 0.3 + 16);
        sprite.body.offset.x = 16.8;
        sprite.body.offset.y = 2.8;
        sprite.setVelocity(0, 0);
        sprite.anims.play(`${spriteKey}-attack-up`, true);
    } else if (keys.attackDown.isDown) {
        sprite.scaleX = 1;
        sprite.body.setSize(sprite.width * 0.3, sprite.height * 0.3 + 14);
        sprite.body.offset.x = 16.8;
        sprite.body.offset.y = 16.8;
        sprite.setVelocity(0, 0);
        sprite.anims.play(`${spriteKey}-attack-down`, true);

    // Idle
    } else {
        sprite.scaleX = 1;
        sprite.body.setSize(sprite.width * 0.3, sprite.height * 0.3);
        sprite.body.offset.x = 16.8;
        sprite.body.offset.y = 16.8
        sprite.setVelocity(0, 0);
        sprite.anims.play(`${spriteKey}-idle`, true);
    }
}