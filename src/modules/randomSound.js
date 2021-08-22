import {Module} from '../core/module'
import {random} from "../utils";

export class RandomSound extends Module {

    #sounds;

    constructor(type, text) {
        super(type, text);
        this.#sounds = ['https://song.nazvonok.ru/song/95b8/na-sms-zabavnyy-zvuk.mp3', 'https://song.nazvonok.ru/song/6c80/sms-uvedomlenie-na-iphone-zvuk-sms-na-telefonah-apple.mp3',
        'https://song.nazvonok.ru/song/bfc4/vystrel-s-glushitelya-prikol-na-sms---glushitelya.mp3', 'https://song.nazvonok.ru/song/54ce/sova-che-che.mp3',
        'https://song.nazvonok.ru/song/dcfb/effekt-eha-interesnyy-zvuk-na-soobschenie.mp3', 'https://song.nazvonok.ru/song/debe/nezhnoe-sms-krasivoe-nezhnoe-sms.mp3',
        'https://song.nazvonok.ru/song/7eea/kaplya-zvuk-padayuschey-kapli.mp3', 'https://song.nazvonok.ru/song/b0ea/brelok-zvuk-otkrytiyazakrytiya-mashiny.mp3'];
    }

    trigger() {

        const sound = random(0, this.#sounds.length - 1);
        let audio = new Audio();
        audio.preload = 'auto';
        audio.src = this.#sounds[sound];
        audio.play();
    }
}