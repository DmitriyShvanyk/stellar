import React from 'react';
import './ingredientInfo.css'


class IngredientInfo extends React.Component {
    constructor(props: any){
        super(props);
    }

    render() {
        return (
            <div className="ingredient-info">
                <div className="ingredient-info__head">
                    <h2 className="ingredient-info__title text text_type_main-large">Детали ингредиента</h2>
                </div>
                <div className="ingredient-info__body">
                    <div className="ingredient-info__pict mb-4">
                        <img className="ingredient-info__img" src="" alt="" />
                    </div>
                    <h3 className="ingredient-info__name text text_type_main-medium mb-8">
                        {this.props}
                    </h3>
                    <ul className="ingredient-info__list text_color_inactive">
                        <li className="ingredient-info__item">
                            <span className="ingredient-info__text">Калории,ккал</span>
                            <span className="ingredient-info__value text text_type_digits-default mt-2">
                                1
                            </span>
                        </li>
                        <li className="ingredient-info__item">
                            <span className="ingredient-info__text">Белки, г</span>
                            <span className="ingredient-info__value text text_type_digits-default mt-2">
                                2
                            </span>
                        </li>
                        <li className="ingredient-info__item">
                            <span className="ingredient-info__text">Жиры, г</span>
                            <span className="ingredient-info__value text text_type_digits-default mt-2">
                               3
                            </span>
                        </li>
                        <li className="ingredient-info__item">
                            <span className="ingredient-info__text">Углеводы, г</span>
                            <span className="ingredient-info__value text text_type_digits-default mt-2">
                                4
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default IngredientInfo;