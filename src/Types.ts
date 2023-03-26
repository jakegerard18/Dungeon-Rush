export namespace Types {
    
   export enum SpriteState {
        Attacking = 'attacking',
        Vulnerable = 'Vulnerable'
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