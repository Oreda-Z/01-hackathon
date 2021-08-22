import {Module} from '../core/module'

export class SuperCounterModule extends Module {

    #counter;
    #startValue;
    #endValue;
    #isPanel;
    #error;

    constructor(type, text) {
        super(type, text);
        this.#counter = 0;
        this.#startValue = 0;
        this.#endValue = 5;
        this.#isPanel = true;
        this.#error = '';
    }


    controlPanel() {
        const panel = document.createElement('div');
        panel.className = 'sCounter__panel';

        const display = document.createElement('div');
        display.className = 'sCounter__panel__display';
        panel.append(display);
        const counter = document.createElement('div');
        counter.className = 'sCounter__panel__display__counter';
        counter.textContent = `${this.#counter}`;
        display.append(counter);
        const counterFinish = document.createElement('div');
        counterFinish.className = 'sCounter__panel__display__counterFinish';
        display.append(counterFinish);

        const next = document.createElement('div');
        next.className = 'sCounter__panel__next';
        panel.append(next);
        const nextButton = document.createElement('button');
        nextButton.className = 'sCounter__panel__next__nextButton';
        nextButton.textContent = 'next';
        next.append(nextButton);
        next.addEventListener('click', event => {
            this.#counter += 1;
            if(this.#counter <= this.#endValue) {
                counter.textContent = `${this.#counter}`;
            }
            console.log(this.#counter)
        })

        const reset = document.createElement('div');
        next.className = 'sCounter__panel__reset';
        panel.append(reset);
        const resetButton = document.createElement('button');
        resetButton.className = 'sCounter__panel__reset__nextButton';
        resetButton.textContent = 'reset';
        next.append(resetButton);
        resetButton.addEventListener('click', event => {
            counter.textContent = `${this.#counter = this.#startValue - 1}`;
        })

        return panel;
    }

    settings() {
        const settingsPanel = document.createElement('div');
        settingsPanel.className = 'sCounter__settingPanel';

        const inputDiv = document.createElement('div');
        settingsPanel.append(inputDiv);

        if (this.#error !== '') {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'sCounter__settingPanel__error';
            errorDiv.textContent = `${this.#error}`;
            inputDiv.append(errorDiv);
        }


        const labelMin = document.createElement('label');
        labelMin.className = 'sCounter__settingPanel__labelMin';
        inputDiv.append(labelMin);

        const spanMin = document.createElement('span');
        spanMin.className = 'sCounter__settingPanel__labelMin__title';
        spanMin.textContent = 'Start Value';
        labelMin.append(spanMin);
        const inputMin = document.createElement('input');
        inputMin.className = 'sCounter__settingPanel__labelMin__input';
        inputMin.type = 'number';
        inputMin.min = '0';
        inputMin.value = this.#startValue;
        labelMin.append(inputMin);
        labelMin.addEventListener('change', event => {
            console.log(event.target.value);
            this.#startValue = event.target.value;
            this.#counter = Number(event.target.value);
        })



        const labelMax = document.createElement('label');
        labelMax.className = 'sCounter__settingPanel__labelMax';
        inputDiv.append(labelMax);

        const spanMax = document.createElement('span');
        spanMax.className = 'sCounter__settingPanel__labelMax__title';
        spanMax.textContent = 'End Value';
        labelMax.append(spanMax);
        const inputMax = document.createElement('input');
        inputMax.className = 'sCounter__settingPanel__labelMax__input';
        inputMax.type = 'number';
        inputMax.min = '0';
        inputMax.value = this.#endValue;
        labelMax.append(inputMax);
        labelMax.addEventListener('change', event => {
            console.log(event.target.value);
            this.#endValue = event.target.value;
        })

        return settingsPanel;
    }

    trigger() {
        const wrapperCounter = document.createElement('div');
        wrapperCounter.className = 'wrapperCounter';
        document.body.append(wrapperCounter);

        const tableOfContents = document.createElement('h1');
        tableOfContents.textContent = `Счетчик от ${this.#startValue} до ${this.#endValue}`;
        wrapperCounter.append(tableOfContents);
        const sCounter = document.createElement('div');
        sCounter.className = 'sCounter';
        wrapperCounter.append(sCounter);
        this.#isPanel ? sCounter.append(this.controlPanel()) : sCounter.append(this.settings());


        const deleteCounter = document.createElement('div');
        wrapperCounter.append(deleteCounter);
        const deleteCounterButton = document.createElement('button');
        deleteCounterButton.textContent = 'Удалить счетчик';
        deleteCounterButton.className = 'sCounter__panel__next__nextButton'
        deleteCounter.append(deleteCounterButton);
        deleteCounterButton.addEventListener('click', event => {
            this.#isPanel = true;
            wrapperCounter.remove();
        })

        const set = document.createElement('button');
        set.textContent = 'настройки';
        set.className = 'sCounter__panel__next__nextButton'
        deleteCounter.append(set);
        set.addEventListener('click', event => {
            wrapperCounter.remove();
            this.#isPanel = !this.#isPanel;
            tableOfContents.textContent = `Счетчик от ${this.#startValue} до ${this.#endValue}`;
            this.trigger();
            this.#isPanel ? sCounter.append(this.controlPanel()) : sCounter.append(this.settings());
        })
    }
}