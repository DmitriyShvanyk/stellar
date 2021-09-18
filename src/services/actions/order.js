import { API_LINK_ORDERS } from '../api'

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST'
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED'

export const getOrder = (id) => async (dispatch) => {
	dispatch({ 
        type: GET_ORDER_REQUEST 
    });	

	return await fetch(`${API_LINK_ORDERS}/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
		.then( async (response) => {
			if (response.ok) {
                return await response.json()
            } else {
                throw new Error('Something went wrong')
            }
		})
		.then((response) => {
            if (response && response.success) {
                dispatch({ 
                    type: GET_ORDER_SUCCESS, 
                    order: response.data.orders[0]
                });	
            }		
		})
		.catch(() => {
			dispatch({ 
                type: GET_ORDER_FAILED 
            });
		});
}