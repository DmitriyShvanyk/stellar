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
                // ?????????????????? ?????????????????? ???????????????????????? ???????????????? ?? ???????????????? ??????????????????
                staggerChildren: .3
            }
        }
    }

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <section className={`${styles.burgerIngredients}`}>
            <div className="tabs">
                <div className="tabs__list">
                    <Tab value="bun" active={current === 'bun'} onClick={() => onClickTab('bun', bunTabClickRef)}>??????????</Tab>
                    <Tab value="sauce" active={current === 'sauce'} onClick={() => onClickTab('sauce', sauceTabClickRef)}>??????????</Tab>
                    <Tab value="main" active={current === 'main'} onClick={() => onClickTab('main', mainTabClickRef)}>??????????????</Tab>
                    <span className="tabs__line"></span>
                </div>
                <motion.div variants={container} initial="hidden" animate="show" className={`${styles.burgerIngredients__box} mt-10 scrollbar-vertical`} onChange={handleIngredientScroll} ref={ingredientsRef}>
                    <div className={`${styles.burgerIngredients__inner}`} ref={bunRef}>
                        <div ref={bunTabClickRef}>
                            <BurgerIngredientsCategory categoryHeader="??????????">
                                {dataBun.map((item: TItem, i: number) => {
                                    return (
                                        <motion.div className="burger-ingredient-container" custom={i} key={item._id} variants={listItem}>
                                            <BurgerIngredient item={item} key={item._id} openDataModal={openDataModal} />
                                        </motion.div>
                                    )
                                })}
                            </BurgerIngredientsCategory>
                        </div>
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={sauceRef}>
                        <div ref={sauceTabClickRef}>
                            <BurgerIngredientsCategory categoryHeader="??????????">
                                {dataSauce.map((item: TItem, i: number) => {
                                    return (
                                        <motion.div className="burger-ingredient-container" custom={i} key={item._id} variants={listItem}>
                                            <BurgerIngredient key={item._id} item={item} openDataModal={openDataModal} />
                                        </motion.div>
                                    )
                                })}
                            </BurgerIngredientsCategory>
                        </div>
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={mainRef}>
                        <div ref={mainTabClickRef}>
                            <BurgerIngredientsCategory categoryHeader="??????????????">
                                {dataMain.map((item: TItem, i: number) => {
                                    return (
                                        <motion.div className="burger-ingredient-container" custom={i} key={item._id} variants={listItem}>
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