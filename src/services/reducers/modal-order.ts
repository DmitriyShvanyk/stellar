import {
    OPEN_ORDER_MODAL,
	CLOSE_ORDER_MODAL,
    TModalOrderActions
} from '../actions/modal-order'
import { TModalOrderState } from '../types/modal-order'

export const initialState: TModalOrderState = {
    isModalOrderOpened: false
}

export const modalOrderReducer = (state = initialState, action: TModalOrderActions): TModalOrderState => {
    switch (action.type) {  
        case OPEN_ORDER_MODAL:
            return {
                isModalOrderOpened: true
            }

        case CLOSE_ORDER_MODAL:
            return {
                isModalOrderOpened: false
            }

        default:
            return state
    }
}