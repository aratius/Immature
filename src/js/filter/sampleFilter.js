import {
  Application,
  Sprite,
  Texture,
  Container,
  Rectangle,
  Filter,
  filters,
} from "pixi.js";

export default class SampleFilter extends Filter {
  constructor() {
    let frag = require("./shader/sampleFilter.frag");
    let vert = require("./shader/allVertex.vert");
    super(
      vert, // vertex shader
      frag, // fragment shader
      {}
    );
  }
}
