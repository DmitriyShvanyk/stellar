import {
    OPEN_DATA_MODAL,
    CLOSE_DATA_MODAL,
    OPEN_ORDER_MODAL,
	CLOSE_ORDER_MODAL,
} from '../actions/modal';

export const initialState = {
    currentIngredient: null,
    isModalDataOpened: false
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DATA_MODAL:
            return {
                currentIngredient: action.data,
                    isModalDataOpened: true
            }

        case CLOSE_DATA_MODAL:
            return {
                currentIngredient: null,
                    isModalDataOpened: false
            }

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