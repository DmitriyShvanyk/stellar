export const OPEN_ORDER_MODAL: 'OPEN_ORDER_MODAL' = 'OPEN_ORDER_MODAL'
export const CLOSE_ORDER_MODAL: 'CLOSE_ORDER_MODAL' = 'CLOSE_ORDER_MODAL'

export interface IOpenOrderAction {
	readonly type: typeof OPEN_ORDER_MODAL;
}

export interface ICloseOrderAction {
	readonly type: typeof CLOSE_ORDER_MODAL;
}

export type TModalOrderActions = 
	| IOpenOrderAction 
	| ICloseOrderAction;

export const openOrderModal = () => ({
	type: OPEN_ORDER_MODAL
})

export const closeOrderModal = () => ({
	type: CLOSE_ORDER_MODAL
})