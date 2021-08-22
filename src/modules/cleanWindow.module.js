import {Module} from '../core/module'


export class CleanWindowModule extends Module {


    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        const copyUl = document.querySelector('.menu')
        console.log(copyUl);
        document.body.innerHTML = ''
        document.body.style.background = 'none'
        document.body.append(copyUl)
    }
}