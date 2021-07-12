import Order from '../../components/order/order'
import FeedInfo from '../../components/feed-info/feed-info'
import styles from './feed.module.css'

export const Feed = () => {
    return (
        <div className="content">
            <h1 className="content__title text text_type_main-large mt-5 mb-5">
                Лента заказов
            </h1>
            <div className="content__body">
                <div className={`${styles.feed} scrollbar-vertical`}>
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                </div>
                <FeedInfo />
            </div>
        </div>
    );
};