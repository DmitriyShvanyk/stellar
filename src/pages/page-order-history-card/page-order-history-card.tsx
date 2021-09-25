import { FC } from 'react'
import { OrderInfo } from '../../components/order-info/order-info'
import styles from './page-order-history-card.module.css'

export const PageOrderHistoryCard: FC = () => {
    return (
        <div className={`${styles.pageOrderHistoryCard}`}>
            <OrderInfo />
        </div>
    )
}