import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.menu = document.querySelector(selector);
    }

    open(event) {
        event.preventDefault();
        this.menu.style.display = 'block'
        if (event.clientX+this.menu.offsetWidth>window.innerWidth){
            this.menu.style.left = window.innerWidth - this.menu.offsetWidth + 'px'
        }else {
            this.menu.style.left = event.clientX + 'px'
        }
        if (event.clientY+this.menu.offsetHeight>window.innerHeight){
            this.menu.style.top = window.innerHeight - this.menu.offsetHeight + 'px'
        }else {
            this.menu.style.top = event.clientY + 'px'
        }
    }

    close() {
        this.menu.style.display = 'none';
    }

    add(module) {
        this.menu.insertAdjacentHTML('beforeend', module.toHTML());
        this.menu.style.display = 'none';

        this.el.querySelector('.menu-item').addEventListener('click', () => {
            module.trigger();
        });
    }
}