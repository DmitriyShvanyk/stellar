import {
	WS_CONNECTION_SUCCESS,
	WS_CONNECTION_ERROR,
	WS_CONNECTION_CLOSED,
	WS_GET_ORDERS
} from '../actions/wsActionTypes'


export const initialState = {
	orders: [],
	total: 0,
	totalToday: 0,
	wsConnected: false,
	wsError: false
}

export const feedReducer = (state = initialState, action) => {
	switch (action.type) {
		case WS_CONNECTION_SUCCESS:
			return {
				...state,
				wsConnected: true,
				wsError: false
			}

		case WS_CONNECTION_ERROR:
			return {
				...state,
				wsConnected: false,
				wsError: action.payload
			}

		case WS_CONNECTION_CLOSED:
			return {
				...state,
				wsConnected: false,
				wsError: false
			}

		case WS_GET_ORDERS:
			const { orders, total, totalToday } = action.payload;

			return {
				...state,
				orders: orders,
				total: total,
				totalToday: totalToday
			}

		default:
			return state
	}
}