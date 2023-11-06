import Phaser from "phaser";

export default class Credits extends Phaser.Scene {
    constructor() {
        super('credits');
    }

    create() {
      this.input.keyboard.addKeys(Phaser.Input.Keyboard.KeyCodes.I);
      this.input.keyboard.on('keydown-B', () => {
        this.scene.start('start-screen');
      }, this);

      this.add.text(this.cameras.main.centerX - 400, this.cameras.main.centerY - 200, "Many thanks to the talented artists below!", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 400, this.cameras.main.centerY - 100, "Tiles, Hero, and Slimes: Pita", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 400, this.cameras.main.centerY - 50, "(silverdeluxe.tumblr.com)", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 400, this.cameras.main.centerY, "Heart Meter: 0x72", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 400, this.cameras.main.centerY + 50, "(https://itch.io/profile/0x72)", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 400, this.cameras.main.centerY + 100, "Music: bit-by-bit-sound", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 400, this.cameras.main.centerY + 150, "(https://bit-by-bit-sound.itch.io/)", { fontSize: '32px', fill: '#AAFF00' });
      this.add.text(this.cameras.main.centerX - 380, this.cameras.main.centerY + 300, "(Press 'b' to go back to start screen)", { fontSize: '32px', fill: '#AAFF00' });
    }
}
