import {
    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILED,

    PASSWORD_NEW_REQUEST,
    PASSWORD_NEW_SUCCESS,
    PASSWORD_NEW_FAILED,
} from '../actions/password';


const initialState = {
    isPasswordReset: false,
    isPasswordNew: false,
    isLoading: false,
    hasError: false
}

export const passwordReducer = (state = initialState, action) => {
    switch (action.type) {
        case PASSWORD_RESET_REQUEST:
            return {
                ...state,
                isLoading: true,
				hasError: false
            }

        case PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                isPasswordReset: true,
                isLoading: false,
				hasError: false
            }

        case PASSWORD_RESET_FAILED:
            return {
                ...state,
                isLoading: false,
				hasError: true
            }

        case PASSWORD_NEW_REQUEST:
            return {
                ...state,
                isLoading: false,
				hasError: false
            }

        case PASSWORD_NEW_SUCCESS:
            return {
                ...state,
                isPasswordNew: true,
                isLoading: false,
				hasError: false
            }

        case PASSWORD_NEW_FAILED:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }

        default:
            return state;
    }
};