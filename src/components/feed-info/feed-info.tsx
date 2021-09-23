import { FC } from 'react'
import { useSelector } from 'react-redux'
import { TOrderObj } from '../../services/types/feed'
import { RootState } from '../../services/root-reducer'
import styles from './feed-info.module.css'

export const FeedInfo: FC = () => {
    const { total, totalToday, orders } = useSelector((state: RootState) => state.feed)
    const ordersReady: Array<TOrderObj> = []
    const ordersProgress: Array<TOrderObj> = []
        
    orders?.forEach(el => el.status === 'done' ? ordersReady.push(el) : ordersProgress.push(el))

    return (
        <div className={styles.feedInfo}>
            <div className={styles.feedInfo__statuses}>
                <div className={styles.feedInfo__status}>
                    <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                        Готовы:
                    </h3>
                    <ul className={`${styles.feedInfo__ready} scrollbar-vertical`}>
                        {ordersReady.map(({ _id, number }) => (
                            <li key={_id} className={`${styles.feedInfo__item} text text_type_digits-default`}>
                                {number}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.feedInfo__status}>
                    <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                        В работе:
                    </h3>
                    <ul className={`${styles.feedInfo__work} scrollbar-vertical`}>
                        {ordersProgress.map(({ _id, number }) => (
                            <li key={_id} className={`${styles.feedInfo__item} text text_type_digits-default`}>
                                {number}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.feedInfo__block}>
                <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                    Выполнено за все время:
                </h3>
                <div className={`${styles.feedInfo__num} text text_type_digits-large`}>
                    {total}
                </div>
            </div>
            <div className={styles.feedInfo__block}>
                <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                    Выполнено за сегодня:
                </h3>
                <div className={`${styles.feedInfo__num} text text_type_digits-large`}>
                    {totalToday}
                </div>
            </div>
        </div>
    )
}