import React, { useEffect, useState } from 'react';
import Answer from '../Answer/Answer';
import Cart from '../Cart/Cart';
import Choose from '../Choose/Choose';
import Pizza from '../Pizza/Pizza';
import './Pizzas.css';


const Pizzas = () => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);
    const [choose, setChoose] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPizzas(data))
    }, []);

    const handleAddToCart = (pizza) => {
        const newCart = [...cart, pizza];
        if (cart.length === 4) {

            alert("You cannot add pizza more than 4. Please choose 4 pizzas");
        }

        else {
            setCart(newCart);
        }
    };
    const getChoose = (items) => {
        if (cart.length === 0) {
            alert('please add some Pizzas');
        }
        else {
            const randomNum = Math.floor(Math.random() * items.length);
            const randomPizza = items[randomNum];
            setChoose([randomPizza]);
            setCart([]);
        }
    };
    const handleChooseAgain = () => {
    };
    return (
        <div >
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
                    {
                        cart.map((item, index) => <Cart
                            key={index}
                            cart={item}
                        ></Cart>)
                    }
                    <div>
                        {
                            choose.map(item => <Choose
                                key={item.img}
                                choose={item}
                                getChoose={getChoose}
                            ></Choose>)
                        }
                        <button onClick={() => getChoose(cart)} className='btn-choose'>CHOOSE 1 FOR ME</button>
                        {choose.newCart}
                        <button onClick={() => handleChooseAgain(setCart([]))} className='btn-choose-again'>CHOOSE AGAIN</button>
                    </div>
                </div>
            </div>
            <Answer></Answer>
        </div>
    );
};

export default Pizzas;