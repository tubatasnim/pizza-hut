import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { img, name } = props.cart;
    return (
        <div>
            <div className='cart-container' >
                <img src={img} alt="" />
                <h2>{name}</h2>

            </div>

        </div>
    );
};

export default Cart;