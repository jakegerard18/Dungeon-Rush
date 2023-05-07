import Phaser from 'phaser'
import { Types } from '../Types';
import { Enemy } from './Enemy';

export class Sniper extends Enemy {
  public animationKeys: Types.AnimationKeys = {
    Idle: 'sniper-idle',
    MovingRight: 'sniper-walk-right',
    MovingUp: 'sniper-walk-up',
    MovingDown: 'sniper-walk-down',
    AttackingRight: 'sniper-attack-right',
    AttackingUp: 'sniper-attack-up',
    AttackingDown: 'sniper-attack-down',
    DamagedRight: 'sniper-damage-right',
    DamagedUp: 'sniper-damage-up',
    DamagedDown: 'sniper-damage-down'
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'sniper');
  }
}