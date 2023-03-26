import Phaser from "phaser";

interface AnimationKeys {
    MovingLeft: string,
    MovingRight: string,
    MovingUp: string,
    MovingDown: string,
    AttackingLeft: string,
    AttackingRight: string,
    AttackingUp: string,
    AttackingDown: string,
    Idle: string
}

interface BodyOffset {
    MovingLeft: number,
    MovingRight: number,
    MovingUp: number,
    MovingDown: number
    AttackingLeft: number,
    AttackingRight: number,
    AttackingUp: number,
    AttackingDown: number
}

interface Velocity {
    MovingLeft: number,
    MovingRight: number,
    MovingUp: number,
    MovingDown: number,
    AttackingLeft: number,
    AttackingRight: number,
    AttackingUp: number,
    AttackingDown: number
}

export function updateKeys(keys, sprite: Phaser.Physics.Arcade.Sprite, spriteKey: string, animationKeys: AnimationKeys, bodySizeAdjustment: number,
     bodyOffsetX: BodyOffset, bodyOffsetY: BodyOffset, velocityX: Velocity, velocityY: Velocity) {

    // Movement keys
    if (keys.left.isDown) {
        keyAction(spriteKey, sprite, animationKeys.MovingLeft, -1, bodySizeAdjustment, bodyOffsetX.MovingLeft, bodyOffsetY.MovingLeft, velocityX.MovingLeft, velocityY.MovingLeft)
    } else if (keys.right.isDown) {
        keyAction(spriteKey, sprite, animationKeys.MovingRight, 1, bodySizeAdjustment, bodyOffsetX.MovingRight, bodyOffsetY.MovingRight, velocityX.MovingRight, velocityY.MovingRight)
    } else if (keys.up.isDown) {
        keyAction(spriteKey, sprite, animationKeys.MovingUp, 1, bodySizeAdjustment, bodyOffsetX.MovingUp, bodyOffsetY.MovingUp, velocityX.MovingUp, velocityY.MovingUp)
    } else if (keys.down.isDown) {
        keyAction(spriteKey, sprite, animationKeys.MovingDown, 1, bodySizeAdjustment, bodyOffsetX.MovingDown, bodyOffsetY.MovingDown, velocityX.MovingDown, velocityY.MovingDown)

    // Attack keys
    } else if (keys.attackLeft.isDown) {
        // sprite.scaleX = -1;
        // sprite.body.setSize(sprite.width * Hero.HERO_SIZE_ADJUSTMENT + 16, sprite.height * Hero.HERO_SIZE_ADJUSTMENT);
        // sprite.body.offset.x = 46.8;
        // sprite.body.offset.y = 16.8;
        // sprite.setVelocity(0, 0);
        // sprite.anims.play(`${spriteKey}-attack-left`, true);
        keyAction(spriteKey, sprite, animationKeys.AttackingLeft, -1, bodySizeAdjustment, bodyOffsetX.AttackingLeft, bodyOffsetY.AttackingLeft, velocityX.AttackingLeft, velocityY.AttackingLeft)

    } else if (keys.attackRight.isDown) {
        // sprite.scaleX = 1;
        // sprite.body.setSize(sprite.width * Hero.HERO_SIZE_ADJUSTMENT + 16, sprite.height * Hero.HERO_SIZE_ADJUSTMENT);
        // sprite.body.offset.x = 16.8;
        // sprite.body.offset.y = 16.8;
        // sprite.setVelocity(0, 0);
        // sprite.anims.play(`${spriteKey}-attack-right`, true);
        keyAction(spriteKey, sprite, animationKeys.AttackingRight, 1, bodySizeAdjustment, bodyOffsetX.AttackingRight, bodyOffsetY.AttackingRight, velocityX.AttackingRight, velocityY.AttackingRight)

    } else if (keys.attackUp.isDown) {
        // sprite.scaleX = 1;
        // sprite.body.setSize(sprite.width * Hero.HERO_SIZE_ADJUSTMENT, sprite.height * Hero.HERO_SIZE_ADJUSTMENT + 16);
        // sprite.body.offset.x = 16.8;
        // sprite.body.offset.y = 2.8;
        // sprite.setVelocity(0, 0);
        // sprite.anims.play(`${spriteKey}-attack-up`, true);
        keyAction(spriteKey, sprite, animationKeys.AttackingUp, 1, bodySizeAdjustment, bodyOffsetX.AttackingUp, bodyOffsetY.AttackingUp, velocityX.AttackingUp, velocityY.AttackingUp)

    } else if (keys.attackDown.isDown) {
        // sprite.scaleX = 1;
        // sprite.body.setSize(sprite.width * Hero.HERO_SIZE_ADJUSTMENT, sprite.height * Hero.HERO_SIZE_ADJUSTMENT + 14);
        // sprite.body.offset.x = 16.8;
        // sprite.body.offset.y = 16.8;
        // sprite.setVelocity(0, 0);
        // sprite.anims.play(`${spriteKey}-attack-down`, true);
        keyAction(spriteKey, sprite, animationKeys.AttackingDown, 1, bodySizeAdjustment, bodyOffsetX.AttackingDown, bodyOffsetY.AttackingDown, velocityX.AttackingDown, velocityY.AttackingDown)


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

function keyAction(spriteKey: string, sprite: Phaser.Physics.Arcade.Sprite, animationKey: string,
                   scaleX: number, sizeAdjustment: number, bodyOffsetX: number, bodyOffsetY: number,
                   velocityX: number, velocityY: number) {
    sprite.scaleX = scaleX;
    sprite.body.setSize(sprite.width * sizeAdjustment, sprite.height * sizeAdjustment);
    sprite.body.offset.x = bodyOffsetX;
    sprite.body.offset.y = bodyOffsetY
    sprite.setVelocity(velocityX, velocityY);
    sprite.anims.play(animationKey, true);
}