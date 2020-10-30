import * as PIXI from 'pixi.js'
import Main from './Main'

export default class App extends PIXI.Application {

    constructor() {
        super()

        this.resolution = window.devicePixelRatio

        this.backgroundColor = 0x000000

        this.main = new Main()
        this.stage.addChild(this.main)

        this.resizeTimer;
    }

    onSetup() {
        console.log('setup');
    }

    onUpdate() {
        this.main.onUpdate()
    }

    mousemove(e) {
        this.main.mousemove(e)
    }

    onResize() {
        this.view.width = this.width = this.screen.width = window.innerWidth
        this.view.height = this.height = this.screen.height = window.innerHeight
    }

}