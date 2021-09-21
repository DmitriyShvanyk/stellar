import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './root-reducer'
import { socketMiddleware } from './middleware/socketMiddleware'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose

export const initStore = (initialState = {}) =>
	createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk), applyMiddleware(socketMiddleware()))
	)