let gsap = require("gsap").gsap;
import * as PIXI from "pixi.js";
import Vector2 from "./vector2";
import Color from "./color";
import Dot from "./Dot";

export default class AnimationDot extends Dot {
  constructor(texture, position, size, tint) {
    super(texture, position, size, tint);

    this.slideTween;

    this.seed = Math.PI / 2;

    this.seeds = [
      Math.random() * 2 + 1,
      Math.random() * 2 + 1,
      Math.random() * 2 + 1,
      Math.random() * 2 + 1,
    ];
    this.startTime = new Date().getTime();
  }

  onSetup() {
    this.position.x = this.position.x += (Math.random() - 0.5) * 1000;
    this.position.y = this.position.y += (Math.random() - 0.5) * 1000;
  }

  onUpdate() {}

  killAnimation() {
    console.log("kill");
    if (this.slideTween) this.slideTween.kill();
  }

  slide() {
    // this.position = this.defaultP
    if (this.slideTween) this.slideTween.kill();
    this.slideTween = gsap.to(this.position, {
      x: this.defaultP.x + (Math.random() - 0.5) * 200,
      y: this.defaultP.y + (Math.random() - 0.5) * 200,
      duration: 1,
      ease: "expo.inOut",
      onComplete: this.slide.bind(this),
    });
  }

  rotation(sw, sh, mvX, randomAmount) {
    let x, y;
    if (this.radius && this.dist) {
      this.radius += (0.01 * this.dist * (mvX / 10 + 0.5)) / 300;
      x = sw / 2 + Math.sin(this.radius) * this.dist;
      y = sh / 2 + Math.cos(this.radius) * this.dist;
      let random = this.random();
      this.position.x = x + random.x * randomAmount;
      this.position.y = y + random.y * randomAmount;
    }
  }

  random() {
    let time = new Date().getTime() - this.startTime;
    time /= 1000;
    let range = 5;

    let sin1 = Math.sin(time * this.seeds[0]);
    let sin2 = Math.sin(time * this.seeds[1]);
    let cos1 = Math.sin(time * this.seeds[2]);
    let cos2 = Math.sin(time * this.seeds[3]);

    let x = (sin1 - sin2) * range;
    let y = (cos1 - cos2) * range;

    return new Vector2(x, y);
  }
}
