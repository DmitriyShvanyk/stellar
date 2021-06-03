import React from 'react'
import styles from './order-details.module.css'
import iconDone from './../../images/order-done.png'

const OrderDetails = () => {
    return (
        <div className={styles.orderDetails}>
            <div className={`${styles.orderDetails__id} text text_type_digits-large`}>
                034536
            </div>
            <h2 className={`${styles.orderDetails__title} text text_type_main-medium`}>
                идентификатор заказа
            </h2>
            <picture className={`${styles.orderDetails__status}`}>
                <img className={`${styles.orderDetails__img}`} src={iconDone} alt="" />
            </picture>
            <p className={`${styles.orderDetails__start} text`}>
                Ваш заказ начали готовить
            </p>
            <p className={`${styles.orderDetails__wait} text text_type_main-default`}>
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    )
}

export default OrderDetails;