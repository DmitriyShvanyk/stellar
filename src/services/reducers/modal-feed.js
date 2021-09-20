import {
    OPEN_FEED_MODAL,
	CLOSE_FEED_MODAL,
} from '../actions/modal-feed'

export const initialState = {
    isModalFeedOpened: false
}

export const modalFeedReducer = (state = initialState, action) => {
    switch (action.type) {  
        case OPEN_FEED_MODAL:
            return {
                isModalFeedOpened: true
            }

        case CLOSE_FEED_MODAL:
            return {
                isModalFeedOpened: false
            }

        default:
            return state
    }
}