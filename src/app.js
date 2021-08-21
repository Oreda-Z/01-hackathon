import './styles.css'
import {BackgroundModule} from './modules/background.module'
import {TimerModule} from './modules/timer.module'
import {ShapeModule} from "./modules/shape.module";

/*
Todo:
 - Добавил временно, для тестов модулей
 - Удалить после реализации меню
* */
const backgroundModule = new BackgroundModule('background','Поменять Цвет')
const timerModule = new TimerModule('timer','Таймер')
const createShape = new ShapeModule('shape', 'Создать фигурку')

const menu = document.querySelector('#menu')
menu.insertAdjacentHTML('beforeend',backgroundModule.toHTML())
menu.insertAdjacentHTML('beforeend',timerModule.toHTML())
menu.insertAdjacentHTML('beforeend',createShape.toHTML())

menu.addEventListener('click',(event)=>{
	if(event.target.dataset.type === 'background'){
		backgroundModule.trigger()
	}
	if(event.target.dataset.type === 'timer'){
		timerModule.trigger()
	}
	if(event.target.dataset.type === 'shape'){
		createShape.trigger()
	}
})

