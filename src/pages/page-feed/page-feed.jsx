import { Title } from '../../components/title/title'
import { OrderList } from '../../components/order-list/order-list'
import { FeedInfo } from '../../components/feed-info/feed-info'
import styles from './page-feed.module.css'

export const PageFeed = () => {    
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