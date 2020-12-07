import scrollTop from './scrollTop.js'
import scrollSpy from './scrollSpy.js'
import precio from './precio.js'

const d = document

d.addEventListener('DOMContentLoaded', (e) => {
    scrollTop('.scroll-top-btn')
    scrollSpy()
    precio('.cuarto', '.medio', '.kilo')
})