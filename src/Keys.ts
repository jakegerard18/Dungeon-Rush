import Phaser from "phaser";
import { Types } from "./Types"

export namespace Keys {

    enum VerticalAxis {
        Standard = 1,
        Flipped = -1
    }
    enum playerKeyCodes {
        up = Phaser.Input.Keyboard.KeyCodes.W,
        down = Phaser.Input.Keyboard.KeyCodes.S,
        left = Phaser.Input.Keyboard.KeyCodes.A,
        right = Phaser.Input.Keyboard.KeyCodes.D,
        attackUp = Phaser.Input.Keyboard.KeyCodes.UP,
        attackDown = Phaser.Input.Keyboard.KeyCodes.DOWN,
        attackLeft = Phaser.Input.Keyboard.KeyCodes.LEFT,
        attackRight = Phaser.Input.Keyboard.KeyCodes.RIGHT
    };

    export const keyCodes = playerKeyCodes;

    export function initKeys(keys: Types.playerKeyCodes): Types.PlayerKeys {
        let initializedKeys: Types.PlayerKeys = this.input.keyboard.addKeys(keys, true, true)
        return initializedKeys
    }

    export function updateKeys(keys: Types.PlayerKeys, sprite: Phaser.Physics.Arcade.Sprite, animationKeys: Types.AnimationKeys,
                            bodyWidth: Types.MovementState, bodyHeight: Types.MovementState, bodyOffsetX: Types.MovementState,
                            bodyOffsetY: Types.MovementState, velocityX: Types.MovementState, velocityY: Types.MovementState) {
        // Attack keys
        if (keys.attackLeft.isDown) {
            sprite = sprite.setState(Types.SpriteState.Attacking);
            keyAction(sprite, animationKeys.AttackingLeft, VerticalAxis.Flipped, bodyWidth.AttackingLeft, bodyHeight.AttackingLeft,
                    bodyOffsetX.AttackingLeft, bodyOffsetY.AttackingLeft, velocityX.AttackingLeft, velocityY.AttackingLeft);
        } else if (keys.attackRight.isDown) {
            sprite.setState(Types.SpriteState.Attacking);
            keyAction(sprite, animationKeys.AttackingRight, VerticalAxis.Standard, bodyWidth.AttackingRight, bodyHeight.AttackingRight,
                    bodyOffsetX.AttackingRight, bodyOffsetY.AttackingRight, velocityX.AttackingRight, velocityY.AttackingRight);
        } else if (keys.attackUp.isDown) {
            sprite.setState(Types.SpriteState.Attacking);
            keyAction(sprite, animationKeys.AttackingUp, VerticalAxis.Standard, bodyWidth.AttackingUp, bodyHeight.AttackingUp,
                    bodyOffsetX.AttackingUp, bodyOffsetY.AttackingUp, velocityX.AttackingUp, velocityY.AttackingUp);
        } else if (keys.attackDown.isDown) {
            sprite.setState(Types.SpriteState.Attacking);
            keyAction(sprite, animationKeys.AttackingDown, VerticalAxis.Standard, bodyWidth.AttackingDown, bodyHeight.AttackingDown,
                    bodyOffsetX.AttackingDown, bodyOffsetY.AttackingDown, velocityX.AttackingDown, velocityY.AttackingDown);
        // Movement keys
        } else if (keys.left.isDown) {
            sprite.setState(Types.SpriteState.Vulnerable);
            keyAction(sprite, animationKeys.MovingLeft, VerticalAxis.Flipped, bodyWidth.MovingLeft, bodyHeight.MovingLeft,
                    bodyOffsetX.MovingLeft, bodyOffsetY.MovingLeft, velocityX.MovingLeft, velocityY.MovingLeft)
        } else if (keys.right.isDown) {
            sprite.setState(Types.SpriteState.Vulnerable);
            keyAction(sprite, animationKeys.MovingRight, VerticalAxis.Standard, bodyWidth.MovingRight, bodyHeight.MovingRight,
                    bodyOffsetX.MovingRight, bodyOffsetY.MovingRight, velocityX.MovingRight, velocityY.MovingRight)
        } else if (keys.up.isDown) {
            sprite.setState(Types.SpriteState.Vulnerable);
            keyAction(sprite, animationKeys.MovingUp, VerticalAxis.Standard, bodyWidth.MovingUp, bodyHeight.MovingUp,
                    bodyOffsetX.MovingUp, bodyOffsetY.MovingUp, velocityX.MovingUp, velocityY.MovingUp)
        } else if (keys.down.isDown) {
            sprite.setState(Types.SpriteState.Vulnerable);
            keyAction(sprite, animationKeys.MovingDown, VerticalAxis.Standard, bodyWidth.MovingDown, bodyHeight.MovingDown,
                    bodyOffsetX.MovingDown, bodyOffsetY.MovingDown, velocityX.MovingDown, velocityY.MovingDown)
        // Idle
        } else {
            sprite.setState(Types.SpriteState.Vulnerable);
            keyAction(sprite, animationKeys.Idle, VerticalAxis.Standard, bodyWidth.Idle, bodyHeight.Idle,
                    bodyOffsetX.Idle, bodyOffsetY.Idle, velocityX.Idle, velocityY.Idle)
        }
    }

    function keyAction(sprite: Phaser.Physics.Arcade.Sprite, animationKey: string,
                    scaleX: number, bodyWidth: number, bodyHeight: number, bodyOffsetX: number,
                    bodyOffsetY: number, velocityX: number, velocityY: number) {
        sprite.scaleX = scaleX;
        sprite.body.setSize(bodyWidth, bodyHeight);
        sprite.body.offset.x = bodyOffsetX;
        sprite.body.offset.y = bodyOffsetY
        sprite.setVelocity(velocityX, velocityY);
        sprite.anims.play(animationKey, true);
    }
}