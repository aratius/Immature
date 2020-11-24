let gsap = require("gsap").gsap;
import * as PIXI from "pixi.js";
import Vector2 from "./vector2";
import Color from "./color";
import ImgController from "./imgController";

export default class MangaImg extends ImgController {
  constructor(texture, position, size, tint) {
    super(texture, position, size, tint);

    this.explodeTween;
    this.alphaTween;
  }

  onSetup() {}

  onUpdate() {}

  onResize(sw, sh) {}

  explode(duration, ease) {
    if (this.explodeTween) this.explodeTween.kill();
    this.explodeTween = gsap.to(this, {
      width: this.width * 3,
      height: this.height * 3,
      duration: duration,
      ease: ease,
    });
    if (this.alphaTween) this.alphaTween.kill();
    this.alphaTween = gsap.to(this, {
      alpha: 0,
      duration: duration,
      ease: "expo.out",
    });
  }

  appear(duration, ease) {
    if (this.explodeTween) this.explodeTween.kill();
    this.explodeTween = gsap.to(this, {
      width: this.width / 3,
      height: this.height / 3,
      duration: duration,
      ease: ease,
      delay: 0,
    });
    if (this.alphaTween) this.alphaTween.kill();
    this.alphaTween = gsap.to(this, {
      alpha: 1,
      duration: duration,
      ease: "expo.out",
      delay: 0,
    });
  }
}
