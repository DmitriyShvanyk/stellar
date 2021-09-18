import {
	GET_ORDER_REQUEST,
	GET_ORDER_SUCCESS,
	GET_ORDER_FAILED,
} from '../actions/order';

export const initialState = {
	order: [],
	isLoading: false
};

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORDER_REQUEST:
			return {
				...state,
				isLoading: true,
			}

		case GET_ORDER_SUCCESS:
			return {
				...state,
				isLoading: false,
				order: action.order,
			}

		case GET_ORDER_FAILED:
			return {
				...state,
				isLoading: false,
			}

		default:
			return state;
	}
};
