import Phaser from "phaser";

export default class Timer extends Phaser.Scene {
  public scene: Phaser.Scene;
  public label: Phaser.GameObjects.Text;
  public timerEvent: Phaser.Time.TimerEvent;
  public duration = 20000;
  public finishedCallback;

  constructor() {
      super('timer');
  }

  init(data) {
    if (data.callback) {
      this.finishedCallback = data.callback;
    }
  }

  create() {
    this.stop();
    this.label = this.add.text(2, 20, '60', { fontSize: 32 });
    this.timerEvent = this.time.addEvent({
      delay: this.duration,
      callback: () => {
        this.stop();
        if (this.finishedCallback) {
          this.finishedCallback();
        }
      }
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
    const elapsed = this.timerEvent.getElapsed();
    const remaining = this.duration - elapsed;
    const seconds = remaining / 1000;

    this.label.text = seconds.toFixed(2)
  }
}