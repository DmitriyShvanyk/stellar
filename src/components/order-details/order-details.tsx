import { FC } from 'react'
import styles from './order-details.module.css'
import iconDone from './../../images/order-done.png'
import CountUp from 'react-countup'

import { useTranslation } from "react-i18next"

interface IOrderDetails {
    orderId: number
}

export const OrderDetails: FC<IOrderDetails> = ({ orderId }) => {
    const { t } = useTranslation()
    const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <div className={`${styles.orderDetails} relative text-center`}>
            <div className={`${styles.orderDetails__id} text text_type_digits-large mb-6`}>
                <CountUp end={orderId !== null ? Number(orderId) : randomIntFromInterval(100000, 999999)} />
            </div>
            <h2 className={`${styles.orderDetails__title} text text_type_main-medium`}>
                { t('orderDetailsID') }
            </h2>
            <picture className={`${styles.orderDetails__status} block`}>
                <img className={`${styles.orderDetails__img} block mx-auto`} src={iconDone} alt='' />
            </picture>
            <p className={`${styles.orderDetails__start} text mb-2`}>
                { t('orderDetailsHasStarted') }
            </p>
            <p className={`${styles.orderDetails__wait} text text_type_main-default`}>
                { t('orderDetailsWaitReadiness') }
            </p>
        </div>
    )
}