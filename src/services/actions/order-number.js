import { API_LINK_ORDERS } from '../api'
import { getCookie } from '../utils'

export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST'
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS'
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED'
export const SET_ORDER_ITEMS = 'SET_ORDER_ITEMS'

export const getOrderNumber = payload => async dispatch => {
    dispatch({
        type: GET_ORDER_NUMBER_REQUEST
    })

    return await fetch(API_LINK_ORDERS, {
        method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: `Bearer ${getCookie('accessToken')}`
            },
            body: JSON.stringify(payload)
        })
        .then(async response => {
            if (response.ok) {
                return await response.json()
            } else {
                throw new Error('Something went wrong')
            }
        })
        .then(response => {
            if (response && response.success) {
                //console.log(response.order)
                dispatch({
                    type: GET_ORDER_NUMBER_SUCCESS,
                    orderId: response.order.number
                });
            }
        })
        .catch(() => {
            dispatch({
                type: GET_ORDER_NUMBER_FAILED
            });
        });
};

export const setOrderItems = itemsId => dispatch => {
    dispatch({
        type: SET_ORDER_ITEMS,
        itemsId: itemsId
    })
}