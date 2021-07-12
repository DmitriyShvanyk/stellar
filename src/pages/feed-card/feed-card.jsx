import { OrderInfo } from '../../components/order-info/order-info'
import styles from './feed-card.module.css'

export const FeedCard = () => {
    return (
        <div className={`${styles.feedCard}`}>
            <OrderInfo />
        </div>
    );
};