import { useEffect, useRef, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import ScrollIntoView from 'react-scroll-into-view'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIngredient } from '../burger-ingredient/burger-ingredient'
import { BurgerIngredientsCategory } from '../burger-ingredients-category/burger-ingredients-category'
import { openDataModal } from '../../services/actions/modal-data'
import styles from './burger-ingredients.module.css'


export const BurgerIngredients = () => {
    const { data } = useSelector((store) => store.data)
    const [current, setCurrent] = useState('bun')
    const ingredientsRef = useRef(null)
    const bunTabClickRef = useRef(null)
    const sauceTabClickRef = useRef(null)
    const mainTabClickRef = useRef(null)
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

    const onClickTab = (type, ref) => {
        setCurrent(type)
        ref.current && ref.current.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    }

    const dataBun = useMemo(() => data && data.filter((item) => item.type === 'bun'), [data])
    const dataSauce = useMemo(() => data && data.filter((item) => item.type === 'sauce'), [data])
    const dataMain = useMemo(() => data && data.filter((item) => item.type === 'main'), [data])

    return (
        <section className={`${styles.burgerIngredients}`}>
            <div className="tabs">
                <div className="tabs__list">
                    <Tab value="bun" active={current === 'bun'} onClick={() => onClickTab('bun', bunTabClickRef)}>Булки</Tab>
                    <Tab value="sauce" active={current === 'sauce'} onClick={() => onClickTab('sauce', sauceTabClickRef)}>Соусы</Tab>
                    <Tab value="main" active={current === 'main'} onClick={() => onClickTab('main', mainTabClickRef)}>Начинки</Tab>
                    <span className="tabs__line"></span>
                </div>
                <div className={`${styles.burgerIngredients__box} mt-10 scrollbar-vertical`} onChange={handleIngredientScroll} ref={ingredientsRef}>
                    <div className={`${styles.burgerIngredients__inner}`} ref={bunRef}>
                        <div ref={bunTabClickRef}>
                            <BurgerIngredientsCategory categoryHeader="Булки">
                                {dataBun.map(item => <BurgerIngredient key={item._id} item={item} openDataModal={openDataModal} />)}
                            </BurgerIngredientsCategory>
                        </div>
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={sauceRef}>
                        <div ref={sauceTabClickRef}>
                            <BurgerIngredientsCategory categoryHeader="Соусы">
                                {dataSauce.map(item => <BurgerIngredient key={item._id} item={item} openDataModal={openDataModal} />)}
                            </BurgerIngredientsCategory>
                        </div>
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={mainRef}>
                        <div ref={mainTabClickRef}>
                            <BurgerIngredientsCategory categoryHeader="Начинки">
                                {dataMain.map(item => <BurgerIngredient key={item._id} item={item} openDataModal={openDataModal} />)}
                            </BurgerIngredientsCategory>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}