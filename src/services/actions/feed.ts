import {
    WS_CONNECTION_START,
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS
} from './wsActionTypes'
import { TOrdersObj } from '../types/feed'

export interface IWSConnectionStartAction {
	readonly type: typeof WS_CONNECTION_START;
    readonly payload: string;
}

export interface IWSConnectionCloseAction {
	readonly type: typeof WS_CONNECTION_CLOSE;
}

export interface IWSConnectionSuccessAction {
	readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConnectionErrorAction {
	readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWSConnectionClosedAction {
	readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSGetOrdersAction {
	readonly type: typeof WS_GET_ORDERS;    
    readonly payload: TOrdersObj;
}

export type TFeedActions =
	| IWSConnectionStartAction
	| IWSConnectionCloseAction
	| IWSConnectionSuccessAction
	| IWSConnectionErrorAction
	| IWSConnectionClosedAction
	| IWSGetOrdersAction;

export const wsConnectionStart = (url: string) => {
    return {
        type: WS_CONNECTION_START,
        payload: url
    }
}

export const wsConnectionClose = () => {
    return {
        type: WS_CONNECTION_CLOSE
    }
}

export const wsConnectionSuccess = () => {
    return {
        type: WS_CONNECTION_SUCCESS
    }
}

export const wsConnectionError = (event: Event | undefined) => {
    return {
        type: WS_CONNECTION_ERROR,
        payload: event
    }
}

export const wsConnectionClosed = () => {
    return {
        type: WS_CONNECTION_CLOSED
    }
}

export const wsGetOrders = (orders: any) => {
    return {
        type: WS_GET_ORDERS,
        payload: orders
    }
}