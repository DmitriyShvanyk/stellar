import styles from './feed-info.module.css'

const FeedInfo = () => {
    return (
        <div className={styles.feedInfo}>
            <div className={styles.feedInfo__statuses}>
                <div className={styles.feedInfo__status}>
                    <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                        Готовы:
                    </h3>
                    <ul className={styles.feedInfo__ready}>
                        <li className={`${styles.feedInfo__item} text text_type_digits-default`}>034533</li>
                        <li className={`${styles.feedInfo__item} text text_type_digits-default`}>034533</li>
                        <li className={`${styles.feedInfo__item} text text_type_digits-default`}>034533</li>
                        <li className={`${styles.feedInfo__item} text text_type_digits-default`}>034533</li>
                        <li className={`${styles.feedInfo__item} text text_type_digits-default`}>034533</li>
                    </ul>
                </div>
                <div className={styles.feedInfo__status}>
                    <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                        В работе:
                    </h3>
                    <ul className={styles.feedInfo__work}>
                        <li className={`${styles.feedInfo__item} text text_type_digits-default`}>034533</li>
                        <li className={`${styles.feedInfo__item} text text_type_digits-default`}>034533</li>
                        <li className={`${styles.feedInfo__item} text text_type_digits-default`}>034533</li>
                        <li className={`${styles.feedInfo__item} text text_type_digits-default`}>034533</li>
                        <li className={`${styles.feedInfo__item} text text_type_digits-default`}>034533</li>
                    </ul>
                </div>
            </div>
            <div className={styles.feedInfo__block}>
                <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                    Выполнено за все время:
                </h3>
                <div className={`${styles.feedInfo__num} text text_type_digits-large`}>
                    28 752
                </div>
            </div>
            <div className={styles.feedInfo__block}>
                <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                    Выполнено за сегодня:
                </h3>
                <div className={`${styles.feedInfo__num} text text_type_digits-large`}>
                    138
                </div>
            </div>
        </div>
    )
}

export default FeedInfo