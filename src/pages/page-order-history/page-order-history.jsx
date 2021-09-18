import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { wsConnectionStart, wsConnectionClose } from '../../services/actions/feed'
import { API_WS_ORDERS_PROFILE } from '../../services/api'
import { getCookie } from '../../services/utils'
import { OrderList } from '../../components/order-list/order-list'
import styles from './page-order-history.module.css'

export const PageOrderHistory = () => {
    const dispatch = useDispatch()
    const accessToken = getCookie('accessToken')

    useEffect(() => {
        dispatch(wsConnectionStart(`${API_WS_ORDERS_PROFILE}${accessToken}`));
        return () => dispatch(wsConnectionClose())
    }, [dispatch])

    return (
        <div className={`${styles.pageOrderHistory} scrollbar-vertical`}>
            <OrderList />
        </div>
    );
};