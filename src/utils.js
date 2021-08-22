export const random = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1))

export const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

export const addZero = (number) => (number < 10) ? `0${number}` : number

export const formatSeconds = sec => {
	const hours = addZero(Math.floor(sec / (60 * 60)))
	const minutes = addZero(Math.floor((sec % (60 * 60)) / 60))
	const seconds = addZero(Math.ceil((sec % (60 * 60)) % 60))

	return `${hours}:${minutes}:${seconds}`
}

export class StopWatch {
	constructor (durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		if(this.onStart) {
			this.onStart(this.timeRemaining);
		}

		this.tick();
		this.interval = setInterval(this.tick, 50)
	}

	pause = () => {
		clearInterval(this.interval);
	}

	tick = () => {
		const timeRemaining = this.timeRemaining;

		if (this.timeRemaining <= 0) {
			this.pause();

			if(this.onComplete) {
				this.onComplete();
			}

		} else {
			this.timeRemaining = timeRemaining - 0.05;

			if(this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	}

	get timeRemaining () {
		return parseFloat(this.durationInput.value);
	}

	set timeRemaining (time) {
		this.durationInput.value = time.toFixed(2);
	}

}