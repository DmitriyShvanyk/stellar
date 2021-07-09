import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order.module.css'

const Order = () => {
    return (
        <div className={styles.order}>
            <div className={styles.order__head}>
                <div className={`${styles.order__id} text text_type_digits-default`}>#034535</div>
                <div className={styles.order__date}>Сегодня, 16:20 i-GMT+3</div>
            </div>
            <h2 className={styles.order__title}>
                Death Star Starship Main бургер
            </h2>
            <div className={styles.order__body}>
                <div className={styles.order__picts}>
                    <div className={styles.order__pict}>
                        <img className={styles.order__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                    </div>
                    <div className={styles.order__pict}>
                        <img className={styles.order__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                    </div>
                    <div className={styles.order__pict}>
                        <img className={styles.order__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                    </div>
                    <div className={styles.order__pict}>
                        <img className={styles.order__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                    </div>
                    <div className={styles.order__pict}>
                        <img className={styles.order__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                    </div>
                </div>
                <div className={styles.order__block}>
                    <div className={`${styles.order__price} text text_type_digits-default`}>480</div>
                    <CurrencyIcon />
                </div>
            </div>
        </div>
    )
}

export default Order