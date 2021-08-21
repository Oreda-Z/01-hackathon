export const random = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1))

export const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

export const addZero = (number) => (number < 10) ? `0${number}` : number

export const formatSeconds = sec => {
	const hours = addZero(Math.floor(sec / (60 * 60)))
	const minutes = addZero(Math.floor((sec % (60 * 60)) / 60))
	const seconds = addZero(Math.ceil((sec % (60 * 60)) % 60))

	return `${hours}:${minutes}:${seconds}`
}