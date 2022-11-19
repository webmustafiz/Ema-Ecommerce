import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Order = () => {
    const { products, initialCard } = useLoaderData();
    const [cart, setcard] = useState(initialCard);
    
    // delete there
    const handlerRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setcard(remaining)
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handlerRemoveItem={handlerRemoveItem}
                    ></ReviewItem>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Order;