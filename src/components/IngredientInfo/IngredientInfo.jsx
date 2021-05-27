import React from 'react'
import PropTypes from 'prop-types'
import './ingredientInfo.css'


const IngredientInfo = (props) => {
    return (
        <div className="ingredient-info">
            <div className="ingredient-info__head">
                <h2 className="ingredient-info__title text text_type_main-large">Детали ингредиента</h2>
            </div>
            <div className="ingredient-info__body">
                <div className="ingredient-info__pict mb-4">
                    <img className="ingredient-info__img" loading="lazy" src={props.image_large} alt={props.name} />
                </div>
                <h3 className="ingredient-info__name text text_type_main-medium mb-8">
                    {props.name}
                </h3>
                <ul className="ingredient-info__list text_color_inactive">
                    <li className="ingredient-info__item">
                        <span className="ingredient-info__text">Калории,ккал</span>
                        <span className="ingredient-info__value text text_type_digits-default mt-2">
                            {props.calories}
                        </span>
                    </li>
                    <li className="ingredient-info__item">
                        <span className="ingredient-info__text">Белки, г</span>
                        <span className="ingredient-info__value text text_type_digits-default mt-2">
                            {props.proteins}
                        </span>
                    </li>
                    <li className="ingredient-info__item">
                        <span className="ingredient-info__text">Жиры, г</span>
                        <span className="ingredient-info__value text text_type_digits-default mt-2">
                            {props.fat}
                        </span>
                    </li>
                    <li className="ingredient-info__item">
                        <span className="ingredient-info__text">Углеводы, г</span>
                        <span className="ingredient-info__value text text_type_digits-default mt-2">
                            {props.carbohydrates}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

IngredientInfo.propTypes = {
    name: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
}; 

export default IngredientInfo;