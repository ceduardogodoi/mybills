import { createStore, Action } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

interface CounterAction extends Action<string> {
	payload?: {
		value: number
	}
}

const rootReducer = (state = { value: 0 }, action: CounterAction) => {
	switch (action.type) {
		case 'counter/increment':
			const increment = action.payload?.value ?? 1
			return { ...state, value: state.value + increment }
		case 'counter/decrement':
			return { ...state, value: state.value - 1 }
		default:
			return state
	}
}

export const store = createStore(rootReducer, composeWithDevTools())
