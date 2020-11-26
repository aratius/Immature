let gsap = require("gsap").gsap;
import * as PIXI from 'pixi.js'
import Main from './main'
import Vector2 from './utils/vector2'
import AnimationDot from './utils/animationDot'
import Color from './utils/color'

export default class Intro extends Main {

    constructor() {
        super()

        this.introTitle
        this.intro1
        this.intro2
        this.intro3
        this.intros = []

        this.allDuration = 10

        this.bgBlack

        this.timer
    }

    onSetup() {
        this.intros = []

        this.bgBlack = new PIXI.Graphics();
        this.bgBlack.width = this.sw;
        this.bgBlack.height = this.sh;
        this.bgBlack.x = this.bgBlack.y = 0;
        this.bgBlack.beginFill(0x000000);
        this.bgBlack.drawRect(0, 0, this.sw, this.sh);
        this.bgBlack.endFill();
        this.bgBlack.zIndex = -99;
        this.addChild(this.bgBlack);

        let scale = this.isTouchDevice ? 0.3 : 0.5;

        let textureTitle = new PIXI.Texture.from('./assets/img/intro/introTitle.png')
        this.introTitle = new IntroImg(textureTitle, new Vector2(this.sw/2, this.sh/5), 0x871e00, scale, 1)
        this.addChild(this.introTitle)

        let texture1 = new PIXI.Texture.from('./assets/img/intro/intro1.png')
        this.intro1 = new IntroImg(texture1, new Vector2(this.sw/2, this.sh*2/5), 0xeaeaea, scale, 0)
        this.addChild(this.intro1)
        this.intros.push(this.intro1)

        let texture2 = new PIXI.Texture.from('./assets/img/intro/intro2.png')
        this.intro2 = new IntroImg(texture2, new Vector2(this.sw/2, this.sh*3/5), 0xeaeaea, scale, 0)
        this.addChild(this.intro2)
        this.intros.push(this.intro2)

        let texture3 = new PIXI.Texture.from('./assets/img/intro/intro3.png')
        this.intro3 = new IntroImg(texture3, new Vector2(this.sw/2, this.sh*4/5), 0xeaeaea, scale, 0)
        this.addChild(this.intro3)
        this.intros.push(this.intro3)

        for(let i in this.intros) {
            this.intros[i].appear((parseInt(i)+1) * (this.allDuration/this.intros.length))
        }

        if(this.timer) clearTimeout(this.timer) 
        this.timer = setTimeout(function() {
            this.disappear()
        }.bind(this),this.allDuration*1000 + 5000)
    }

    disappear() {
        gsap.to(this, {alpha:0, duration:3})
    }


    onUpdate() {
    }

    onResize() {
        this.bgBlack.width = this.sw;
        this.bgBlack.height = this.sh;

        this.introTitle.position = new Vector2(this.sw/2, this.sh/5)
        this.intro1.position = new Vector2(this.sw/2, this.sh*2/5)
        this.intro2.position = new Vector2(this.sw/2, this.sh*3/5)
        this.intro3.position = new Vector2(this.sw/2, this.sh*4/5)
    }

}

class IntroImg extends PIXI.Sprite {
    constructor(texture, position, tint, scale, alpha) {
        super(texture)

        this.position = position
        this.tint = tint
        this.anchor.set(0.5)
        this.scale.set(scale)
        this.alpha = alpha

        this.animDone = false
    }

    appear(i) {
        gsap.to(this, {alpha: 1, duration: 3, ease: 'expo.inOut', delay: i})
    }
}