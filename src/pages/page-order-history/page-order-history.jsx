import OrderList from '../../components/order-list/order-list'
import styles from './page-order-history.module.css'

export const PageOrderHistory = () => {
    return (
        <div className={`${styles.pageOrderHistory} scrollbar-vertical`}>
            <OrderList />
        </div>
    );
};