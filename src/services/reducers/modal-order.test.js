import { initialState, modalOrderReducer } from './modal-order'
import { openOrderModal, closeOrderModal } from '../actions/modal-order'

describe('Testing Modal Order reducer', () => {

	it('should return the initial state', () => {
		const state = modalOrderReducer(undefined, {})
		expect(state).toEqual(initialState)
	})

	it('should handle OPEN_ORDER_MODAL', () => {
		const state = modalOrderReducer(initialState, openOrderModal())
		const result = { isModalOrderOpened: true }
		expect(state).toEqual(result)
	})

	it('should handle CLOSE_ORDER_MODAL', () => {
		const state = modalOrderReducer(!initialState, closeOrderModal())
		const result = { isModalOrderOpened: false }
		expect(state).toEqual(result)
	})

})