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

    this.bgContainer = new PIXI.Container();
    this.bgContainer.sortableChildren = true;
    this.addChild(this.bgContainer);
    this.mainContainer = new PIXI.Container();
    this.addChild(this.mainContainer);

    this.transparent = new PIXI.Sprite();
    this.transparent.width = this.sw;
    this.transparent.height = this.sh;
    this.transparent.alpha = 0;
    this.addChild(this.transparent);
    this.mainContainer.addChild(this.transparent);

    this.width = this.sw;
    this.height = this.sh;
    this.x = 0;
    this.y = 0;

    this.touchstartTime = 0
    this.touchendTime = 0

    this.isTouchDevice = false
  }

  setup() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      this.isTouchDevice = true
    }

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

  resize(sw, sh) {
    this.sw = sw;
    this.sh = sh;
    this.transparent.width = this.sw;
    this.transparent.height = this.sh;

    this.onResize();
  }

  onResize() {}

  mousemove(e) {
    this.mousePosition.x = e.offsetX;
    this.mousePosition.y = e.offsetY;

    this.onMousemove();
  }

  onMousemove() {}

  click(e) {
    this.onClick()
    
  }

  onClick(){}

  touchstart(e) {
    this.mousePosition.x = e.changedTouches[0].pageX;
    this.mousePosition.y = e.changedTouches[0].pageY;
    this.touchstartTime = new Date().getTime()

    this.onTouchstart()
  }

  onTouchstart(){}

  touchmove(e) {
    this.mousePosition.x = e.changedTouches[0].pageX;
    this.mousePosition.y = e.changedTouches[0].pageY;

    this.onTouchmove()
  }

  onTouchmove(){}

  touchend(e) {
    this.mousePosition.x = -99
    this.mousePosition.y = -99
    this.touchendTime = new Date().getTime()
    let tapTime = this.touchendTime - this.touchstartTime
    if(tapTime < 1000) this.click(e)

    this.onTouchend()
  }

  onTouchend(){}

}
