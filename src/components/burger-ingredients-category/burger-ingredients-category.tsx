import {  FC, ReactChildren, ReactChild } from 'react'
import styles from './burger-ingredients-category.module.css'

interface IBurgerIngredientsCategory {
    categoryHeader: string;
    children: ReactChild | ReactChildren;
}

export const BurgerIngredientsCategory: FC<IBurgerIngredientsCategory> = ({ categoryHeader, children }) => {
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