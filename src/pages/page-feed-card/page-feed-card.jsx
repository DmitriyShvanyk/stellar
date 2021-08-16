import { OrderInfo } from '../../components/order-info/order-info'
import styles from './page-feed-card.module.css'

export const PageFeedCard = () => {
    return (
        <div className={`${styles.pageFeedCard}`}>
            <OrderInfo />
        </div>
    );
};