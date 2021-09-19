import { API_LINK_ORDERS } from '../api'

export const GET_ORDER_INFO_REQUEST = 'GET_ORDER_INFO_REQUEST'
export const GET_ORDER_INFO_SUCCESS = 'GET_ORDER_INFO_SUCCESS'
export const GET_ORDER_INFO_FAILED = 'GET_ORDER_INFO_FAILED'

export const getOrderInfo = id => async dispatch => {
    dispatch({
        type: GET_ORDER_INFO_REQUEST
    })

    return await fetch(`${API_LINK_ORDERS}/${id}`)
        .then(async response => {
            if (response.ok) {
                return await response.json()
            } else {
                throw new Error('Something went wrong')
            }
        })
        .then(response => {            
            if (response && response.success) {
                dispatch({
                    type: GET_ORDER_INFO_SUCCESS,
                    order: response.data.orders[0]
                })
            }
        })
        .catch(() => {
            dispatch({
                type: GET_ORDER_INFO_FAILED
            })
        })
}