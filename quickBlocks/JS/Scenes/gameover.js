class Gameover extends Phaser.Scene {
  constructor() {
    super("Gameover");
  }
  preload() {}
  create() {
  
    let alignGrid = new AlignGrid({
      scene: this,
      rows: 11,
      cols: 11,
    });
    this.btnBack = new TextButton({
      scene: this,
      event: mt.constants.BACK_TO_TITLE,
      params: this.scene,
      callBackScope: this,
      key: "green",
      text: "Title Screen",
      scale: 0.45,
      textScale: 22,
      textColor: "#ffffff",
    });
    alignGrid.placeAtIndex(38, this.btnBack);

    this.btnStart = new TextButton({
      scene: this,
      event: mt.constants.START_GAME,
      params: this.scene,
      callBackScope: this,
      key: "red",
      text: "Play Again",
      scale: 0.45,
      textScale: 22,
      textColor: "#ffffff",
    });

    alignGrid.placeAtIndex(71, this.btnStart);
  }
  // restartGame() {
  //   this.scene.start("SceneMain");
  // }
  update() {}
}
