import Phaser from 'phaser'
import { Types } from '../Types';
import { Enemy } from './Enemy';

export class Orc extends Enemy {
  public animationKeys: Types.AnimationKeys = {
    Idle: 'orc-idle',
    MovingRight: 'orc-walk-right',
    MovingUp: 'orc-walk-up',
    MovingDown: 'orc-walk-down',
    AttackingRight: 'orc-attack-right',
    AttackingUp: 'orc-attack-up',
    AttackingDown: 'orc-attack-down',
    DamagedRight: 'orc-damage-right',
    DamagedUp: 'orc-damage-up',
    DamagedDown: 'orc-damage-down'
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'orc');
  }
}