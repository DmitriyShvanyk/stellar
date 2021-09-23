export const OPEN_FEED_MODAL: 'OPEN_FEED_MODAL' = 'OPEN_FEED_MODAL'
export const CLOSE_FEED_MODAL: 'CLOSE_FEED_MODAL' = 'CLOSE_FEED_MODAL'

export interface IOpenFeedAction {
	readonly type: typeof OPEN_FEED_MODAL;
}

export interface ICloseFeedAction {
	readonly type: typeof CLOSE_FEED_MODAL;
}

export type TModalFeedActions = 
	| IOpenFeedAction 
	| ICloseFeedAction;

export const openFeedModal = () => ({
	type: OPEN_FEED_MODAL
})

export const closeFeedModal = () => ({
	type: CLOSE_FEED_MODAL
})