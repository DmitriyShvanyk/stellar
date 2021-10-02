import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './services/store'
import App from './components/app/app'
import reportWebVitals from './reportWebVitals'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router basename="/stellar">
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()