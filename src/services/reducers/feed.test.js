import { initialState, feedReducer } from './feed'
import {
	wsConnectionSuccess,
	wsConnectionError,
	wsConnectionClosed,
	wsGetOrders
} from '../actions/feed'


describe('Testing Feed reducer', () => {

	it('should return the initial state', () => {
		const state = feedReducer(undefined, {})
		expect(state).toEqual(initialState)
	})

	it('should handle WS_CONNECTION_SUCCESS', () => {
		const state = feedReducer(initialState, wsConnectionSuccess())
		const result = { 
			...initialState, 
			wsConnected: true, 
			wsError: false 
		}
		expect(state).toEqual(result)
	})

	it('should handle WS_CONNECTION_ERROR', () => {
		const payload = 'Error text'
		const state = feedReducer(initialState, wsConnectionError(payload))
		const result = { 
			...initialState, 
			wsConnected: false, 
			wsError: payload 
		}
		expect(state).toEqual(result)
	})

	it('should handle WS_CONNECTION_CLOSED', () => {
		const state = feedReducer(initialState, wsConnectionClosed())
		const result = {
			...initialState,
			wsConnected: false,
			wsError: false
		}
		expect(state).toEqual(result)
	})

	it('should handle WS_GET_ORDERS', () => {
		const payload = {
			orders: [{}, {}],
			total: 4321,
			totalToday: 432,
		}
		const state = feedReducer(initialState, wsGetOrders(payload))
		const result = {
			...initialState,
			orders: payload.orders,
			total: payload.total,
			totalToday: payload.totalToday,
		}
		expect(state).toEqual(result)
	})

})