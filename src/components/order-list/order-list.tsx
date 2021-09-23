import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Order } from '../order/order'
import { RootState } from '../../services/root-reducer'
import styles from './order-list.module.css'

export const OrderList: FC = () => {
    const { orders } = useSelector((state: RootState) => state.feed)

    return (
        <>
            {orders?.length > 0 && (
                <div className={styles.orderList}>
                    {orders?.map(item => <Order key={item._id} {...item} />)}
                </div>
            )}
        </>
    )
}