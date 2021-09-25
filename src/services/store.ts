import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { rootReducer } from './root-reducer'
import { socketMiddleware } from './middleware/socketMiddleware'

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__<any>({})
		:
		compose;

const enhancer = composeEnhancers(applyMiddleware(thunk), applyMiddleware(socketMiddleware()))
export const store = createStore(rootReducer, enhancer)