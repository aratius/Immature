// entry point
import App from './js/App'

const body = document.querySelector('#app')
const app = new App()
body.appendChild(app.view)

window.addEventListener('mousemove', function (e) {
    app._mousemove(e)
})
window.addEventListener('resize', function () {
    app._resize()
})
app._setup()
app._resize()

function animate() {
    requestAnimationFrame(animate)
    app._update()
}
animate()

