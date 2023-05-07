import Phaser from 'phaser'
import { Types } from '../Types';
import { Enemy } from './Enemy';

export class Goblin extends Enemy {
  public animationKeys: Types.AnimationKeys = {
    Idle: 'goblin-idle',
    MovingRight: 'goblin-walk-right',
    MovingUp: 'goblin-walk-up',
    MovingDown: 'goblin-walk-down',
    AttackingRight: 'goblin-attack-right',
    AttackingUp: 'goblin-attack-up',
    AttackingDown: 'goblin-attack-down',
    DamagedRight: 'goblin-damage-right',
    DamagedUp: 'goblin-damage-up',
    DamagedDown: 'goblin-damage-down'
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'goblin');
  }
}