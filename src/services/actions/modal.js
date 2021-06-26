export const OPEN_DATA_MODAL = 'OPEN_DATA_MODAL'
export const CLOSE_DATA_MODAL = 'CLOSE_DATA_MODAL'
export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL'
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL'

export const openDataModal = (data) => ({
	type: OPEN_DATA_MODAL,
	data: data
})

export const closeDataModal = () => ({
	type: CLOSE_DATA_MODAL
})

export const openOrderModal = () => ({
	type: OPEN_ORDER_MODAL
})

export const closeOrderModal = () => ({
	type: CLOSE_ORDER_MODAL
})