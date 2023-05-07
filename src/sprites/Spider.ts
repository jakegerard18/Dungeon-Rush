import Phaser from 'phaser'
import { Types } from '../Types';
import { Enemy } from './Enemy';

export class Spider extends Enemy {
  public animationKeys: Types.AnimationKeys = {
    Idle: 'spider-idle',
    MovingRight: 'spider-walk-right',
    MovingUp: 'spider-walk-up',
    MovingDown: 'spider-walk-down',
    AttackingRight: 'spider-attack-right',
    AttackingUp: 'spider-attack-up',
    AttackingDown: 'spider-attack-down',
    DamagedRight: 'spider-damage-right',
    DamagedUp: 'spider-damage-up',
    DamagedDown: 'spider-damage-down'
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'spider');
  }
}