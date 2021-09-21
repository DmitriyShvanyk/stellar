import { initialState, modalFeedReducer } from './modal-feed'
import { openFeedModal, closeFeedModal } from '../actions/modal-feed'

describe('Testing Modal Feed reducer', () => {

	it('should return the initial state', () => {
		const state = modalFeedReducer(undefined, {})
		expect(state).toEqual(initialState)
	})

	it('should handle OPEN_FEED_MODAL', () => {
		const state = modalFeedReducer(initialState, openFeedModal())
		const result = { isModalFeedOpened: true }
		expect(state).toEqual(result)
	})

	it('should handle CLOSE_FEED_MODAL', () => {
		const state = modalFeedReducer(!initialState, closeFeedModal())
		const result = { isModalFeedOpened: false }
		expect(state).toEqual(result)
	})

})