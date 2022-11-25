class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.load.spritesheet("blocks", "IMAGES/blocks.png", {
      frameWidth: 64,
      frameHeight: 84,
    });

    this.load.image("btnPlayAgain", "IMAGES/btnPlayAgain.png");
  }
  create() {
    if (mt.model.bgMusic === false) {
      mt.mediaManager.playBackgroundMusic("background");
      mt.model.bgMusic = true;
    }

    let xx = 0;
    let yy = 0;
    let block;
    let counter = 0;
    this.blockGroup = this.add.group();
    this.clickLock = false;
    this.colorArray = [];
    this.centerBlock = null;

    for (let i = 0; i < 25; i++) {
      let colors = Phaser.Math.Between(0, mt.model.numberOfColors);
      this.colorArray.push(colors);
    }
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        block = this.add.sprite(0, 0, "blocks");
        this.blockGroup.add(block);
        block.displayWidth = game.config.width / 5;
        block.displayHeight = game.config.height / 5;
        block.setFrame(this.colorArray[counter]);
        // block.setOrigin(0, 0);
        block.x = xx + block.displayWidth / 2;
        block.y = yy + block.displayHeight / 2;
        counter++;
        xx += block.displayWidth;
        if (i === 2 && j === 2) {
          this.centerBlock = block;
        } else {
          block.setInteractive();
        }
      }
      xx = 0;
      yy += block.displayHeight;
    }
    this.colorArray[12] = -1;
    this.pickColor();
    this.input.on("gameobjectdown", this.selectBlock, this);
    this.timer = new CircleTimer({ scene: this });
    this.timer.x = this.centerBlock.x;
    this.timer.y = this.centerBlock.y;
    this.timer.setCallback(this.timeUp, this);
    this.timer.startTimer();

    this.scoreText = this.add.text(0, 0, mt.model.score, {
      fontSize: game.config.width / 15,
      color: "#000000",
    });
    this.scoreText.setOrigin(0.5, 0.5);
    Align.center(this.scoreText);
  }
  timeUp() {
    mt.mediaManager.playSFX("wrong");
    this.isGameover();
    console.log("Time is up");
  }
  selectBlock(pointer, block) {
    if (this.clickLock === true) {
      console.log("Click is locked");
      return;
    }
    if (block.frame.name === this.centerBlock.frame.name) {
      let effect = new Effect({ scene: this, effectNumber: 16 });

      effect.x = block.x;
      effect.y = block.y;

      block.removeInteractive();
      this.destroyBlock(block);
      this.pickColor();
      mt.model.score++;
      mt.mediaManager.playSFX("right");
      this.scoreText.setText(mt.model.score);
    } else {
      mt.mediaManager.playSFX("wrong");
      this.isGameover();
      return;
    }
    this.timer.resetTimer();
  }
  destroyBlock(block) {
    this.tweens.add({ targets: block, duration: 1000, scaleX: 0, scaleY: 0 });
  }
  pickColor() {
    if (this.colorArray.length === 0) {
      mt.mediaManager.playSFX("levelUp");
      //mt.mediaManager.stopMusic();
      mt.model.numberOfColors++;
      if (mt.model.numberOfColors > 7) {
        mt.model.numberOfColors = 7;
      }
      this.score = mt.model.score;
      this.scene.restart();
      return;
    }
    let index = Phaser.Math.Between(0, this.colorArray.length - 1);
    //let color = this.colorArray.shift();
    let color = this.colorArray.splice(index, 1)[0];
    if (color === -1) {
      this.pickColor();
      return;
    }
    this.centerBlock.setFrame(color);
  }
  isGameover() {
    mt.model.score = 0;
    mt.model.bgMusic = false;
    this.clickLock = true;
    this.timer.stopTimer();
    if (mt.model.musicOn) {
      mt.mediaManager.stopMusic();
    }
    this.blockGroup.children.iterate(
      function (child) {
        this.destroyBlock(child);
      }.bind(this)
    );

    this.time.addEvent({
      delay: 1200,
      callback: this.gameoverRestart,
      callbackScope: this,
      loop: false,
    });
  }
  gameoverRestart() {
    this.scene.start("Gameover");
  }
  update() {}
}
