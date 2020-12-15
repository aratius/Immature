import * as PIXI from "pixi.js";
import Sample from "./sample";
import Shooting from "./shooting";
import DeadOrAlive from "./deadOrAlive";
import Sapmple from "./sample";
import Text from "./text";
import Intro from "./intro";

export default class App extends PIXI.Application {
  constructor() {
    super();

    this.resolution = window.devicePixelRatio;

    this.renderer.backgroundColor = 0xeaeaea;

    this.resizeTimer;
  }

  _setup() {
    this.game = new DeadOrAlive();
    this.game.setup();
    this.stage.addChild(this.game);

    //開発用イントロ回避
    if(!document.location.host.match(/localhost/)){
      this.intro = new Intro()
      this.intro.setup()
      this.stage.addChild(this.intro)
    }
  }

  _update() {
    this.game.update();
  }

  _mousemove(e) {
    this.game.mousemove(e);
  }

  _click(e) {
    this.game.click(e)
    
  }

  _touchstart(e) {
    this.game.touchstart(e)
  }

  _touchmove(e) {
    this.game.touchmove(e)
  }

  _touchend(e) {
    this.game.touchend(e)
  }

  _resize() {
    if (this.resizeTimer) clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(
      function () {
        //fix renderer size
        this.view.width = this.width = this.screen.width = window.innerWidth;
        this.view.height = this.height = this.screen.height =
          window.innerHeight;

        //call main resize
        this.game.resize(window.innerWidth, window.innerHeight);
        this.intro.resize(window.innerWidth, window.innerHeight)
      }.bind(this),
      200
    );
  }
}
