import * as PIXI from 'pixi.js'
import Main from './main'
import Vector2 from './utils/vector2'
import Bullet from './utils/bullet'
import Color from './utils/color'
import getAxios from './utils/axios'

export default class Text extends Main {

    constructor() {
        super()

        this.texts = []
        this.userTexts;
    }

    onSetup() {
        const url = "https://falltext-default-rtdb.firebaseio.com/texts.json"
        this.userTexts = new getAxios(url);
        setInterval(function() {
            this.userTexts.getData()
            this.checkUserTexts()
        }.bind(this),1000)
    }

    checkUserTexts() {
        for(let key in this.userTexts.data) {
            this.initText(this.userTexts.data[key].text)
        }
    }

    initText(text) {
        let textSprite = new PIXI.Text(text, {fontFamily: "Arial", fontSize: 100, fill: 0x000000, align: "center"})
        this.addChild(textSprite)
        this.texts.push(textSprite)
    }

    onUpdate() {
        for(let i in this.texts) {
            this.texts[i].position.y += 1
        }

    }

    onResize() { }

}   