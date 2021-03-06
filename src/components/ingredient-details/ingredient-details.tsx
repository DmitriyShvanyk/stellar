import { FC } from 'react'
import { useSelector } from '../../services/hooks'
import { useParams } from 'react-router-dom'
import { TItem } from '../../services/types/data'
import styles from './ingredient-details.module.css'

export const IngredientDetails: FC = () => {
    const { id } = useParams<{ id: string }>()
    const { data } = useSelector(state => state?.data)
    const item = data.find((el: TItem) => el._id === id)
    const { image_large, name, calories, proteins, fat, carbohydrates } = item || {}

    return (
        <div className={styles.ingredientDetails}>
            <h2 className={`${styles.ingredientDetails__title} text text_type_main-large`}>
                Детали ингредиента
            </h2>
            <div className={styles.ingredientDetails__body}>
                <picture className={`${styles.ingredientDetails__pict} mb-4`}>
                    <img className={styles.ingredientDetails__img} loading="lazy" src={image_large} alt={name} />
                </picture>
                <h3 className={`${styles.ingredientDetails__name} text text_type_main-medium`}>
                    {name}
                </h3>
                <ul className={`${styles.ingredientDetails__list} text_color_inactive`}>
                    <li className={styles.ingredientDetails__item}>
                        <span className={styles.ingredientDetails__text}>Калории,ккал</span>
                        <span className={`${styles.ingredientDetails__value} text text_type_digits-default mt-2`}>
                            {calories}
                        </span>
                    </li>
                    <li className={styles.ingredientDetails__item}>
                        <span className={styles.ingredientDetails__text}>Белки, г</span>
                        <span className={`${styles.ingredientDetails__value} text text_type_digits-default mt-2`}>
                            {proteins}
                        </span>
                    </li>
                    <li className={styles.ingredientDetails__item}>
                        <span className={styles.ingredientDetails__text}>Жиры, г</span>
                        <span className={`${styles.ingredientDetails__value} text text_type_digits-default mt-2`}>
                            {fat}
                        </span>
                    </li>
                    <li className={styles.ingredientDetails__item}>
                        <span className={styles.ingredientDetails__text}>Углеводы, г</span>
                        <span className={`${styles.ingredientDetails__value} text text_type_digits-default mt-2`}>
                            {carbohydrates}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}