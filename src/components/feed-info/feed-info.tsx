import { FC } from 'react'
import { useSelector } from '../../services/hooks'
import { TOrderObj } from '../../services/types/feed'
import styles from './feed-info.module.css'

import { useTranslation } from "react-i18next"

export const FeedInfo: FC = () => {
    const { total, totalToday, orders } = useSelector(state => state.feed)
    const ordersReady: Array<TOrderObj> = []
    const ordersProgress: Array<TOrderObj> = []
    const { t } = useTranslation()

    orders?.forEach(el => el.status === 'done' ? ordersReady.push(el) : ordersProgress.push(el))

    return (
        <div className={`${styles.feedInfo} text-left pl-6`}>
            <div className={`${styles.feedInfo__statuses} grid grid-cols-2 gap-x-9 mb-12`}>
                <div className={styles.feedInfo__status}>
                    <h3 className={`${styles.feedInfo__title} text text_type_main-medium mb-6`}>
                        { t('feedInfoReady') }:
                    </h3>
                    <ul className={`${styles.feedInfo__ready} pl-0 list-none grid grid-cols-2 scrollbar-vertical`}>
                        {ordersReady.map(({ _id, number }) => (
                            <li key={_id} className={`${styles.feedInfo__item} text text_type_digits-default mb-3`}>
                                {number}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.feedInfo__status}>
                    <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                        { t('feedInfoInWork') }:
                    </h3>
                    <ul className={`${styles.feedInfo__work} pl-0 list-none grid grid-cols-2 scrollbar-vertical`}>
                        {ordersProgress.map(({ _id, number }) => (
                            <li key={_id} className={`${styles.feedInfo__item} text text_type_digits-default mb-3`}>
                                {number}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`${styles.feedInfo__block} mb-20`}>
                <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                    { t('feedInfoCompletedAllTime') }:
                </h3>
                <div className={`${styles.feedInfo__num} text text_type_digits-large leading-10 mt-6`}>
                    {total}
                </div>
            </div>
            <div className={`${styles.feedInfo__block} mb-20`}>
                <h3 className={`${styles.feedInfo__title} text text_type_main-medium`}>
                    { t('feedInfoCompletedToday') }:
                </h3>
                <div className={`${styles.feedInfo__num} text text_type_digits-large leading-10 mt-6`}>
                    {totalToday}
                </div>
            </div>
        </div>
    )
}