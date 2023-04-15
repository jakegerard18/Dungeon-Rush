import Phaser from 'phaser'
import { Types } from '../Types';
import { Enemy } from './Enemy';

const KEY = 'slime';
enum AnimationKeys {
  Idle = 'slime-idle',
  MovingRight = 'slime-walk-right',
  MovingUp = 'slime-walk-up',
  MovingDown = 'slime-walk-down',
  AttackingRight = 'slime-attack-right',
  AttackingUp = 'slime-attack-up',
  AttackingDown = 'slime-attack-down'
}

export class Slime extends Enemy {
  animationKeys = AnimationKeys;
  health = 3;
  damageTime = 0;
  velocity = 100;
  movementTime = 0;
  moveEvent: Phaser.Time.TimerEvent;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, KEY);
    this.init(scene);
  }

  init(scene: Phaser.Scene) {
    this.anims.play(this.animationKeys.Idle);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.setSize(this.body.width * 0.3, this.body.height * 0.3);
  }

}


