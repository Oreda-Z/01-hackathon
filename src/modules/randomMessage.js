import {Module} from '../core/module'
import {random, randomColor} from "../utils"

export class RandomMessage extends Module {

    #messages

    constructor(type, text) {
        super(type, text)
        this.#messages = ['Улыбнись сегодняшнему дню', 'Зарядка сама себя не сделает', 'Желаем бодрости духа', 'Позаботься о себе',
            'Помни зачем ты здесь', 'Волшебство в твоих руках', 'Учиться, учиться, учиться'
        ]
    }

    trigger() {
        const indexOdWord = random(0, this.#messages.length - 1)
        const randomMessage = document.createElement('div')
        randomMessage.innerHTML = `<h2 class="random__message__text">${this.#messages[indexOdWord]}</h2>`
        randomMessage.style.color = randomColor()
        randomMessage.className = 'random__message'
        document.body.append(randomMessage)
        setTimeout(()=> {randomMessage.remove()}, 3000)
    }
}