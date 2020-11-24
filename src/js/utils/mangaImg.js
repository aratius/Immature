let gsap = require("gsap").gsap;
import * as PIXI from "pixi.js";
import Vector2 from "./vector2";
import Color from "./color";
import ImgController from "./imgController";

export default class MangaImg extends ImgController {
  constructor(texture, position, size, tint) {
    super(texture, position, size, tint);

    this.posTween;
    this.sizeTween;
    this.alphaTween;
    // this.alpha = 0;
  }

  onSetup() {}

  onUpdate() {}

  onResize(sw, sh) {}

  popUp(duration, ease) {
    let direction = Math.random() * Math.PI * 2;
    let dist = Math.random() * 200 + 100;
    let x = Math.sin(direction) * dist + this.position.x;
    let y = Math.cos(direction) * dist + this.position.y;
    this.posTween = gsap.to(this.position, {
      x: x,
      y: y,
      duration: duration,
      ease: ease,
    });

    this.sizeTween = gsap.to(this, {
      width: this.width * 3,
      height: this.height * 3,
      duration: duration,
      ease: ease,
    });

    this.alphaTween = gsap.to(this, {
      alpha: 0,
      duration: duration,
      ease: "expo.in",
      delay: duration,
    });
  }
}
