import {
    OPEN_DATA_MODAL,
    CLOSE_DATA_MODAL
} from '../actions/modal-data';

export const initialState = {
    isModalDataOpened: false
};

export const modalDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DATA_MODAL:
            return {
                isModalDataOpened: true
            }

        case CLOSE_DATA_MODAL:
            return {
                isModalDataOpened: false
            }

        default:
            return state;
    }
};