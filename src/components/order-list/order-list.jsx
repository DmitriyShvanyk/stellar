import { useSelector } from 'react-redux'
import { Order } from '../../components/order/order'
import { Loader } from '../loader/loader'
import styles from './order-list.module.css'

export const OrderList = () => {
    const { orders, wsConnected } = useSelector(state => state.feed)

    const showLoader = wsConnected ? <Loader /> : null

    return (
        <>
            {!wsConnected ? <Loader /> : (orders && orders.length > 0 ? 
                (<div className={styles.orderList} >
                    {orders && orders.map(item => <Order key={item._id} {...item} />)}
                </div>) : (<h2>Heт заказов</h2>)
            )}            
        </>
    )
}