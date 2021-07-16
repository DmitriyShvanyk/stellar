import { combineReducers } from 'redux'

import { dataReducer } from './reducers/data'
import { modalDataReducer } from './reducers/modal-data'
import { modalOrderReducer } from './reducers/modal-order'
import { orderReducer } from './reducers/order'
import { userReducer } from './reducers/user'
import { passwordReducer } from './reducers/password'

export const rootReducer = combineReducers({
	data: dataReducer,	
	order: orderReducer,
	modalData: modalDataReducer,
	modalOrder: modalOrderReducer,
	user: userReducer,
	password: passwordReducer
});