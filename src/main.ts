import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import {spriteDecomposer} from './utils/spriteDecomposer';
import Test_Dungeon from './scenes/TestDungeon'
import Dungeon01 from './scenes/Dungeon01';
import Dungeon02 from './scenes/Dungeon02';

//console.log(spriteDecomposer('troll_flipped.png', 192, 538, 48, 11, 4));

export const game = new Phaser.Game({
	type: Phaser.AUTO,
	width: 800,
	height: 400,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 0},
			debug: false
		}	
	},
	fps:{
		min: 30,
		target: 60,
	},
	scene: [Preloader, Test_Dungeon, Dungeon01, Dungeon02],
	scale: {
		zoom: 2
	}
	

});



