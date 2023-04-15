import Phaser from "phaser"
export namespace Types {

  export enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
  }
  
  export enum SpriteState {
      Attacking = 'attacking',
      Vulnerable = 'vulnerable',
      Idle = 'idle',
      Damaged = 'damaged',
      Dead = 'dead'
  }

    // Key codes to be defined for the player keys
    export interface PlayerKeyCodes {
        up: number,
        down: number,
        left: number,
        right: number,
        attackUp: number,
        attackDown: number,
        attackLeft: number,
        attackRight: number
    };

    // Keys to be used as player keys
    export interface PlayerKeys {
      up: Phaser.Input.Keyboard.Key,
      down: Phaser.Input.Keyboard.Key,
      left: Phaser.Input.Keyboard.Key,
      right: Phaser.Input.Keyboard.Key,
      attackUp: Phaser.Input.Keyboard.Key,
      attackDown: Phaser.Input.Keyboard.Key,
      attackLeft: Phaser.Input.Keyboard.Key,
      attackRight:  Phaser.Input.Keyboard.Key
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
        MovingRight: string,
        MovingUp: string,
        MovingDown: string,
        AttackingRight: string,
        AttackingUp: string,
        AttackingDown: string,
        Idle: string
    }
}