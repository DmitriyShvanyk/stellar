import { FC, useMemo } from 'react'
import { useSelector } from '../../services/hooks'
import { useDrag } from 'react-dnd'
import { Link, useLocation } from 'react-router-dom'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { TItem } from '../../services/types/data'
import styles from './burger-ingredient.module.css'

import { useTranslation } from "react-i18next"

interface TItemProps {
    item: TItem;
    openDataModal?: () => void;
}

export const BurgerIngredient: FC<TItemProps> = ({ item, openDataModal }) => {
    const location = useLocation()
    const { items, bun } = useSelector(state => state.data)
    const { t } = useTranslation()

    const counters = useMemo(() => {
        const counter: { [name: string]: number } = {}

        items.forEach((item) => {
            if (!counter[item._id]) {
                counter[item._id] = 0
            };
            counter[item._id]++;
        });

        if (bun) {
            counter[bun._id] = 2
        }

        return counter

    }, [items, bun])

    const [{ isDragging }, dragRef] = useDrag({
        type: 'item',
        item: { ...item },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                console.info(`You dropped ${item.name}`)
            }
        },
    })

    const opacity = isDragging ? .25 : 1

    return (
        <div className={`${styles.burgerIngredient} w-full mb-6`} style={{ opacity }} ref={dragRef}>
            <Link onClick={openDataModal}
                className={`${styles.burgerIngredient__item} cursor-pointer block no-underline text-white hover:opacity-80 hover:no-underline`}
                to={{pathname: `/ingredients/${item._id}`, state: { background: location }}}>
                <picture className={`${styles.burgerIngredient__pict} relative block pointer-events-none mb-3 md:mb-0`}>
                    {counters[item._id] && <Counter count={counters[item._id]} size="default" />}
                    <img className={`${styles.burgerIngredient__img} block w-full h-full mx-auto`} loading="lazy" src={item.image} alt={item.name} />
                </picture>
                <div className={styles.burgerIngredient__content}>
                    <div className={`${styles.burgerIngredient__price} flex items-center justify-center text text_type_main-medium mb-2`}>
                        <span className={`${styles.burgerIngredient__value} font-normal mr-3`}>{item.price}</span>
                        <CurrencyIcon type="secondary" />
                    </div>
                    <div className={`${styles.burgerIngredient__name} text text-center`}>{item.name}</div>
                </div>
                <span className={`${styles.burgerIngredient__add} flex items-center justify-center text-center md:hidden`}>
                    { t('Add') }
                </span>
            </Link>
        </div>
    )
}