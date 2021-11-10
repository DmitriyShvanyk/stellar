import { FC } from 'react'
import styles from './order-details.module.css'
import iconDone from './../../images/order-done.png'
import CountUp from 'react-countup'

interface IOrderDetails {
    orderId: number
}

export const OrderDetails: FC<IOrderDetails> = ({ orderId }) => {

    const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <div className={`${styles.orderDetails} relative text-center`}>
            <div className={`${styles.orderDetails__id} text text_type_digits-large mb-6`}>     
                <CountUp end={orderId !== null ? Number(orderId) : randomIntFromInterval(100000, 999999)} />  
            </div>
            <h2 className={`${styles.orderDetails__title} text text_type_main-medium`}>
                идентификатор заказа
            </h2>
            <picture className={`${styles.orderDetails__status} block`}>
                <img className={`${styles.orderDetails__img} block mx-auto`} src={iconDone} alt="" />
            </picture>
            <p className={`${styles.orderDetails__start} text mb-2`}>
                Ваш заказ начали готовить
            </p>
            <p className={`${styles.orderDetails__wait} text text_type_main-default`}>
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    )
}