import {
    OPEN_FEED_MODAL,
	CLOSE_FEED_MODAL,
    TModalFeedActions
} from '../actions/modal-feed'

import { TModalFeedState } from '../types/modal-feed'

export const initialState: TModalFeedState = {
    isModalFeedOpened: false
}

export const modalFeedReducer = (state = initialState, action: TModalFeedActions): TModalFeedState => {
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