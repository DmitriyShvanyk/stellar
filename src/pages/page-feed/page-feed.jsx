import { OrderList } from '../../components/order-list/order-list'
import { FeedInfo } from '../../components/feed-info/feed-info'
import styles from './page-feed.module.css'

export const PageFeed = () => {    
    return (
        <div className="content">
            <h1 className="content__title text text_type_main-large mt-5 mb-5">
                Лента заказов
            </h1>
            <div className="content__body">
                <div className={`${styles.feed} scrollbar-vertical`}>
                    <OrderList />
                </div>
                <FeedInfo />
            </div>
        </div>
    )
}