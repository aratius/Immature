import * as PIXI from 'pixi.js'
import Vector2 from './utils/vector2'

export default class Main extends PIXI.Container {

    constructor() {
        super()

        this.sw = window.innerWidth
        this.sh = window.innerHeight

        this.mousePosition = new Vector2(0, 0)

        this.transparent = new PIXI.Sprite()
        this.transparent.alpha = 0
        this.width = this.sw
        this.height = this.sh
        this.x = 0
        this.y = 0
    }

    onSetup() {

    }

    onUpdate() {
    }

    onResize(sw, sh) {
        this.sw = sw
        this.sh = sh
        console.log(this.sw);
    }

    mousemove(e) {
        this.mousePosition.x = e.offsetX
        this.mousePosition.y = e.offsetY
    }

}