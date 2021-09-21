import { initialState, orderInfoReducer } from './order-info'
import {
	GET_ORDER_INFO_REQUEST,
	GET_ORDER_INFO_SUCCESS,
	GET_ORDER_INFO_FAILED
} from '../actions/order-info'


describe('Testing Order Info reducer', () => {

	it('should return the initial state', () => {
		const state = orderInfoReducer(undefined, {})
		expect(state).toEqual(initialState)
	})

	it('should handle GET_ORDER_INFO_REQUEST', () => {
		const action = { type: GET_ORDER_INFO_REQUEST }
		const state = orderInfoReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: true
		}
		expect(state).toEqual(result)
	})

	it('should handle GET_ORDER_INFO_SUCCESS', () => {
		const action = {
			type: GET_ORDER_INFO_SUCCESS,
			order: '5555'
		}
		const state = orderInfoReducer(initialState, action)
		const result = {
			...initialState,
			order: '5555',
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle GET_ORDER_INFO_FAILED', () => {
		const action = { type: GET_ORDER_INFO_FAILED }
		const state = orderInfoReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

})