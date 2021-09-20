import { useSelector } from 'react-redux'
import { Order } from '../../components/order/order'
import styles from './order-list.module.css'

export const OrderList = () => {
    const { orders } = useSelector(state => state.feed)

    return (
        orders?.length > 0 && (
            <div className={styles.orderList} >
                {orders?.map(item => <Order key={item._id} {...item} />)}
            </div>
        )
    )
}