import { API_LINK_ORDERS } from '../api'
import { AppDispatch, AppThunk } from '../types'
import { getCookie } from '../utils'

export const GET_ORDER_NUMBER_REQUEST: 'GET_ORDER_NUMBER_REQUEST' = 'GET_ORDER_NUMBER_REQUEST'
export const GET_ORDER_NUMBER_SUCCESS: 'GET_ORDER_NUMBER_SUCCESS' = 'GET_ORDER_NUMBER_SUCCESS'
export const GET_ORDER_NUMBER_FAILED: 'GET_ORDER_NUMBER_FAILED' = 'GET_ORDER_NUMBER_FAILED'
export const SET_ORDER_ITEMS: 'SET_ORDER_ITEMS' = 'SET_ORDER_ITEMS'

export interface IGetOrderNumberRequestAction {
	readonly type: typeof GET_ORDER_NUMBER_REQUEST;
}

export interface IGetOrderNumberSuccessAction {
	readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
    readonly orderId: number | string
}

export interface IGetOrderNumberFailedAction {
	readonly type: typeof GET_ORDER_NUMBER_FAILED;    
}

export interface ISetOrderItemsAction {
	readonly type: typeof SET_ORDER_ITEMS;
    readonly itemsId: []
}

export type TOrderNumberActions = 
    | IGetOrderNumberRequestAction
    | IGetOrderNumberSuccessAction
    | IGetOrderNumberFailedAction 
    | ISetOrderItemsAction;

export const getOrderNumber: AppThunk = payload => async (dispatch: AppDispatch) => {
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

export const setOrderItems: AppThunk = itemsId => (dispatch: AppDispatch) => {
    dispatch({
        type: SET_ORDER_ITEMS,
        itemsId: itemsId
    })
}