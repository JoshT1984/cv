class Effect extends UIBlock {
  constructor(config) {
    super();
    this.scene = config.scene;
    let key = `effect${config.effectNumber}`;
    let frameNames = this.scene.anims.generateFrameNumbers(key);
    let animKey = `animKey${config.effectNumber}`;

    this.scene.anims.create({
      key: animKey,
      frames: frameNames,
      frameRate: 70,
      repeat: false,
    });

    this.effectImage = this.scene.add.sprite(0, 0, key);
    this.add(this.effectImage);
    this.effectImage.play(animKey);
    this.effectImage.on("animationcomplete", this.destroyMe, this);
  }

  destroyMe() {
    this.destroy();
  }

  static preload(scene, effectNumber) {
    let key = `effect${effectNumber}`;
    let path = `IMAGES/effects/${effectNumber}.png`;
    scene.load.spritesheet(key, path, {
      frameWidth: 100,
      frameHeight: 100,
    });
  }
}
