import {Module} from '../core/module'
import { StopWatch, randomColor } from '../utils'

export class StopWatchModule extends Module {
    #stopWatchContainer
    constructor(type, text) {
        super(type, text);
        this.#stopWatchContainer = document.createElement('div')
    }

    trigger() {
        const body = document.body
        body.append(this.#stopWatchContainer)
        this.#stopWatchContainer.className = 'timer'
        this.#stopWatchContainer.innerHTML = ` <div class="controls">
              <input id="duration" type="text" value="3">
              <div>
                <button id="start" type="button">Запустить</button>
                <button id="pause" type="button">Остановить</button>     
              </div>
            </div>
            <svg class="dial" height="400" width="400">
              <circle 
              r="190" 
              cx="200" 
              cy="200"
              fill="transparent"
              stroke= ${randomColor()}
              stroke-width="10"
              transform="rotate(-90 200 200)"
               />
            </svg></div>`

        const durationInput = document.querySelector('#duration');
        const startButton = document.querySelector('#start');
        const pauseButton = document.querySelector('#pause');
        const circle = document.querySelector('circle');
        const perimetr = circle.getAttribute('r') * 2 * Math.PI;
        circle.setAttribute('stroke-dasharray', perimetr);

        let duration;

        new StopWatch(durationInput, startButton, pauseButton, {

            onStart(totalDuration) {
                duration = totalDuration;
            },

            onTick(timeRemaining) {
                circle.setAttribute('stroke-dashoffset',
                    perimetr * timeRemaining / duration - perimetr
                );
            },

            onComplete() {
                alert('Секунды истекли..')
            }

        });
    }
}