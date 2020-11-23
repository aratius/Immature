import * as PIXI from "pixi.js";
import { AsciiFilter } from "@pixi/filter-ascii";
import SampleFilter from "./filter/sampleFilter";
import Main from "./main";
import Vector2 from "./utils/vector2";
import ImgController from "./utils/imgController";
import AnimationDot from "./utils/animationDot";
import Color from "./utils/color";

export default class DeadOrAlive extends Main {
  constructor() {
    super();

    this.aliveImg;
    this.deadImg;
    this.imgInit();

    this.dots = [];
    this.dotSpace = 30;
    this.dotSize = 10;
  }

  imgInit() {
    const aliveTex = new PIXI.Texture.from("./assets/img/alive.png");
    this.aliveImg = new ImgController(
      aliveTex,
      new Vector2(this.sw / 2, this.sh / 2),
      300,
      0x000000
    );
    this.addChild(this.aliveImg);

    const deadTex = new PIXI.Texture.from("./assets/img/dead.png");
    this.deadImg = new ImgController(
      deadTex,
      new Vector2(this.sw / 2, this.sh / 2),
      300,
      0x000000
    );
    this.deadImg.alpha = 0;
    this.addChild(this.deadImg);
  }

  onSetup() {
    // this.filters = [new AsciiFilter()];
    this.filters = [new SampleFilter()];
  }

  dotInit() {
    for (let i in this.dots) {
      this.removeChild(this.dots[i]);
    }
    this.dots = [];

    const texture = new PIXI.Texture.from("./assets/img/circle.png");

    const loopCount = Math.ceil(
      Math.sqrt(Math.pow(Math.max(this.sw, this.sh), 2)) / this.dotSpace
    );
    let dotNum = 0;
    for (let i = 0; i < loopCount; i++) {
      let dist = this.dotSpace * i; //原点からの距離
      for (let j = 0; j < dotNum; j++) {
        let r = (Math.PI * 2 * j) / dotNum + dotNum; //角度
        let x = this.sw / 2 + Math.sin(r) * dist; //極座標
        let y = this.sh / 2 + Math.cos(r) * dist;
        let dot = new AnimationDot(
          texture,
          new Vector2(x, y),
          this.dotSize,
          0xff0000
        );
        dot.radius = r;
        dot.dist = dist;
        if (dist < 200) dot.alpha = 0;
        this.dots.push(dot);
        this.addChild(dot);
      }

      dotNum += 6;
    }
  }

  onUpdate() {
    for (let i in this.dots) {
      this.dots[i].rotation(this.sw, this.sh);
    }
  }

  onResize() {
    this.aliveImg.onResize(this.sw, this.sh);

    this.dotInit();
  }
}
