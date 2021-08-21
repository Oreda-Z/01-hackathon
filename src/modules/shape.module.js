import {Module} from '../core/module'
import {randomColor, random } from '../utils'

export class ShapeModule extends Module {
    #shapesContainer
    constructor(type, text) {
        super(type, text);
        this.#shapesContainer = document.createElement('div')
    }

    trigger() {
        const body = document.body
        body.append(this.#shapesContainer)
        const div = createShape()
        this.#shapesContainer.append(div)

        let currentElement
        let startX = 0
        let startY = 0

        document.addEventListener('mousemove', (evt) => {
            if (currentElement) {
                currentElement.style.top = `${evt.clientY - startY}px`
                currentElement.style.left = `${evt.clientX - startX}px`
            }
        });

        function createShape() {
            const minSize = 50
            const maxSize = 150
            const div = document.createElement('div')
            div.style.position = 'absolute'
            div.style.width = `${random(minSize, maxSize)}px`
            div.style.height = `${random(minSize, maxSize)}px`
            div.style.background = randomColor()
            div.style.borderRadius = `${random(0, 50)}%`
            div.style.top = `${random(0, window.innerHeight)}px`
            div.style.left = `${random(0, window.innerWidth)}px`

            div.addEventListener('mousedown', (e) => {
                currentElement = div;
                startX = e.offsetX
                startY = e.offsetY
            })
            div.addEventListener('mouseup', (e) => {
                currentElement = false
            });
            return div
        }

    }
}