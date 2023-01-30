import Phaser from "phaser";

export function updateCursors(cursors: Phaser.Types.Input.Keyboard.CursorKeys,
                              sprite: Phaser.Physics.Arcade.Sprite, spriteKey: string, velocity: number,
                              OFFSET_LEFT: number, OFFSET_RIGHT: number) {
    if (cursors.left.isDown) {
        sprite.anims.play(`${spriteKey}-walk-left`, true);
        sprite.scaleX = -1;
        sprite.body.offset.x = OFFSET_LEFT;
        sprite.setVelocity(-velocity, 0);
    } else if (cursors.right.isDown) {
        sprite.anims.play(`${spriteKey}-walk-right`, true);
        sprite.scaleX = 1;
        sprite.body.offset.x = OFFSET_RIGHT;
        sprite.setVelocity(velocity, 0);
    } else if (cursors.up.isDown) {
        sprite.anims.play(`${spriteKey}-walk-up`, true);
        sprite.setVelocity(0, -velocity);
    } else if (cursors.down.isDown) {
        sprite.anims.play(`${spriteKey}-walk-down`, true);
        sprite.setVelocity(0, velocity);
    } else {
        sprite.anims.play(`${spriteKey}-idle`, true);
        sprite.setVelocity(0, 0);
    }
}