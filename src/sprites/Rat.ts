import Phaser from 'phaser'
import { Types } from '../Types';
import { Enemy } from './Enemy';

export class Rat extends Enemy {
  public animationKeys: Types.AnimationKeys = {
    Idle: 'rat-idle',
    MovingRight: 'rat-walk-right',
    MovingUp: 'rat-walk-up',
    MovingDown: 'rat-walk-down',
    AttackingRight: 'rat-attack-right',
    AttackingUp: 'rat-attack-up',
    AttackingDown: 'rat-attack-down',
    DamagedRight: 'rat-damage-right',
    DamagedUp: 'rat-damage-up',
    DamagedDown: 'rat-damage-down'
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'rat');
  }
}