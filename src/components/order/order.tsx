import { FC } from 'react'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from '../../services/hooks'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { getDateTime } from '../../services/date'
import { getOrderStatus, getOrderStatusColor } from '../../services/utils'
import { getOrderInfo } from '../../services/actions/order-info'
import { TItem } from '../../services/types/data'
import { TOrderObj } from '../../services/types/feed'
import styles from './order.module.css'

export const Order: FC<TOrderObj> = ({ _id, number, name, status, ingredients: orderItems, createdAt, openFeedModal }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { url } = useRouteMatch()
    const { data } = useSelector(state => state.data)
    const dateCreated = getDateTime(createdAt)

    useEffect(() => {
        dispatch(getOrderInfo(number))
    }, [dispatch, number])

    const counts = useMemo(() => {
        return orderItems?.reduce((acc: any, curr: any) => {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {})
    }, [orderItems])

    const orderFeedItems = useMemo(() => {
        return data?.filter((item: { _id: string }) => orderItems.includes(item._id))
    }, [orderItems, data])

    const orderFeedItemsWithCounts = useMemo(() => {
        return orderFeedItems?.map((item: { _id: string | number; type: string; name: string; price: number }) => ({
            _id: item._id,
            type: item.type,
            name: item.name,
            count: counts[item._id],
            price: item.price * counts[item._id]
        }))
    }, [orderFeedItems])

    const price = useMemo(() => {
        return orderFeedItemsWithCounts.reduce((acc: number, el: TItem) => el.type === 'bun' ? acc + el.price * 2 : acc + el.price, 0);
    }, [orderFeedItemsWithCounts])

    const orderFeedImages = (orderFeedItems: Array<TItem>) => {
        const images: JSX.Element[] = []

        orderFeedItems.forEach((item, i) => {
            if (orderFeedItems.length > 5 && i === 5) {
                images.push(
                    <picture key={item._id} className={`${styles.order__pict} flex relative w-16 h-16 overflow-hidden rounded-full`}>
                        <img className={`${styles.order__img} absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2`} src={item.image_mobile} loading="lazy" alt={item.name} />
                        <span className={`${styles.order__amount} text-white flex justify-center items-center absolute rounded-full z-10`}>+{orderFeedItems.length - 5}</span>
                    </picture>
                )
            } else {
                images.push(
                    <picture key={item._id} className={`${styles.order__pict} flex relative w-16 h-16 overflow-hidden rounded-full`}>
                        <img className={`${styles.order__img} absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2`} src={item.image_mobile} loading="lazy" alt={item.name} />
                    </picture>
                )
            }
        })

        return images
    }

    return (
        <Link className={`${styles.order} p-6 mb-4 mr-2 text-white block no-underline rounded-xl hover:text-white hover:no-underline`}
            key={_id}
            to={{ pathname: `${url}/${number}`, state: { background: location } }}
            onClick={openFeedModal}>
            <div className={`${styles.order__head} flex items-center justify-between`}>
                <div className={`${styles.order__id} text text_type_digits-default`}>#{number}</div>
                <div className={styles.order__date}>{dateCreated}</div>
            </div>
            <h2 className={`${styles.order__title} text-left mb-2`}>
                {name}
            </h2>
            <div className={`${styles.order__status}} text-left mb-6`} style={{ color: getOrderStatusColor(status) }}>
                {getOrderStatus(status)}
            </div>
            <div className={`${styles.order__body} flex items-center justify-between`}>
                <div className={`${styles.order__picts} flex`}>
                    {orderFeedImages(orderFeedItems)}
                </div>
                <div className={`${styles.order__block} flex items-center`}>
                    <div className={`${styles.order__price} text text_type_digits-default pr-2`}>{price}</div>
                    <CurrencyIcon type={'secondary'} />
                </div>
            </div>
        </Link>
    )
}