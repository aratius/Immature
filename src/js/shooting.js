import * as PIXI from 'pixi.js'
import Main from './main'
import Vector2 from './utils/vector2'
import Bullet from './utils/bullet'
import Color from './utils/color'

export default class Shooting extends Main {

    constructor() {
        super()

        this.texture = new PIXI.Texture.from('./assets/img/polygon.png')
        this.sprite = new PIXI.Sprite(this.texture)
        this.sprite.width = this.sprite.height = 100
        this.sprite.anchor.set(0.5)
        this.sprite.tint = Color.Red
        this.addChild(this.sprite)

        this.bullets = []
        this.shootTimer

        this.isKeyDown = false
    }

    onSetup() {
        window.addEventListener('keydown', function (e) {
            if (e.key == ' ') {
                this.isKeyDown = true
            } else {
                this.isKeyDown = false
            }
        }.bind(this))
        window.addEventListener('keyup', function (e) {
            this.isKeyDown = false
        }.bind(this))
        this.shootTimer = setInterval(function () {
            if (this.isKeyDown) this.shoot()
        }.bind(this), 300)
    }

    shoot() {
        let texture = new PIXI.Texture.from('./assets/img/polygon.png')
        let bullet = new Bullet(texture, this.mousePosition, 30, Color.Black)
        this.addChild(bullet)
        this.bullets.push(bullet)
    }

    onUpdate() {
        this.sprite.position = this.mousePosition

        for (let i in this.bullets) {
            this.bullets[i].onUpdate()
            if (this.bullets[i].position.y < 0 - 100) {
                this.removeChild(this.bullets[i])
                this.bullets.splice(i, 1)
            }
        }
    }

    onResize() { }

}