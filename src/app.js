import {ContextMenu} from './menu'
import {BackgroundModule} from './modules/background.module'
import {TimerModule} from './modules/timer.module'
import {ShapeModule} from './modules/shape.module'
import {StopWatchModule} from "./modules/stopwatch.module";

import './styles.css'
import {SuperCounterModule} from "./modules/superCounter.module";
import {RandomMessageModule} from "./modules/randomMessage.module";
import {RandomSoundModule} from "./modules/randomSound.module";
import {CleanWindowModule} from "./modules/cleanWindow.module";
import {ClicksModule} from "./modules/clicks.module";

const contextMenu = new ContextMenu('.menu')

window.addEventListener('contextmenu', event => {
	contextMenu.open(event)
})
document.addEventListener('click', event => {
	contextMenu.close()
})

const shapeModule = new ShapeModule('randomFigure', 'Случайная фигура')
const timerModule = new TimerModule('timer', 'Таймер')
const backgroundModule = new BackgroundModule('randomBackground', 'Сменить фон')
const stopwatchModule = new StopWatchModule('stopWatch', 'Секундомер')
const superCounter = new SuperCounterModule('superCounter', 'Супер счетчик')
const randomMessage = new RandomMessageModule('randomMessage', 'Случайное сообщение')
const randomSound = new RandomSoundModule('randomSound', 'Cлучайный звук')
const cleanWindow = new CleanWindowModule('cleanWindow', 'Очистить экран')
const clicksModule = new ClicksModule('clicks module', 'кликер')
const arrWithModules = [shapeModule, timerModule, backgroundModule, stopwatchModule, superCounter, randomMessage, randomSound,clicksModule, cleanWindow]
contextMenu.add(arrWithModules)


