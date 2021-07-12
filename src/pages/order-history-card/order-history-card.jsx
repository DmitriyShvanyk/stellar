import { OrderInfo } from '../../components/order-info/order-info'
import styles from './order-history-card.module.css'

export const OrderHistoryCard = () => {
    return (
        <div className={`${styles.orderHistoryCard}`}>
            <OrderInfo />
        </div>
    );
};