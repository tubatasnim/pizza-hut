import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Pizza.css';
const Pizza = (props) => {
    const { img, name, id, price } = props.pizza;
    return (
        <div>
            <div className='pizza'>
                <img src={img} alt="" />
                <div className='pizza-info'>
                    <p className='pizza-name'>{name}</p>
                    <p><small>Id No: {id}</small></p>
                    <p>Price: ${price}</p>
                </div>
                <button onClick={() => props.handleAddToCart(props.pizza)} className='btn-cart'><p className='btn-text'>Add To Cart</p>
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
            </div>

        </div>
    );

};


export default Pizza;