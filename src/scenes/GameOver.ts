import Phaser from "phaser";
import { sceneEvents } from "../events/EventCenter";

export default class GameOver extends Phaser.Scene {
    constructor() {
        super('game-over');
    }

    public dungeonsCleared;
    public keys = {
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
    }

    init(data) {
      this.dungeonsCleared = data.dungeonsCleared;
    }

    create() {
      sceneEvents.emit('kill-hero');
      this.input.keyboard.addKeys(this.keys);
      this.input.keyboard.on('keydown-SPACE', () => this.scene.start('game', { maxEnemiesPerRoom: 2, numRooms: 3, dungeonsCleared: 0 }), this);
      this.input.keyboard.on('keydown-SPACE', () => this.scene.run('timer'));
      this.add.text(this.cameras.main.centerX - 50, this.cameras.main.centerY - 50, "GAME OVER", { fontSize: '32px', fill: '#ff0000' });
      this.add.text(this.cameras.main.centerX - 150, this.cameras.main.centerY, `Dungeons cleared: ${this.dungeonsCleared}`, { fontSize: '32px', fill: '#ff0000' });
      this.add.text(this.cameras.main.centerX - 250, this.cameras.main.centerY + 50, "(Press spacebar to restart)", { fontSize: '32px', fill: '#ff0000' });
    }
}
