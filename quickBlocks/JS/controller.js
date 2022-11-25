class Controller {
  constructor() {
    mt.emitter.on(mt.constants.START_GAME, this.startNewGame, this);
    mt.emitter.on(mt.constants.OPTIONS, this.options, this);
    mt.emitter.on(mt.constants.HOW_TO_PLAY, this.howToPlay, this);
    mt.emitter.on(mt.constants.BACK_TO_TITLE, this.backToTitle, this);
    mt.emitter.on(mt.constants.TOGGLE_MUSIC, this.toggleMusic, this);
    mt.emitter.on(mt.constants.TOGGLE_SFX, this.toggleSFX, this);
  }
  startNewGame(scene) {
    scene.start("SceneMain");
  }
  options(scene) {
    scene.start("Options");
  }
  howToPlay(scene) {
    scene.start("HowToPlay");
  }
  backToTitle(scene) {
    scene.start("Title");
  }
  toggleMusic(scene) {
    mt.model.musicOn = !mt.model.musicOn;
  }
  toggleSFX(scene) {
    mt.model.sfxOn = !mt.model.sfxOn;
  }
}
