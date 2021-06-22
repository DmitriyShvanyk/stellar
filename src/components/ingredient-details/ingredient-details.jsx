import PropTypes from 'prop-types'
import styles from './ingredient-details.module.css'

const IngredientDetails = ({ item }) => {
    return (
        <div className={styles.ingredientDetails}>
            <div className={styles.ingredientDetails__body}>
                <picture className={`${styles.ingredientDetails__pict} mb-4`}>
                    <img className={styles.ingredientDetails__img} loading="lazy" src={item.image_large} alt={item.name} />
                </picture>
                <h3 className={`${styles.ingredientDetails__name} text text_type_main-medium`}>
                    {item.name}
                </h3>
                <ul className={`${styles.ingredientDetails__list} text_color_inactive`}>
                    <li className={styles.ingredientDetails__item}>
                        <span className={styles.ingredientDetails__text}>Калории,ккал</span>
                        <span className={`${styles.ingredientDetails__value} text text_type_digits-default mt-2`}>
                            {item.calories}
                        </span>
                    </li>
                    <li className={styles.ingredientDetails__item}>
                        <span className={styles.ingredientDetails__text}>Белки, г</span>
                        <span className={`${styles.ingredientDetails__value} text text_type_digits-default mt-2`}>
                            {item.proteins}
                        </span>
                    </li>
                    <li className={styles.ingredientDetails__item}>
                        <span className={styles.ingredientDetails__text}>Жиры, г</span>
                        <span className={`${styles.ingredientDetails__value} text text_type_digits-default mt-2`}>
                            {item.fat}
                        </span>
                    </li>
                    <li className={styles.ingredientDetails__item}>
                        <span className={styles.ingredientDetails__text}>Углеводы, г</span>
                        <span className={`${styles.ingredientDetails__value} text text_type_digits-default mt-2`}>
                            {item.carbohydrates}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
    })
};

export default IngredientDetails;