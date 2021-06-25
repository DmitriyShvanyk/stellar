import { API_LINK_INGREDIENTS } from '../api'

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'

export const ADD_CONSTRUCTOR_BUN = 'ADD_CONSTRUCTOR_BUN'
export const ADD_CONSTRUCTOR_ITEM = 'ADD_CONSTRUCTOR_ITEM'
export const MOVE_CONSTRUCTOR_ITEM = 'MOVE_CONSTRUCTOR_ITEM'
export const DEL_CONSTRUCTOR_ITEM = 'DEL_CONSTRUCTOR_ITEM'
export const RESET_CONSTRUCTOR_STATE = 'RESET_CONSTRUCTOR_STATE'

export const addConstructorBun = (item) => ({
	type: ADD_CONSTRUCTOR_BUN,
	bun: item
});

export const addConstructorItem = (item) => ({
	type: ADD_CONSTRUCTOR_ITEM,
	item: item,
	constructorIngredientId: ['60cb6564fce49c00269d4017'],
});

export const moveConstructorItem = (dragIndex, hoverIndex) => ({
	type: MOVE_CONSTRUCTOR_ITEM,
	dragIndex,
	hoverIndex
});

export const delConstructorItem = (itemId) => ({
	type: DEL_CONSTRUCTOR_ITEM,
	itemId: itemId
});

export const resetConstructorState = () => ({
	type: RESET_CONSTRUCTOR_STATE
});

export const getData = () => (dispatch) => {
	dispatch({ 
		type: GET_DATA_REQUEST 
	});

	return fetch(API_LINK_INGREDIENTS)
		.then((response) => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			dispatch({ 
				type: GET_DATA_SUCCESS, 
				data: response.data 
			});
		})
		.catch(() => {
			dispatch({ 
				type: GET_DATA_ERROR 
			});
		});
};