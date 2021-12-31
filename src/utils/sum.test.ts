import { sum } from './sum'

interface Outgoing {
	[type: string]: any
	value: number
}

describe('average.ts', () => {
	const names = ['Carlos']
	names.forEach(names => console.log(names))

	const outgoings: Outgoing[] = [{ value: 10 }, { value: 100 }]

	it('should return 110', () => {
		expect(sum(outgoings)).toBe(110)
	})
})
