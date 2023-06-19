import Phaser from 'phaser'
import { Types } from '../Types';

export class Sprite extends Phaser.Physics.Arcade.Sprite {
	public healthState = Types.SpriteState.Idle;
	public health = 2;
	public damageTime = 0;
	public animationKeys: Types.AnimationKeys = {
		Idle : '',
		MovingRight : '',
		MovingUp : '',
		MovingDown : '',
		AttackingRight : '',
		AttackingUp : '',
		AttackingDown : '',
		DamagedRight : '',
		DamagedUp : '',
		DamagedDown : ''
	}

	constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
		super(scene, x, y, key);
	}

	render(scene: Phaser.Scene) {
		this.anims.play(this.animationKeys.Idle);
		scene.add.existing(this);
		scene.physics.add.existing(this);
		this.body.setSize(this.body.width * 0.3, this.body.height * 0.3);
	}

	destroy(fromScene?: boolean) {
		super.destroy(fromScene);
	}
}