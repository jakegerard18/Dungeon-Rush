import Phaser from "phaser";

export default class GameOver extends Phaser.Scene {
    constructor() {
        super('game-over');
    }

    public keys = {
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
    }

    create() {
      this.input.keyboard.addKeys(this.keys);
      this.input.keyboard.on('keydown-SPACE', () => this.scene.start('game'), this);
      this.add.text(this.cameras.main.centerX - 50, this.cameras.main.centerY, "YOU DIED", { fontSize: '32px', fill: '#ff0000' });
      this.add.text(this.cameras.main.centerX - 250, this.cameras.main.centerY + 50, "(Press spacebar to restart)", { fontSize: '32px', fill: '#ff0000' });
    }
}