import {Module} from '../core/module'
import {random} from "../utils";

export class RandomMessage extends Module {

    #messages;

    constructor(type, text) {
        super(type, text);
        this.#messages = ['Lorem Ipsum is simply dummy text', 'of the printing and typesetting industry', 'It is a long established fact that a reader will be',
        'There are many variations of passages', 'by injected humour or randomised words', ' over 200 Latin words, combined with a handful of model',
        'The standard chunk of used since the 1500s is reproduced below', 'If you are going to use a passage of you need to be sure there isn\'t anything'];
    }

    trigger() {
        const indexOdWord = random(0, this.#messages.length);
        const randomMessage = document.createElement('div');
        randomMessage.textContent = this.#messages[indexOdWord];
        document.body.append(randomMessage);
    }
}