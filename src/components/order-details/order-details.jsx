import PropTypes from 'prop-types'
import styles from './order-details.module.css'
import iconDone from './../../images/order-done.png'
import CountUp from 'react-countup'


export const OrderDetails = ({ orderId }) => {

    const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <div className={styles.orderDetails}>
            <div className={`${styles.orderDetails__id} text text_type_digits-large`}>     
                <CountUp end={orderId !== null ? Number(orderId) : randomIntFromInterval(100000, 999999)} />          
                {/*console.log(orderId)*/}
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

OrderDetails.propTypes = {
    order: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
}