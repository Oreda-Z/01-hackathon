import './styles.css'
import {BackgroundModule} from './modules/background.module'

/*
Todo:
 - Добавил временно, для тестов модулей
 - Удалить после реализации меню
* */
const backgroundModule = new BackgroundModule('background','Поменять Цвет')
const menu = document.querySelector('#menu')
menu.innerHTML = backgroundModule.toHTML()
menu.addEventListener('click',(event)=>{
	if(event.target.dataset.type === 'background'){
		backgroundModule.trigger()
	}
})