export const OPEN_DATA_MODAL: 'OPEN_DATA_MODAL' = 'OPEN_DATA_MODAL'
export const CLOSE_DATA_MODAL: 'CLOSE_DATA_MODAL' = 'CLOSE_DATA_MODAL'

export interface IOpenDataAction {
	readonly type: typeof OPEN_DATA_MODAL;
}

export interface ICloseDataAction {
	readonly type: typeof CLOSE_DATA_MODAL;
}

export type TModalDataActions = 
	| IOpenDataAction 
	| ICloseDataAction;

export const openDataModal = () => ({
	type: OPEN_DATA_MODAL
})

export const closeDataModal = () => ({
	type: CLOSE_DATA_MODAL
})