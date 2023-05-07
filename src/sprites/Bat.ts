import Phaser from 'phaser'
import { Types } from '../Types';
import { Enemy } from './Enemy';

export class Bat extends Enemy {
  public animationKeys: Types.AnimationKeys = {
    Idle: 'bat-idle',
    MovingRight: 'bat-walk-right',
    MovingUp: 'bat-walk-up',
    MovingDown: 'bat-walk-down',
    AttackingRight: 'bat-attack-right',
    AttackingUp: 'bat-attack-up',
    AttackingDown: 'bat-attack-down',
    DamagedRight: 'bat-damage-right',
    DamagedUp: 'bat-damage-up',
    DamagedDown: 'bat-damage-down'
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'bat');
  }
}


