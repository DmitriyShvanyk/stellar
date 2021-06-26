import {
	CALC_TOTAL_PRICE,
	RESET_TOTAL_PRICE
} from '../actions/total-price'

const COUNT_BUNS = 2

export const initialState = {
	totalPrice: 0
}

export const totalPriceReducer = (state = initialState, action) => {
	switch (action.type) {
		case CALC_TOTAL_PRICE:

			let bunPrice = 0;
			let itemsPrice = 0;

			if (action.payload.bun) {
				bunPrice = action.payload.bun.price * COUNT_BUNS;
			}

			if (action.payload.items.length) {
				itemsPrice = action.payload.items.reduce((acc, val) => acc + val.price, 0);
			}

			return {
				totalPrice: itemsPrice + bunPrice
			}

		case RESET_TOTAL_PRICE:
			return {
				totalPrice: 0
			}

		default:
			return state;
	}
};