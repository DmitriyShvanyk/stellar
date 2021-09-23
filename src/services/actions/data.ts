import { API_LINK_INGREDIENTS } from '../api'
import { TItem } from '../types/data'
import { AppThunk, AppDispatch } from '../types'

export const GET_DATA_REQUEST: 'GET_DATA_REQUEST' = 'GET_DATA_REQUEST'
export const GET_DATA_SUCCESS: 'GET_DATA_SUCCESS' = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILED: 'GET_DATA_FAILED' = 'GET_DATA_FAILED'

export const ADD_BUN: 'ADD_BUN' = 'ADD_BUN'
export const ADD_ITEM: 'ADD_ITEM' = 'ADD_ITEM'
export const DEL_ITEM: 'DEL_ITEM' = 'DEL_ITEM'
export const ACTION_ITEM: 'ACTION_ITEM' = 'ACTION_ITEM'
export const RESET_STATE: 'RESET_STATE' = 'RESET_STATE'

export interface IGetDataRequestAction {
	readonly type: typeof GET_DATA_REQUEST;
}

export interface IGetDataFailedAction {
	readonly type: typeof GET_DATA_FAILED;
}

export interface IGetDataSuccessAction {
	readonly type: typeof GET_DATA_SUCCESS;
	readonly data: Array<TItem>;
}

export interface IAddBunAction {
	readonly type: typeof ADD_BUN;
	readonly bun: TItem;
}

export interface IAddItemAction {
	readonly type: typeof ADD_ITEM;
	readonly item: TItem;
	readonly constructorItemId?: string;
}

export interface IDelItemAction {
	readonly type: typeof DEL_ITEM;
	readonly itemId: string;
}

export interface IResetStateAction {
	readonly type: typeof RESET_STATE;
}

export interface IActionItemAction {
	readonly type: typeof ACTION_ITEM;
	readonly dragIndex: number;
	readonly hoverIndex: number;
}

export type TDataActions =
	| IGetDataRequestAction
	| IGetDataFailedAction
	| IGetDataSuccessAction 
	| IAddBunAction 
	| IAddItemAction 
	| IDelItemAction 
	| IActionItemAction
	| IResetStateAction;


export const addBun = (item: TItem) => ({
	type: ADD_BUN,
	bun: item
})

export const addtem = (item: TItem) => ({
	type: ADD_ITEM,
	item: item,
	constructorItemId: item
})

export const delItem = (itemId: string) => ({
	type: DEL_ITEM,
	itemId: itemId
})

export const actionItem = (dragIndex: number, hoverIndex: number) => ({
	type: ACTION_ITEM,
	dragIndex,
	hoverIndex
})

export const resetState = () => ({
	type: RESET_STATE
})

export const getData: AppThunk = () => async (dispatch: AppDispatch) => {
	dispatch({
		type: GET_DATA_REQUEST
	})

	return await fetch(API_LINK_INGREDIENTS)
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
					type: GET_DATA_SUCCESS,
					data: response.data
				})
			}
		})
		.catch(() => {
			dispatch({
				type: GET_DATA_FAILED
			})
		})
}