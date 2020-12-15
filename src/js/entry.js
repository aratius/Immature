// entry point
import App from './App'

let body, app

function init() {
    body = document.querySelector('#app')
    app = new App()
    body.appendChild(app.view)
    
    window.addEventListener('mousemove', function (e) {
        app._mousemove(e)
    })
    
    window.addEventListener('click', function(e) {
        app._click(e)
    })

    window.addEventListener('touchstart', function(e) {
        app._touchstart(e)
    })

    window.addEventListener('touchmove', function(e) {
        app._touchmove(e)
    })
    
    window.addEventListener('touchend', function(e) {
        app._touchend(e)
    })

    window.addEventListener('resize', function () {
        app._resize()
    })

}
init()

app._setup()
app._resize()

function animate() {
    requestAnimationFrame(animate)
    app._update()
}
animate()
