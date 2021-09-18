import {
    WS_CONNECTION_START,
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS
} from '../actions/wsActionTypes'


export const wsConnectionStart = url => {
    return {
        type: WS_CONNECTION_START,
        payload: url
    }
}

export const wsConnectionClose = event => {
    return {
        type: WS_CONNECTION_CLOSE,
        payload: event
    }
}

export const wsConnectionSuccess = event => {
    return {
        type: WS_CONNECTION_SUCCESS,
        payload: event
    }
}

export const wsConnectionError = event => {
    return {
        type: WS_CONNECTION_ERROR,
        payload: event
    }
}

export const wsConnectionClosed = event => {
    return {
        type: WS_CONNECTION_CLOSED,
        payload: event
    }
}

export const wsGetOrders = orders => {
    return {
        type: WS_GET_ORDERS,
        payload: orders
    }
}