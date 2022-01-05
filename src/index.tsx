import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from '~/App'

import { store } from '~/store'

import reportWebVitals from '~/reportWebVitals'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// without payload
store.dispatch({ type: 'counter/increment' })
// with payload
store.dispatch({ type: 'counter/increment', payload: { value: 2 } })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
