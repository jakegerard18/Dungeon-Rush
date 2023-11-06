import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import Game from './scenes/Game';
import UI from './scenes/UI';
import GameOver from './scenes/GameOver';
import StartScreen from './scenes/StartScreen';
import Instructions from './scenes/Instructions';
import Credits from './scenes/Credits';
import Timer from './scenes/Timer';

export default new Phaser.Game({
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [Preloader, StartScreen, Instructions, Credits, Game, UI, Timer, GameOver]
});
