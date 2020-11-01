import * as PIXI from 'pixi.js'
import Main from './Main'
import Vector2 from './utils/vector2'

export default class Sapmple extends Main {

    constructor() {
        super()

        this.texture = new PIXI.Texture.from('./assets/img/polygon.png')
        this.sprite = new PIXI.Sprite(this.texture)
        this.sprite.width = this.sprite.height = 100
        this.sprite.anchor.set(0.5)
        this.sprite.tint = 0xff0000
        this.addChild(this.sprite)

        //grid間隔
        this.grid_space_x = 30
        this.grid_space_y = 30
        this.grid_size = 15

        this.grids = []

    }

    onSetup() {

    }

    onUpdate() {
        this.sprite.position = this.mousePosition

    }

    onResize(sw, sh) {
        super.onResize(sw, sh)
        if (this.grids.length > 0) {
            for (let i in this.grids) {
                this.removeChild(this.grids[i])
            }
            this.grids = []
        }

        const texture = new PIXI.Texture.from('./assets/img/polygon.png')
        //grid個数
        const grid_num_x = this.sw / this.grid_space_x
        const grid_num_y = this.sh / this.grid_space_y
        //少し画面外にはみ出すように並べる
        for (let i = -2; i < grid_num_x + 2; i++) {
            for (let j = -2; j < grid_num_y + 2; j++) {
                const x = i * this.grid_space_x
                const y = j * this.grid_space_y

                const grid = new PIXI.Sprite(texture)
                grid.position = new Vector2(x, y)
                grid.width = grid.height = this.grid_size
                grid.anchor.set(0.5)
                this.addChild(grid)
                this.grids.push(grid)
            }
        }
    }

}