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

  onUpdate() {}

  onResize() {}
}
