import React, { useEffect, useRef, useState, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredient from '../burger-ingredient/burger-ingredient'
import BurgerIngredientsCategory from '../burger-ingredients-category/burger-ingredients-category'
import styles from './burger-ingredients.module.css'
import { DataContext } from '../../services/context.js';


const BurgerIngredients = () => {
    const { data, setData } = useContext(DataContext)

    const [current, setCurrent] = useState('bun')
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

    /*const bunIngredients = useMemo(() => data && data.map((item, index) => {
        console.log(data)
        if (item.type === 'bun'){            
            return (<BurgerIngredient key={item._id} {...item} />)
        }        
    }), []);

    const sauceIngredients = useMemo(() => data && data.map((item, index) => {
        if (item.type === 'sauce'){
            return (<BurgerIngredient key={item._id} {...item} />)
        }         
    }), []);

    const mainIngredients = useMemo(() => data && data.map((item, index) => {
        if (item.type === 'main'){
            return (<BurgerIngredient key={item._id} {...item} />)
        }         
    }), []);*/

    const dataBun = data && data.filter(item => item.type === 'bun')
    const dataSauce = data && data.filter(item => item.type === 'sauce')
    const dataMain = data && data.filter(item => item.type === 'main')

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
                            {dataBun.map(item => <BurgerIngredient key={item._id} item={item} />)}
                        </BurgerIngredientsCategory>
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={sauceRef}>
                        <BurgerIngredientsCategory categoryHeader="Соусы">
                            {dataSauce.map(item => <BurgerIngredient key={item._id} item={item} />)}
                        </BurgerIngredientsCategory>
                    </div>
                    <div className={`${styles.burgerIngredients__inner}`} ref={mainRef}>
                        <BurgerIngredientsCategory categoryHeader="Начинки">
                            {dataMain.map(item => <BurgerIngredient key={item._id} item={item} />)}
                        </BurgerIngredientsCategory>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BurgerIngredients;