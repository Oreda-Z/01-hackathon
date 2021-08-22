import {Module} from '../core/module'


export class CleanWindow extends Module {


    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const copyUi = document.querySelector('.menu');
        console.log(copyUi);
        document.body.innerHTML = '';
        document.body.append(copyUi);
        // window.location.reload()
    }
}