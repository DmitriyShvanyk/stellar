import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './order.module.css'

const Order = ({ item, openFeedModal }) => {
    const location = useLocation()
    const { url } = useRouteMatch()
    const { _id, date, name, status, data, price } = item

    const order__status = {
        Выполнен: 'order__statusReady',
        Готовится: 'order__statusProcess',
        Отменен: 'order__statusCancel',
    };

    return (
        <Link className={styles.order} key={item._number}
            to={{ pathname: `${url}/${item._id}`, state: { background: location } }}
            onClick={openFeedModal}>
            <div className={styles.order__head}>
                <div className={`${styles.order__id} text text_type_digits-default`}>#{_id}</div>
                <div className={styles.order__date}>{date}</div>
            </div>
            <h2 className={styles.order__title}>
                {name}
            </h2>
            <div className={`${styles.order__status} ${order__status[status]}`}>
                {status}
            </div>
            <div className={styles.order__body}>
                <div className={styles.order__picts}>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={styles.order__pict}>
                                <img className={styles.order__img} src={item.image_mobile} loading="lazy" alt={item.name} />
                                {item.amount > 1 ? (<span className={styles.order__amount}>{item.amount}</span>) : null}
                            </div>
                        )
                    })}
                </div>
                <div className={styles.order__block}>
                    <div className={`${styles.order__price} text text_type_digits-default`}>{price}</div>
                    <CurrencyIcon />
                </div>
            </div>
        </Link>
    )
}

export default Order