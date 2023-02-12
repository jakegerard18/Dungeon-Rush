import Phaser from 'phaser'
import Preloader from './scenes/Preloader'
import Game from './scenes/Game'
import UI from './scenes/UI';

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    zoom: 2,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: [Preloader, Game, UI]
});