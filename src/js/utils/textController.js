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

    this.directionX = Math.random()
    this.directionY = Math.random()

    this.rot = (Math.random()-0.5)/100

    this.offsetX = 0
    this.offsetY = 0
  }

  onSetup() {}

  onUpdate(sw, sh, mousePosition, mouseMoved) {

    let direction = Math.atan2(this.directionX, this.directionY)

    let vx = (Math.sin(direction)-0.5) * 0.1
    let vy = (Math.cos(direction)-0.5) * 0.1

    this.position.x += vx * 2
    this.position.y += vy * 2
    this.rotation += this.rot

    if(this.position.x > sw) {
      this.position.x = sw
      this.directionX *= -1
    }else if(this.position.x < 0) {
      this.position.x = 0
      this.directionX *= -1
    }else if(this.position.y > sh) {
      this.position.y = sh
      this.directionY *= -1
    }else if(this.position.y < 0) {
      this.position.y = 0
      this.directionY *= -1
    }
  }

  collition(vy) {
    this.startTime = new Date().getTime()
    this.vZero = -vy * this.e
  }

  onResize(sw, sh) {
    this.position = this.defaultP = new Vector2(sw / 2, sh / 2);
  }

  goHome(duration, delay = 0) {
    if (this.goHomeTween) this.goHomeTween.kill();
    this.goHomeTween = gsap.to(this.position, {
      x: this.defaultP.x,
      y: this.defaultP.y,
      duration: duration,
      delay: delay,
      ease: "elastic.out(2)",
    });
    if (this.rotationTween) this.rotationTween.kill();
    this.rotationTween = gsap.to(this, {
      rotation: 0,
      duration: duration,
      delay: delay,
      ease: "elastic.out(2)",
    });
  }
}
