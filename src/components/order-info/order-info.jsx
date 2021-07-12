import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-info.module.css'

export const OrderInfo = () => {
    return (
        <div className={styles.orderInfo}>
            <div className={`${styles.orderInfo__id} text text_type_digits-default`}>#034533</div>
            <h1 className={styles.orderInfo__title}>Black Hole Singularity острый бургер</h1>
            <p className={`${styles.orderInfo__status} ${styles.orderInfo__statusReady}`}>Выполнен</p>

            <p className={`${styles.orderInfo__structure} text text_type_main-medium`}>Состав:</p>
            <ul className={`${styles.orderInfo__list} scrollbar-vertical`}>
                <li className={styles.orderInfo__item}>
                    <div className={styles.orderInfo__box}>
                        <div className={styles.orderInfo__pict}>
                            <img className={styles.orderInfo__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderInfo__name}>
                            Флюоресцентная булка R2-D3 Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderInfo__block}>
                        <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
                <li className={styles.orderInfo__item}>
                    <div className={styles.orderInfo__box}>
                        <div className={styles.orderInfo__pict}>
                            <img className={styles.orderInfo__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderInfo__name}>
                            Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderInfo__block}>
                        <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
                <li className={styles.orderInfo__item}>
                    <div className={styles.orderInfo__box}>
                        <div className={styles.orderInfo__pict}>
                            <img className={styles.orderInfo__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderInfo__name}>
                            Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderInfo__block}>
                        <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
                <li className={styles.orderInfo__item}>
                    <div className={styles.orderInfo__box}>
                        <div className={styles.orderInfo__pict}>
                            <img className={styles.orderInfo__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderInfo__name}>
                            Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderInfo__block}>
                        <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
                <li className={styles.orderInfo__item}>
                    <div className={styles.orderInfo__box}>
                        <div className={styles.orderInfo__pict}>
                            <img className={styles.orderInfo__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderInfo__name}>
                            Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderInfo__block}>
                        <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
                <li className={styles.orderInfo__item}>
                    <div className={styles.orderInfo__box}>
                        <div className={styles.orderInfo__pict}>
                            <img className={styles.orderInfo__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderInfo__name}>
                            Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderInfo__block}>
                        <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
            </ul>
            <div className={styles.orderInfo__foot}>
                <div className={styles.orderInfo__date}>
                    Сегодня, 16:20 i-GMT+3
                </div>
                <div className={styles.orderInfo__block}>
                    <div className={`${styles.orderInfo__price} text text_type_digits-default`}>
                        560
                    </div>
                    <CurrencyIcon />
                </div>
            </div>
        </div>
    );
};