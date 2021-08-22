import {Module} from '../core/module'
import {TimerModule} from "./timer.module";

export class ClicksModule extends Module {

    #timer
    #counter

    constructor(type, text) {
        super(type, text)
        this.#counter = 0;
    }

    trigger() {

        const timerBlock = new TimerModule('type', 'timer')
        timerBlock.trigger();

    }
}