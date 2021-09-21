import { initialState, orderNumberReducer } from './order-number'
import {
	GET_ORDER_NUMBER_REQUEST,
	GET_ORDER_NUMBER_SUCCESS,
	GET_ORDER_NUMBER_FAILED,
	SET_ORDER_ITEMS
} from '../actions/order-number'


describe('Testing Order Number reducer', () => {

	it('should return the initial state', () => {
		const state = orderNumberReducer(undefined, {})
		expect(state).toEqual(initialState)
	})

	it('should handle GET_ORDER_NUMBER_REQUEST', () => {
		const action = { type: GET_ORDER_NUMBER_REQUEST }
		const state = orderNumberReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: true
		}
		expect(state).toEqual(result)
	})

	it('should handle GET_ORDER_NUMBER_SUCCESS', () => {
		const action = {
			type: GET_ORDER_NUMBER_SUCCESS,
			orderId: '5555'
		}
		const state = orderNumberReducer(initialState, action)
		const result = {
			...initialState,
			orderId: '5555',
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle GET_ORDER_NUMBER_FAILED', () => {
		const action = { type: GET_ORDER_NUMBER_FAILED }
		const state = orderNumberReducer(initialState, action)
		const result = {
			...initialState,
			orderId: null,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle SET_ORDER_ITEMS', () => {
		const action = {
			type: SET_ORDER_ITEMS,
			itemsId: ['1555', '1556', '1557']
		}
		const state = orderNumberReducer(initialState, action)
		const result = {
			...initialState,
			itemsId: ['1555', '1556', '1557']
		}
		expect(state).toEqual(result)
	})

})