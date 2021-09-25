import {
	GET_ORDER_INFO_REQUEST,
	GET_ORDER_INFO_SUCCESS,
	GET_ORDER_INFO_FAILED,
	TOrderInfoActions
} from '../actions/order-info'
import { TOrderInfoState } from '../types/order-info'

export const initialState: TOrderInfoState = {
	order: [],
	isLoading: false
}

export const orderInfoReducer = (state = initialState, action: TOrderInfoActions): TOrderInfoState => {
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
			return state
	}
}