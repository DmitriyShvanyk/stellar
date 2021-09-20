import {
	GET_ORDER_INFO_REQUEST,
	GET_ORDER_INFO_SUCCESS,
	GET_ORDER_INFO_FAILED,
} from '../actions/order-info';

export const initialState = {
	order: [],
	isLoading: false
};

export const orderInfoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORDER_INFO_REQUEST:
			return {
				...state,
				isLoading: true,
			}

		case GET_ORDER_INFO_SUCCESS:
			return {
				...state,
				isLoading: false,
				order: action.order,
			}

		case GET_ORDER_INFO_FAILED:
			return {
				...state,
				isLoading: false,
			}

		default:
			return state;
	}
};
