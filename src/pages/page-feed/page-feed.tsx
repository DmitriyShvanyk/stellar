import { FC } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from '../../services/hooks'
import { wsConnectionStart, wsConnectionClose } from '../../services/actions/feed'
import { API_WS_ORDERS_ALL } from '../../services/api'
import { Title } from '../../components/title/title'
import { OrderList } from '../../components/order-list/order-list'
import { FeedInfo } from '../../components/feed-info/feed-info'
import { Loader } from '../../components/loader/loader'
import styles from './page-feed.module.css'

export const PageFeed: FC = () => {
    const dispatch = useDispatch()
    const { orders } = useSelector(state => state.feed)

    useEffect((): (() => void) => {
        dispatch(wsConnectionStart(API_WS_ORDERS_ALL))
        return () => dispatch(wsConnectionClose())
    }, [dispatch])

    return (
        <div className="content">
            <Title text="Лента заказов" />
            {orders?.length > 0 ? (<div className="content__body">
                <div className={`${styles.feed} scrollbar-vertical`}>
                    <OrderList />
                </div>
                <FeedInfo />
            </div>) : (<Loader/>)}
        </div>
    )
}