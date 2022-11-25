class TextButton extends UIBlock {
  constructor(config) {
    super();
    this.scene = config.scene;
    this.background = this.scene.add.image(0, 0, config.key);
    this.background.setInteractive();
    this.background.on("pointerdown", this.pressed, this);
    this.add(this.background);

    if (!config.scale) {
      config.scale = 0.5;
    }
    Align.scaleToGameW(this.background, config.scale);
    if (!config.textScale) {
      config.textScale = 25;
    }
    if (!config.textColor) {
      config.textColor = "#000000";
    }
    this.btnText = this.scene.add.text(0, 0, config.text, {
      fontSize: game.config.width / config.textScale,
      color: config.textColor,
    });
    this.add(this.btnText);
    this.btnText.setOrigin(0.5, 0.5);

    if (config.callBack) {
      this.callBack = config.callBack; //sets local variable this.callBack to the config.callBack inside Title.JS Object Instance
    }
    if (config.callBackScope) {
      this.callBackScope = config.callBackScope; //sets local variable this.callBackScope to the config.callBackScope inside Title.JS Object Instance
    }
    if (config.event) {
      this.event = config.event;
    }
    if (config.params) {
      this.params = config.params;
    }
  }
  pressed() {
    if (this.callBack) {
      if (this.callBackScope) {
        this.callBack.call(this.callBackScope);
      } else {
        this.callBack.apply();
      }
    }
    if (this.event) {
      if (this.params) {
        mt.emitter.emit(this.event, this.params);
      } else {
        mt.emitter.emit(this.event);
      }
    }
  }
}
