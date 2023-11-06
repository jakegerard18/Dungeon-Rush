import Phaser from "phaser";

export default class Instructions extends Phaser.Scene {
    constructor() {
        super('instructions');
    }

    create() {
      this.input.keyboard.addKeys(Phaser.Input.Keyboard.KeyCodes.B);
      this.input.keyboard.on('keydown-B', () => {
        this.scene.start('start-screen');
      }, this);

      this.add.text(this.cameras.main.centerX - 150, this.cameras.main.centerY - 150, "How to play:", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 380, this.cameras.main.centerY - 50, "Clear as many dungeons as you can", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 380, this.cameras.main.centerY, "before the timer runs out!", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 380, this.cameras.main.centerY + 50, "Killing enemies gives you more time!", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 380, this.cameras.main.centerY + 100, "Use WASD to move and arrow keys to attack.", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 380, this.cameras.main.centerY + 200, "(Press 'b' to go back to start screen)", { fontSize: '32px', fill: '#AAFF00' });
    }
}
