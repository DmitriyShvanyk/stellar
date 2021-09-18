import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wsConnectionStart, wsConnectionClose } from '../../services/actions/feed'
import { API_WS_ORDERS_ALL } from '../../services/api'
import { Title } from '../../components/title/title'
import { OrderList } from '../../components/order-list/order-list'
import { FeedInfo } from '../../components/feed-info/feed-info'
import styles from './page-feed.module.css'

export const PageFeed = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(wsConnectionStart(API_WS_ORDERS_ALL))
        return () => dispatch(wsConnectionClose())
    }, [dispatch])

    return (
        <div className="content">
            <Title text="Лента заказов" />
            <div className="content__body">
                <div className={`${styles.feed} scrollbar-vertical`}>
                    <OrderList />
                </div>
                <FeedInfo />
            </div>
        </div>
    )
}