import { combineReducers } from 'redux'

import { dataReducer } from './reducers/data'
import { userReducer } from './reducers/user'
import { orderNumberReducer } from './reducers/order-number'
import { orderInfoReducer } from './reducers/order-info'
import { feedReducer } from './reducers/feed'
import { modalDataReducer } from './reducers/modal-data'
import { modalOrderReducer } from './reducers/modal-order'
import { modalFeedReducer } from './reducers/modal-feed'


export const rootReducer = combineReducers({
	data: dataReducer,	
	user: userReducer,	
	orderNumber: orderNumberReducer,	
	orderInfo: orderInfoReducer,
	feed: feedReducer,	
	modalData: modalDataReducer,
	modalOrder: modalOrderReducer,
	modalFeed: modalFeedReducer
})