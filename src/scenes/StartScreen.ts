import Phaser from "phaser";

export default class GameOver extends Phaser.Scene {
    constructor() {
        super('start-screen');
    }

    create() {
      this.input.keyboard.addKeys(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.input.keyboard.on('keydown-SPACE', () => this.scene.start('game'), this);
      this.add.text(this.cameras.main.centerX - 150, this.cameras.main.centerY - 150, "DUNGEON RUSH", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 380, this.cameras.main.centerY - 50, "Clear as many dungeons as you can", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 380, this.cameras.main.centerY, "before the timer runs out!", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 400, this.cameras.main.centerY + 150, "(Use wasd to move and arrow keys to attack)", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 240, this.cameras.main.centerY + 200, "(Press spacebar to start)", { fontSize: '32px', fill: '#AAFF00' });
    }
}