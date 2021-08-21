import './styles.css'
import {ContextMenu} from "./menu";
import {BackgroundModule} from './modules/background.module'
import {TimerModule} from './modules/timer.module'
import {ShapeModule} from "./modules/shape.module";
import {randomColor} from "./utils";


// /*
// Todo:
//  - Добавил временно, для тестов модулей
//  - Удалить после реализации меню и качественной проверки
//
// * */
// const backgroundModule = new BackgroundModule('background','Поменять Цвет')
// const timerModule =new TimerModule('timer','Таймер')
// const createShape = new ShapeModule('shape', 'Создать фигурку')
//
// const menu = document.querySelector('#menu')
// menu.insertAdjacentHTML('beforeend',backgroundModule.toHTML())
// menu.insertAdjacentHTML('beforeend',timerModule.toHTML())
// menu.insertAdjacentHTML('beforeend',createShape.toHTML())
//
// menu.addEventListener('click',(event)=>{
// 	if(event.target.dataset.type === 'background'){
// 		backgroundModule.trigger()
// 	}
// 	if(event.target.dataset.type === 'timer'){
// 		timerModule.trigger()
// 	}
// 	if(event.target.dataset.type === 'shape'){
// 		createShape.trigger()
// 	}
// })

const contextMenu = new ContextMenu('.menu');


window.addEventListener("contextmenu", event => {
	contextMenu.open(event);
})
document.addEventListener("click", event => {
	contextMenu.close();
})

const shapeModule = new ShapeModule("randomColor", "Случайная фигура");
contextMenu.add(shapeModule);
