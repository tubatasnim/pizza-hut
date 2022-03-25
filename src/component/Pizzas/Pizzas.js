import React, { useEffect, useState } from 'react';
import Pizza from '../Pizza/Pizza';
import './Pizzas.css';


const Pizzas = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPizzas(data))
    }, []);

    const handleAddToCart = (pizza) => {
        console.log(pizza);
    }
    return (
        <div>
            <h1 className='heading'>Pizza Hut</h1>
            <h2 className='Choose-item'>Choose 4 Pizzas</h2>
            <div className='shop-container'>
                <div className='pizzas-container'>
                    {
                        pizzas.map(pizza => <Pizza
                            key={pizza.id}
                            pizza={pizza}
                            handleAddToCart={handleAddToCart}
                        ></Pizza>)
                    }
                </div>
                <div className='cart-pizzas-container'>
                    <h2>Selected Pizzas</h2>
                </div>
            </div>

        </div>
    );
};

export default Pizzas;