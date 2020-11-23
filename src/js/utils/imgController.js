let gsap = require("gsap").gsap;
import * as PIXI from "pixi.js";
import Vector2 from "./vector2";
import Color from "./color";

export default class ImgController extends PIXI.Sprite {
  constructor(texture, position, size, tint) {
    super(texture);

    this.position = position;
    this.defaultP = position;
    this.width = this.height = size;
    this.tint = tint;
    this.anchor.set(0.5);
  }

  onSetup() {}

  onUpdate() {}

  onResize(sw, sh) {
    this.position = this.defaultP = new Vector2(sw / 2, sh / 2);
  }
}
