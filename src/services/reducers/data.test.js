import { initialState, dataReducer } from './data'
import {
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	GET_DATA_FAILED,
	addBun,
	delItem,
	actionItem
} from '../actions/data'


describe('Testing Data reducer', () => {

	it('should return the initial state', () => {
		const state = dataReducer(undefined, {})
		expect(state).toEqual(initialState)
	})

	it('should handle GET_DATA_REQUEST', () => {
		const action = { type: GET_DATA_REQUEST }
		const state = dataReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: true,
			hasError: false
		}
		expect(state).toEqual(result)
	})

	it('should handle GET_DATA_SUCCESS', () => {
		const action = {
			type: GET_DATA_SUCCESS,
			data: [
				{ name: 'item 1' },
				{ name: 'item 2' },
				{ name: 'item 3' }
			]
		}
		const state = dataReducer(initialState, action)
		const result = {
			...initialState,
			data: [
				{ name: 'item 1' },
				{ name: 'item 2' },
				{ name: 'item 3' }
			],
			isLoading: false,
			hasError: false
		}
		expect(state).toEqual(result)
	})

	it('should handle GET_DATA_FAILED', () => {
		const action = { type: GET_DATA_FAILED, hasError: true }
		const state = dataReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: false,
			hasError: true
		}
		expect(state).toEqual(result)
	})

	it('should handle ADD_BUN', () => {
		const payload = {
			name: 'Cosmobun',
			_id: '99'
		}
		const state = dataReducer(initialState, addBun(payload))
		const result = {
			...initialState,
			bun: payload
		}
		expect(state).toEqual(result)
	})

	it('should handle DEL_ITEM', () => {
		const payload = '5';
		const state = dataReducer({
			...initialState,
			items: [{
				name: 'Cosmobun',
				constructorItemId: '5'
			}]
		},
			delItem(payload)
		)

		const result = {
			...initialState,
			items: []
		}
		expect(state).toEqual(result)
	})

	it('should handle ACTION_ITEM', () => {
		const payload = {
			dragIndex: 1,
			hoverIndex: 0
		}
		const state = dataReducer({
			...initialState,
			items: [
				{ name: 'aaa' },
				{ name: 'bbb' }
			]
		},
			actionItem(payload)
		)
		const result = {
			...initialState,
			items: [
				{ name: 'aaa' },
				{ name: 'bbb' }
			]
		}
		expect(state).toEqual(result)
	})

})