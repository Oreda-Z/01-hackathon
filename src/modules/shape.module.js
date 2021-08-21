import {Module} from '../core/module'
import {randomColor, random } from '../utils'

export class ShapeModule extends Module {
    // отправить в репо
    #shapesContainer
    constructor(type, text) {
        super(type, text);
        this.#shapesContainer = document.createElement('div')
        this.#shapesContainer.style.position = 'relative'
    }

    trigger() {
        const body = document.body
        body.append(this.#shapesContainer)
        this.#shapesContainer.append(createShape())

        function createShape() {
            const minSize = 0
            const maxSize = 150
            const div = document.createElement('div')
            div.style.position = 'absolute'
            div.style.width = `${random(minSize, maxSize)}px`
            div.style.height = `${random(minSize, maxSize)}px`
            div.style.background = randomColor()
            div.style.borderRadius = `${random(0, 50)}%`
            div.style.top = `${random(0, window.innerHeight)}px`
            div.style.left = `${random(0, window.innerWidth)}px`
            return div
        }
    }
}