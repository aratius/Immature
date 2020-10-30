// entry point

import * as PIXI from 'pixi.js'

import App from './js/App'

const body = document.querySelector('#app')
const app = new App()
body.appendChild(app.view)

window.addEventListener('mousemove', function (e) {
    app.mousemove(e)
})
window.addEventListener('resize', function () {
    app.onResize()
})
app.onResize()

function animate() {
    requestAnimationFrame(animate)
    app.onUpdate()
}
animate()

console.log('hello arata');
