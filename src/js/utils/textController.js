let gsap = require("gsap").gsap;
import * as PIXI from "pixi.js";
import Vector2 from "./vector2";
import Color from "./color";

export default class TextController extends PIXI.Text {
  constructor(text, detail, position, scale) {
    super(text, detail);

    this.position = position;
    this.defaultP = position;
    this.pivot.x = this.width/2
    this.pivot.y = this.height/2
    this.scale.set(scale)

    this.g = 1
    this.vZero = 0
    this.e = 0.5
    this.startTime = new Date().getTime()
  }

  onSetup() {}

  onUpdate(sh) {
    let time = (new Date().getTime() - this.startTime)/100
    let vy = this.vZero + this.g * time * this.width /100
    this.position.y += vy

    if(this.position.y > sh - this.height/2) {
      this.position.y = sh - this.height/2
      this.collition(vy)
    }
  }

  collition(vy) {
    this.startTime = new Date().getTime()
    this.vZero = -vy * this.e
  }

  onResize(sw, sh) {
    this.position = this.defaultP = new Vector2(sw / 2, sh / 2);
  }
}
