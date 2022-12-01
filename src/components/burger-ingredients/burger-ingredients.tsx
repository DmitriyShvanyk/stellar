import { FC, useEffect, useRef, useState, useMemo } from 'react'
import { useSelector } from '../../services/hooks'
import { useInView } from 'react-intersection-observer'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIngredient } from '../burger-ingredient/burger-ingredient'
import { BurgerIngredientsCategory } from '../burger-ingredients-category/burger-ingredients-category'
import { openDataModal } from '../../services/actions/modal-data'
import { TItem } from '../../services/types/data'
import { motion } from "framer-motion"
import styles from './burger-ingredients.module.css'

import { useTranslation } from "react-i18next"

export const BurgerIngredients: FC = () => {
    const { data } = useSelector(state => state.data)
    const [current, setCurrent] = useState('bun')
    const ingredientsRef = useRef<HTMLDivElement>(null)
    const bunTabClickRef = useRef<HTMLDivElement>(null)
    const sauceTabClickRef = useRef<HTMLDivElement>(null)
    const mainTabClickRef = useRef<HTMLDivElement>(null)
    const [bunRef, inViewBuns] = useInView({ threshold: .1 })
    const [sauceRef, inViewSauces] = useInView({ threshold: .1 })
    const [mainRef, inViewMains] = useInView({ threshold: .1 })
    const { t } = useTranslation()

    const handleIngredientScroll = () => {
        if (inViewBuns) {
            setCurrent("bun")
        }
        else if (inViewSauces) {
            setCurrent("sauce")
        }
        else if (inViewMains) {
            setCurrent("main")
        }
    }

    useEffect(() => {
        handleIngredientScroll()
    }, [inViewBuns, inViewMains, inViewSauces])

    const onClickTab = (type: any, ref: any) => {
        setCurrent(type)
        ref?.current?.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    }

    const dataBun = useMemo(() => data?.filter((item: TItem) => item.type === 'bun'), [data])
    const dataSauce = useMemo(() => data?.filter((item: TItem) => item.type === 'sauce'), [data])
    const dataMain = useMemo(() => data?.filter((item: TItem) => item.type === 'main'), [data])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                // Controls the animation delay for child elements
                staggerChildren: .3
            }
        }
    }

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <section className={`${styles.burgerIngredients} relative px-2 sm:px-0 mt-5 sm:mt-0 overflow-y-hidden md:overflow-y-visible`}>
            <div className={`tabs relative`}>
                <div className={`tabs__list flex flex-wrap relative`}>
                    <Tab value="bun" active={current === 'bun'} onClick={() => onClickTab('bun', bunTabClickRef)}>{ t('buns') }</Tab>
                    <Tab value="sauce" active={current === 'sauce'} onClick={() => onClickTab('sauce', sauceTabClickRef)}>{ t('sauces') }</Tab>
                    <Tab value="main" active={current === 'main'} onClick={() => onClickTab('main', mainTabClickRef)}>{ t('stuffings') }</Tab>
                    <span className={`tabs__line absolute left-0 bottom-0 w-1/3`}></span>
                </div>
                <motion.div variants={container} initial="hidden" animate="show" className={`${styles.burgerIngredients__box} text-left order-1 w-full pr-3 mt-10 scrollbar-vertical`} onChange={handleIngredientScroll} ref={ingredientsRef}>
                    <div className={`${styles.burgerIngredients__inner} md:mb-10`} ref={bunRef}>
                        <div ref={bunTabClickRef}>
                            <BurgerIngredientsCategory categoryHeader={ t('buns') }>
                                {dataBun.map((item: TItem, i: number) => {
                                    return (
                                        <motion.div className="burger-ingredient-container w-1/2 md:w-1/3 lg:w-1/2 px-1 sm:px-3" custom={i} key={item._id} variants={listItem}>
                                            <BurgerIngredient item={item} key={item._id} openDataModal={openDataModal} />
                                        </motion.div>
                                    )
                                })}
                            </BurgerIngredientsCategory>
                        </div>
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={sauceRef}>
                        <div ref={sauceTabClickRef}>
                            <BurgerIngredientsCategory categoryHeader={ t('sauces') }>
                                {dataSauce.map((item: TItem, i: number) => {
                                    return (
                                        <motion.div className="burger-ingredient-container w-1/2 md:w-1/3 lg:w-1/2 px-1 sm:px-3" custom={i} key={item._id} variants={listItem}>
                                            <BurgerIngredient key={item._id} item={item} openDataModal={openDataModal} />
                                        </motion.div>
                                    )
                                })}
                            </BurgerIngredientsCategory>
                        </div>
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={mainRef}>
                        <div ref={mainTabClickRef}>
                            <BurgerIngredientsCategory categoryHeader={ t('stuffings') }>
                                {dataMain.map((item: TItem, i: number) => {
                                    return (
                                        <motion.div className="burger-ingredient-container w-1/2 md:w-1/3 lg:w-1/2 px-1 sm:px-3" custom={i} key={item._id} variants={listItem}>
                                            <BurgerIngredient key={item._id} item={item} openDataModal={openDataModal} />
                                        </motion.div>
                                    )
                                })}
                            </BurgerIngredientsCategory>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}