import Phaser from "phaser";

export default class StartScreen extends Phaser.Scene {
    constructor() {
        super('start-screen');
    }

    create() {
      this.input.keyboard.addKeys(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.input.keyboard.addKeys(Phaser.Input.Keyboard.KeyCodes.I);
      this.input.keyboard.addKeys(Phaser.Input.Keyboard.KeyCodes.C);

      this.input.keyboard.on('keydown-SPACE', () => {
        this.scene.start('game');
        this.scene.start('timer');
      }, this);
      
      this.input.keyboard.on('keydown-I', () => {
        this.scene.start('instructions');
      }, this);

      this.input.keyboard.on('keydown-C', () => {
        this.scene.start('credits');
      }, this);

      this.add.text(this.cameras.main.centerX - 150, this.cameras.main.centerY - 150, "DUNGEON RUSH", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 300, this.cameras.main.centerY, "(Press 'space' to start)", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 300, this.cameras.main.centerY + 50, "(Press 'i' for instructions)", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 300, this.cameras.main.centerY + 100, "(Press 'c' for credits)", { fontSize: '32px', fill: '#AAFF00' });
    }
}
