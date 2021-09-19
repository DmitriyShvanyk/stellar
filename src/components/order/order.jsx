import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { getDateTime } from '../../services/date'
import { getOrderStatus, getOrderStatusColor } from '../../services/utils'
import { getOrderInfo } from '../../services/actions/order-info'
import styles from './order.module.css'

export const Order = ({ _id, number, name, status, ingredients: orderItems, createdAt, openFeedModal }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { url } = useRouteMatch()
    const { data } = useSelector(state => state.data)
    const dateCreated = getDateTime(createdAt)

    useEffect(() => {
        dispatch(getOrderInfo(number))
    }, [dispatch, number])

    const counts = useMemo(() => {
        return orderItems && orderItems.reduce((acc, curr) => {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {})
    }, [orderItems])

    const orderFeedItems = useMemo(() => {
        return data && data.filter(item => orderItems.includes(item._id))
    }, [orderItems, data])

    const orderFeedItemsWithCounts = useMemo(() => {
        return orderFeedItems && orderFeedItems.map(item => ({
            _id: item._id,
            type: item.type,
            name: item.name,
            count: counts[item._id],
            price: item.price * counts[item._id]
        }))
    }, [orderFeedItems])

    const price = useMemo(() => {
        return orderFeedItemsWithCounts.reduce((acc, el) => el.type === 'bun' ? acc + el.price * 2 : acc + el.price, 0);
    }, [orderFeedItemsWithCounts])

    const orderFeedImages = orderFeedItems => {
        const images = []

        orderFeedItems.forEach((item, i) => {
            if (orderFeedItems.length > 5 && i === 5) {
                images.push(
                    <picture key={item._id} className={styles.order__pict}>
                        <img className={styles.order__img} src={item.image_mobile} loading="lazy" alt={item.name} />
                        <span className={styles.order__amount}>+{orderFeedItems.length - 5}</span>
                    </picture>
                )
            } else {
                images.push(
                    <picture key={item._id} className={styles.order__pict}>
                        <img className={styles.order__img} src={item.image_mobile} loading="lazy" alt={item.name} />
                    </picture>
                )
            }
        })

        return images
    }

    return (
        <Link className={styles.order}
            key={_id}
            to={{ pathname: `${url}/${number}`, state: { background: location } }}
            onClick={openFeedModal}>
            <div className={styles.order__head}>
                <div className={`${styles.order__id} text text_type_digits-default`}>#{number}</div>
                <div className={styles.order__date}>{dateCreated}</div>
            </div>
            <h2 className={styles.order__title}>
                {name}
            </h2>
            <div className={`${styles.order__status}}`} style={{ color: getOrderStatusColor(status) }}>
                {getOrderStatus(status)}
            </div>
            <div className={styles.order__body}>
                <div className={styles.order__picts}>
                    {orderFeedImages(orderFeedItems)}
                </div>
                <div className={styles.order__block}>
                    <div className={`${styles.order__price} text text_type_digits-default`}>{price}</div>
                    <CurrencyIcon />
                </div>
            </div>
        </Link>
    )
}

Order.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image_mobile: PropTypes.string.isRequired
        }))
    }),
    openFeedModal: PropTypes.func
}