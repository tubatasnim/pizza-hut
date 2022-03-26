import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Cart.css';
const Cart = (props) => {

    const { img, name } = props.cart;
    return (
        <div>
            <div className='cart-container-full'>
                <div className='cart-container' >
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                </div>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Cart;