import * as PIXI from 'pixi.js'
import Sample from './sample'

export default class App extends PIXI.Application {

    constructor() {
        super()

        this.resolution = window.devicePixelRatio

        this.backgroundColor = 0x000000

        this.resizeTimer;
    }

    _setup() {
        this.sample = new Sample()
        this.sample.setup()
        this.stage.addChild(this.sample)
    }

    _update() {
        this.sample.update()
    }

    _mousemove(e) {
        this.sample.mousemove(e)
    }

    _resize() {
        if (this.resizeTimer) clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(function () {
            //fix renderer size
            this.view.width = this.width = this.screen.width = window.innerWidth
            this.view.height = this.height = this.screen.height = window.innerHeight

            //call main resize
            this.sample.Resize(window.innerWidth, window.innerHeight)
        }.bind(this), 200)
    }

}