import * as PIXI from 'pixi.js'
import Main from './main'
import Vector2 from './utils/vector2'
import Bullet from './utils/bullet'
import Color from './utils/color'
import getAxios from './utils/axios'
import TextController from './utils/textController'

export default class Text extends Main {

    constructor() {
        super()

        this.texts = []
        this.userTexts;

        this.keys = [null]
    }

    onSetup() {
        const url = "https://falltext-default-rtdb.firebaseio.com/texts.json"
        this.userTexts = new getAxios(url);
        setInterval(function() {
            this.userTexts.getData()
            this.checkUserTexts()
        }.bind(this),1000)

        window.addEventListener('click', ()=> {
            for(let i in this.texts) {
                this.texts[i].goHome(1, )
            }
        })
    }

    checkUserTexts() {
        //新しい要素が追加されていたらinitTextを実行
        for(let key in this.userTexts.data) {
            let diff = 0;
            for(let i in this.keys) {
                //自分と違うかったら
                if(this.keys[i] != key){
                    diff += 1;  //カウントアップ
                }
            }
            //全部が自分と違うかったら（新規テキストなら）
            if(diff == this.keys.length) {
                this.keys.push(key)
                this.initText(this.userTexts.data[key].text)
            }
        }
    }

    initText(text) {
        let arrayText = text.split('')
        let y = Math.random()*this.sh
        for(let i in arrayText) {
            let detail = {fontFamily: "Arial", fontSize: 100, fill: 0x000000, align: "center"}
            let textSprite = new TextController(arrayText[i], detail, new Vector2(i*50+50, y), 0.5)
            this.addChild(textSprite)
            this.texts.push(textSprite)
        }
    }

    onUpdate() {
        for(let i in this.texts) {
            this.texts[i].onUpdate(this.sw, this.sh, this.mousePosition, this.mouseMoved)
        }

    }

    onResize() { }

}   