class HowToPlay extends Phaser.Scene {
  constructor() {
    super("HowToPlay");
  }
  create() {
    this.title = this.add.image(0, 0, "title");
    this.title.setOrigin(0, 0);
    this.title.displayWidth = game.config.width;
    this.title.displayHeight = game.config.height;

    this.howToPlay = this.add.image(0, 0, "howToPlay");
    let alignGrid = new AlignGrid({
      scene: this,
      rows: 11,
      cols: 11,
    });

    //alignGrid.showNumbers();
    alignGrid.placeAtIndex(38, this.howToPlay);
    Align.scaleToGameW(this.howToPlay, 0.5);

    this.text1 = this.add.text(
      0,
      0,
      " Click the same color as \n the center block before the\n time runs out!",
      {
        fontSize: game.config.width / 30,
        color: "#ffffff",
        backgroundColor: "#d0353d",
      }
    );
    alignGrid.placeAtIndex(82, this.text1);
    this.text1.setOrigin(0.5, 0.5);

    this.btnBack = new TextButton({
      scene: this,
      event: mt.constants.BACK_TO_TITLE,
      params: this.scene,
      callBackScope: this,
      key: "orange",
      text: "Back To Title",
      scale: 0.4,
      textScale: 22,
      textColor: "#ffffff",
    });
    alignGrid.placeAtIndex(107, this.btnBack);
  }
  update() {}
}
