import Phaser from 'phaser'
import { Types } from '../Types';
import { Enemy } from './Enemy';

export class Troll extends Enemy {
  public animationKeys: Types.AnimationKeys = {
    Idle: 'troll-idle',
    MovingRight: 'troll-walk-right',
    MovingUp: 'troll-walk-up',
    MovingDown: 'troll-walk-down',
    AttackingRight: 'troll-attack-right',
    AttackingUp: 'troll-attack-up',
    AttackingDown: 'troll-attack-down',
    DamagedRight: 'troll-damage-right',
    DamagedUp: 'troll-damage-up',
    DamagedDown: 'troll-damage-down'
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'troll');
  }
}