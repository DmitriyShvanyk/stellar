import { AnyAction, MiddlewareAPI } from 'redux'
import { WS_CONNECTION_START, WS_CONNECTION_CLOSE } from '../actions/wsActionTypes'

import {
    wsConnectionSuccess,
    wsConnectionError,
    wsConnectionClosed,
    wsGetOrders,
} from '../actions/feed'


export const socketMiddleware = () => {
    return (store: MiddlewareAPI) => {
        let ws: WebSocket | null = null

        return (next: (a: AnyAction) => void) => (action: AnyAction) => {
            const { dispatch } = store
            const { type, payload } = action

            if (type === WS_CONNECTION_START) {
                ws = new WebSocket(payload)
            }

            if (type === WS_CONNECTION_CLOSE) {
                ws?.close()
            }

            if (ws) {
                ws.onopen = () => dispatch(wsConnectionSuccess())
                ws.onerror = event => dispatch(wsConnectionError(event))
                ws.onclose = () => dispatch(wsConnectionClosed())
                ws.onmessage = event => dispatch(wsGetOrders(JSON.parse(event.data)))
            }

            next(action)
        }
    }
}