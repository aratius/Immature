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
        this.sprite.position = new Vector2(this.sw / 2, this.sh - 100)
        this.addChild(this.sprite)

        this.speed = 5

        this.bullets = []
        this.shootTimer

        this.isSpace = false
        this.arrowKey = {}
    }

    onSetup() {
        window.addEventListener('keydown', function (e) {
            if (e.key == ' ') this.isSpace = true
            if (e.key == 'ArrowRight' || e.key == 'd') this.arrowKey.right = true
            if (e.key == 'ArrowLeft' || e.key == 'a') this.arrowKey.left = true
            if (e.key == 'ArrowUp' || e.key == 'w') this.arrowKey.up = true
            if (e.key == 'ArrowDown' || e.key == 's') this.arrowKey.down = true
        }.bind(this))

        window.addEventListener('keyup', function (e) {
            if (e.key == ' ') this.isSpace = false
            if (e.key == 'ArrowRight' || e.key == 'd') this.arrowKey.right = false
            if (e.key == 'ArrowLeft' || e.key == 'a') this.arrowKey.left = false
            if (e.key == 'ArrowUp' || e.key == 'w') this.arrowKey.up = false
            if (e.key == 'ArrowDown' || e.key == 's') this.arrowKey.down = false
        }.bind(this))
        
        this.shootTimer = setInterval(function () {
            if (this.isSpace) this.shoot()
        }.bind(this), 300)
    }

    shoot() {
        let texture = new PIXI.Texture.from('./assets/img/polygon.png')
        let bullet = new Bullet(texture, this.sprite.position, 30, Color.Black)
        this.addChild(bullet)
        this.bullets.push(bullet)
    }

    onUpdate() {

        if (this.arrowKey.right) this.sprite.position.x += this.speed
        if (this.arrowKey.left) this.sprite.position.x -= this.speed
        if (this.arrowKey.up) this.sprite.position.y -= this.speed
        if (this.arrowKey.down) this.sprite.position.y += this.speed

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