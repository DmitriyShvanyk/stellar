import { FC } from 'react'
import { OrderInfo } from '../../components/order-info/order-info'
import styles from './page-feed-card.module.css'

export const PageFeedCard: FC = () => {
    return (
        <div className={`${styles.pageFeedCard}`}>
            <OrderInfo />
        </div>
    )
}