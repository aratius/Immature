import * as PIXI from 'pixi.js'
import Main from './Main'

export default class App extends PIXI.Application {

    constructor() {
        super()

        this.width = window.innerWidth
        this.height = window.innerHeight
        this.backgroundColor = 0x000000

        this.main = new Main()
        this.stage.addChild(this.main)

    }

    onUpdate() {
        this.main.onUpdate()
    }

    mousemove(e) {
        this.main.mousemove(e)
    }

    onResize() {
        this.width = window.innerWidth
        this.height = window.innerHeight
    }

}