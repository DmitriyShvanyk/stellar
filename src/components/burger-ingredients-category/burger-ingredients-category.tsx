import {  FC, ReactChildren, ReactChild } from 'react'
import styles from './burger-ingredients-category.module.css'

interface IBurgerIngredientsCategory {
    categoryHeader: string;
    children: ReactChild | ReactChildren;
}

export const BurgerIngredientsCategory: FC<IBurgerIngredientsCategory> = ({ categoryHeader, children }) => {
    return (
        <div className={`${styles.category} relative`}>
            <div className={`${styles.category__head} mb-4 sm:mb-6`}>
                {categoryHeader && (<h2 className={`${styles.category__title} relative`}>{categoryHeader}</h2>)}
            </div>
            <div className={styles.category__body}>
                <div className={`${styles.category__columns} flex flex-wrap -mx-1 sm:-mx-3`}>
                    {children}
                </div>
            </div>
        </div>
    )
}