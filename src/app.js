import {ContextMenu} from './menu'
import {BackgroundModule} from './modules/background.module'
import {TimerModule} from './modules/timer.module'
import {ShapeModule} from './modules/shape.module'
import './styles.css'

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
const arrWithModules = [shapeModule, timerModule, backgroundModule]
contextMenu.add(arrWithModules)


