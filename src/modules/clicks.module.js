import {Module} from '../core/module'
import {TimerModule} from './timer.module'

export class ClicksModule extends Module {
	#count
	#time
	#timer
	constructor(type, text) {
		super(type, text)
		this.#count = 0
	}

	trigger() {
		this.#time = Number(prompt('Введите время для аналитики кликов', ''))
		while (isNaN(this.#time)) {
			this.#time = Number(prompt('Введите корректное время для аналитики кликов', ''))
		}
		const click = () => this.#count +=1
		const dblclick = () => this.#count +=2
		this.#timer = new TimerModule('timerForClickModule','timerForClickModule',this.#time, false)
		this.#timer.trigger()
		document.addEventListener('click',click)
		document.addEventListener('dblclick',dblclick)
		setTimeout(()=>{
			document.removeEventListener('click',click)
			document.removeEventListener('click',dblclick)
			alert(`Вы сделали ${this.#count} кликов за ${this.#time} секунд!`)
		}, this.#time*1000)
	}
}