import React from 'react';
import './order.css';
import iconDone from './../../images/order-done.png';

class Order extends React.Component {
    render() {
        return (
            <div className="order">
                <div className="order__id text text_type_digits-large mb-8">034536</div>
                <h2 className="order__title text text_type_main-medium mb-15">идентификатор заказа</h2>
                <div className="order__status mb-15">
                    <img className="order__status-img" src={iconDone} alt="" />
                </div>
                <div className="order__text">
                    <p className="order__start text mb-2">Ваш заказ начали готовить</p>
                    <p className="order__wait text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
                </div>
            </div>
        )
    }
}

export default Order;