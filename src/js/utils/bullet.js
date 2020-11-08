let gsap = require('gsap').gsap
import * as PIXI from 'pixi.js'
import Vector2 from './vector2'
import Color from './color'

export default class Bullet extends PIXI.Sprite {

    constructor(texture, position, size, tint) {
        super(texture)

        this.position = position
        this.defaultP = position
        this.width = this.height = size
        this.tint = tint
        this.anchor.set(0.5)

        this.speed = 3
    }

    onSetup() {
    }

    onUpdate() {
        this.position.y -= this.speed
    }

}