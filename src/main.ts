import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import Game from './scenes/Game';
import UI from './scenes/UI';
import GameOver from './scenes/GameOver';
import StartScreen from './scenes/StartScreen';


export default new Phaser.Game({
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [Preloader, StartScreen, Game, UI, GameOver]
});