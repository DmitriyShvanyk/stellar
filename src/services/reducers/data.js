import {
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	GET_DATA_ERROR
} from '../actions/data'

export const initialState = {
	bun: null,
	data: [],
	constructorIngredients: [],
	isLoading: false,
	hasError: false,
};

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_DATA_REQUEST:
			return {
				...state,
				isLoading: true,
					hasError: false
			};

		case GET_DATA_SUCCESS:
			return {
				...state,
				data: action.data,
					isLoading: false,
					hasError: false
			};

		case GET_DATA_ERROR:
			return {
				...state,
				data: [],
					isLoading: false,
					hasError: true
			};

		default:
			return state;
	}
};