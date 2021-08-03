import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { Order } from '../../components/order/order'
import { openFeedModal } from '../../services/actions/modal-feed'
import styles from './order-list.module.css'

//import { getFeedRequest } from '../../services/actions/feed'

/* фейк api */
import { API_FEED_DATA } from '../../services/feed'

export const OrderList = () => {
    const location = useLocation()
   
    return (
        <div className={styles.orderList} >
            {Array.from(API_FEED_DATA.data).map((item) => {
                return (
                    <Order key={item._id} item={item} openFeedModal={openFeedModal} />                                    
                )
            })}
        </div>
    )
}