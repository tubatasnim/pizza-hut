import React from 'react';
import './Pizza.css';
const Pizza = (props) => {

    const { img, name, id, price } = props.pizza;


    return (
        <div className='pizza'>
            <img src={img} alt="" />
            <div className='pizza-info'>
                <p className='pizza-name'>{name}</p>
                <p><small>Id No: {id}</small></p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.pizza)} className='btn-cart'><p>Add To Cart</p></button>
        </div>
    );
};

export default Pizza;