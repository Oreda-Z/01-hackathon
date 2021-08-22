import {Module} from '../core/module'
import {formatSeconds} from '../utils'

export class TimerModule extends Module {
	#time
	#timerTemplate
	#timerStyles
	#timerInterval
	#showMessage

	constructor(type, text, time, showMessage = true) {
		super(type, text)
		this.#time = time
		this.#showMessage = showMessage
		this.#timerTemplate = document.createElement('div')
		this.#timerStyles = `
			background-color:lightblue; 
			color: dark;
			padding: 20px;
			font-size: 24px;
			font-weight: 700;
			position: fixed;
			right: 2rem;
			border: 2px solid black;
			border-radius: 5px;
		`
		this.#timerTemplate.setAttribute('style', this.#timerStyles)
	}

	trigger() {
		if(!this.#time){
			this.#time = Number(prompt('Введите время для таймера', ''))
		}
		while (isNaN(this.#time)) {
			this.#time = Number(prompt('Введите корректное время для таймера', ''))
		}
		this.#start()
		this.#timerInterval = setInterval(() => {
			if (this.#time === 0) {
				this.#destroy()
			}
			this.#timerTemplate.innerHTML = formatSeconds(--this.#time)
		}, 1000)
	}

	#start() {
		this.#destroy()
		this.#timerTemplate.innerHTML = formatSeconds(this.#time)
		document.body.append(this.#timerTemplate)
	}

	#alertMessage() {
		if (this.#showMessage){
			alert('Обратный отсчет окончен! Таймер успешно уничтожен :)')
		}
	}

	#destroy() {
		clearInterval(this.#timerInterval)
		this.#timerTemplate.remove()
		if (this.#time === 0) {
			this.#alertMessage()
		}
	}
}