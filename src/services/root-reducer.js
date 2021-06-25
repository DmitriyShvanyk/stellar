import { combineReducers } from 'redux'

import { dataReducer } from './reducers/data'
import { modalReducer } from './reducers/modal'

export const rootReducer = combineReducers({
	data: dataReducer,
	modal: modalReducer
});