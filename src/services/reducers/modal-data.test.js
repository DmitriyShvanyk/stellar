import { initialState, modalDataReducer } from './modal-data'
import { openDataModal, closeDataModal } from '../actions/modal-data'

describe('Testing Modal Data reducer', () => {

	it('should return the initial state', () => {
		const state = modalDataReducer(undefined, {})
		expect(state).toEqual(initialState)
	})

	it('should handle OPEN_DATA_MODAL', () => {
		const state = modalDataReducer(initialState, openDataModal())
		const result = { isModalDataOpened: true }
		expect(state).toEqual(result)
	})

	it('should handle CLOSE_DATA_MODAL', () => {
		const state = modalDataReducer(!initialState, closeDataModal())
		const result = { isModalDataOpened: false }
		expect(state).toEqual(result)
	})

})