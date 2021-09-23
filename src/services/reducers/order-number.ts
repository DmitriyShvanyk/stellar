import {
	GET_ORDER_NUMBER_REQUEST,
	GET_ORDER_NUMBER_SUCCESS,
	GET_ORDER_NUMBER_FAILED,
	SET_ORDER_ITEMS,
	TOrderNumberActions
} from '../actions/order-number'
import { TOrderNumberState } from '../types/order-number'

export const initialState: TOrderNumberState = {
	orderId: null,
	itemsId: [],
	isLoading: false
}

export const orderNumberReducer = (state = initialState, action: TOrderNumberActions): TOrderNumberState => {
	switch (action.type) {
		case GET_ORDER_NUMBER_REQUEST:
			return {
				...state,
				isLoading: true,
			}

		case GET_ORDER_NUMBER_SUCCESS:
			return {
				...state,
				isLoading: false,
				orderId: action.orderId,
			}

		case GET_ORDER_NUMBER_FAILED:
			return {
				...state,
				orderId: null,
				isLoading: false,
			}

		case SET_ORDER_ITEMS:
			return {
				...state,
				itemsId: action.itemsId,
			}

		default:
			return state
	}
}