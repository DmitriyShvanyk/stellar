import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-card.module.css'

export const OrderCard = () => {
    return (
        <div className={styles.orderCard}>
            <div className={`${styles.orderCard__id} text text_type_digits-default`}>#034533</div>
            <h1 className={styles.orderCard__title}>Black Hole Singularity острый бургер</h1>
            <p className={`${styles.orderCard__status} ${styles.orderCard__statusReady}`}>Выполнен</p>

            <p className={`${styles.orderCard__structure} text text_type_main-medium`}>Состав:</p>
            <ul className={`${styles.orderCard__list} scrollbar-vertical`}>
                <li className={styles.orderCard__item}>
                    <div className={styles.orderCard__box}>
                        <div className={styles.orderCard__pict}>
                            <img className={styles.orderCard__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderCard__name}>
                            Флюоресцентная булка R2-D3 Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderCard__block}>
                        <div className={`${styles.orderCard__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
                <li className={styles.orderCard__item}>
                    <div className={styles.orderCard__box}>
                        <div className={styles.orderCard__pict}>
                            <img className={styles.orderCard__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderCard__name}>
                            Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderCard__block}>
                        <div className={`${styles.orderCard__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
                <li className={styles.orderCard__item}>
                    <div className={styles.orderCard__box}>
                        <div className={styles.orderCard__pict}>
                            <img className={styles.orderCard__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderCard__name}>
                            Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderCard__block}>
                        <div className={`${styles.orderCard__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
                <li className={styles.orderCard__item}>
                    <div className={styles.orderCard__box}>
                        <div className={styles.orderCard__pict}>
                            <img className={styles.orderCard__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderCard__name}>
                            Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderCard__block}>
                        <div className={`${styles.orderCard__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
                <li className={styles.orderCard__item}>
                    <div className={styles.orderCard__box}>
                        <div className={styles.orderCard__pict}>
                            <img className={styles.orderCard__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderCard__name}>
                            Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderCard__block}>
                        <div className={`${styles.orderCard__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
                <li className={styles.orderCard__item}>
                    <div className={styles.orderCard__box}>
                        <div className={styles.orderCard__pict}>
                            <img className={styles.orderCard__img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        </div>
                        <div className={styles.orderCard__name}>
                            Флюоресцентная булка R2-D3
                        </div>
                    </div>
                    <div className={styles.orderCard__block}>
                        <div className={`${styles.orderCard__price} text text_type_digits-default`}>
                            <span>1</span> x <span>20</span>
                        </div>
                        <CurrencyIcon />
                    </div>
                </li>
            </ul>
            <div className={styles.orderCard__foot}>
                <div className={styles.orderCard__date}>
                    Сегодня, 16:20 i-GMT+3
                </div>
                <div className={styles.orderCard__block}>
                    <div className={`${styles.orderCard__price} text text_type_digits-default`}>
                        560
                    </div>
                    <CurrencyIcon />
                </div>
            </div>
        </div>
    );
};