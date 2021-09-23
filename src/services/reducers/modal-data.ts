import {
    OPEN_DATA_MODAL,
    CLOSE_DATA_MODAL,
    TModalDataActions
} from '../actions/modal-data'
import { TModalDataState } from '../types/modal-data'


export const initialState: TModalDataState = {
    isModalDataOpened: false
}

export const modalDataReducer = (state = initialState, action: TModalDataActions): TModalDataState => {
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
            return state
    }
}