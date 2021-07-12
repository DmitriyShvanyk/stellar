import Order from '../../components/order/order'
import styles from './order-history.module.css'

export const OrderHistory = () => {
    return (
        <div className={`${styles.orderHistory} scrollbar-vertical`}>
            <Order />
            <Order />
            <Order />
            <Order />
        </div>
    );
};