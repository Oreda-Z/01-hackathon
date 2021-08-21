import {Module} from '../core/module'
import {randomColor} from '../utils'

export class BackgroundModule extends Module {
	// constructor(type, text) {
	// 	super("randomColor", "Случайный цвет");
	// }
	trigger() {
		return document.body.style.background = randomColor()
	}
}