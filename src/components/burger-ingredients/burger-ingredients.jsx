import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredient from '../burger-ingredient/burger-ingredient'
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category'
import styles from './burger-ingredients.module.css'


const BurgerIngredients = ({ data }) => {
    const [current, setCurrent] = React.useState('bun')
    const bunRef = useRef(null)
    const sauceRef = useRef(null)
    const mainRef = useRef(null)

    const optionsScroll = {
        block: "start",
        behavior: "smooth"
    }

    const getScroll = (type, elem) => {
        setCurrent(type)
        elem.current.scrollIntoView(optionsScroll)
    }

    return (
        <section className={`${styles.burgerIngredients}`}>
            <div className="tabs">
                <div className="tabs__list">
                    <Tab value="bun" active={current === 'bun'} onClick={() => getScroll('bun', bunRef)}>Булки</Tab>
                    <Tab value="sauce" active={current === 'sauce'} onClick={() => getScroll('sauce', sauceRef)}>Соусы</Tab>
                    <Tab value="main" active={current === 'main'} onClick={() => getScroll('main', mainRef)}>Начинки</Tab>
                    <span className="tabs__line"></span>
                </div>
                <div className={`${styles.burgerIngredients__box} mt-10 scrollbar-vertical`}>
                    <div className={`${styles.burgerIngredients__inner}`} ref={bunRef}>
                        <BurgerIngredientsCategory categoryHeader="Булки">
                            {data.map(item => {
                                if (item.type === "bun") {
                                    return (
                                        <BurgerIngredient data={item} key={item._id} />
                                    )
                                }
                            })}
                        </BurgerIngredientsCategory>
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={sauceRef}>
                        <BurgerIngredientsCategory categoryHeader="Соусы">
                            {data.map(item => {
                                if (item.type === "sauce") {
                                    return (
                                        <BurgerIngredient data={item} key={item._id} />
                                    )
                                }
                            })}
                        </BurgerIngredientsCategory>
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={mainRef}>
                        <BurgerIngredientsCategory categoryHeader="Начинки">
                            {data.map(item => {
                                if (item.type === "main") {
                                    return (
                                        <BurgerIngredient data={item} key={item._id} />
                                    )
                                }
                            })}
                        </BurgerIngredientsCategory>
                    </div>

                </div>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.array
}

export default BurgerIngredients;