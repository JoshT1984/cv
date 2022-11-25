class Options extends Phaser.Scene {
  constructor() {
    super("Options");
  }
  create() {
    this.title = this.add.image(0, 0, "title");
    this.title.setOrigin(0, 0);
    this.title.displayWidth = game.config.width;
    this.title.displayHeight = game.config.height;

    let alignGrid = new AlignGrid({
      scene: this,
      rows: 11,
      cols: 11,
    });
    this.btnMusic = new TextButton({
      scene: this,
      event: mt.constants.TOGGLE_MUSIC,
      params: this.scene,
      callBackScope: this,
      key: "red",
      text: "",
      scale: 0.4,
      textScale: 22,
      textColor: "#ffffff",
    });
    alignGrid.placeAtIndex(27, this.btnMusic);

    this.btnSFX = new TextButton({
      scene: this,
      event: mt.constants.TOGGLE_SFX,
      params: this.scene,
      callBackScope: this,
      key: "orange",
      text: "",
      scale: 0.4,
      textScale: 22,
      textColor: "#ffffff",
    });
    alignGrid.placeAtIndex(60, this.btnSFX);

    this.btnBack = new TextButton({
      scene: this,
      event: mt.constants.BACK_TO_TITLE,
      params: this.scene,
      callBackScope: this,
      key: "blue",
      text: "Back To Title",
      scale: 0.4,
      textScale: 22,
      textColor: "#ffffff",
    });
    alignGrid.placeAtIndex(107, this.btnBack);

    mt.emitter.on(mt.constants.MUSIC_CHANGE, this.updateButton, this);

    mt.emitter.on(mt.constants.SFX_CHANGE, this.updateButton, this);

    this.updateButton();
  }

  updateButton() {
    let musicText = "Music On";
    if (mt.model.musicOn === false) {
      musicText = "Music Off";
    }
    let sfxText = "SFX On";
    if (mt.model.sfxOn === false) {
      sfxText = "SFX Off";
    }
    this.btnMusic.btnText.setText(musicText);
    this.btnSFX.btnText.setText(sfxText);
  }
  update() {}
}
