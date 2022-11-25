class CircleTimer extends UIBlock {
  constructor(config) {
    super();
    this.scene = config.scene;
    this.graphics = this.scene.add.graphics();

    this.add(this.graphics);
    this.counter = 100;
    this.setPercentage(100);
  }
  setCallback(func, scope = null) {
    this.function = func;
    this.scope = scope;
  }

  startTimer() {
    this.timer = this.scene.time.addEvent({
      delay: 100,
      callback: this.ticker,
      callbackScope: this,
      loop: true,
    });
  }

  ticker() {
    this.counter -= 2;
    this.setPercentage(this.counter);
    if (this.counter <= 0) {
      this.stopTimer();
      if (this.scope) {
        this.function.call(this.scope);
      } else {
        this.function.call();
      }
    }
  }

  stopTimer() {
    this.timer.remove();
  }

  setPercentage(percent) {
    let radius = (percent / 100) * 360;
    this.graphics.clear();
    this.graphics.fillStyle(0xffffff, 0.5);
    this.graphics.slice(
      0,
      0,
      game.config.width * 0.1,
      Phaser.Math.DegToRad(0),
      Phaser.Math.DegToRad(radius)
    );
    this.graphics.fillPath();
  }

  resetTimer() {
    this.counter = 100;
    this.stopTimer();
    this.startTimer();
  }
}
