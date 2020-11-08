let gsap = require('gsap').gsap
import * as PIXI from 'pixi.js'
import Vector2 from './vector2'
import Color from './color'

export default class Dot extends PIXI.Sprite {

    constructor(texture, position, size, tint) {
        super(texture)

        this.position = position
        this.defaultP = position
        this.width = this.height = size
        this.tint = tint

        this.goHomeTween;
        this.isGoHome = false
    }

    onSetup() {
    }

    onUpdate() {
    }

    goHome(duration, delay = 0) {
        this.killAnimation()
        if (this.goHomeTween) this.goHomeTween.kill()
        this.goHomeTween = gsap.to(this.position, { x: this.defaultP.x, y: this.defaultP.y, duration: duration, delay: delay, ease: 'back.out(10)', onComplete: this.onGoHome.bind(this) })
    }

    onGoHome() {
        this.isGoHome = true
    }

}