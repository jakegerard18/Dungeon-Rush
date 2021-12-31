import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import { spriteDecomposer } from './utils/spriteDecomposer';
import Test_Dungeon from './scenes/TestDungeon'

//console.log(spriteDecomposer('troll_flipped.png', 192, 538, 48, 11, 4));
//TEST
export const game = new Phaser.Game({
	type: Phaser.AUTO,
	width: 800,
	height: 400,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: false
		}
	},
	fps: {
		min: 30,
		target: 60,
	},
	scene: [Preloader, Test_Dungeon],
	scale: {
		zoom: 2
	}


});



