import {
    OPEN_ORDER_MODAL,
	CLOSE_ORDER_MODAL,
} from '../actions/modal-order';


export const modalOrderReducer = (state = false, action) => {
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
            return state;
    }
};