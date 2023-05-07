import Phaser from 'phaser'
import { Types } from '../Types';
import { Keys } from '../Keys';
import { Enemy } from './Enemy';

export class Slime extends Enemy {
  public animationKeys: Types.AnimationKeys = {
    Idle: 'slime-idle',
    MovingRight: 'slime-walk-right',
    MovingUp: 'slime-walk-up',
    MovingDown: 'slime-walk-down',
    AttackingRight: 'slime-attack-right',
    AttackingUp: 'slime-attack-up',
    AttackingDown: 'slime-attack-down',
    DamagedRight: 'slime-damage-right',
    DamagedUp: 'slime-damage-up',
    DamagedDown: 'slime-damage-down'
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'slime');
  }
}



