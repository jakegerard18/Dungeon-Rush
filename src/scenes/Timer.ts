import Phaser from "phaser";
import { GLOBALS } from "./Game";
import { sceneEvents } from "../events/EventCenter";

export default class Timer extends Phaser.Scene {
  public scene: Phaser.Scene;
  public label: Phaser.GameObjects.Text;
  public timerEvent: Phaser.Time.TimerEvent;
  public duration = 30000;
  public additionalTime = 0;
  public finishedCallback;

  constructor() {
      super('timer');
  }

  create() {
    this.stop();
    this.label = this.add.text(2, 20, '60', { fontSize: 32 });
    this.timerEvent = this.time.addEvent({
      delay: this.duration,
      callback: () => {
        this.stop();
        this.handleCountdownFinished()
      }
    })

    sceneEvents.on('increase-timer', this.handleIncreaseTimer, this);
    this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
      sceneEvents.off('increase-timer', this.handleIncreaseTimer, this);
    })
  }

  stop() {
    if (this.timerEvent) {
      this.timerEvent.destroy();
    }
  }

  update() {
    if (!this.timerEvent || this.duration <= 0) {
      return;
    }
    const remaining = this.timerEvent.getRemaining();
    const seconds = remaining / 1000;
    this.label.text = seconds.toFixed(2)
  }

  handleIncreaseTimer(milliseconds) {
    this.timerEvent = this.timerEvent.reset({
      delay: this.timerEvent.getRemaining() + milliseconds,
      callback: () => {
        this.stop();
        this.handleCountdownFinished();
      }
    });
  }

  handleCountdownFinished() {
    this.scene.start('game-over', { dungeonsCleared: GLOBALS.dungeonsCleared });
  }

}
