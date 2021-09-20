import { WS_CONNECTION_START, WS_CONNECTION_CLOSE } from '../../services/actions/wsActionTypes'

import {
    wsConnectionSuccess,
    wsConnectionError,
    wsConnectionClosed,
    wsGetOrders,
} from '../actions/feed'


export const socketMiddleware = () => {
    return store => {
        let ws = null

        return next => action => {
            const { dispatch } = store
            const { type, payload } = action

            if (type === WS_CONNECTION_START) {
                ws = new WebSocket(payload)
            }

            if (type === WS_CONNECTION_CLOSE) {
                ws.close()
            }

            if (ws) {
                ws.onopen = event => dispatch(wsConnectionSuccess(event))
                ws.onerror = event => dispatch(wsConnectionError(event))
                ws.onclose = event => dispatch(wsConnectionClosed(event))
                ws.onmessage = event => dispatch(wsGetOrders(JSON.parse(event.data)))
            }

            next(action)
        }
    }
}