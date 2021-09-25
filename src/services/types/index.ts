import thunk, { ThunkAction } from 'redux-thunk'
import { Action, ActionCreator, applyMiddleware, createStore } from 'redux'

import { socketMiddleware } from '../middleware/socketMiddleware'
import { TDataActions } from '../actions/data'
import { TUserActions } from '../actions/user'
import { TFeedActions } from '../actions/feed'
import { TModalDataActions } from '../actions/modal-data'
import { TModalFeedActions } from '../actions/modal-feed'
import { TModalOrderActions } from '../actions/modal-order'
import { TOrderNumberActions } from '../actions/order-number'
import { TOrderInfoActions } from '../actions/order-info'
import { rootReducer } from '../root-reducer'

const store = createStore(rootReducer, applyMiddleware(thunk, socketMiddleware()))
export type RootState = ReturnType<typeof store.getState>

type TApplicationActions = 
    | TDataActions | TUserActions | TFeedActions 
    | TModalDataActions | TModalFeedActions | TModalOrderActions
    | TOrderNumberActions | TOrderInfoActions
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>
export type AppDispatch = typeof store.dispatch