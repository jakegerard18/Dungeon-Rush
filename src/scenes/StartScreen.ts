import Phaser from "phaser";

export default class GameOver extends Phaser.Scene {
    constructor() {
        super('start-screen');
    }

    create() {
      this.input.keyboard.addKeys(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.input.keyboard.on('keydown-SPACE', () => this.scene.start('game'), this);
      this.add.text(this.cameras.main.centerX - 200, this.cameras.main.centerY - 100, "DUNGEON EXTERMINATOR", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 240, this.cameras.main.centerY - 50, "(A very silly roguelike)", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 420, this.cameras.main.centerY + 50, "The local dungeons are swarming with monsters,", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 420, this.cameras.main.centerY + 100, "and you've been called in to clean em' up.", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 400, this.cameras.main.centerY + 150, "(Use wasd to move and arrow keys to attack)", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 240, this.cameras.main.centerY + 200, "(Press spacebar to start)", { fontSize: '32px', fill: '#AAFF00' });
    }
}