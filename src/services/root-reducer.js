import { combineReducers } from 'redux'

import { dataReducer } from './reducers/data'
import { modalReducer } from './reducers/modal'
import { orderReducer } from './reducers/order'
import { totalPriceReducer } from './reducers/total-price'

export const rootReducer = combineReducers({
	data: dataReducer,
	modal: modalReducer,
	order: orderReducer,
	totalPrice: totalPriceReducer
});