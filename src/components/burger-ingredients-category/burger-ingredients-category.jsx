import PropTypes from 'prop-types'
import styles from './burger-ingredients-category.module.css'


const BurgerIngredientsCategory = ({ categoryHeader, children }) => {
    return (
        <div className={styles.category}>
            <div className={`${styles.category__head} mb-6`}>
                {categoryHeader && (<h2 className={`${styles.category__title}`}>{categoryHeader}</h2>)}
            </div>
            <div className={styles.category__body}>
                <div className={styles.category__columns}>
                    {children}
                </div>
            </div>
        </div>
    )
}

BurgerIngredientsCategory.propTypes = {
    categoryHeader: PropTypes.string,
    children: PropTypes.node
};

export default BurgerIngredientsCategory