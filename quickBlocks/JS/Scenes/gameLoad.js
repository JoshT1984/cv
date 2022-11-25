class GameLoad extends Phaser.Scene {
  constructor() {
    super("GameLoad");
  }
  preload() {
    this.loadText = this.add.text(0, 0, "0%", {
      color: "#ffffff",
      fontSize: game.config.width / 6,
    });
    Align.center(this.loadText);
    this.loadText.setOrigin(0.5, 0.5);
    this.load.on("progress", this.loadProgress, this);

    this.load.image("btnStart", "IMAGES/btnStart.png");
    this.load.image("title", "IMAGES/titleBack.jpg");

    this.load.image("blue", "IMAGES/BUTTONS/blue.png");
    this.load.image("green", "IMAGES/BUTTONS/green.png");
    this.load.image("orange", "IMAGES/BUTTONS/orange.png");
    this.load.image("red", "IMAGES/BUTTONS/red.png");
    this.load.image("howToPlay", "IMAGES/sample.png");

    Effect.preload(this, 16);

    this.load.audio("background", "AUDIO/bg.mp3");
    this.load.audio("levelUp", "AUDIO/levelUp.wav");
    this.load.audio("right", "AUDIO/explosion.wav");
    this.load.audio("wrong", "AUDIO/wrong.wav");
  }
  create() {
    mt.emitter = new Phaser.Events.EventEmitter();
    mt.controller = new Controller();
    mt.mediaManager = new MediaManager({ scene: this });

    this.scene.start("Title");
  }

  loadProgress(progress) {
    let percentage = Math.floor((progress / 1) * 100);
    this.loadText.setText(`${percentage}%`);
  }
  update() {}
}
