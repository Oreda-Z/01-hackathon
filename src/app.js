import {ContextMenu} from './menu'
import {BackgroundModule} from './modules/background.module'
import {TimerModule} from './modules/timer.module'
import {ShapeModule} from './modules/shape.module'
import {StopWatchModule} from "./modules/stopwatch.module";

import './styles.css'
import {SuperCounter} from "./modules/superCounter";
import {RandomMessage} from "./modules/randomMessage";
import {RandomSound} from "./modules/randomSound";

const contextMenu = new ContextMenu('.menu')

window.addEventListener('contextmenu', event => {
	contextMenu.open(event)
})
document.addEventListener('click', event => {
	contextMenu.close()
})

const shapeModule = new ShapeModule('randomFigure', 'Случайная фигура');
const timerModule = new TimerModule('timer', 'Таймер');
const backgroundModule = new BackgroundModule('randomBackground', 'Сменить фон');
const stopwatchModule = new StopWatchModule('stopWatch', 'Секундомер');
const superCounter = new SuperCounter('superCounter', 'Супер счетчик');
const randomMessage = new RandomMessage('randomMessage', 'Случайное сообщение');
const randomSound = new RandomSound('randomSound', 'случайный звук');
const arrWithModules = [shapeModule, timerModule, backgroundModule, stopwatchModule, superCounter, randomMessage, randomSound];
contextMenu.add(arrWithModules);


