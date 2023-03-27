import Phaser from "phaser"
export namespace Types {

  export enum SpriteState {
        Attacking = 'attacking',
        Vulnerable = 'vulnerable'
  }

    export interface playerKeyCodes {
        up: number,
        down: number,
        left: number,
        right: number,
        attackUp: number,
        attackDown: number,
        attackLeft: number,
        attackRight: number
    };

    export interface PlayerKeys {
      up: Phaser.Input.Keyboard.Key,
      down: Phaser.Input.Keyboard.Key,
      left: Phaser.Input.Keyboard.Key,
      right: Phaser.Input.Keyboard.Key,
      attackUp: Phaser.Input.Keyboard.Key,
      attackDown: Phaser.Input.Keyboard.Key,
      attackLeft: Phaser.Input.Keyboard.Key,
      attackRight:  Phaser.Input.Keyboard.Key,
    }

   export interface MovementState {
        MovingLeft: number,
        MovingRight: number,
        MovingUp: number,
        MovingDown: number,
        AttackingLeft: number,
        AttackingRight: number,
        AttackingUp: number,
        AttackingDown: number,
        Idle: number
    }

    export interface AnimationKeys {
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
}