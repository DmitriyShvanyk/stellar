import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { getDateTime } from '../../services/date'
import { getOrder } from '../../services/actions/order'
import { getOrderStatus, getOrderStatusColor } from '../../services/utils'
import styles from './order-info.module.css'


export const OrderInfo = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { data } = useSelector(state => state.data)
    const orders = useSelector(state => state.feed.orders)
    const order = orders.find(el => el.number === Number(id))
    const { number, name, status, ingredients: orderItems, createdAt } = order || {}
    const dateCreated = getDateTime(createdAt)

    useEffect(() => { 
        console.log(console.log(orders), 'info page')
        dispatch(getOrder(id))    
    }, [dispatch, id])  

    const counts = useMemo(() => {
        return orderItems && orderItems.reduce((acc, curr) => {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {})
    }, [orderItems])

    const orderFeedItems = useMemo(() => {
        return data && data.filter(item => orderItems && orderItems.includes(item._id))
    }, [orderItems, data])     

    const orderFeedItemsWithCounts = useMemo(() => {
        return orderFeedItems && orderFeedItems.map(item => ({
            _id: item._id,
            type: item.type,
            name: item.name,
            count: counts[item._id],
            price: item.price * counts[item._id],
            image_mobile: item.image_mobile
        }))
    }, [orderFeedItems])

    const price = useMemo(() => {
        return orderFeedItemsWithCounts.reduce((acc, el) => el.type === 'bun' ? acc + el.price * 2 : acc + el.price, 0);
    }, [orderFeedItemsWithCounts])

    return (
        <div className={styles.orderInfo}>
            <div className={`${styles.orderInfo__id} text text_type_digits-default`}>#{number}</div>
            <h1 className={styles.orderInfo__title}>{name}</h1>
            <p className={`${styles.orderInfo__status}`} style={{ color: getOrderStatusColor(status) }}>
                {getOrderStatus(status)}
            </p>

            <p className={`${styles.orderInfo__structure} text text_type_main-medium`}>Состав:</p>
            <ul className={`${styles.orderInfo__list} scrollbar-vertical`}>
                {orderFeedItemsWithCounts.map(({ _id, image_mobile, name, price, count }) => {
                    return (
                        <li key={_id} className={styles.orderInfo__item}>
                            <div className={styles.orderInfo__box}>
                                <div className={styles.orderInfo__pict}>
                                    <img className={styles.orderInfo__img} src={image_mobile} alt={name} loading="lazy" />
                                </div>
                                <div className={styles.orderInfo__name}>
                                    {name}
                                </div>
                            </div>
                            <div className={styles.orderInfo__block}>
                                <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                                    <span>{count}</span> x <span>{price / count}</span>
                                </div>
                                <CurrencyIcon />
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className={styles.orderInfo__foot}>
                <div className={styles.orderInfo__date}>
                    {dateCreated}
                </div>
                <div className={styles.orderInfo__block}>
                    <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                        {price}
                    </div>
                    <CurrencyIcon />
                </div>
            </div>
        </div>
    )
}