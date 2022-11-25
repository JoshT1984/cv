let game;
let mt;

window.onload = function () {
  let isMobile = navigator.userAgent.indexOf("Mobile");
  if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
  }
  let w = 480;
  let h = 620;

  if (isMobile != -1) {
    w = window.innerWidth;
    h = window.innerHeight;
  }

  let config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    parent: "phaser-game",
    scene: [GameLoad, Title, Options, HowToPlay, SceneMain, Gameover],
  };
  mt = {};
  mt.model = new Model();
  game = new Phaser.Game(config);
  mt.game = game;
  mt.constants = new Constants();
};
