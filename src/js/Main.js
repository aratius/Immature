import * as PIXI from "pixi.js";
import Vector2 from "./utils/vector2";

export default class Main extends PIXI.Container {
  constructor() {
    super();

    this.sw = window.innerWidth;
    this.sh = window.innerHeight;

    this.mousePosition = new Vector2(0, 0);
    this.lastMousePosition = new Vector2(0, 0);
    this.mouseMoved = new Vector2(0, 0);

    this.transparent = new PIXI.Sprite();
    this.transparent.width = this.sw;
    this.transparent.height = this.sh;
    this.transparent.alpha = 0;
    this.addChild(this.transparent);

    this.width = this.sw;
    this.height = this.sh;
    this.x = 0;
    this.y = 0;
  }

  setup() {
    this.onSetup();
  }

  onSetup() {}

  update() {
    this.mouseMoved.x = this.mousePosition.x - this.lastMousePosition.x;
    this.mouseMoved.y = this.mousePosition.y - this.lastMousePosition.y;

    this.lastMousePosition.x = this.mousePosition.x;
    this.lastMousePosition.y = this.mousePosition.y;

    this.onUpdate();
  }

  onUpdate() {}

  Resize(sw, sh) {
    this.sw = sw;
    this.sh = sh;

    this.onResize();
  }

  onResize() {}

  mousemove(e) {
    this.mousePosition.x = e.offsetX;
    this.mousePosition.y = e.offsetY;

    this.onMousemove();
  }

  onMousemove() {}
}
