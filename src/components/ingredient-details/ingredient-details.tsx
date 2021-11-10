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
        <div className={`${styles.ingredientDetails} relative`}>
            <h2 className={`${styles.ingredientDetails__title} text text_type_main-large`}>
                Детали ингредиента
            </h2>
            <div className={`${styles.ingredientDetails__body} text-center mx-auto`}>
                <picture className={`${styles.ingredientDetails__pict} block text-center mb-4`}>
                    <img className={`${styles.ingredientDetails__img} block mx-auto sm:max-w-full`} loading="lazy" src={image_large} alt={name} />
                </picture>
                <h3 className={`${styles.ingredientDetails__name} text text_type_main-medium mb-4 sm:mb-8`}>
                    {name}
                </h3>
                <ul className={`${styles.ingredientDetails__list} pl-0 list-none flex flex-wrap sm:flex-nowrap text_color_inactive`}>
                    <li className={styles.ingredientDetails__item}>
                        <span className={`${styles.ingredientDetails__text} block`}>Калории,ккал</span>
                        <span className={`${styles.ingredientDetails__value} block text text_type_digits-default mt-2`}>
                            {calories}
                        </span>
                    </li>
                    <li className={styles.ingredientDetails__item}>
                        <span className={`${styles.ingredientDetails__text} block`}>Белки, г</span>
                        <span className={`${styles.ingredientDetails__value} block text text_type_digits-default mt-2`}>
                            {proteins}
                        </span>
                    </li>
                    <li className={styles.ingredientDetails__item}>
                        <span className={`${styles.ingredientDetails__text} block`}>Жиры, г</span>
                        <span className={`${styles.ingredientDetails__value} block text text_type_digits-default mt-2`}>
                            {fat}
                        </span>
                    </li>
                    <li className={styles.ingredientDetails__item}>
                        <span className={`${styles.ingredientDetails__text} block`}>Углеводы, г</span>
                        <span className={`${styles.ingredientDetails__value} block text text_type_digits-default mt-2`}>
                            {carbohydrates}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}