
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
        if (newCart.length <= [4]) {
            setCart(newCart);
        }
        else {
            alert("You cannot add pizza more than 4. Please choose 4 pizzas");
        }
    }
    const handleChooseCart = (cart) => {
        const chooseOne = [...choose, cart]
        const selectOne = (Math.floor(Math.random() * chooseOne.length));
        setChoose(selectOne);
    }
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
                        cart.map(cart => <Cart
                            key={cart.name}
                            cart={cart}
                        ></Cart>)




                    }
                    <div>

                        {
                            choose.map(choose => <Choose
                                // key={choose.toString()}
                                key={choose.img}
                                choose={choose}
                                handleChooseCart={handleChooseCart}
                            ></Choose>)
                        }
                        <button onClick={() => handleChooseCart(choose)} className='btn-choose'>CHOOSE 1 FOR ME</button>
                        <button className='btn-choose-again'>CHOOSE AGAIN</button>

                    </div>
                </div>

            </div>
            <Answer></Answer>
        </div>
    );
};

export default Pizzas;