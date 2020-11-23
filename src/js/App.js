import * as PIXI from "pixi.js";
import Sample from "./sample";
import Shooting from "./shooting";
import DeadOrAlive from "./deadOrAlive";
import Sapmple from "./sample";

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
  }

  _update() {
    this.game.update();
  }

  _mousemove(e) {
    this.game.mousemove(e);
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
        this.game.Resize(window.innerWidth, window.innerHeight);
      }.bind(this),
      200
    );
  }
}
