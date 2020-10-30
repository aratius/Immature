import * as PIXI from 'pixi.js'

export default class Main extends PIXI.Container {

    constructor() {
        super()

        this.texture = new PIXI.Texture.from('./assets/img/polygon.png')
        this.sprite = new PIXI.Sprite(this.texture)
        this.sprite.width = this.sprite.height = 100
        this.sprite.anchor.set(0.5)
        this.addChild(this.sprite)

        this.mouseX
        this.mouseY
    }

    onUpdate() {
        this.sprite.position.x = this.mouseX
        this.sprite.position.y = this.mouseY
    }

    mousemove(e) {
        this.mouseX = e.offsetX
        this.mouseY = e.offsetY
    }


}