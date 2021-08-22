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
        this.#shapesContainer.innerHTML = ''
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
            const width = random(minSize, maxSize)
            const height = random(minSize, maxSize)
            const div = document.createElement('div')
            div.className = 'shape__item'
            div.style.width = `${width}px`
            div.style.height = `${height}px`
            div.style.background = randomColor()
            div.style.borderRadius = `${random(0, 50)}%`
            div.style.top = `${random(0, window.innerHeight - height)}px`
            div.style.left = `${random(0, window.innerWidth - width)}px`

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

        setTimeout(()=>{ this.getShapeContainer.innerHTML = ''}, 5000)
    }

    get getShapeContainer() {
        return this.#shapesContainer
    }
}