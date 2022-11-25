class Model {
  constructor() {
    this.numberOfColors = 4;
    this.score = 0;
    this.bgMusic = false;
    this._musicOn = true;
    this._sfxOn = true;
    this._musicPlaying = true;
  }
  set musicOn(val) {
    this._musicOn = val;
    mt.emitter.emit(mt.constants.MUSIC_CHANGE);
  }
  get musicOn() {
    return this._musicOn;
  }
  set sfxOn(val) {
    this._sfxOn = val;
    mt.emitter.emit(mt.constants.SFX_CHANGE);
  }
  get sfxOn() {
    return this._sfxOn;
  }
  set musicPlaying(val) {
    this._musicPlaying = val;
    mt.emitter.emit(mt.constants.MUSIC_PLAYING);
  }
  get musicPlaying() {
    return this._musicPlaying;
  }
}
