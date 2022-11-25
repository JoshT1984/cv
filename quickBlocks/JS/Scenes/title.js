class Title extends Phaser.Scene {
  constructor() {
    super("Title");
  }
  preload() {}
  create() {
    this.title = this.add.image(0, 0, "title");
    this.title.setOrigin(0, 0);
    this.title.displayWidth = game.config.width;
    this.title.displayHeight = game.config.height;
    this.titleText = this.add.text(0, 0, "QUICK\nBLOCKS", {
      fontSize: game.config.width / 5,
      color: "#ff0000",
    });

    let alignGrid = new AlignGrid({
      scene: this,
      rows: 11,
      cols: 11,
    });
    //alignGrid.showNumbers();

    this.btnStart = new TextButton({
      scene: this,
      event: mt.constants.START_GAME,
      params: this.scene,
      callBackScope: this,
      key: "red",
      text: "Start Game",
      scale: 0.4,
      textScale: 22,
      textColor: "#ffffff",
    });

    alignGrid.placeAtIndex(35, this.btnStart);

    this.btnHowToPlay = new TextButton({
      scene: this,
      event: mt.constants.HOW_TO_PLAY,
      params: this.scene,
      callBackScope: this,
      key: "orange",
      text: "How To Play",
      scale: 0.4,
      textScale: 22,
      textColor: "#ffffff",
    });
    alignGrid.placeAtIndex(71, this.btnHowToPlay);

    this.btnOptions = new TextButton({
      scene: this,
      event: mt.constants.OPTIONS,
      params: this.scene,
      callBackScope: this,
      key: "blue",
      text: "Options",
      scale: 0.4,
      textScale: 22,
      textColor: "#ffffff",
    });
    alignGrid.placeAtIndex(107, this.btnOptions);

    mt.testObj = this;
  }

  update() {}
}
