import * as PIXI from 'pixi.js'
import Main from './Main'

export default class App extends PIXI.Application {

    constructor() {
        super()

        this.resolution = window.devicePixelRatio

        this.backgroundColor = 0x000000

        this.resizeTimer;
    }

    onSetup() {
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
        if (this.resizeTimer) clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(function () {
            //fix renderer size
            this.view.width = this.width = this.screen.width = window.innerWidth
            this.view.height = this.height = this.screen.height = window.innerHeight

            //call main resize
            this.main.onResize()
        }.bind(this), 200)
    }

}