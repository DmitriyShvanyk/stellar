import { useParams } from 'react-router-dom'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-info.module.css'

import { API_FEED_DATA } from '../../services/feed'

export const OrderInfo = () => {
    const { id } = useParams()    
    const item = API_FEED_DATA.data.find((el) => el._id === Number(id))
    
    const { _id, date, name, status, data, price } = item || {}

    const order__status = {
        Выполнен: 'order__statusReady',
        Готовится: 'order__statusProcess',
        Отменен: 'order__statusCancel',
    };    

    return (
        <div className={styles.orderInfo}>
            <div className={`${styles.orderInfo__id} text text_type_digits-default`}>#{_id}</div>
            <h1 className={styles.orderInfo__title}>{name}</h1>
            <p className={`${styles.orderInfo__status} ${order__status[status]}`}>{status}</p>

            <p className={`${styles.orderInfo__structure} text text_type_main-medium`}>Состав:</p>
            <ul className={`${styles.orderInfo__list} scrollbar-vertical`}>
                {data.map((item, index) => {
                    return (
                        <li key={index} className={styles.orderInfo__item}>
                            <div className={styles.orderInfo__box}>
                                <div className={styles.orderInfo__pict}>
                                    <img className={styles.orderInfo__img} src={item.image_mobile} alt={item.name} loading="lazy" />
                                </div>
                                <div className={styles.orderInfo__name}>
                                    {item.name}
                                </div>
                            </div>
                            <div className={styles.orderInfo__block}>
                                <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                                    <span>{item.amount}</span> x <span>{item.price}</span>
                                </div>
                                <CurrencyIcon />
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className={styles.orderInfo__foot}>
                <div className={styles.orderInfo__date}>
                    {date}
                </div>
                <div className={styles.orderInfo__block}>
                    <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                        {price}
                    </div>
                    <CurrencyIcon />
                </div>
            </div>
        </div>
    );
};