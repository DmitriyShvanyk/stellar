import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useDrag } from 'react-dnd'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredient.module.css'


const BurgerIngredient = ({ item, openDataModal }) => {
    const dispatch = useDispatch();
    const { items, bun } = useSelector((store) => store.data);

    const counters = useMemo(() => {
        const counter = {};

        items.forEach((item) => {
            if (!counter[item._id]) {
                counter[item._id] = 0
            };
            counter[item._id]++;
        });

        if (bun) {
            counter[bun._id] = 2
        };

        return counter;

    }, [items, bun]);

    const [{ isDragging }, dragRef] = useDrag({
        type: 'item',
        item: { ...item },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? .25 : 1;
    const hadlerClick = () => dispatch(openDataModal(item));

    return (
        <div className={`${styles.burgerIngredient} mb-6`} onClick={hadlerClick} style={{ opacity }} ref={dragRef}>
            <a href="#" className={styles.burgerIngredient__item}>
                <picture className={styles.burgerIngredient__pict}>
                    {counters[item._id] && <Counter count={counters[item._id]} size="default" />}
                    <img className={styles.burgerIngredient__img} loading="lazy" src={item.image} alt={item.name} />
                </picture>
                <div className={styles.burgerIngredient__content}>
                    <div className={`${styles.burgerIngredient__price} text text_type_main-medium mb-2`}>
                        <span className={`${styles.burgerIngredient__value} mr-3`}>{item.price}</span>
                        <CurrencyIcon type="secondary" />
                    </div>
                    <div className={`${styles.burgerIngredient__name} text`}>{item.name}</div>
                </div>
                <span className={styles.burgerIngredient__add}>Добавить</span>
            </a>
        </div>
    )
}


BurgerIngredient.propTypes = {
    item: PropTypes.shape({
        __v: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }),
    openDataModal: PropTypes.func
}

export default BurgerIngredient;