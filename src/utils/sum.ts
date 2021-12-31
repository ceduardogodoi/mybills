interface Outgoing {
	[type: string]: any
	value: number
}

export function sum(outgoings: Outgoing[]): number {
	return outgoings.reduce((accumulator, currentValue) => {
		accumulator += currentValue.value

		return accumulator
	}, 0)
}
